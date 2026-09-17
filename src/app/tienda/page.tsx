import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Tienda CLASE A STUDIO: kits, playbooks y herramientas digitales. Precios de ejemplo en COP.",
};

export default function TiendaPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Tienda"
        title="Productos para sostener el método"
        description="Recursos digitales de ejemplo. Reemplaza precios, assets y descripciones con tu catálogo real."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </Section>
  );
}
