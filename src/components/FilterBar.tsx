import { enfoques, enfoqueConfig, familias, type Enfoque } from "@/data/strategies";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface FilterBarProps {
  selectedEnfoque: Enfoque | null;
  onEnfoqueChange: (e: Enfoque | null) => void;
  selectedFamilia: string | null;
  onFamiliaChange: (f: string | null) => void;
  filteredFamilias: string[];
}

const FilterBar = ({ selectedEnfoque, onEnfoqueChange, selectedFamilia, onFamiliaChange, filteredFamilias }: FilterBarProps) => {
  return (
    <div className="space-y-4">
      {/* Enfoque filters */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Enfoque</h3>
        <div className="flex flex-wrap gap-2">
          {enfoques.map((e) => {
            const config = enfoqueConfig[e];
            const isActive = selectedEnfoque === e;
            return (
              <button
                key={e}
                onClick={() => onEnfoqueChange(isActive ? null : e)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : `${config.color} border-transparent hover:border-border`
                }`}
              >
                <span>{config.icon}</span>
                {config.label}
              </button>
            );
          })}
          {selectedEnfoque && (
            <button
              onClick={() => onEnfoqueChange(null)}
              className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3 h-3" /> Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Familia filters */}
      {filteredFamilias.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Familia</h3>
          <div className="flex flex-wrap gap-2">
            {filteredFamilias.map((f) => (
              <button
                key={f}
                onClick={() => onFamiliaChange(selectedFamilia === f ? null : f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  selectedFamilia === f
                    ? "bg-secondary-foreground text-secondary border-secondary-foreground"
                    : "bg-secondary text-secondary-foreground border-transparent hover:border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FilterBar;
