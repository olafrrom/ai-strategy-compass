export interface AIStep {
  paso: string;
  herramienta: string;
  descripcion: string;
}

export interface StrategyDetail {
  id: string;
  problema_resuelve: string;
  cuando_usarla: string;
  herramientas_ia: string[];
  prompt_base: string;
  pasos: string[];
  donde_entra_ia: AIStep[];
  evidencia: string;
  next_level: string;
  next_level_tips: string[];
}

export const strategyDetails: Record<string, StrategyDetail> = {
  "EST-001": {
    id: "EST-001",
    problema_resuelve: "Reduce el tiempo de planeación y mejora la alineación pedagógica.",
    cuando_usarla: "Inicio de módulo, sesión o rediseño rápido.",
    herramientas_ia: ["ChatGPT", "Claude", "Gemini"],
    prompt_base: "Redacta objetivos de aprendizaje claros, medibles y alineados a Bloom para una sesión sobre [tema].",
    pasos: ["Define el resultado esperado", "Selecciona nivel cognitivo", "Solicita objetivos", "Ajusta secuencia"],
    donde_entra_ia: [
      { paso: "Selecciona nivel cognitivo", herramienta: "ChatGPT", descripcion: "Sugiere niveles de Bloom según el tema y contexto" },
      { paso: "Solicita objetivos", herramienta: "Claude", descripcion: "Genera objetivos SMART alineados al nivel seleccionado" },
      { paso: "Ajusta secuencia", herramienta: "Gemini", descripcion: "Reorganiza y valida coherencia de la secuencia didáctica" },
    ],
    evidencia: "Planeación editable con objetivos, secuencia y criterios.",
    next_level: "Conectar con rúbrica y actividad sugerida",
    next_level_tips: [
      "Genera rúbricas automáticas alineadas a cada objetivo con ChatGPT",
      "Usa Claude para crear actividades diferenciadas por nivel de desempeño",
      "Integra con un LMS para publicar la planeación directamente",
    ],
  },
  "EST-010": {
    id: "EST-010",
    problema_resuelve: "Facilita estudio autónomo y autorregulación.",
    cuando_usarla: "Repaso, nivelación, preparación de examen o autoestudio.",
    herramientas_ia: ["ChatGPT", "NotebookLM", "Perplexity"],
    prompt_base: "Diseña un microplan de estudio de 30 minutos para dominar [tema].",
    pasos: ["Diagnóstico rápido", "Microobjetivo", "Práctica guiada", "Autoevaluación"],
    donde_entra_ia: [
      { paso: "Diagnóstico rápido", herramienta: "ChatGPT", descripcion: "Evalúa el nivel actual del estudiante con preguntas clave" },
      { paso: "Práctica guiada", herramienta: "NotebookLM", descripcion: "Organiza recursos y genera resúmenes interactivos" },
      { paso: "Autoevaluación", herramienta: "Perplexity", descripcion: "Busca fuentes actualizadas para validar respuestas" },
    ],
    evidencia: "Ruta de estudio con checklist y repaso.",
    next_level: "Dashboard de progreso y recomendaciones adaptativas",
    next_level_tips: [
      "Crea un tracker visual de progreso con métricas semanales",
      "Implementa spaced repetition con IA para optimizar retención",
      "Genera reportes automáticos de avance para el docente",
    ],
  },
  "EST-006": {
    id: "EST-006",
    problema_resuelve: "Transforma conceptos abstractos en experiencias memorables.",
    cuando_usarla: "Introducción de tema, onboarding o activación.",
    herramientas_ia: ["ChatGPT", "Gamma", "Canva", "Claude"],
    prompt_base: "Crea una historia transmedia para explicar [concepto] en tono inspirador.",
    pasos: ["Define emoción", "Diseña arco narrativo", "Transforma en guion", "Adapta a video o slides"],
    donde_entra_ia: [
      { paso: "Define emoción", herramienta: "Claude", descripcion: "Explora tonos emocionales y selecciona el más efectivo" },
      { paso: "Diseña arco narrativo", herramienta: "ChatGPT", descripcion: "Estructura el viaje del héroe adaptado al concepto" },
      { paso: "Transforma en guion", herramienta: "Gamma", descripcion: "Convierte el guion en presentación visual narrativa" },
      { paso: "Adapta a video o slides", herramienta: "Canva", descripcion: "Diseña assets visuales y adapta a múltiples formatos" },
    ],
    evidencia: "Historia, storyboard o guion multimedia.",
    next_level: "Convertir en experiencia inmersiva XR",
    next_level_tips: [
      "Genera escenarios 3D con herramientas de IA generativa",
      "Crea experiencias de realidad aumentada con narrativa interactiva",
      "Integra branching narrativo donde el estudiante elige su camino",
    ],
  },
  "EST-013": {
    id: "EST-013",
    problema_resuelve: "Desarrolla pensamiento crítico, comunicación y toma de decisiones.",
    cuando_usarla: "Workshops, liderazgo, faculty development.",
    herramientas_ia: ["Claude", "ChatGPT", "Perplexity"],
    prompt_base: "Diseña un laboratorio de pensamiento crítico con dilemas y contraargumentos.",
    pasos: ["Plantea dilema", "Argumenta evidencia", "Contrasta posturas", "Cierre metacognitivo"],
    donde_entra_ia: [
      { paso: "Plantea dilema", herramienta: "Claude", descripcion: "Genera dilemas éticos complejos con múltiples perspectivas" },
      { paso: "Argumenta evidencia", herramienta: "Perplexity", descripcion: "Busca evidencia académica para sustentar cada postura" },
      { paso: "Contrasta posturas", herramienta: "ChatGPT", descripcion: "Simula debate entre posturas opuestas con argumentos sólidos" },
    ],
    evidencia: "Matriz de pensamiento crítico y reflexión.",
    next_level: "Ruta de superskills con badges",
    next_level_tips: [
      "Diseña un sistema de badges por competencias de pensamiento crítico",
      "Crea rutas de desarrollo progresivo con niveles de complejidad",
      "Implementa peer review asistido por IA para evaluación 360°",
    ],
  },
  "EST-017": {
    id: "EST-017",
    problema_resuelve: "Organiza proyectos con claridad, hitos y seguimiento.",
    cuando_usarla: "Planeación de proyectos, workshops, eventos, investigación.",
    herramientas_ia: ["ChatGPT", "Claude", "NotebookLM", "Gemini"],
    prompt_base: "Actúa como project manager y estructura hitos, entregables y riesgos.",
    pasos: ["Define alcance", "Diseña hitos", "Asigna responsables", "Gestiona riesgos"],
    donde_entra_ia: [
      { paso: "Define alcance", herramienta: "Claude", descripcion: "Estructura el scope con entregables y restricciones claras" },
      { paso: "Diseña hitos", herramienta: "ChatGPT", descripcion: "Genera cronograma con dependencias y fechas clave" },
      { paso: "Asigna responsables", herramienta: "NotebookLM", descripcion: "Documenta roles y responsabilidades en formato colaborativo" },
      { paso: "Gestiona riesgos", herramienta: "Gemini", descripcion: "Analiza riesgos potenciales y genera planes de contingencia" },
    ],
    evidencia: "Roadmap con checklist y responsables.",
    next_level: "Integración con tablero Kanban inteligente",
    next_level_tips: [
      "Conecta con herramientas como Notion o Trello para seguimiento en tiempo real",
      "Genera reportes de avance automáticos con IA cada sprint",
      "Implementa alertas inteligentes de riesgo y desvío de timeline",
    ],
  },
};
