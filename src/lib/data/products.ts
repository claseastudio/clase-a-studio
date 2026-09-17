import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "kit-estandares-clase-a",
    name: "Kit Estándares Clase A",
    shortDescription: "Plantillas y checklists para operar con excelencia.",
    description:
      "Paquete digital con plantillas listas para adaptar: checklists de calidad, SOPs base, rúbricas de evaluación y un tablero simple de seguimiento. Diseñado para quienes quieren método sin fricción.",
    price: 89000,
    category: "Digital",
    featured: true,
    accent: "#1d1d1f",
    ejemplo: true,
    features: [
      "12 plantillas editables (Notion / PDF, ejemplo)",
      "Checklist de apertura y cierre",
      "Rúbrica de calidad Clase A",
      "Guía de implementación en 7 días",
    ],
    specs: [
      { label: "Formato", value: "Digital · descarga inmediata" },
      { label: "Idioma", value: "Español (es-CO)" },
      { label: "Actualizaciones", value: "6 meses (ejemplo)" },
    ],
  },
  {
    slug: "playbook-oferta-premium",
    name: "Playbook Oferta Premium",
    shortDescription: "Diseña y empaqueta una oferta de alto valor.",
    description:
      "Guía práctica para construir una oferta premium: promesa, deliverables, exclusiones, pricing y narrativa. Incluye worksheets para validar tu propuesta antes de salir al mercado.",
    price: 119000,
    category: "Digital",
    featured: true,
    accent: "#6e6e73",
    ejemplo: true,
    features: [
      "Framework de oferta en 5 pasos",
      "Worksheets imprimibles",
      "Ejemplos de copy (adaptables)",
      "Matriz de pricing (ejemplo)",
    ],
    specs: [
      { label: "Formato", value: "PDF + worksheets" },
      { label: "Páginas", value: "~40 (ejemplo)" },
      { label: "Nivel", value: "Intermedio" },
    ],
  },
  {
    slug: "cuaderno-metodo",
    name: "Cuaderno del Método",
    shortDescription: "Bitácora física/digital para disciplina diaria.",
    description:
      "Herramienta de acompañamiento para registrar foco, estándares cumplidos y lecciones del día. Versión digital lista para imprimir; la física es placeholder de producto futuro.",
    price: 45000,
    category: "Herramienta",
    featured: false,
    accent: "#424245",
    ejemplo: true,
    features: [
      "Plantilla semanal de foco",
      "Registro de estándares",
      "Retrospectiva de viernes",
      "Versión imprimible A5",
    ],
    specs: [
      { label: "Formato", value: "PDF imprimible (ejemplo)" },
      { label: "Tamaño", value: "A5" },
      { label: "Páginas", value: "52 semanas" },
    ],
  },
  {
    slug: "paquete-branding-studio",
    name: "Paquete Branding Studio",
    shortDescription: "Kit visual de marca para presentar tu trabajo premium.",
    description:
      "Set de assets de marca (ejemplo) para presentaciones, redes y propuestas: paleta, tipografías sugeridas, plantillas de portada y mockups simples. Pensado para coherencia visual Clase A.",
    price: 159000,
    category: "Brand kit",
    featured: true,
    accent: "#86868b",
    ejemplo: true,
    features: [
      "Guía de estilo resumida",
      "Paleta + tipografías",
      "5 plantillas de portada",
      "Mockups básicos (SVG/PNG, ejemplo)",
    ],
    specs: [
      { label: "Formato", value: "ZIP digital" },
      { label: "Incluye", value: "PDF + SVG + PNG" },
      { label: "Licencia", value: "Uso personal / estudio (ejemplo)" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
