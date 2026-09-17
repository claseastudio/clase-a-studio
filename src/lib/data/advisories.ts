import type { AdvisoryTier } from "./types";

export const advisories: AdvisoryTier[] = [
  {
    slug: "diagnostico-express",
    name: "Diagnóstico Express",
    tagline: "Claridad en una sesión",
    description:
      "Una sesión enfocada para mapear tu situación actual, identificar cuellos de botella y definir 3 acciones prioritarias con criterio Clase A.",
    price: 180000,
    duration: "60 minutos · virtual",
    featured: false,
    ejemplo: true,
    idealFor: "Quienes necesitan un reset rápido y un plan concreto.",
    ctaLabel: "Agendar diagnóstico",
    includes: [
      "Sesión 1:1 de 60 min",
      "Notas y plan de 3 acciones",
      "Seguimiento por WhatsApp (7 días, ejemplo)",
    ],
  },
  {
    slug: "acompanamiento-mensual",
    name: "Acompañamiento Mensual",
    tagline: "Método + accountability",
    description:
      "Trabajo continuo para instalar estándares, revisar avances y ajustar el sistema. Ideal si quieres consistencia y alguien que te exija excelencia.",
    price: 650000,
    duration: "4 sesiones / mes · virtual",
    featured: true,
    ejemplo: true,
    idealFor: "Profesionales y líderes que están escalando con método.",
    ctaLabel: "Solicitar cupo",
    includes: [
      "4 sesiones de 45–60 min",
      "Revisión de entregables",
      "Canal prioritario (ejemplo)",
      "Plantillas y checklists del mes",
    ],
  },
  {
    slug: "intensivo-estrategico",
    name: "Intensivo Estratégico",
    tagline: "Inmersión de alto impacto",
    description:
      "Bloque intensivo para rediseñar oferta, procesos y experiencia. Salimos con un playbook accionable y un roadmap de 90 días.",
    price: 1200000,
    duration: "Medio día · virtual o presencial (ejemplo)",
    featured: false,
    ejemplo: true,
    idealFor: "Negocios listos para un salto de estándar y posicionamiento.",
    ctaLabel: "Reservar intensivo",
    includes: [
      "Sesión intensiva 3–4 horas",
      "Playbook estratégico (borrador)",
      "Roadmap 90 días",
      "1 sesión de seguimiento (15 días)",
    ],
  },
];

export function getAdvisoryBySlug(slug: string): AdvisoryTier | undefined {
  return advisories.find((a) => a.slug === slug);
}
