import type { MetadataRoute } from "next";
import { courses } from "@/lib/data/courses";
import { products } from "@/lib/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticRoutes = ["", "/cursos", "/asesorias", "/tienda", "/contacto", "/carrito", "/checkout"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const courseRoutes = courses.map((c) => ({
    url: `${base}/cursos/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/tienda/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...productRoutes];
}
