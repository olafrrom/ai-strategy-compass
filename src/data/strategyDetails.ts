export interface StrategyDetail {
  id: string;
  problema_resuelve: string;
  cuando_usarla: string;
  prompt_base: string;
  pasos: string[];
  evidencia: string;
  next_level: string;
}

export const strategyDetails: Record<string, StrategyDetail> = {
  "EST-001": {
    id: "EST-001",
    problema_resuelve: "Reduce el tiempo de planeación y mejora la alineación pedagógica.",
    cuando_usarla: "Inicio de módulo, sesión o rediseño rápido.",
    prompt_base: "Redacta objetivos de aprendizaje claros, medibles y alineados a Bloom para una sesión sobre [tema].",
    pasos: ["Define el resultado esperado", "Selecciona nivel cognitivo", "Solicita objetivos", "Ajusta secuencia"],
    evidencia: "Planeación editable con objetivos, secuencia y criterios.",
    next_level: "Conectar con rúbrica y actividad sugerida",
  },
  "EST-010": {
    id: "EST-010",
    problema_resuelve: "Facilita estudio autónomo y autorregulación.",
    cuando_usarla: "Repaso, nivelación, preparación de examen o autoestudio.",
    prompt_base: "Diseña un microplan de estudio de 30 minutos para dominar [tema].",
    pasos: ["Diagnóstico rápido", "Microobjetivo", "Práctica guiada", "Autoevaluación"],
    evidencia: "Ruta de estudio con checklist y repaso.",
    next_level: "Dashboard de progreso y recomendaciones adaptativas",
  },
  "EST-006": {
    id: "EST-006",
    problema_resuelve: "Transforma conceptos abstractos en experiencias memorables.",
    cuando_usarla: "Introducción de tema, onboarding o activación.",
    prompt_base: "Crea una historia transmedia para explicar [concepto] en tono inspirador.",
    pasos: ["Define emoción", "Diseña arco narrativo", "Transforma en guion", "Adapta a video o slides"],
    evidencia: "Historia, storyboard o guion multimedia.",
    next_level: "Convertir en experiencia inmersiva XR",
  },
  "EST-013": {
    id: "EST-013",
    problema_resuelve: "Desarrolla pensamiento crítico, comunicación y toma de decisiones.",
    cuando_usarla: "Workshops, liderazgo, faculty development.",
    prompt_base: "Diseña un laboratorio de pensamiento crítico con dilemas y contraargumentos.",
    pasos: ["Plantea dilema", "Argumenta evidencia", "Contrasta posturas", "Cierre metacognitivo"],
    evidencia: "Matriz de pensamiento crítico y reflexión.",
    next_level: "Ruta de superskills con badges",
  },
  "EST-017": {
    id: "EST-017",
    problema_resuelve: "Organiza proyectos con claridad, hitos y seguimiento.",
    cuando_usarla: "Planeación de proyectos, workshops, eventos, investigación.",
    prompt_base: "Actúa como project manager y estructura hitos, entregables y riesgos.",
    pasos: ["Define alcance", "Diseña hitos", "Asigna responsables", "Gestiona riesgos"],
    evidencia: "Roadmap con checklist y responsables.",
    next_level: "Integración con tablero Kanban inteligente",
  },
};
