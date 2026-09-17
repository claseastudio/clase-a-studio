import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { courses, getCourseBySlug } from "@/lib/data/courses";
import { formatCOP } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Curso no encontrado" };
  return {
    title: course.title,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              {course.level}
              {course.ejemplo ? " · Ejemplo" : ""}
            </p>
            <h1 className="mt-3 font-display text-3xl text-[var(--cream)] sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">{course.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              {course.description}
            </p>
            <div className="mt-6 flex flex-wrap items-end gap-6">
              <div>
                <p className="text-xs text-[var(--muted-2)]">Precio (COP)</p>
                <p className="font-display text-3xl text-[var(--gold-soft)]">
                  {formatCOP(course.price)}
                </p>
              </div>
              <p className="text-sm text-[var(--muted)]">{course.duration}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <AddToCartButton
                item={{
                  id: `course:${course.slug}`,
                  type: "course",
                  slug: course.slug,
                  name: course.title,
                  price: course.price,
                }}
                label="Agregar curso al carrito"
              />
              <ButtonLink href="/contacto" variant="secondary">
                Preguntar primero
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)]">
            <Image
              src="/brand/card-course.svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <Section>
        <h2 className="font-display text-2xl text-[var(--cream)]">Qué vas a lograr</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {course.outcomes.map((o) => (
            <li
              key={o}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--muted)]"
            >
              <span className="mr-2 text-[var(--gold)]">✓</span>
              {o}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--bg-elevated)]">
        <h2 className="font-display text-2xl text-[var(--cream)]">Temario</h2>
        <div className="mt-8 space-y-6">
          {course.syllabus.map((mod) => (
            <div key={mod.title} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <h3 className="font-semibold text-[var(--gold)]">{mod.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {mod.lessons.map((l) => (
                  <li key={l}>· {l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-[var(--cream)]">Qué incluye</h2>
            <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
              {course.includes.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--gold)]">→</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--cream)]">Preguntas frecuentes</h2>
            <div className="mt-5 space-y-4">
              {course.faq.map((f) => (
                <details
                  key={f.q}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4"
                >
                  <summary className="cursor-pointer font-medium text-[var(--cream)]">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-[var(--gold)]/30 bg-[var(--bg-card)] p-8 text-center">
          <p className="font-display text-xl text-[var(--cream)]">Listo para subir el estándar</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <AddToCartButton
              item={{
                id: `course:${course.slug}`,
                type: "course",
                slug: course.slug,
                name: course.title,
                price: course.price,
              }}
              label={`Comprar · ${formatCOP(course.price)}`}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
