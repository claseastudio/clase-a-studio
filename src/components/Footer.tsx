import Link from "next/link";
import Image from "next/image";
import { SOCIAL } from "@/lib/format";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-clase-a-studio.jpg"
              alt="CLASE A STUDIO"
              width={56}
              height={56}
              className="h-14 w-14 rounded-md object-contain bg-black"
            />
            <span className="font-display text-sm font-semibold tracking-[0.12em] text-[var(--cream)]">
              CLASE A STUDIO
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Educación, asesorías y productos premium para profesionales que
            eligen excelencia, método y estándares altos. Marca independiente
            de la barbería Glen Siendo Glen.
          </p>
          <p className="mt-4 text-xs text-[var(--muted-2)]">
            Operamos desde Colombia · Precios en COP (ejemplos)
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Explorar
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li><Link href="/cursos" className="hover:text-[var(--cream)]">Cursos</Link></li>
            <li><Link href="/asesorias" className="hover:text-[var(--cream)]">Asesorías</Link></li>
            <li><Link href="/tienda" className="hover:text-[var(--cream)]">Tienda</Link></li>
            <li><Link href="/contacto" className="hover:text-[var(--cream)]">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Redes
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li><a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cream)]">Instagram (placeholder)</a></li>
            <li><a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cream)]">YouTube (placeholder)</a></li>
            <li><a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cream)]">TikTok (placeholder)</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-6 text-center text-xs text-[var(--muted-2)]">
        © {new Date().getFullYear()} CLASE A STUDIO. Todos los derechos reservados.
      </div>
    </footer>
  );
}
