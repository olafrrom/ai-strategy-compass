export type Estatus = "insignia" | "validada" | "premium";
export type Enfoque = "enseñanza" | "aprendizaje" | "innovación" | "liderazgo" | "transformación" | "gestión";

export interface Strategy {
  id: string;
  nombre: string;
  familia: string;
  enfoque: Enfoque;
  tiempo: string;
  estatus: Estatus;
}

export const strategies: Strategy[] = [
  { id: "EST-001", nombre: "Planeación didáctica con objetivos inteligentes", familia: "Planeación didáctica", enfoque: "enseñanza", tiempo: "15 min", estatus: "insignia" },
  { id: "EST-002", nombre: "Diseño de actividades con simulación de estudiante", familia: "Diseño de actividades", enfoque: "enseñanza", tiempo: "20 min", estatus: "insignia" },
  { id: "EST-003", nombre: "Banco inteligente de reactivos y microevaluación", familia: "Evaluación y reactivos", enfoque: "enseñanza", tiempo: "15 min", estatus: "validada" },
  { id: "EST-004", nombre: "Rúbricas y criterios automatizados por desempeño", familia: "Instrumentos y rúbricas", enfoque: "enseñanza", tiempo: "15 min", estatus: "insignia" },
  { id: "EST-005", nombre: "Casos y dilemas profesionales con rutas de decisión", familia: "Casos, dilemas y simulaciones", enfoque: "enseñanza", tiempo: "20 min", estatus: "premium" },
  { id: "EST-006", nombre: "Storytelling transmedia para explicar conceptos", familia: "Storytelling y transformación narrativa", enfoque: "enseñanza", tiempo: "20 min", estatus: "premium" },
  { id: "EST-007", nombre: "Challenge sprint con IA y boss fight académico", familia: "Retos y challenge-based learning", enfoque: "innovación", tiempo: "20 min", estatus: "premium" },
  { id: "EST-008", nombre: "Gamificación con micromisiones y curiosidad intelectual", familia: "Gamificación y engagement", enfoque: "innovación", tiempo: "15 min", estatus: "insignia" },
  { id: "EST-009", nombre: "Mentor socrático con check-ins reflexivos", familia: "Acompañamiento y mentoría IA", enfoque: "aprendizaje", tiempo: "10 min", estatus: "insignia" },
  { id: "EST-010", nombre: "Study mode de microplanes y rutas autónomas", familia: "Study mode y aprendizaje autónomo", enfoque: "aprendizaje", tiempo: "15 min", estatus: "premium" },
  { id: "EST-011", nombre: "Curación inteligente y mapa rápido de literatura", familia: "Curación y síntesis inteligente", enfoque: "aprendizaje", tiempo: "15 min", estatus: "validada" },
  { id: "EST-012", nombre: "Coedición académica con checklist y mejora guiada", familia: "Coedición y calidad académica", enfoque: "aprendizaje", tiempo: "15 min", estatus: "validada" },
  { id: "EST-013", nombre: "Laboratorio de pensamiento crítico y superskills", familia: "Super-skills y liderazgo", enfoque: "liderazgo", tiempo: "20 min", estatus: "premium" },
  { id: "EST-014", nombre: "Radar de tendencias y actualización continua", familia: "Tendencias y actualización profesional", enfoque: "liderazgo", tiempo: "10 min", estatus: "insignia" },
  { id: "EST-015", nombre: "Alfabetización IA con criterios de uso responsable", familia: "Alfabetización IA y digital", enfoque: "transformación", tiempo: "15 min", estatus: "insignia" },
  { id: "EST-016", nombre: "Transferencia al contexto laboral con mini-briefs", familia: "Aplicación profesional y transferencia", enfoque: "transformación", tiempo: "15 min", estatus: "validada" },
  { id: "EST-017", nombre: "Gestión de proyectos académicos con hitos IA", familia: "Investigación y gestión de proyectos", enfoque: "gestión", tiempo: "20 min", estatus: "premium" },
  { id: "EST-018", nombre: "Co-creación rápida de recursos y entregables", familia: "Co-creación de contenidos", enfoque: "gestión", tiempo: "15 min", estatus: "validada" },
  { id: "EST-019", nombre: "Diseño de actividades con variación de nivel cognitivo", familia: "Diseño de actividades", enfoque: "enseñanza", tiempo: "20 min", estatus: "insignia" },
  { id: "EST-020", nombre: "Simulación de estudiante para detectar fallas", familia: "Coedición y calidad académica", enfoque: "enseñanza", tiempo: "15 min", estatus: "premium" },
  { id: "EST-021", nombre: "Mapa rápido de conceptos con síntesis estructurada", familia: "Curación y síntesis inteligente", enfoque: "aprendizaje", tiempo: "15 min", estatus: "validada" },
  { id: "EST-022", nombre: "Microbrief profesional para aplicar aprendizaje", familia: "Aplicación profesional y transferencia", enfoque: "transformación", tiempo: "15 min", estatus: "insignia" },
  { id: "EST-023", nombre: "Evaluación adaptativa con retroalimentación inmediata", familia: "Evaluación y reactivos", enfoque: "enseñanza", tiempo: "20 min", estatus: "premium" },
];

export const enfoques: Enfoque[] = ["enseñanza", "aprendizaje", "innovación", "liderazgo", "transformación", "gestión"];

export const familias = [...new Set(strategies.map(s => s.familia))];

export const enfoqueConfig: Record<Enfoque, { label: string; icon: string; color: string }> = {
  enseñanza: { label: "Enseñanza", icon: "📚", color: "bg-primary/10 text-primary" },
  aprendizaje: { label: "Aprendizaje", icon: "🧠", color: "bg-accent/15 text-accent-foreground" },
  innovación: { label: "Innovación", icon: "🚀", color: "bg-premium/10 text-premium" },
  liderazgo: { label: "Liderazgo", icon: "⭐", color: "bg-badge/15 text-badge-foreground" },
  transformación: { label: "Transformación", icon: "🔄", color: "bg-validated/10 text-validated" },
  gestión: { label: "Gestión", icon: "📋", color: "bg-muted text-muted-foreground" },
};

export const estatusConfig: Record<Estatus, { label: string; className: string }> = {
  insignia: { label: "Insignia", className: "bg-badge/15 text-badge-foreground border-badge/30" },
  validada: { label: "Validada", className: "bg-validated/15 text-validated border-validated/30" },
  premium: { label: "Premium", className: "bg-premium/15 text-premium border-premium/30" },
};
