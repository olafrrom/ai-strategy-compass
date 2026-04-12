import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Tag, Layers, Award, Zap, Calendar, MessageSquare, ListChecks, FileCheck, ArrowUpRight, Copy, Wrench, Bot } from "lucide-react";
import { toast } from "sonner";
import type { Strategy } from "@/data/strategies";
import { enfoqueConfig, estatusConfig } from "@/data/strategies";
import { strategyDetails } from "@/data/strategyDetails";

const toolColors: Record<string, string> = {
  ChatGPT: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Claude: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Perplexity: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  NotebookLM: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Gemini: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Gamma: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  Canva: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
};

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

  const handleCopyPrompt = () => {
    if (detail) {
      navigator.clipboard.writeText(detail.prompt_base);
      toast.success("Prompt copiado");
    }
  };

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
          <div className="space-y-5 mt-6">
            {/* 1. Problema que resuelve */}
            <DetailSection
              icon={<Zap className="w-4 h-4 text-primary" />}
              title="Problema que resuelve"
              content={detail.problema_resuelve}
            />

            {/* 2. Cuándo usarla */}
            <DetailSection
              icon={<Calendar className="w-4 h-4 text-primary" />}
              title="Cuándo usarla"
              content={detail.cuando_usarla}
            />

            {/* 3. Herramientas IA sugeridas */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Wrench className="w-4 h-4 text-primary" />
                <p className="text-xs font-semibold text-foreground">Herramientas IA sugeridas</p>
              </div>
              <div className="flex flex-wrap gap-2 pl-6">
                {detail.herramientas_ia.map((tool) => (
                  <span
                    key={tool}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${toolColors[tool] || "bg-muted text-muted-foreground border-border"}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Prompt base + copy */}
            <div className="p-3 rounded-lg bg-accent/5 border border-accent/15">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent-foreground shrink-0" />
                  <p className="text-xs font-semibold text-accent-foreground">Prompt base</p>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copiar
                </button>
              </div>
              <p className="text-sm text-foreground/80 font-mono leading-relaxed pl-6">
                {detail.prompt_base}
              </p>
            </div>

            {/* 5. Pasos */}
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

            {/* 6. Dónde entra la IA */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-4 h-4 text-primary" />
                <p className="text-xs font-semibold text-foreground">Dónde entra la IA</p>
              </div>
              <div className="pl-6 space-y-0">
                {detail.donde_entra_ia.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-primary/30 shrink-0 mt-1" />
                      {i < detail.donde_entra_ia.length - 1 && (
                        <div className="w-px flex-1 bg-primary/20 my-1" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-4">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-foreground">{step.paso}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${toolColors[step.herramienta] || "bg-muted text-muted-foreground border-border"}`}>
                          {step.herramienta}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Evidencia */}
            <DetailSection
              icon={<FileCheck className="w-4 h-4 text-primary" />}
              title="Evidencia"
              content={detail.evidencia}
            />

            {/* 8. Expandable Next Level */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="next-level" className="border rounded-lg bg-muted/50 border-border px-3">
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Next Level</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pb-1">
                    <p className="text-sm text-muted-foreground">{detail.next_level}</p>
                    <ul className="space-y-2">
                      {detail.next_level_tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
