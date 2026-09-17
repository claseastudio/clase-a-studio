import type { Metadata } from "next";
import { CartView } from "@/components/CartView";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Tu carrito CLASE A STUDIO. Guardado localmente en tu navegador.",
};

export default function CarritoPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Carrito"
        title="Revisa tu selección"
        description="El carrito se guarda en localStorage de este navegador. No se sincroniza entre dispositivos."
      />
      <CartView />
    </Section>
  );
}
