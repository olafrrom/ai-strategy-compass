import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Clock, Tag, Layers, Award, Zap, Calendar, MessageSquare, ListChecks, FileCheck, ArrowUpRight } from "lucide-react";
import type { Strategy } from "@/data/strategies";
import { enfoqueConfig, estatusConfig } from "@/data/strategies";
import { strategyDetails } from "@/data/strategyDetails";

interface StrategyModalProps {
  strategy: Strategy | null;
  open: boolean;
  onClose: () => void;
}

const StrategyModal = ({ strategy, open, onClose }: StrategyModalProps) => {
  if (!strategy) return null;

  const enfoque = enfoqueConfig[strategy.enfoque];
  const estatus = estatusConfig[strategy.estatus];
  const detail = strategyDetails[strategy.id];

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
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

        {detail ? (
          <div className="space-y-4 mt-6">
            <DetailSection
              icon={<Zap className="w-4 h-4 text-primary" />}
              title="Problema que resuelve"
              content={detail.problema_resuelve}
            />
            <DetailSection
              icon={<Calendar className="w-4 h-4 text-primary" />}
              title="Cuándo usarla"
              content={detail.cuando_usarla}
            />

            <div className="p-3 rounded-lg bg-accent/5 border border-accent/15">
              <div className="flex items-start gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-accent-foreground mt-0.5 shrink-0" />
                <p className="text-xs font-semibold text-accent-foreground">Prompt base</p>
              </div>
              <p className="text-sm text-foreground/80 font-mono leading-relaxed pl-6">
                {detail.prompt_base}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <ListChecks className="w-4 h-4 text-primary" />
                <p className="text-xs font-semibold text-foreground">Pasos</p>
              </div>
              <ol className="space-y-1.5 pl-6">
                {detail.pasos.map((paso, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {paso}
                  </li>
                ))}
              </ol>
            </div>

            <DetailSection
              icon={<FileCheck className="w-4 h-4 text-primary" />}
              title="Evidencia"
              content={detail.evidencia}
            />

            <div className="p-3 rounded-lg bg-muted border border-border">
              <div className="flex items-start gap-2">
                <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground mb-0.5">Next level</p>
                  <p className="text-sm text-muted-foreground">{detail.next_level}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 p-4 rounded-lg bg-muted text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Próximamente</p>
            <p>Guía paso a paso, prompt sugerido e indicadores de impacto para esta estrategia.</p>
          </div>
        )}
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

const DetailSection = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start gap-2">
    <span className="mt-0.5 shrink-0">{icon}</span>
    <div>
      <p className="text-xs font-semibold text-foreground mb-0.5">{title}</p>
      <p className="text-sm text-muted-foreground">{content}</p>
    </div>
  </div>
);

export default StrategyModal;
