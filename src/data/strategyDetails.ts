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
    problema_resuelve: "Actividades mal diseñadas, ambiguas o con fricción que no se detecta antes de aplicarlas.",
    cuando_usarla: "Antes de lanzar una actividad, práctica, instrucción o experiencia de aprendizaje.",
    herramientas_ia: ["ChatGPT", "Claude", "Gemini"],
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Roleplay de estudiante",
        aplicacion_educativa: "Ejecuta la actividad desde la perspectiva de un estudiante y revela fallas.",
        nivel: "Inicial",
        enfoque: "Enseñanza",
        tip: "Pídele que responda como estudiante real, no como experto.",
      },
      Claude: {
        funcionalidad: "Análisis de claridad y coherencia",
        aplicacion_educativa: "Detecta ambigüedades, sobrecarga cognitiva y problemas de secuencia.",
        nivel: "Intermedio",
        enfoque: "Enseñanza",
        tip: "Úsalo para obtener observaciones más finas sobre estructura e instrucciones.",
      },
      Gemini: {
        funcionalidad: "Reformulación de instrucciones",
        aplicacion_educativa: "Mejora redacción, orden de pasos y precisión de la consigna.",
        nivel: "Inicial-intermedio",
        enfoque: "Enseñanza",
        tip: "Ideal para convertir una consigna extensa en instrucciones más limpias.",
      },
    },
    prompt_base: "Actúa como estudiante y ejecuta esta actividad paso a paso. Señala confusiones, ambigüedades, instrucciones poco claras o momentos de fricción. Después sugiere mejoras concretas.",
    pasos: ["Presentar la actividad o instrucción completa", "Simular ejecución", "Detectar fricción", "Ajustar diseño"],
    donde_entra_ia: [
      { paso: "Simular ejecución", herramienta: "ChatGPT", descripcion: "Ejecuta la actividad como estudiante y muestra cómo la interpreta" },
      { paso: "Detectar fricción", herramienta: "Claude", descripcion: "Identifica confusiones, ambigüedades o carga cognitiva excesiva" },
      { paso: "Ajustar diseño", herramienta: "Gemini", descripcion: "Reformula instrucciones y mejora secuencia, claridad y entregable" },
    ],
    evidencia: "Versión optimizada de la actividad con mejoras en claridad, secuencia, comprensión y usabilidad.",
    next_level: "Simulación con perfiles múltiples",
    next_level_tips: [
      "Simular 3 perfiles de estudiante con distinto nivel de desempeño",
      "Diseñar una versión adaptativa de la actividad según perfil",
      "Integrar apoyos graduados o pistas en los pasos críticos",
      "Convertir la actividad en formato interactivo o micro-simulador",
    ],
  },
  "EST-021": {
    id: "EST-021",
    problema_resuelve: "Exceso de información dispersa que dificulta comprender y retener los conceptos clave.",
    cuando_usarla: "Estudio autónomo, lectura de documentos, preparación de clase o síntesis de investigación.",
    herramientas_ia: ["Claude", "NotebookLM", "ChatGPT"],
    herramientas_detalle: {
      Claude: {
        funcionalidad: "Síntesis estructurada",
        aplicacion_educativa: "Resume y organiza información en bloques conceptuales claros.",
        nivel: "Inicial-intermedio",
        enfoque: "Aprendizaje",
        tip: "Úsalo para obtener una primera depuración del contenido.",
      },
      NotebookLM: {
        funcionalidad: "Visualización y organización",
        aplicacion_educativa: "Ayuda a convertir síntesis en esquemas, mapas o recursos de estudio.",
        nivel: "Intermedio",
        enfoque: "Aprendizaje",
        tip: "Es ideal cuando ya tienes fuentes y quieres estructurarlas mejor.",
      },
      ChatGPT: {
        funcionalidad: "Reorganización conceptual",
        aplicacion_educativa: "Convierte ideas complejas en jerarquías, categorías o mapas rápidos.",
        nivel: "Inicial",
        enfoque: "Aprendizaje",
        tip: "Pídele que reduzca ruido y se concentre en conceptos y relaciones.",
      },
    },
    prompt_base: "Resume y organiza este contenido en una estructura conceptual clara y jerárquica. Identifica conceptos principales, subtemas y relaciones clave.",
    pasos: ["Recolectar el contenido o fuentes clave", "Sintetizar información", "Organizar la jerarquía conceptual", "Visualizar y estudiar"],
    donde_entra_ia: [
      { paso: "Sintetizar información", herramienta: "Claude o ChatGPT", descripcion: "Reducen ruido e identifican conceptos esenciales" },
      { paso: "Organizar la jerarquía conceptual", herramienta: "IA", descripcion: "Estructura temas, subtemas y relaciones" },
      { paso: "Visualizar y estudiar", herramienta: "NotebookLM", descripcion: "Ayuda a convertir la síntesis en recurso de repaso o esquema visual" },
    ],
    evidencia: "Mapa conceptual, esquema jerárquico o síntesis estructurada lista para repaso, explicación o estudio.",
    next_level: "Visualización interactiva",
    next_level_tips: [
      "Transformar la síntesis en infografía, tabla comparativa o guía de repaso",
      "Crear una versión breve para exposición y otra profunda para estudio",
      "Generar preguntas de autoevaluación a partir del mapa",
      "Conectar la síntesis con una ruta de estudio de 7 días",
    ],
  },
  "EST-022": {
    id: "EST-022",
    problema_resuelve: "Aprendizaje que no aterriza en aplicación real o transferencia profesional.",
    cuando_usarla: "Cierre de tema, consolidación de módulo o transición de teoría a contexto laboral.",
    herramientas_ia: ["ChatGPT", "Gemini", "Claude"],
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Aplicación contextual",
        aplicacion_educativa: "Ayuda a convertir teoría en una situación o problema profesional concreto.",
        nivel: "Inicial",
        enfoque: "Transformación",
        tip: "Pídele ejemplos realistas y delimitados, no respuestas genéricas.",
      },
      Gemini: {
        funcionalidad: "Redacción ejecutiva",
        aplicacion_educativa: "Mejora la forma del mini-brief para que suene más profesional y clara.",
        nivel: "Inicial-intermedio",
        enfoque: "Transformación",
        tip: "Úsalo para sintetizar mejor la propuesta final.",
      },
      Claude: {
        funcionalidad: "Refinamiento de lógica",
        aplicacion_educativa: "Ayuda a fortalecer la relación entre problema, solución e indicador.",
        nivel: "Intermedio",
        enfoque: "Transformación",
        tip: "Muy útil cuando quieres una propuesta más sólida y menos superficial.",
      },
    },
    prompt_base: "Crea un mini-brief profesional donde este conocimiento se aplique a un problema real. Incluye contexto, problema, propuesta de solución, indicador y siguiente paso.",
    pasos: ["Identificar el contexto profesional donde aplicará el aprendizaje", "Definir el problema o necesidad concreta", "Aplicar el conocimiento", "Redactar propuesta"],
    donde_entra_ia: [
      { paso: "Aplicar el conocimiento", herramienta: "ChatGPT", descripcion: "Ayuda a traducir la teoría a una solución contextualizada" },
      { paso: "Redactar propuesta", herramienta: "Gemini o Claude", descripcion: "Fortalecen claridad, estructura y valor del mini-brief" },
    ],
    evidencia: "Mini-brief profesional listo para discusión, entrega o aplicación en contexto real.",
    next_level: "Validación con stakeholders simulados",
    next_level_tips: [
      "Crear 2 o 3 versiones del brief para distintos sectores o escenarios",
      "Simular retroalimentación de un stakeholder difícil",
      "Añadir indicadores de seguimiento y criterios de éxito",
      "Escalar el mini-brief a propuesta ejecutiva o caso de implementación",
    ],
  },
  "EST-023": {
    id: "EST-023",
    problema_resuelve: "Evaluación estática, poco personalizada y con retroalimentación limitada.",
    cuando_usarla: "Evaluación formativa, práctica guiada o seguimiento de comprensión en tiempo real.",
    herramientas_ia: ["ChatGPT", "Claude", "Gemini"],
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Generación de reactivos",
        aplicacion_educativa: "Produce preguntas base alineadas al objetivo y al nivel esperado.",
        nivel: "Inicial",
        enfoque: "Enseñanza",
        tip: "Úsalo para generar una primera batería de preguntas.",
      },
      Claude: {
        funcionalidad: "Ajuste adaptativo",
        aplicacion_educativa: "Ayuda a variar dificultad y tipo de pregunta según desempeño.",
        nivel: "Intermedio",
        enfoque: "Enseñanza",
        tip: "Funciona bien para refinar lógica adaptativa y secuencia.",
      },
      Gemini: {
        funcionalidad: "Retroalimentación formativa",
        aplicacion_educativa: "Genera feedback breve, útil y orientado al siguiente paso.",
        nivel: "Inicial-intermedio",
        enfoque: "Enseñanza",
        tip: "Pídele retroalimentación tipo pista, no solo corrección.",
      },
    },
    prompt_base: "Genera preguntas adaptativas sobre [tema] y ofrece retroalimentación inmediata según el tipo de respuesta del estudiante. Incluye una progresión de dificultad.",
    pasos: ["Definir el objetivo y tipo de comprensión a evaluar", "Generar preguntas base", "Adaptar dificultad", "Retroalimentar"],
    donde_entra_ia: [
      { paso: "Generar preguntas base", herramienta: "ChatGPT", descripcion: "Produce reactivos alineados al objetivo" },
      { paso: "Adaptar dificultad", herramienta: "Claude", descripcion: "Ajusta complejidad según nivel de respuesta esperado" },
      { paso: "Retroalimentar", herramienta: "Gemini", descripcion: "Genera feedback útil, breve y orientado al siguiente paso" },
    ],
    evidencia: "Evaluación formativa con preguntas adaptativas y retroalimentación accionable.",
    next_level: "Dashboard de desempeño",
    next_level_tips: [
      "Diseñar rutas de evaluación según aciertos, errores o vacíos conceptuales",
      "Crear versiones corta, media y avanzada del mismo instrumento",
      "Generar retroalimentación diferenciada por criterio",
      "Conectar resultados con un dashboard o mapa de progreso",
    ],
  },
  "EST-024": {
    id: "EST-024",
    problema_resuelve: "Evaluaciones sin criterios claros o desalineadas con objetivos.",
    cuando_usarla: "Diseño de evaluación, rúbrica o criterios de desempeño.",
    herramientas_ia: ["ChatGPT", "Claude"],
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Generación de criterios",
        aplicacion_educativa: "Crea criterios alineados a objetivos y niveles de logro.",
        nivel: "Inicial",
        enfoque: "Enseñanza",
        tip: "Pídele claridad y niveles progresivos.",
      },
      Claude: {
        funcionalidad: "Refinamiento evaluativo",
        aplicacion_educativa: "Mejora coherencia entre criterio, evidencia y nivel.",
        nivel: "Intermedio",
        enfoque: "Enseñanza",
        tip: "Úsalo para validar consistencia.",
      },
    },
    prompt_base: "Crea una rúbrica alineada a estos objetivos con niveles progresivos y criterios claros.",
    pasos: ["Definir objetivos", "Identificar evidencias", "Generar criterios", "Refinar coherencia"],
    donde_entra_ia: [
      { paso: "Generar criterios", herramienta: "ChatGPT", descripcion: "Propone niveles y descriptores alineados" },
      { paso: "Refinar coherencia", herramienta: "Claude", descripcion: "Valida alineación entre criterios y evidencia" },
    ],
    evidencia: "Rúbrica clara, alineada y lista para uso.",
    next_level: "Convertir rúbrica en checklist automatizable",
    next_level_tips: [
      "Convertir rúbrica en checklist automatizable",
      "Generar versión para autoevaluación del estudiante",
      "Integrar retroalimentación automática por criterio",
      "Adaptar rúbrica a diferentes niveles de complejidad",
    ],
  },
  "EST-025": {
    id: "EST-025",
    problema_resuelve: "Falta de conexión entre teoría y decisiones reales.",
    cuando_usarla: "Inicio de sesión, discusión o actividad detonadora.",
    herramientas_ia: ["ChatGPT", "Claude"],
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Creación de casos",
        aplicacion_educativa: "Diseña escenarios realistas con dilemas.",
        nivel: "Inicial",
        enfoque: "Innovación",
        tip: "Pide situaciones con tensión o conflicto.",
      },
      Claude: {
        funcionalidad: "Profundización narrativa",
        aplicacion_educativa: "Añade matices, contexto y variables.",
        nivel: "Intermedio",
        enfoque: "Innovación",
        tip: "Ideal para complejidad narrativa.",
      },
    },
    prompt_base: "Crea un caso profesional con un dilema que obligue a tomar una decisión.",
    pasos: ["Definir tema", "Diseñar contexto", "Agregar dilema", "Plantear preguntas de decisión"],
    donde_entra_ia: [
      { paso: "Diseñar contexto", herramienta: "ChatGPT", descripcion: "Genera escenario realista" },
      { paso: "Agregar dilema", herramienta: "Claude", descripcion: "Añade tensión y variables contextuales" },
    ],
    evidencia: "Caso con dilema listo para discusión.",
    next_level: "Crear múltiples desenlaces posibles",
    next_level_tips: [
      "Crear múltiples desenlaces posibles",
      "Simular decisiones con IA",
      "Diseñar rúbrica de análisis del caso",
      "Convertir el caso en simulación interactiva",
    ],
  },
  "EST-026": {
    id: "EST-026",
    problema_resuelve: "Estudiantes sin estructura para aprender de forma autónoma.",
    cuando_usarla: "Estudio independiente o aprendizaje fuera de clase.",
    herramientas_ia: ["ChatGPT", "NotebookLM"],
    herramientas_detalle: {
      ChatGPT: {
        funcionalidad: "Plan de estudio",
        aplicacion_educativa: "Organiza pasos de aprendizaje.",
        nivel: "Inicial",
        enfoque: "Aprendizaje",
        tip: "Pídele secuencia clara.",
      },
      NotebookLM: {
        funcionalidad: "Apoyo de contenido",
        aplicacion_educativa: "Refuerza comprensión con materiales.",
        nivel: "Intermedio",
        enfoque: "Aprendizaje",
        tip: "Ideal para consolidar.",
      },
    },
    prompt_base: "Crea una ruta de aprendizaje paso a paso para dominar este tema.",
    pasos: ["Definir meta", "Organizar ruta", "Integrar recursos", "Establecer checkpoints"],
    donde_entra_ia: [
      { paso: "Organizar ruta", herramienta: "ChatGPT", descripcion: "Estructura pasos de aprendizaje" },
      { paso: "Integrar recursos", herramienta: "NotebookLM", descripcion: "Apoya comprensión con materiales de estudio" },
    ],
    evidencia: "Ruta de aprendizaje estructurada.",
    next_level: "Adaptar ruta por nivel de dominio",
    next_level_tips: [
      "Adaptar ruta por nivel de dominio",
      "Agregar autoevaluaciones por etapa",
      "Convertir ruta en plan semanal",
      "Integrar seguimiento de progreso",
    ],
  },
  "EST-027": {
    id: "EST-027",
    problema_resuelve: "Uso superficial de información sin análisis crítico.",
    cuando_usarla: "Investigación o análisis de fuentes.",
    herramientas_ia: ["Perplexity", "Claude"],
    herramientas_detalle: {
      Perplexity: {
        funcionalidad: "Búsqueda con fuentes",
        aplicacion_educativa: "Recopila información con referencias.",
        nivel: "Inicial",
        enfoque: "Aprendizaje",
        tip: "Úsalo para diversidad de fuentes.",
      },
      Claude: {
        funcionalidad: "Comparación crítica",
        aplicacion_educativa: "Contrasta y evalúa información.",
        nivel: "Intermedio",
        enfoque: "Aprendizaje",
        tip: "Ideal para análisis profundo.",
      },
    },
    prompt_base: "Compara estas fuentes y detecta diferencias, sesgos y coincidencias.",
    pasos: ["Recolectar fuentes", "Comparar información", "Detectar sesgos", "Sintetizar conclusiones"],
    donde_entra_ia: [
      { paso: "Recolectar fuentes", herramienta: "Perplexity", descripcion: "Genera opciones con referencias" },
      { paso: "Comparar información", herramienta: "Claude", descripcion: "Analiza diferencias y sesgos" },
    ],
    evidencia: "Síntesis crítica de fuentes.",
    next_level: "Clasificar fuentes por confiabilidad",
    next_level_tips: [
      "Clasificar fuentes por confiabilidad",
      "Generar postura argumentada",
      "Convertir análisis en ensayo",
      "Integrar debate con base en evidencia",
    ],
  },
  "EST-028": {
    id: "EST-028",
    problema_resuelve: "Dificultad para explicar conceptos de forma clara y atractiva.",
    cuando_usarla: "Creación de recursos o explicación de contenido.",
    herramientas_ia: ["Gamma", "ChatGPT"],
    herramientas_detalle: {
      Gamma: {
        funcionalidad: "Presentaciones rápidas",
        aplicacion_educativa: "Genera recursos visuales.",
        nivel: "Inicial",
        enfoque: "Transformación",
        tip: "Ideal para prototipos rápidos.",
      },
      ChatGPT: {
        funcionalidad: "Estructura de contenido",
        aplicacion_educativa: "Define narrativa y orden.",
        nivel: "Inicial",
        enfoque: "Transformación",
        tip: "Úsalo para claridad.",
      },
    },
    prompt_base: "Crea un recurso explicativo claro sobre este tema.",
    pasos: ["Definir mensaje", "Estructurar contenido", "Prototipar recurso", "Refinar narrativa"],
    donde_entra_ia: [
      { paso: "Estructurar contenido", herramienta: "ChatGPT", descripcion: "Organiza ideas y narrativa" },
      { paso: "Prototipar recurso", herramienta: "Gamma", descripcion: "Genera presentación visual" },
    ],
    evidencia: "Recurso explicativo listo.",
    next_level: "Convertir en video o microlearning",
    next_level_tips: [
      "Convertir en video o microlearning",
      "Adaptar a distintos públicos",
      "Agregar interacción",
      "Integrar evaluación rápida",
    ],
  },
};
