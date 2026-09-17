import type { Course } from "./types";

export const courses: Course[] = [
  {
    slug: "fundamentos-clase-a",
    title: "Fundamentos Clase A",
    subtitle: "El método que eleva tu estándar desde el día uno",
    description:
      "Un programa estructurado para dominar los pilares de la excelencia operativa: diagnóstico, método, ejecución y control de calidad. Ideal si quieres dejar de improvisar y empezar a operar con estándares altos.",
    price: 249000,
    duration: "6 semanas · acceso 12 meses",
    level: "Principiante a intermedio",
    featured: true,
    accent: "#1d1d1f",
    ejemplo: true,
    outcomes: [
      "Definir tu estándar de excelencia en cada entrega",
      "Aplicar un método repetible de diagnóstico a cierre",
      "Medir calidad con criterios objetivos",
      "Comunicar valor con claridad y autoridad",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Mentalidad y estándares",
        lessons: [
          "Qué significa operar en Clase A",
          "Diagnóstico honesto de tu nivel actual",
          "Rituales diarios de excelencia",
        ],
      },
      {
        title: "Módulo 2 — Método y proceso",
        lessons: [
          "Mapa del flujo de trabajo",
          "Checklists que no fallan",
          "Control de calidad en cada etapa",
        ],
      },
      {
        title: "Módulo 3 — Ejecución bajo presión",
        lessons: [
          "Priorización sin perder el estándar",
          "Feedback estructurado",
          "Casos prácticos (ejemplo)",
        ],
      },
    ],
    includes: [
      "6 módulos en video (HD)",
      "Plantillas descargables",
      "Comunidad privada (ejemplo)",
      "Certificado de finalización",
      "Actualizaciones del curso por 12 meses",
    ],
    faq: [
      {
        q: "¿Necesito experiencia previa?",
        a: "No. Partimos de fundamentos sólidos y subimos el nivel con método. Si ya tienes experiencia, acelerarás el salto de calidad.",
      },
      {
        q: "¿Cuánto tiempo semanal necesito?",
        a: "Recomendamos 3–5 horas semanales. El acceso dura 12 meses para que avances a tu ritmo.",
      },
      {
        q: "¿Es un ejemplo o el producto final?",
        a: "Este curso es contenido de demostración (ejemplo) para el sitio. Sustituye precios, módulos y assets antes de vender.",
      },
    ],
  },
  {
    slug: "metodo-premium-avanzado",
    title: "Método Premium Avanzado",
    subtitle: "Sistemas, posicionamiento y entrega de alto ticket",
    description:
      "Para profesionales que ya tienen bases y quieren consolidar un sistema premium: oferta, proceso, experiencia del cliente y márgenes sostenibles sin bajar el estándar.",
    price: 489000,
    duration: "8 semanas · acceso 12 meses",
    level: "Intermedio a avanzado",
    featured: true,
    accent: "#6e6e73",
    ejemplo: true,
    outcomes: [
      "Diseñar una oferta premium clara y defendible",
      "Estandarizar la experiencia de punta a punta",
      "Subir ticket sin perder volumen de calidad",
      "Construir un playbook operable por tu equipo",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Oferta y posicionamiento",
        lessons: [
          "Arquitectura de una oferta Clase A",
          "Narrativa de valor sin exagerar",
          "Empaque y percepción",
        ],
      },
      {
        title: "Módulo 2 — Sistemas operativos",
        lessons: [
          "SOPs que se cumplen",
          "Indicadores que importan",
          "Delegación sin perder calidad",
        ],
      },
      {
        title: "Módulo 3 — Experiencia y retención",
        lessons: [
          "Journey del cliente premium",
          "Post-venta que genera referidos",
          "Casos y plantillas (ejemplo)",
        ],
      },
    ],
    includes: [
      "8 módulos en video",
      "Playbook editable",
      "Sesión grupal Q&A (ejemplo)",
      "Plantillas de pricing y SOPs",
      "Acceso 12 meses + actualizaciones",
    ],
    faq: [
      {
        q: "¿Es solo teoría?",
        a: "No. Cada módulo cierra con ejercicios aplicables y plantillas listas para adaptar a tu contexto.",
      },
      {
        q: "¿Incluye asesoría 1:1?",
        a: "Este curso no incluye 1:1. Si necesitas acompañamiento personalizado, mira Asesorías.",
      },
    ],
  },
  {
    slug: "masterclass-estandares",
    title: "Masterclass: Estándares Altos",
    subtitle: "Una sesión intensiva para alinear equipo y criterio",
    description:
      "Masterclass enfocada en alinear criterios de calidad, lenguaje común y expectativas. Perfecta para líderes de equipo o freelancers que quieren un reset de estándares en una sola jornada.",
    price: 129000,
    duration: "1 jornada · grabación incluida",
    level: "Todos los niveles",
    featured: false,
    accent: "#424245",
    ejemplo: true,
    outcomes: [
      "Definir criterios de calidad compartidos",
      "Instalar un lenguaje común de excelencia",
      "Identificar gaps de estándar en 90 minutos",
      "Salir con un plan de acción de 7 días",
    ],
    syllabus: [
      {
        title: "Bloque 1 — Criterio",
        lessons: [
          "Qué es (y no es) un estándar alto",
          "Ejercicio de calibración",
        ],
      },
      {
        title: "Bloque 2 — Acción",
        lessons: [
          "Checklist de excelencia del equipo",
          "Plan de 7 días",
        ],
      },
    ],
    includes: [
      "Sesión en vivo o grabada (ejemplo)",
      "Workbook PDF",
      "Checklist de estándares",
      "Acceso a la grabación 90 días",
    ],
    faq: [
      {
        q: "¿Puedo verla en diferido?",
        a: "Sí. Incluye acceso a la grabación por 90 días (ejemplo).",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}
