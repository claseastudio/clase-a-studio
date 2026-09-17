import type { Metadata } from "next";
import { CheckoutView } from "@/components/CheckoutView";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout CLASE A STUDIO. Mercado Pago pendiente de integración.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Checkout"
        title="Confirma y paga"
        description="Resumen del pedido. El botón de Mercado Pago está deshabilitado hasta conectar credenciales reales."
      />
      <CheckoutView />
    </Section>
  );
}
