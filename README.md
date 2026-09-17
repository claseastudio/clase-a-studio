# CLASE A STUDIO

Sitio web de **CLASE A STUDIO**: educación, asesorías y productos premium.
Marca independiente de la barbería Glen Siendo Glen.

Stack: **Next.js (App Router) · TypeScript · Tailwind CSS · npm**

Idioma de interfaz: **español (es-CO)**.

---

## Cómo correr en local

```bash
# 1. Entrar al proyecto
cd clase-a-studio

# 2. Instalar dependencias
npm install

# 3. Variables de entorno
cp .env.example .env.local
# Edita NEXT_PUBLIC_SITE_URL si hace falta

# 4. Desarrollo
npm run dev
# Abre http://localhost:3000

# 5. Build de producción
npm run build
npm start
```

---

## Estructura útil

| Ruta | Contenido |
|------|-----------|
| `src/app/` | Páginas (App Router) |
| `src/components/` | UI compartida (header, footer, cards, forms) |
| `src/lib/data/` | Cursos, asesorías, productos tipados |
| `src/lib/format.ts` | Formato COP, WhatsApp/Calendly/social placeholders |
| `src/context/CartContext.tsx` | Carrito con `localStorage` |
| `public/brand/` | SVG de marca / cards (sin URLs remotas) |

### Rutas del sitio

- `/` — Home
- `/cursos` · `/cursos/[slug]`
- `/asesorias`
- `/tienda` · `/tienda/[slug]`
- `/contacto`
- `/carrito` · `/checkout`
- `/sitemap.xml` · `/robots.txt`

---

## Cómo reemplazar placeholders

1. **Precios y copy** — edita `src/lib/data/courses.ts`, `advisories.ts`, `products.ts`. Quita la marca `ejemplo: true` cuando el contenido sea real.
2. **WhatsApp / Calendly / redes** — `src/lib/format.ts` (`WHATSAPP_PLACEHOLDER`, `CALENDLY_PLACEHOLDER`, `SOCIAL`).
3. **Assets** — sustituye los SVG en `public/brand/` por tu logo e imágenes reales (PNG/WebP). Actualiza las rutas en las cards si cambias nombres.
4. **SEO** — `NEXT_PUBLIC_SITE_URL` en `.env.local` (dominio de producción). Metadata en `src/app/layout.tsx`.
5. **Formulario de contacto** — hoy es stub (éxito en cliente). Conecta a Formspree, Resend, API propia o CRM.
6. **Testimonios** — placeholders en `src/app/page.tsx`.

---

## Subir a GitHub (interfaz web)

1. En [GitHub](https://github.com/new) crea un repositorio **vacío** (sin README).
2. En tu máquina, dentro de esta carpeta:

```bash
git init
git add .
git commit -m "Initial commit: CLASE A STUDIO website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Alternativa solo UI: comprime el proyecto (sin `node_modules` ni `.next`), súbelo como ZIP vía “Upload files” en el repo vacío, o usa GitHub Desktop.

**No subas** `.env.local`, secretos ni `node_modules`. El `.gitignore` del proyecto ya excluye lo habitual.

---

## Deploy

### Vercel (recomendado para Next.js)

1. Importa el repo en [vercel.com](https://vercel.com).
2. Framework: Next.js (auto).
3. Añade env: `NEXT_PUBLIC_SITE_URL=https://tu-dominio.com`
4. Deploy. Actualiza la URL en producción cuando tengas dominio custom.

### Netlify

1. New site → import from Git.
2. Build: `npm run build` · Publish: `.next` no basta solo — usa el plugin oficial de Next.js o `@netlify/plugin-nextjs`.
3. Variables de entorno igual que arriba.

---

## Mercado Pago — siguientes pasos

El botón **“Pagar con Mercado Pago”** en `/checkout` está **deshabilitado a propósito** (sin API keys falsas).

1. Crea una aplicación en [developers.mercadopago.com](https://www.mercadopago.com/developers).
2. Usa **credenciales de prueba** primero.
3. Guarda en `.env.local`:
   - `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY`
   - `MERCADOPAGO_ACCESS_TOKEN` (solo servidor)
4. Implementa un Route Handler (`src/app/api/checkout/route.ts`) que cree una preferencia/orden con el Access Token.
5. En el cliente, redirige al Checkout Pro o monta Brick/Wallet con la public key.
6. Configura webhooks para confirmar pagos antes de entregar cursos/productos digitales.
7. Nunca commits tokens. Usa variables de entorno en Vercel/Netlify.

---

## Notas de marca

- Nombre exacto: **CLASE A STUDIO**
- Tono: cercano y profesional (es-CO)
- Estética: base oscura + acentos cream/gold
- Separado de **Glen Siendo Glen** (barbería)

---

## Licencia

Código del sitio: uso interno del studio. Contenido de ejemplo no es material de venta final.
