import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl text-[var(--cream)] sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-[var(--muted)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
