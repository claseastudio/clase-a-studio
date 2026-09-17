import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section, SectionHeading } from "@/components/Section";
import { WHATSAPP_PLACEHOLDER } from "@/lib/format";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a CLASE A STUDIO. Consultas sobre cursos, asesorías y productos. Colombia.",
};

export default function ContactoPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos con claridad"
            description="Cuéntanos qué necesitas: curso, asesoría o producto. Respondemos con criterio y sin humo."
          />
          <ul className="space-y-4 text-sm text-[var(--muted)]">
            <li>
              <span className="block text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                Ubicación
              </span>
              Colombia · atención virtual (ejemplo)
            </li>
            <li>
              <span className="block text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                WhatsApp
              </span>
              <a
                href={WHATSAPP_PLACEHOLDER}
                className="hover:text-[var(--cream)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Placeholder — configura el número real
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                Nota
              </span>
              Este formulario es un stub de demostración (sin backend).
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
