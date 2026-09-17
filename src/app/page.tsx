import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { CourseCard } from "@/components/CourseCard";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { getFeaturedCourses } from "@/lib/data/courses";
import { getFeaturedProducts } from "@/lib/data/products";

const VALUE_PROPS = [
  {
    title: "Excelencia",
    body: "Cada entrega se mide con criterios claros. No es motivación: es estándar.",
  },
  {
    title: "Método",
    body: "Procesos repetibles, checklists y sistemas que sostienen la calidad bajo presión.",
  },
  {
    title: "Estándares altos",
    body: "Formación, asesoría y herramientas alineadas a un nivel premium, sin atajos.",
  },
];

const PROOF = [
  { quote: "Subí el estándar del equipo en semanas.", name: "Cliente (ejemplo)", role: "Líder de estudio" },
  { quote: "El método se nota en cada entrega.", name: "Alumna (ejemplo)", role: "Freelance" },
  { quote: "Claridad, estructura y nivel.", name: "Mentorados (ejemplo)", role: "Emprendedor" },
];

export default function HomePage() {
  const courses = getFeaturedCourses();
  const products = getFeaturedProducts().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[var(--gold)] opacity-[0.07] blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-[var(--cream)] opacity-[0.04] blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
              Studio · Educación · Productos
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight text-[var(--cream)] sm:text-5xl lg:text-[3.4rem]">
              Eleva tu estándar. Opera en{" "}
              <span className="text-[var(--gold-soft)]">Clase A</span>.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Cursos, asesorías y herramientas para profesionales que eligen
              excelencia con método. Marca premium independiente de Glen Siendo Glen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/cursos">Ver cursos</ButtonLink>
              <ButtonLink href="/asesorias" variant="secondary">
                Agendar asesoría
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-[var(--muted-2)]">
              Precios de ejemplo en COP · Contenido demostrativo
            </p>
          </div>
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-[var(--border)] bg-black shadow-2xl shadow-black/40">
            <Image
              src="/brand/logo-clase-a-studio.jpg"
              alt="CLASE A STUDIO"
              width={720}
              height={720}
              priority
              className="h-full w-full object-contain p-6 sm:p-10"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Por qué Clase A"
          title="Tres pilares. Cero improvisación."
          description="Diseñamos formación y herramientas para que tu calidad no dependa del día ni del humor."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {VALUE_PROPS.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6"
            >
              <div className="mb-4 h-1 w-10 bg-[var(--gold)]" />
              <h3 className="font-display text-xl text-[var(--cream)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Cursos destacados"
            title="Formación con método"
            description="Programas de ejemplo listos para adaptar a tu catálogo real."
          />
          <ButtonLink href="/cursos" variant="ghost">
            Ver catálogo
          </ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Tienda"
            title="Herramientas para sostener el estándar"
            description="Playbooks, kits y recursos digitales (ejemplos)."
          />
          <ButtonLink href="/tienda" variant="ghost">
            Ir a la tienda
          </ButtonLink>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--bg-elevated)]">
        <SectionHeading
          eyebrow="Prueba social"
          title="Voces que representan el estándar"
          description="Placeholders de testimonio. Sustituye con reseñas reales antes de publicar."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PROOF.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6"
            >
              <p className="text-[var(--cream-soft)] leading-relaxed">“{t.quote}”</p>
              <footer className="mt-5 text-sm">
                <p className="font-semibold text-[var(--gold)]">{t.name}</p>
                <p className="text-[var(--muted-2)]">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-[var(--gold)]/30 bg-[linear-gradient(135deg,var(--bg-card),var(--bg-elevated))] px-8 py-14 text-center sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Siguiente paso
          </p>
          <h2 className="mt-4 font-display text-3xl text-[var(--cream)] sm:text-4xl">
            ¿Listo para operar en Clase A?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Empieza con un curso, agenda una asesoría o escribe y te orientamos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/cursos">Explorar cursos</ButtonLink>
            <ButtonLink href="/contacto" variant="secondary">
              Hablar con el studio
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
