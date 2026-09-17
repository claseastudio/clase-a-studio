import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data/types";
import { formatCOP } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/tienda/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm transition hover:border-[var(--muted)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated)]">
        <Image
          src="/brand/card-product.svg"
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width:768px) 100vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-[var(--gold)]">
          <span className="uppercase tracking-[0.15em]">{product.category}</span>
          {product.ejemplo && (
            <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--muted-2)]">
              Ejemplo
            </span>
          )}
        </div>
        <h3 className="mt-2 font-display text-lg text-[var(--cream)]">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-[var(--muted)]">
          {product.shortDescription}
        </p>
        <p className="mt-4 text-lg font-semibold text-[var(--cream)]">
          {formatCOP(product.price)}
        </p>
      </div>
    </Link>
  );
}
