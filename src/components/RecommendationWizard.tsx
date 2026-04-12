import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { strategies, enfoques, enfoqueConfig, type Enfoque, type Strategy } from "@/data/strategies";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";

interface WizardProps {
  open: boolean;
  onClose: () => void;
  onSelect: (s: Strategy) => void;
}

type Step = "time" | "enfoque" | "goal" | "results";

const timeOptions = ["10 min", "15 min", "20 min"];
const goalOptions = [
  { value: "explorar", label: "Explorar algo nuevo" },
  { value: "aplicar", label: "Aplicar en clase" },
  { value: "liderar", label: "Liderar un cambio" },
];

const RecommendationWizard = ({ open, onClose, onSelect }: WizardProps) => {
  const [step, setStep] = useState<Step>("time");
  const [time, setTime] = useState<string | null>(null);
  const [enfoque, setEnfoque] = useState<Enfoque | null>(null);
  const [, setGoal] = useState<string | null>(null);
  const [results, setResults] = useState<Strategy[]>([]);

  const reset = () => {
    setStep("time");
    setTime(null);
    setEnfoque(null);
    setGoal(null);
    setResults([]);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const computeResults = (t: string | null, e: Enfoque | null) => {
    let filtered = strategies;
    if (t) filtered = filtered.filter((s) => s.tiempo === t);
    if (e) filtered = filtered.filter((s) => s.enfoque === e);
    return filtered.slice(0, 3);
  };

  const selectTime = (t: string) => {
    setTime(t);
    setStep("enfoque");
  };

  const selectEnfoque = (e: Enfoque) => {
    setEnfoque(e);
    setStep("goal");
  };

  const selectGoal = (g: string) => {
    setGoal(g);
    setResults(computeResults(time, enfoque));
    setStep("results");
  };

  const progress = step === "time" ? 33 : step === "enfoque" ? 66 : step === "goal" ? 90 : 100;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <Sparkles className="w-5 h-5 text-accent" />
            Recomendador inteligente
          </DialogTitle>
        </DialogHeader>

        {/* Progress */}
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-accent transition-all duration-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {step === "time" && (
          <StepContainer title="¿Cuánto tiempo tienes disponible?">
            {timeOptions.map((t) => (
              <OptionButton key={t} onClick={() => selectTime(t)} label={t} />
            ))}
          </StepContainer>
        )}

        {step === "enfoque" && (
          <StepContainer title="¿Qué enfoque te interesa?">
            {enfoques.map((e) => (
              <OptionButton
                key={e}
                onClick={() => selectEnfoque(e)}
                label={`${enfoqueConfig[e].icon} ${enfoqueConfig[e].label}`}
              />
            ))}
          </StepContainer>
        )}

        {step === "goal" && (
          <StepContainer title="¿Cuál es tu objetivo?">
            {goalOptions.map((g) => (
              <OptionButton key={g.value} onClick={() => selectGoal(g.value)} label={g.label} />
            ))}
          </StepContainer>
        )}

        {step === "results" && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Estas estrategias se ajustan a tu perfil:</p>
            {results.length === 0 ? (
              <p className="text-sm text-muted-foreground py-6 text-center">No se encontraron estrategias con esos criterios.</p>
            ) : (
              results.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { onSelect(s); handleClose(); }}
                  className="w-full text-left p-3 rounded-lg border border-border bg-card hover:bg-muted transition-colors group"
                >
                  <p className="text-sm font-semibold text-card-foreground group-hover:text-accent transition-colors">{s.nombre}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.familia} · {s.tiempo}</p>
                </button>
              ))
            )}
            <button onClick={reset} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2">
              <RotateCcw className="w-3 h-3" /> Empezar de nuevo
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const StepContainer = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <p className="text-sm font-medium text-foreground">{title}</p>
    <div className="space-y-2">{children}</div>
  </div>
);

const OptionButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-muted text-sm font-medium text-card-foreground transition-colors"
  >
    {label}
    <ArrowRight className="w-4 h-4 text-muted-foreground" />
  </button>
);

export default RecommendationWizard;
