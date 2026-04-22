import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import StrategyCard from "@/components/StrategyCard";
import StrategyModal from "@/components/StrategyModal";
import RecommendationWizard from "@/components/RecommendationWizard";
import { strategies, type Enfoque, type Strategy } from "@/data/strategies";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEnfoque, setSelectedEnfoque] = useState<Enfoque | null>(null);
  const [selectedFamilia, setSelectedFamilia] = useState<string | null>(null);
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);
  const [wizardOpen, setWizardOpen] = useState(false);

  const filteredStrategies = useMemo(() => {
    return strategies.filter((s) => {
      if (searchQuery && !s.nombre.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (selectedEnfoque && s.enfoque !== selectedEnfoque) return false;
      if (selectedFamilia && s.familia !== selectedFamilia) return false;
      return true;
    });
  }, [searchQuery, selectedEnfoque, selectedFamilia]);

  const filteredFamilias = useMemo(() => {
    const base = selectedEnfoque
      ? strategies.filter((s) => s.enfoque === selectedEnfoque)
      : strategies;
    return [...new Set(base.map((s) => s.familia))];
  }, [selectedEnfoque]);

  const handleEnfoqueChange = (e: Enfoque | null) => {
    setSelectedEnfoque(e);
    setSelectedFamilia(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalStrategies={strategies.length}
        onOpenWizard={() => setWizardOpen(true)}
      />

      <main className="container py-8 md:py-12">
        <FilterBar
          selectedEnfoque={selectedEnfoque}
          onEnfoqueChange={handleEnfoqueChange}
          selectedFamilia={selectedFamilia}
          onFamiliaChange={setSelectedFamilia}
          filteredFamilias={filteredFamilias}
        />

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredStrategies.length} estrategia{filteredStrategies.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredStrategies.map((s, i) => (
              <StrategyCard
                key={s.id}
                strategy={s}
                index={i}
                onClick={() => setSelectedStrategy(s)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredStrategies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No se encontraron estrategias con esos filtros.</p>
          </div>
        )}
      </main>

      <StrategyModal
        strategy={selectedStrategy}
        open={!!selectedStrategy}
        onClose={() => setSelectedStrategy(null)}
      />

      <RecommendationWizard
        open={wizardOpen}
        onClose={() => setWizardOpen(false)}
        onSelect={(s) => setSelectedStrategy(s)}
      />

      {/* Bottom banner */}
      <section className="relative overflow-hidden bg-banner-gradient mt-16">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.2)_100%)]" />
        <div className="container relative z-10 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-white/85 max-w-xl mx-auto mb-6 font-body text-sm md:text-base">
            Usa el recomendador inteligente y encuentra la estrategia ideal según tu tiempo, enfoque y objetivo.
          </p>
          <button
            onClick={() => setWizardOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[hsl(234_70%_15%)] font-semibold text-sm hover:bg-white/90 transition-all shadow-lg shadow-black/20"
          >
            ✨ Abrir recomendador
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>Catálogo de Estrategias IA · Versión 1.0</span>
          <Link
            to="/acerca"
            className="hover:text-foreground transition-colors font-medium"
          >
            Acerca / Contacto
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;
