import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { Strategy } from "@/data/strategies";
import { enfoqueConfig, estatusConfig } from "@/data/strategies";

interface StrategyCardProps {
  strategy: Strategy;
  index: number;
  onClick: () => void;
}

const StrategyCard = ({ strategy, index, onClick }: StrategyCardProps) => {
  const enfoque = enfoqueConfig[strategy.enfoque];
  const estatus = estatusConfig[strategy.estatus];

  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      onClick={onClick}
      className="group w-full text-left bg-card rounded-xl border border-border p-5 hover:shadow-[var(--card-shadow-hover)] shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${enfoque.color}`}>
          {enfoque.icon} {enfoque.label}
        </span>
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${estatus.className}`}>
          {estatus.label}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-card-foreground leading-snug mb-3 group-hover:text-accent transition-colors line-clamp-2">
        {strategy.nombre}
      </h3>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="truncate max-w-[60%]">{strategy.familia}</span>
        <span className="inline-flex items-center gap-1 shrink-0">
          <Clock className="w-3 h-3" />
          {strategy.tiempo}
        </span>
      </div>

      <div className="mt-3 pt-3 border-t border-border">
        <span className="text-[10px] font-mono text-muted-foreground">{strategy.id}</span>
      </div>
    </motion.button>
  );
};

export default StrategyCard;
