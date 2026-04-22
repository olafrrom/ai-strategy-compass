import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalStrategies: number;
  onOpenWizard: () => void;
}

const HeroSection = ({ searchQuery, onSearchChange, totalStrategies, onOpenWizard }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Soft luminous decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      <div className="absolute top-4 right-4 z-20 md:top-6 md:right-6">
        <ThemeToggle />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20">
            Catálogo V1 · {totalStrategies} estrategias
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            Estrategias IA para{" "}
            <span className="text-gradient-hero">Educación</span>
          </h1>

          <p className="text-base md:text-lg text-white/85 mb-8 max-w-xl mx-auto font-body">
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
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm text-[hsl(234_70%_15%)] placeholder:text-muted-foreground text-sm border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/60 transition-shadow font-body shadow-lg shadow-black/10"
            />
          </div>

          <button
            onClick={onOpenWizard}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[hsl(234_70%_15%)] font-semibold text-sm hover:bg-white/90 transition-all shadow-lg shadow-black/20"
          >
            ✨ Recomendador inteligente
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
