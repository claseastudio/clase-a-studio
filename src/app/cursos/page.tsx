import type { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { Section, SectionHeading } from "@/components/Section";
import { courses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Catálogo de cursos CLASE A STUDIO: formación con excelencia, método y estándares altos. Precios de ejemplo en COP.",
};

export default function CursosPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Catálogo"
        title="Cursos Clase A"
        description="Programas diseñados para instalar método y elevar tu estándar. Contenido de ejemplo — sustituye antes de vender."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </Section>
  );
}
