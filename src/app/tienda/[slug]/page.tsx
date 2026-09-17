import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { getProductBySlug, products } from "@/lib/data/products";
import { formatCOP } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)] order-2 lg:order-1">
            <Image
              src="/brand/card-product.svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              {product.category}
              {product.ejemplo ? " · Ejemplo" : ""}
            </p>
            <h1 className="mt-3 font-display text-3xl text-[var(--cream)] sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">{product.description}</p>
            <p className="mt-6 font-display text-3xl text-[var(--gold-soft)]">
              {formatCOP(product.price)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AddToCartButton
                item={{
                  id: `product:${product.slug}`,
                  type: "product",
                  slug: product.slug,
                  name: product.name,
                  price: product.price,
                }}
              />
              <ButtonLink href="/carrito" variant="secondary">
                Ver carrito
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-[var(--cream)]">Incluye</h2>
            <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
              {product.features.map((f) => (
                <li key={f}>
                  <span className="text-[var(--gold)]">✓ </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--cream)]">Detalles</h2>
            <dl className="mt-5 space-y-3">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm"
                >
                  <dt className="text-[var(--muted-2)]">{s.label}</dt>
                  <dd className="text-right text-[var(--cream)]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}
