import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Clock, Tag, Layers, Award } from "lucide-react";
import type { Strategy } from "@/data/strategies";
import { enfoqueConfig, estatusConfig } from "@/data/strategies";

interface StrategyModalProps {
  strategy: Strategy | null;
  open: boolean;
  onClose: () => void;
}

const StrategyModal = ({ strategy, open, onClose }: StrategyModalProps) => {
  if (!strategy) return null;

  const enfoque = enfoqueConfig[strategy.enfoque];
  const estatus = estatusConfig[strategy.estatus];

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${enfoque.color}`}>
              {enfoque.icon} {enfoque.label}
            </span>
            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${estatus.className}`}>
              {estatus.label}
            </span>
          </div>
          <DialogTitle className="text-lg font-display font-bold leading-snug">
            {strategy.nombre}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <InfoRow icon={<Tag className="w-4 h-4" />} label="ID" value={strategy.id} />
          <InfoRow icon={<Layers className="w-4 h-4" />} label="Familia" value={strategy.familia} />
          <InfoRow icon={<Clock className="w-4 h-4" />} label="Tiempo estimado" value={strategy.tiempo} />
          <InfoRow icon={<Award className="w-4 h-4" />} label="Estatus editorial" value={estatus.label} />
        </div>

        <div className="mt-6 p-4 rounded-lg bg-muted text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">Próximamente</p>
          <p>Guía paso a paso, prompt sugerido e indicadores de impacto para esta estrategia.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="text-muted-foreground">{icon}</span>
    <span className="text-muted-foreground w-28 shrink-0">{label}</span>
    <span className="font-medium text-foreground">{value}</span>
  </div>
);

export default StrategyModal;
