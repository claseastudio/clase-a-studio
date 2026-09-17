"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/format";
import { Button, ButtonLink } from "./Button";

export function CartView() {
  const { items, removeItem, updateQuantity, subtotal, hydrated, clearCart } = useCart();

  if (!hydrated) {
    return <p className="text-sm text-[var(--muted)]">Cargando carrito…</p>;
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-10 text-center">
        <p className="font-display text-2xl text-[var(--cream)]">Tu carrito está vacío</p>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Explora cursos y productos para empezar a construir tu estándar.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/cursos">Ver cursos</ButtonLink>
          <ButtonLink href="/tienda" variant="secondary">Ver tienda</ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--gold)]">
                {item.type === "course" ? "Curso" : "Producto"}
              </p>
              <Link
                href={item.type === "course" ? `/cursos/${item.slug}` : `/tienda/${item.slug}`}
                className="mt-1 block font-display text-lg text-[var(--cream)] hover:text-[var(--gold-soft)]"
              >
                {item.name}
              </Link>
              <p className="mt-1 text-sm text-[var(--muted)]">{formatCOP(item.price)}</p>
            </div>
            <div className="flex items-center gap-3">
              <label className="sr-only" htmlFor={`qty-${item.id}`}>Cantidad</label>
              <input
                id={`qty-${item.id}`}
                type="number"
                min={1}
                max={99}
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value) || 1)}
                className="w-16 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-2 py-1.5 text-center text-sm text-[var(--cream)]"
              />
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="text-sm text-[var(--muted)] underline-offset-2 hover:text-[var(--cream)] hover:underline"
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
        <h2 className="font-display text-xl text-[var(--cream)]">Resumen</h2>
        <div className="mt-4 flex justify-between text-sm text-[var(--muted)]">
          <span>Subtotal</span>
          <span className="font-semibold text-[var(--cream)]">{formatCOP(subtotal)}</span>
        </div>
        <p className="mt-2 text-xs text-[var(--muted-2)]">
          Impuestos y envío se confirman en checkout (cuando aplique).
        </p>
        <ButtonLink href="/checkout" className="mt-6 w-full">
          Ir al checkout
        </ButtonLink>
        <Button type="button" variant="ghost" className="mt-3 w-full" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </aside>
    </div>
  );
}
