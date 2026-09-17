"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/format";
import { ButtonLink } from "./Button";

export function CheckoutView() {
  const { items, subtotal, hydrated } = useCart();

  if (!hydrated) {
    return <p className="text-sm text-[var(--muted)]">Cargando…</p>;
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-10 text-center">
        <p className="font-display text-2xl text-[var(--cream)]">No hay ítems para pagar</p>
        <p className="mt-3 text-sm text-[var(--muted)]">Agrega cursos o productos primero.</p>
        <ButtonLink href="/carrito" className="mt-6" variant="secondary">
          Volver al carrito
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
        <h2 className="font-display text-xl text-[var(--cream)]">Resumen del pedido</h2>
        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between gap-4 text-sm">
              <span className="text-[var(--muted)]">
                {item.name} × {item.quantity}
              </span>
              <span className="text-[var(--cream)]">
                {formatCOP(item.price * item.quantity)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex justify-between border-t border-[var(--border)] pt-4">
          <span className="font-semibold text-[var(--cream)]">Total</span>
          <span className="font-semibold text-[var(--gold)]">{formatCOP(subtotal)}</span>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-[var(--gold)]/40 bg-[var(--bg-elevated)] p-6">
        <p className="text-sm text-[var(--muted)]">
          Pago con Mercado Pago aún no está conectado. Cuando configures las
          credenciales en <code className="text-[var(--gold)]">.env.local</code>,
          este botón iniciará el checkout real.
        </p>
        <button
          type="button"
          disabled
          title="TODO: conectar Mercado Pago"
          className="mt-5 w-full cursor-not-allowed rounded-full bg-[var(--gold)]/40 px-5 py-3 text-sm font-semibold text-[var(--bg)] opacity-70"
        >
          Pagar con Mercado Pago (próximamente)
        </button>
        <p className="mt-3 text-center text-xs text-[var(--muted-2)]">
          Stub deshabilitado · sin API keys falsas
        </p>
      </div>

      <p className="text-center text-sm text-[var(--muted)]">
        <Link href="/carrito" className="underline-offset-2 hover:text-[var(--cream)] hover:underline">
          Volver al carrito
        </Link>
      </p>
    </div>
  );
}
