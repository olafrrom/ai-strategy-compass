export interface AIStep {
  paso: string;
  herramienta: string;
  descripcion: string;
}

export interface ToolDetail {
  funcionalidad: string;
  aplicacion_educativa: string;
  nivel: string;
  enfoque: string;
  tip: string;
}

export interface StrategyDetail {
  id: string;
  problema_resuelve: string;
  cuando_usarla: string;
  herramientas_ia: string[];
  herramientas_detalle: Record<string, ToolDetail>;
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
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Generación de objetivos de aprendizaje alineados a taxonomía de Bloom",
        aplicacion_educativa: "Crear objetivos SMART para sesiones y módulos completos",
        nivel: "Básico – Intermedio",
        enfoque: "Planeación didáctica",
        tip: "Incluye el contexto del curso y nivel educativo en tu prompt para mejores resultados",
      },
      Claude: {
        funcionalidad: "Redacción de objetivos SMART con coherencia pedagógica",
        aplicacion_educativa: "Validar y refinar la secuencia de objetivos por sesión",
        nivel: "Intermedio",
        enfoque: "Diseño instruccional",
        tip: "Pide que compare tus objetivos contra criterios de calidad pedagógica",
      },
      Gemini: {
        funcionalidad: "Reorganización y validación de secuencias didácticas",
        aplicacion_educativa: "Verificar coherencia entre objetivos, actividades y evaluación",
        nivel: "Intermedio – Avanzado",
        enfoque: "Alineación curricular",
        tip: "Sube tu plan existente y pide una auditoría de coherencia",
      },
    },
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
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Diagnóstico de nivel y generación de preguntas clave",
        aplicacion_educativa: "Evaluar conocimiento previo antes de iniciar un plan de estudio",
        nivel: "Básico",
        enfoque: "Evaluación diagnóstica",
        tip: "Pide un quiz rápido de 5 preguntas sobre el tema antes de empezar",
      },
      NotebookLM: {
        funcionalidad: "Organización de recursos y generación de resúmenes interactivos",
        aplicacion_educativa: "Crear notas estructuradas y mapas conceptuales de fuentes múltiples",
        nivel: "Intermedio",
        enfoque: "Gestión del conocimiento",
        tip: "Sube tus apuntes y materiales para obtener resúmenes cruzados automáticos",
      },
      Perplexity: {
        funcionalidad: "Búsqueda de fuentes académicas actualizadas con citación",
        aplicacion_educativa: "Validar respuestas y ampliar comprensión con evidencia reciente",
        nivel: "Intermedio – Avanzado",
        enfoque: "Investigación y validación",
        tip: "Usa el modo académico para obtener fuentes peer-reviewed",
      },
    },
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
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Estructuración del arco narrativo y viaje del héroe",
        aplicacion_educativa: "Crear historias educativas con inicio, nudo y desenlace pedagógico",
        nivel: "Básico – Intermedio",
        enfoque: "Narrativa educativa",
        tip: "Define primero la emoción objetivo y el concepto clave antes de generar la historia",
      },
      Gamma: {
        funcionalidad: "Conversión de guiones en presentaciones visuales narrativas",
        aplicacion_educativa: "Crear slides inmersivos con storytelling visual automático",
        nivel: "Básico",
        enfoque: "Presentación visual",
        tip: "Pega tu guion directamente y deja que Gamma genere el diseño visual",
      },
      Canva: {
        funcionalidad: "Diseño de assets visuales y adaptación multiformato",
        aplicacion_educativa: "Crear infografías, posters y materiales de apoyo visual",
        nivel: "Básico",
        enfoque: "Diseño gráfico educativo",
        tip: "Usa las plantillas educativas y adapta con los colores de tu institución",
      },
      Claude: {
        funcionalidad: "Exploración de tonos emocionales y análisis narrativo",
        aplicacion_educativa: "Seleccionar el tono emocional más efectivo para cada audiencia",
        nivel: "Intermedio",
        enfoque: "Diseño emocional",
        tip: "Pide que analice tu narrativa desde la perspectiva de diferentes perfiles de estudiantes",
      },
    },
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
    herramientas_detalle: {
      Claude: {
        funcionalidad: "Generación de dilemas éticos complejos con múltiples perspectivas",
        aplicacion_educativa: "Diseñar escenarios de debate con posturas equilibradas",
        nivel: "Intermedio – Avanzado",
        enfoque: "Pensamiento crítico",
        tip: "Pide que genere al menos 3 perspectivas opuestas para cada dilema",
      },
      ChatGPT: {
        funcionalidad: "Simulación de debate entre posturas opuestas con argumentos sólidos",
        aplicacion_educativa: "Crear contraargumentos y ejercicios de refutación para estudiantes",
        nivel: "Intermedio",
        enfoque: "Argumentación",
        tip: "Usa el role-play pidiendo que adopte diferentes posturas filosóficas",
      },
      Perplexity: {
        funcionalidad: "Búsqueda de evidencia académica para sustentar posturas",
        aplicacion_educativa: "Fundamentar argumentos con datos y estudios recientes",
        nivel: "Intermedio – Avanzado",
        enfoque: "Investigación basada en evidencia",
        tip: "Busca estudios de caso reales que ilustren cada postura del dilema",
      },
    },
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
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Generación de cronogramas con dependencias y fechas clave",
        aplicacion_educativa: "Diseñar timelines de proyecto con milestones académicos",
        nivel: "Básico – Intermedio",
        enfoque: "Planificación de proyectos",
        tip: "Especifica la duración total y número de entregables para un cronograma preciso",
      },
      Claude: {
        funcionalidad: "Estructuración del scope con entregables y restricciones",
        aplicacion_educativa: "Definir alcance claro para proyectos de investigación o tesis",
        nivel: "Intermedio",
        enfoque: "Definición de alcance",
        tip: "Pide que identifique riesgos potenciales desde la fase de definición",
      },
      NotebookLM: {
        funcionalidad: "Documentación de roles y responsabilidades colaborativas",
        aplicacion_educativa: "Organizar equipos de proyecto con asignaciones claras",
        nivel: "Básico",
        enfoque: "Gestión de equipos",
        tip: "Sube el brief del proyecto para generar una matriz RACI automática",
      },
      Gemini: {
        funcionalidad: "Análisis de riesgos y generación de planes de contingencia",
        aplicacion_educativa: "Anticipar obstáculos en proyectos académicos complejos",
        nivel: "Avanzado",
        enfoque: "Gestión de riesgos",
        tip: "Pide escenarios what-if para cada hito crítico del proyecto",
      },
    },
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
  "EST-019": {
    id: "EST-019",
    problema_resuelve: "Actividades poco alineadas al nivel cognitivo o repetitivas en su diseño.",
    cuando_usarla: "Diseño o rediseño de sesión, práctica o secuencia didáctica.",
    herramientas_ia: ["ChatGPT", "Claude", "Gemini"],
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Generación de variantes de actividades",
        aplicacion_educativa: "Propone actividades diferenciadas por nivel cognitivo.",
        nivel: "Inicial-intermedio",
        enfoque: "Enseñanza",
        tip: "Úsalo para obtener una primera versión con variedad de dificultad.",
      },
      Claude: {
        funcionalidad: "Refinamiento pedagógico",
        aplicacion_educativa: "Mejora instrucciones y coherencia entre objetivo, actividad y evidencia.",
        nivel: "Intermedio",
        enfoque: "Enseñanza",
        tip: "Funciona bien para pulir claridad y secuencia.",
      },
      Gemini: {
        funcionalidad: "Ajuste y reformulación",
        aplicacion_educativa: "Ayuda a adaptar las actividades a contexto, audiencia o modalidad.",
        nivel: "Inicial-intermedio",
        enfoque: "Enseñanza",
        tip: "Úsalo cuando quieras una versión más breve, clara o contextualizada.",
      },
    },
    prompt_base: "Diseña 3 actividades sobre [tema] variando el nivel cognitivo entre comprensión, aplicación y análisis. Incluye propósito, instrucciones breves y evidencia esperada.",
    pasos: ["Definir el objetivo de aprendizaje", "Elegir los niveles cognitivos a trabajar", "Generar actividades diferenciadas", "Refinar instrucciones y complejidad"],
    donde_entra_ia: [
      { paso: "Generar actividades diferenciadas", herramienta: "ChatGPT", descripcion: "Propone variantes por nivel cognitivo" },
      { paso: "Refinar instrucciones y complejidad", herramienta: "Claude o Gemini", descripcion: "Ajustan claridad, reto y adecuación al contexto" },
    ],
    evidencia: "Secuencia de actividades diferenciadas por nivel cognitivo, lista para aplicar o adaptar.",
    next_level: "Integrar evaluación automática por nivel",
    next_level_tips: [
      "Alinear cada actividad con criterios de evaluación por nivel cognitivo",
      "Generar una versión síncrona, asíncrona e híbrida de la misma secuencia",
      "Diseñar variantes para estudiantes con distinto ritmo o profundidad",
      "Conectar la actividad con una rúbrica o checklist automatizado",
    ],
  },
  "EST-020": {
    id: "EST-020",
    problema_resuelve: "Actividades mal diseñadas o confusas",
    cuando_usarla: "Antes de aplicar actividad",
    herramientas_ia: [],
    herramientas_detalle: {},
    prompt_base: "Actúa como estudiante y ejecuta esta actividad",
    pasos: ["Presentar actividad", "Simular ejecución", "Detectar fricción", "Ajustar diseño"],
    donde_entra_ia: [],
    evidencia: "Versión mejorada de actividad",
    next_level: "Simulación con perfiles múltiples",
    next_level_tips: [],
  },
  "EST-021": {
    id: "EST-021",
    problema_resuelve: "Exceso de información sin estructura",
    cuando_usarla: "Estudio o investigación",
    herramientas_ia: [],
    herramientas_detalle: {},
    prompt_base: "Resume y organiza contenido en mapa conceptual",
    pasos: ["Recolectar información", "Sintetizar", "Organizar jerarquía", "Visualizar"],
    donde_entra_ia: [],
    evidencia: "Mapa conceptual",
    next_level: "Visualización interactiva",
    next_level_tips: [],
  },
  "EST-022": {
    id: "EST-022",
    problema_resuelve: "Aprendizaje sin aplicación real",
    cuando_usarla: "Cierre de tema",
    herramientas_ia: [],
    herramientas_detalle: {},
    prompt_base: "Crea un mini-brief profesional aplicando el conocimiento",
    pasos: ["Identificar contexto", "Definir problema", "Aplicar conocimiento", "Redactar propuesta"],
    donde_entra_ia: [],
    evidencia: "Mini-brief",
    next_level: "Validación con stakeholders simulados",
    next_level_tips: [],
  },
  "EST-023": {
    id: "EST-023",
    problema_resuelve: "Evaluación estática",
    cuando_usarla: "Evaluación formativa",
    herramientas_ia: [],
    herramientas_detalle: {},
    prompt_base: "Genera preguntas adaptativas con feedback",
    pasos: ["Definir objetivo", "Generar preguntas", "Adaptar dificultad", "Retroalimentar"],
    donde_entra_ia: [],
    evidencia: "Evaluación con feedback",
    next_level: "Dashboard de desempeño",
    next_level_tips: [],
  },
};
