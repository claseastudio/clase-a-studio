import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { advisories } from "@/lib/data/advisories";
import { CALENDLY_PLACEHOLDER, formatCOP, WHATSAPP_PLACEHOLDER } from "@/lib/format";

export const metadata: Metadata = {
  title: "Asesorías",
  description:
    "Asesorías 1:1 CLASE A STUDIO: diagnóstico, acompañamiento mensual e intensivo estratégico. Precios de ejemplo en COP.",
};

export default function AsesoriasPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Asesorías"
            title="Acompañamiento con criterio Clase A"
            description="Sesiones 1:1 para instalar método, elevar estándares y tomar decisiones con claridad. Niveles de ejemplo — ajusta precios y cupos antes de publicar."
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)]">
            <Image
              src="/brand/card-advisory.svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--bg-elevated)] !pt-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {advisories.map((tier) => (
            <article
              key={tier.slug}
              className={`flex flex-col rounded-2xl border p-6 ${
                tier.featured
                  ? "border-[var(--cream)] bg-[var(--bg-card)] shadow-sm"
                  : "border-[var(--border)] bg-[var(--bg-card)] shadow-sm"
              }`}
            >
              {tier.featured && (
                <span className="mb-3 w-fit rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--bg)]">
                  Recomendado
                </span>
              )}
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                {tier.tagline}
                {tier.ejemplo ? " · Ejemplo" : ""}
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--cream)]">{tier.name}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {tier.description}
              </p>
              <p className="mt-5 font-display text-2xl text-[var(--gold-soft)]">
                {formatCOP(tier.price)}
              </p>
              <p className="mt-1 text-xs text-[var(--muted-2)]">{tier.duration}</p>
              <p className="mt-4 text-sm text-[var(--cream-soft)]">
                <span className="text-[var(--muted-2)]">Ideal para: </span>
                {tier.idealFor}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                {tier.includes.map((i) => (
                  <li key={i}>
                    <span className="text-[var(--gold)]">✓ </span>
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={CALENDLY_PLACEHOLDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition hover:bg-[var(--cream-soft)]"
                >
                  {tier.ctaLabel} (Calendly)
                </a>
                <a
                  href={WHATSAPP_PLACEHOLDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--cream)] transition hover:bg-[var(--bg-elevated)]"
                >
                  WhatsApp (placeholder)
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-[var(--muted-2)]">
          Sustituye los enlaces de Calendly y WhatsApp en{" "}
          <code className="text-[var(--gold)]">src/lib/format.ts</code>.
        </p>
        <div className="mt-6 text-center">
          <ButtonLink href="/contacto" variant="ghost">
            Preferimos escribir primero → Contacto
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
