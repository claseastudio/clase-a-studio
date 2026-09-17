export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const SITE_NAME = "CLASE A STUDIO";
export const SITE_TAGLINE =
  "Excelencia, método y estándares altos para profesionales que no se conforman.";
export const SITE_DESCRIPTION =
  "CLASE A STUDIO: cursos, asesorías y productos premium para elevar tu estándar. Educación y herramientas con método — separado de la barbería Glen Siendo Glen.";
export const WHATSAPP_PLACEHOLDER = "https://wa.me/57XXXXXXXXXX";
export const CALENDLY_PLACEHOLDER = "https://calendly.com/tu-usuario/clase-a";
export const SOCIAL = {
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/",
};
