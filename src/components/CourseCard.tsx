import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/data/types";
import { formatCOP } from "@/lib/format";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/cursos/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition hover:border-[var(--gold)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated)]">
        <Image
          src="/brand/card-course.svg"
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-[var(--gold)]">
          <span className="uppercase tracking-[0.15em]">{course.level}</span>
          {course.ejemplo && (
            <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--muted-2)]">
              Ejemplo
            </span>
          )}
        </div>
        <h3 className="mt-2 font-display text-xl text-[var(--cream)] group-hover:text-[var(--gold-soft)]">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-[var(--muted)]">
          {course.subtitle}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <p className="text-lg font-semibold text-[var(--cream)]">
            {formatCOP(course.price)}
          </p>
          <span className="text-xs text-[var(--muted-2)]">{course.duration}</span>
        </div>
      </div>
    </Link>
  );
}
