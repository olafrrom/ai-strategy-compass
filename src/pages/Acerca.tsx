import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Compass,
  ShieldCheck,
  Sparkles,
  FlaskConical,
  Mail,
  Instagram,
  Wrench,
  Code2,
  ListChecks,
  Target,
  Rocket,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const statusCards = [
  {
    label: "Validada",
    icon: <ShieldCheck className="w-4 h-4" />,
    color: "bg-validated/15 text-validated border-validated/30",
    description: "Estrategia funcional y aplicable, útil para iniciar con claridad.",
  },
  {
    label: "Referente",
    icon: <Sparkles className="w-4 h-4" />,
    color: "bg-badge/15 text-badge-foreground border-badge/30",
    description: "Estrategia altamente recomendada por su claridad, efectividad y aplicabilidad.",
  },
  {
    label: "Avanzada",
    icon: <Sparkles className="w-4 h-4" />,
    color: "bg-premium/15 text-premium border-premium/30",
    description: "Estrategia de mayor profundidad, con articulación metodológica y uso estratégico de IA.",
  },
  {
    label: "Experimental",
    icon: <FlaskConical className="w-4 h-4" />,
    color: "bg-experimental/15 text-experimental border-experimental/30",
    description: "Estrategia exploratoria para prototipar nuevas dinámicas y enfoques emergentes.",
  },
];

const callouts = [
  {
    letter: "A",
    icon: <Wrench className="w-4 h-4" />,
    title: "Chip de herramienta",
    description:
      "Identifica la herramienta sugerida. Al hacer clic, despliega su función, aplicación educativa y tip de uso.",
  },
  {
    letter: "B",
    icon: <Code2 className="w-4 h-4" />,
    title: "Prompt con corchetes",
    description:
      "Los campos entre [corchetes] son personalizables. Cámbialos según curso, nivel, tema, tiempo o contexto.",
  },
  {
    letter: "C",
    icon: <ListChecks className="w-4 h-4" />,
    title: "Pasos con IA integrada",
    description:
      "La acción principal muestra qué hace la persona. La línea IA indica dónde entra la herramienta y qué aporta.",
  },
  {
    letter: "D",
    icon: <Target className="w-4 h-4" />,
    title: "Evidencia esperada",
    description:
      "Muestra el producto, desempeño o resultado tangible que puedes obtener.",
  },
  {
    letter: "E",
    icon: <Rocket className="w-4 h-4" />,
    title: "Next Level",
    description:
      "Sugiere cómo escalar la estrategia hacia una versión más profunda, avanzada o transferible.",
  },
];

const Acerca = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.18)_100%)]" />
        </div>
        <div className="absolute top-4 right-4 z-20 md:top-6 md:right-6">
          <ThemeToggle />
        </div>
        <div className="container relative z-10 py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20">
              Guía de uso
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
              Cómo aprovechar el catálogo
            </h1>
            <p className="text-base md:text-lg text-white/85 mb-8 max-w-2xl font-body">
              Explora estrategias según tus necesidades, contexto y objetivos. Este catálogo funciona
              como una base estructurada para descubrir, adaptar e implementar prácticas con IA en
              educación y desarrollo profesional.
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al catálogo
            </button>
          </motion.div>
        </div>
      </div>

      <main className="container py-12 md:py-16 space-y-16">
        {/* What is this catalog */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionCard
            icon={<BookOpen className="w-5 h-5 text-primary" />}
            title="Qué es este catálogo"
          >
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Es un repositorio curado de estrategias de IA generativa organizadas por enfoque,
              familia y estatus editorial. Su propósito es ayudarte a pasar de la exploración de
              herramientas a la implementación estratégica, con pasos claros, prompts editables y
              criterios de aplicación.
            </p>
          </SectionCard>
        </motion.section>

        {/* Anatomy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                Anatomía de una estrategia
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Cada tarjeta y modal sigue una estructura editorial pensada para que pases de la
              lectura a la acción.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,460px)_1fr] gap-6 lg:gap-8 items-start">
            {/* Left callouts */}
            <div className="space-y-4 lg:pt-12">
              <CalloutCard data={callouts[0]} align="right" />
              <CalloutCard data={callouts[1]} align="right" />
            </div>

            {/* Mock card */}
            <MockStrategyCard />

            {/* Right callouts */}
            <div className="space-y-4 lg:pt-12">
              <CalloutCard data={callouts[2]} align="left" />
              <CalloutCard data={callouts[3]} align="left" />
              <CalloutCard data={callouts[4]} align="left" />
            </div>
          </div>
        </motion.section>

        {/* Editorial status */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Estatus editorial
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Cada estrategia tiene un nivel de madurez que indica su profundidad y validación.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statusCards.map((status, i) => (
              <motion.div
                key={status.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl bg-card border border-border"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border mb-3 ${status.color}`}
                >
                  {status.icon}
                  {status.label}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {status.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recommendation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-border p-6 md:p-10 bg-gradient-to-br from-[hsl(var(--brand-indigo)/0.08)] via-card to-[hsl(var(--accent)/0.08)]"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <Sparkles className="w-6 h-6 text-accent mb-3" />
            <p className="text-base md:text-lg font-display font-semibold text-foreground leading-relaxed max-w-3xl">
              Explora de acuerdo con tus intereses, necesidades y contexto. El catálogo no propone
              una ruta única: ofrece una base para empezar con estructura, criterio y estrategia.
            </p>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionCard icon={<Mail className="w-5 h-5 text-primary" />} title="Contacto">
            <div className="space-y-3">
              <a
                href="mailto:contacto@estrategiasia.edu"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                contacto@estrategiasia.edu
              </a>
              <a
                href="https://instagram.com/estrategiasia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 text-accent" />
                @estrategiasia
              </a>
            </div>
          </SectionCard>
        </motion.section>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Volver al catálogo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container text-center text-xs text-muted-foreground">
          Catálogo de Estrategias IA · Versión 1.0
        </div>
      </footer>
    </div>
  );
};

const SectionCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className="p-5 md:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--card-shadow)" }}
  >
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h2 className="text-base md:text-lg font-display font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </div>
);

const CalloutCard = ({
  data,
  align,
}: {
  data: (typeof callouts)[number];
  align: "left" | "right";
}) => (
  <div
    className={`relative p-4 rounded-xl bg-card border border-border ${
      align === "right" ? "lg:text-right" : ""
    }`}
    style={{ boxShadow: "var(--card-shadow)" }}
  >
    <div
      className={`flex items-center gap-2 mb-1.5 ${
        align === "right" ? "lg:flex-row-reverse" : ""
      }`}
    >
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/15 text-accent text-[11px] font-bold">
        {data.letter}
      </span>
      <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-foreground">
        {data.icon}
        {data.title}
      </span>
    </div>
    <p className="text-xs md:text-[13px] text-muted-foreground leading-relaxed">
      {data.description}
    </p>
  </div>
);

const MockStrategyCard = () => (
  <div className="relative">
    <div
      className="relative bg-card rounded-2xl border-2 border-[hsl(var(--brand-indigo)/0.35)] p-5 md:p-6 space-y-4"
      style={{ boxShadow: "var(--card-shadow-hover)" }}
    >
      {/* Header chips */}
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-accent/15 text-accent">
          ✨ Enfoque
        </span>
        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border bg-badge/15 text-badge-foreground border-badge/30">
          Estatus editorial
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-base font-display font-semibold text-foreground leading-snug">
          [Nombre de la estrategia]
        </h3>
        <p className="text-xs text-muted-foreground mt-1">[Problema que resuelve]</p>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Familia · enfoque</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3 h-3" />
          [tiempo]
        </span>
      </div>

      <div className="h-px bg-border" />

      {/* Tool chip */}
      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
          Herramientas
        </p>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 text-xs font-medium">
          <Wrench className="w-3 h-3" />
          [Chip de herramienta]
        </span>
      </div>

      {/* Prompt */}
      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
          Prompt base
        </p>
        <div className="rounded-lg bg-muted/50 border border-border p-3 text-xs font-mono text-muted-foreground leading-relaxed">
          Diseña [TEMA] para [NIVEL] con foco en{" "}
          <span className="text-accent font-semibold">[OBJETIVO]</span>…
        </div>
      </div>

      {/* Steps */}
      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
          Pasos con IA integrada
        </p>
        <div className="space-y-1.5">
          <div className="text-xs text-foreground">1. [Acción de la persona]</div>
          <div className="text-xs text-accent pl-4 border-l-2 border-accent/40">
            IA → [Aporte de la herramienta]
          </div>
        </div>
      </div>

      {/* Evidence */}
      <div className="rounded-lg bg-validated/10 border border-validated/30 p-3">
        <p className="text-[11px] uppercase tracking-wider text-validated font-semibold mb-1">
          Evidencia esperada
        </p>
        <p className="text-xs text-foreground">[Producto o resultado tangible]</p>
      </div>

      {/* Next level */}
      <div className="rounded-lg bg-premium/10 border border-premium/30 p-3">
        <p className="text-[11px] uppercase tracking-wider text-premium font-semibold mb-1 inline-flex items-center gap-1">
          <Rocket className="w-3 h-3" />
          Next Level
        </p>
        <p className="text-xs text-foreground">[Cómo escalar la estrategia]</p>
      </div>
    </div>
  </div>
);

export default Acerca;
