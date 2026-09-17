import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">404</p>
      <h1 className="mt-3 font-display text-3xl text-[var(--cream)]">Página no encontrada</h1>
      <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
        El enlace no existe o fue movido. Vuelve al inicio o explora el catálogo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Inicio</ButtonLink>
        <ButtonLink href="/cursos" variant="secondary">
          Cursos
        </ButtonLink>
      </div>
    </Section>
  );
}
