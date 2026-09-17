"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const NAV = [
  { href: "/cursos", label: "Cursos" },
  { href: "/asesorias", label: "Asesorías" },
  { href: "/tienda", label: "Tienda" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const { itemCount, hydrated } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-clase-a-studio-black.png"
            alt="CLASE A STUDIO"
            width={48}
            height={48}
            priority
            className="h-11 w-11 rounded-md object-contain bg-[#f5f5f7]"
          />
          <span className="sr-only">CLASE A STUDIO</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-[var(--gold)]"
                    : "text-[var(--muted)] hover:text-[var(--cream)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/carrito"
            className="relative rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--cream)] transition hover:border-[var(--gold)]"
            aria-label="Carrito"
          >
            Carrito
            {hydrated && itemCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--gold)] px-1 text-[10px] font-bold text-[var(--bg)]">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            href="/cursos"
            className="hidden rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-semibold text-[var(--bg)] transition hover:bg-[var(--cream-soft)] sm:inline-flex"
          >
            Empezar
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--cream)] md:hidden"
            aria-expanded={open}
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-[var(--cream)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cursos"
              className="mt-2 rounded-full bg-[var(--gold)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--bg)]"
              onClick={() => setOpen(false)}
            >
              Empezar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
