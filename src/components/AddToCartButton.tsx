"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "./Button";
import type { CartItem } from "@/lib/data/types";

export function AddToCartButton({
  item,
  label = "Agregar al carrito",
}: {
  item: Omit<CartItem, "quantity">;
  label?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <Button
      type="button"
      onClick={() => {
        addItem(item);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1800);
      }}
    >
      {added ? "Agregado ✓" : label}
    </Button>
  );
}
