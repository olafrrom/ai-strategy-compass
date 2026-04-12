import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalStrategies: number;
  onOpenWizard: () => void;
}

const HeroSection = ({ searchQuery, onSearchChange, totalStrategies, onOpenWizard }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Abstract decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-premium/8 blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-accent/20 text-accent">
            Catálogo V1 · {totalStrategies} estrategias
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
            Estrategias IA para{" "}
            <span className="text-gradient-hero">Educación</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto font-body">
            Explora, filtra y encuentra estrategias de inteligencia artificial para transformar tu práctica educativa y profesional.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar estrategia..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card/95 backdrop-blur-sm text-card-foreground placeholder:text-muted-foreground text-sm border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow font-body"
            />
          </div>

          <button
            onClick={onOpenWizard}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-accent/25"
          >
            ✨ Recomendador inteligente
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
