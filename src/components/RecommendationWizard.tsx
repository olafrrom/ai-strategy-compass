import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { strategies, enfoques, enfoqueConfig, type Enfoque, type Strategy } from "@/data/strategies";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles, Check, Lightbulb } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface WizardProps {
  open: boolean;
  onClose: () => void;
  onSelect: (s: Strategy) => void;
}

type StepId = "goal" | "context" | "depth" | "experience" | "result" | "results";

interface Choice<V extends string = string> {
  value: V;
  label: string;
  hint?: string;
  icon?: string;
}

const goalOptions: Choice[] = [
  { value: "explorar", label: "Explorar algo nuevo", hint: "Conocer una estrategia y entender cómo funciona", icon: "🧭" },
  { value: "aplicar", label: "Aplicar en mi clase", hint: "Llevarlo a la práctica con mis estudiantes", icon: "🎯" },
  { value: "mejorar", label: "Mejorar lo que ya hago", hint: "Refinar evaluación, materiales o dinámicas", icon: "📈" },
  { value: "liderar", label: "Liderar un cambio", hint: "Impulsar innovación o transformación con IA", icon: "⭐" },
];

const contextOptions: Choice[] = [
  { value: "aula", label: "Aula presencial o híbrida", hint: "Sesión con estudiantes en vivo", icon: "🏫" },
  { value: "linea", label: "Curso en línea", hint: "Asincrónico o virtual", icon: "💻" },
  { value: "personal", label: "Trabajo personal", hint: "Preparación, planeación o estudio propio", icon: "📚" },
  { value: "equipo", label: "Equipo o institución", hint: "Trabajo colaborativo o liderazgo académico", icon: "🤝" },
];

const depthOptions: Choice[] = [
  { value: "10 min", label: "Rápido · 10 min", hint: "Algo concreto y accionable de inmediato", icon: "⚡" },
  { value: "15 min", label: "Equilibrado · 15 min", hint: "Profundidad moderada con resultado claro", icon: "🎚️" },
  { value: "20 min", label: "Profundo · 20 min", hint: "Diseño más completo y elaborado", icon: "🧱" },
  { value: "25 min", label: "Avanzado · 25 min+", hint: "Secuencias o proyectos integrales", icon: "🏗️" },
];

const experienceOptions: Choice<Enfoque | "guiada">[] = [
  { value: "enseñanza", label: "Guiada y estructurada", hint: "Pasos claros para enseñar o evaluar", icon: "📚" },
  { value: "innovación", label: "Creativa", hint: "Retos, gamificación, narrativa", icon: "🚀" },
  { value: "aprendizaje", label: "Analítica y reflexiva", hint: "Síntesis, mentoría, pensamiento crítico", icon: "🧠" },
  { value: "transformación", label: "Práctica y aplicada", hint: "Llevar el aprendizaje a la realidad", icon: "🔄" },
];

const resultOptions: Choice[] = [
  { value: "actividad", label: "Una actividad lista", hint: "Dinámica o ejercicio para aplicar", icon: "🎲" },
  { value: "evaluacion", label: "Una evaluación o rúbrica", hint: "Instrumento para medir desempeño", icon: "📝" },
  { value: "recurso", label: "Un recurso explicativo", hint: "Material, presentación o microcontenido", icon: "🎬" },
  { value: "aplicacion", label: "Una aplicación profesional", hint: "Transferir al contexto real", icon: "💼" },
];

interface Answers {
  goal: string | null;
  context: string | null;
  depth: string | null;
  experience: Enfoque | null;
  result: string | null;
}

const initialAnswers: Answers = {
  goal: null,
  context: null,
  depth: null,
  experience: null,
  result: null,
};

const stepOrder: StepId[] = ["goal", "context", "depth", "experience", "result", "results"];

const stepMeta: Record<Exclude<StepId, "results">, { title: string; subtitle: string; label: string }> = {
  goal: {
    title: "¿Qué quieres lograr?",
    subtitle: "Empecemos por tu intención principal con la estrategia.",
    label: "Objetivo",
  },
  context: {
    title: "¿Dónde la vas a aplicar?",
    subtitle: "El contexto nos ayuda a sugerir lo más útil para ti.",
    label: "Contexto",
  },
  depth: {
    title: "¿Cuánta profundidad necesitas?",
    subtitle: "Elige según el tiempo real que tienes disponible.",
    label: "Profundidad",
  },
  experience: {
    title: "¿Qué tipo de experiencia prefieres?",
    subtitle: "Cada perfil propone un camino distinto con la IA.",
    label: "Experiencia",
  },
  result: {
    title: "¿Qué esperas obtener al final?",
    subtitle: "Un entregable concreto que puedas usar enseguida.",
    label: "Resultado",
  },
};

// Map result type → relevant strategy families
const resultFamilyMap: Record<string, string[]> = {
  actividad: ["Diseño de actividades", "Casos, dilemas y simulaciones", "Gamificación y engagement", "Retos y challenge-based learning", "Simulación y roleplay"],
  evaluacion: ["Evaluación y reactivos", "Instrumentos y rúbricas", "Evaluación y retroalimentación"],
  recurso: ["Co-creación de contenidos", "Storytelling y transformación narrativa", "Curación y síntesis inteligente", "Curación y comunicación", "Explicación y comprensión"],
  aplicacion: ["Aplicación profesional y transferencia", "Investigación y gestión de proyectos", "Acompañamiento y mentoría IA", "Study mode y aprendizaje autónomo", "Diseño instruccional"],
};

const goalEnfoqueBoost: Record<string, Enfoque[]> = {
  explorar: ["aprendizaje", "innovación"],
  aplicar: ["enseñanza", "transformación"],
  mejorar: ["enseñanza", "aprendizaje"],
  liderar: ["liderazgo", "transformación", "innovación"],
};

function scoreStrategies(answers: Answers): { primary: Strategy[]; alternatives: Strategy[] } {
  const scored = strategies.map((s) => {
    let score = 0;
    if (answers.experience && s.enfoque === answers.experience) score += 4;
    if (answers.depth && s.tiempo === answers.depth) score += 3;
    if (answers.result && resultFamilyMap[answers.result]?.includes(s.familia)) score += 3;
    if (answers.goal && goalEnfoqueBoost[answers.goal]?.includes(s.enfoque)) score += 2;
    if (s.estatus === "insignia") score += 1;
    if (s.estatus === "premium") score += 0.5;
    return { s, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const primary = scored.slice(0, 3).map((x) => x.s);
  const altPool = scored.slice(3).filter((x) => x.score > 0);
  const alternatives = altPool.slice(0, 2).map((x) => x.s);
  return { primary, alternatives };
}

const RecommendationWizard = ({ open, onClose, onSelect }: WizardProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const step = stepOrder[stepIndex];
  const totalQuestionSteps = 5;
  const progress = step === "results" ? 100 : ((stepIndex) / totalQuestionSteps) * 100 + (1 / totalQuestionSteps) * 100;

  const reset = () => {
    setStepIndex(0);
    setAnswers(initialAnswers);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const goNext = () => setStepIndex((i) => Math.min(i + 1, stepOrder.length - 1));
  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const pick = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setTimeout(() => goNext(), 180);
  };

  const recs = useMemo(() => (step === "results" ? scoreStrategies(answers) : null), [step, answers]);

  const explanation = useMemo(() => {
    if (!answers.experience || !answers.depth || !answers.result) return "";
    const expLabel = experienceOptions.find((o) => o.value === answers.experience)?.label.toLowerCase() ?? "";
    const resLabel = resultOptions.find((o) => o.value === answers.result)?.label.toLowerCase() ?? "";
    const goalLabel = goalOptions.find((o) => o.value === answers.goal)?.label.toLowerCase() ?? "";
    return `Buscas una experiencia ${expLabel} de ${answers.depth} para ${goalLabel}, con foco en obtener ${resLabel}.`;
  }, [answers]);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <Sparkles className="w-5 h-5 text-accent" />
            Recomendador inteligente
          </DialogTitle>
        </DialogHeader>

        {/* Progress */}
        <div className="space-y-1.5 mb-2">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="font-medium">
              {step === "results" ? "Resultados" : `Paso ${stepIndex + 1} de ${totalQuestionSteps} · ${stepMeta[step as Exclude<StepId, "results">].label}`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {step !== "results" && (
              <QuestionStep
                meta={stepMeta[step as Exclude<StepId, "results">]}
                options={
                  step === "goal" ? goalOptions
                  : step === "context" ? contextOptions
                  : step === "depth" ? depthOptions
                  : step === "experience" ? experienceOptions as Choice[]
                  : resultOptions
                }
                selected={
                  step === "goal" ? answers.goal
                  : step === "context" ? answers.context
                  : step === "depth" ? answers.depth
                  : step === "experience" ? answers.experience
                  : answers.result
                }
                onPick={(v) => {
                  if (step === "goal") pick("goal", v);
                  else if (step === "context") pick("context", v);
                  else if (step === "depth") pick("depth", v);
                  else if (step === "experience") pick("experience", v as Enfoque);
                  else pick("result", v);
                }}
              />
            )}

            {step === "results" && recs && (
              <ResultsView
                recs={recs}
                explanation={explanation}
                onSelect={(s) => { onSelect(s); handleClose(); }}
                onReset={reset}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer nav */}
        {step !== "results" && stepIndex > 0 && (
          <div className="flex items-center justify-between pt-2 mt-1 border-t border-border">
            <button
              onClick={goBack}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Atrás
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Reiniciar
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const QuestionStep = ({
  meta,
  options,
  selected,
  onPick,
}: {
  meta: { title: string; subtitle: string };
  options: Choice[];
  selected: string | null;
  onPick: (v: string) => void;
}) => (
  <div className="space-y-4">
    <div className="space-y-1">
      <h3 className="text-base font-semibold text-foreground font-display">{meta.title}</h3>
      <p className="text-xs text-muted-foreground">{meta.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {options.map((o) => {
        const isSelected = selected === o.value;
        return (
          <button
            key={o.value}
            onClick={() => onPick(o.value)}
            className={`group text-left p-3 rounded-xl border transition-all duration-200 ${
              isSelected
                ? "border-accent bg-accent/10 ring-1 ring-accent/40"
                : "border-border bg-card hover:bg-muted hover:border-accent/40"
            }`}
          >
            <div className="flex items-start gap-2.5">
              {o.icon && <span className="text-lg leading-none mt-0.5">{o.icon}</span>}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-card-foreground">{o.label}</p>
                  {isSelected && <Check className="w-3.5 h-3.5 text-accent shrink-0" />}
                </div>
                {o.hint && <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{o.hint}</p>}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

const ResultsView = ({
  recs,
  explanation,
  onSelect,
  onReset,
}: {
  recs: { primary: Strategy[]; alternatives: Strategy[] };
  explanation: string;
  onSelect: (s: Strategy) => void;
  onReset: () => void;
}) => (
  <div className="space-y-4">
    <div>
      <div className="flex items-center gap-1.5 mb-1">
        <Sparkles className="w-3.5 h-3.5 text-accent" />
        <h3 className="text-sm font-semibold text-foreground font-display">Recomendado para ti</h3>
      </div>
      <p className="text-xs text-muted-foreground">Estas estrategias se ajustan mejor a tu perfil.</p>
    </div>

    {recs.primary.length === 0 ? (
      <p className="text-sm text-muted-foreground py-6 text-center">No se encontraron estrategias con esos criterios.</p>
    ) : (
      <div className="space-y-2">
        {recs.primary.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onSelect(s)}
            className="w-full text-left p-3 rounded-xl border border-border bg-card hover:bg-muted hover:border-accent/50 transition-all group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider">#{i + 1}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${enfoqueConfig[s.enfoque].color}`}>
                    {enfoqueConfig[s.enfoque].icon} {enfoqueConfig[s.enfoque].label}
                  </span>
                </div>
                <p className="text-sm font-semibold text-card-foreground group-hover:text-accent transition-colors">{s.nombre}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{s.familia} · {s.tiempo}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors mt-1 shrink-0" />
            </div>
          </button>
        ))}
      </div>
    )}

    {explanation && (
      <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/60 border border-border">
        <Lightbulb className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
        <div>
          <p className="text-[11px] font-semibold text-foreground mb-0.5">Por qué esta recomendación</p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">{explanation}</p>
        </div>
      </div>
    )}

    {recs.alternatives.length > 0 && (
      <div className="space-y-2">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">También podrían interesarte</p>
        {recs.alternatives.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s)}
            className="w-full text-left p-2.5 rounded-lg border border-border/60 bg-background hover:bg-muted transition-colors group"
          >
            <p className="text-xs font-medium text-card-foreground group-hover:text-accent transition-colors">{s.nombre}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.familia} · {s.tiempo}</p>
          </button>
        ))}
      </div>
    )}

    <button
      onClick={onReset}
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      <RotateCcw className="w-3 h-3" /> Empezar de nuevo
    </button>
  </div>
);

export default RecommendationWizard;
