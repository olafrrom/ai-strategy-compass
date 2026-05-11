import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Compass, ShieldCheck, Sparkles, FlaskConical, Mail, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const statusCards = [
  {
    label: "Validada",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "bg-validated/15 text-validated border-validated/30",
    description: "Estrategia funcional probada. Ha sido aplicada en contextos educativos o profesionales con resultados verificables.",
  },
  {
    label: "Referente",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-badge/15 text-badge-foreground border-badge/30",
    description: "Estrategia altamente recomendada por su claridad, efectividad y aplicabilidad. Representa buenas prácticas y modelos sólidos de implementación pedagógica o profesional con IA.",
  },
  {
    label: "Avanzada",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-premium/15 text-premium border-premium/30",
    description: "Estrategia de mayor profundidad y complejidad. Requiere articulación estratégica de herramientas, pensamiento sistémico y dominio metodológico para generar transformación significativa.",
  },
  {
    label: "Experimental",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    description: "Estrategia en exploración o prototipado. Orientada a innovación, nuevas dinámicas o modelos emergentes con potencial disruptivo.",
  },
];

const Acerca = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.18)_100%)]" />
        </div>
        <div className="absolute top-4 right-4 z-20 md:top-6 md:right-6">
          <ThemeToggle />
        </div>
        <div className="container relative z-10 py-12 md:py-16">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-6 font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catálogo
          </button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
          >
            Acerca del Catálogo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/85 mt-2 max-w-xl font-body"
          >
            Todo lo que necesitas saber sobre las estrategias IA para educación.
          </motion.p>
        </div>
      </div>

      <main className="container py-10 md:py-14 space-y-12">
        {/* Propósito */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <SectionCard
            icon={<BookOpen className="w-5 h-5 text-primary" />}
            title="Propósito del catálogo"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              Este catálogo reúne estrategias de inteligencia artificial diseñadas para potenciar la enseñanza,
              el aprendizaje, la innovación educativa, el liderazgo académico, la transformación digital y la
              gestión de proyectos. Cada estrategia incluye herramientas sugeridas, prompts base y pasos
              accionables para implementación inmediata.
            </p>
          </SectionCard>
        </motion.section>

        {/* Cómo usarlo */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <SectionCard
            icon={<Compass className="w-5 h-5 text-primary" />}
            title="Cómo usar el catálogo"
          >
            <ol className="space-y-3 text-sm text-muted-foreground">
              {[
                "Explora las estrategias usando los filtros por enfoque y familia.",
                "Usa el buscador para encontrar estrategias por nombre.",
                "Haz clic en una tarjeta para ver el detalle completo con pasos y herramientas.",
                "Copia el prompt base y adáptalo a tu contexto educativo.",
                "Prueba el Recomendador Inteligente para encontrar la estrategia ideal según tu tiempo, enfoque y objetivo.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </SectionCard>
        </motion.section>

        {/* Estatus editorial */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <div className="mb-4">
            <h2 className="text-lg font-display font-bold text-foreground">Estatus editorial</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Cada estrategia tiene un nivel de madurez que indica su profundidad y validación.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statusCards.map((status, i) => (
              <motion.div
                key={status.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="p-4 rounded-xl bg-card border border-border"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${status.color}`}>
                    {status.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{status.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recomendación de uso */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <SectionCard
            icon={<Sparkles className="w-5 h-5 text-accent" />}
            title="Recomendación de uso"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comienza con estrategias <strong className="text-foreground">Validadas</strong> y{" "}
              <strong className="text-foreground">Referentes</strong> para familiarizarte con el flujo y la implementación.
              Avanza hacia estrategias <strong className="text-foreground">Avanzadas</strong> cuando domines
              la articulación metodológica y el uso estratégico de herramientas IA. Las estrategias{" "}
              <strong className="text-foreground">Experimentales</strong> son ideales para explorar nuevos
              enfoques y dinámicas emergentes.
            </p>
          </SectionCard>
        </motion.section>

        {/* Contacto */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <SectionCard
            icon={<Mail className="w-5 h-5 text-primary" />}
            title="Contacto"
          >
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
      </main>

      <footer className="border-t border-border py-8">
        <div className="container text-center text-xs text-muted-foreground">
          Catálogo de Estrategias IA · Versión 1.0
        </div>
      </footer>
    </div>
  );
};

const SectionCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="p-5 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h2 className="text-base font-display font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </div>
);

export default Acerca;
