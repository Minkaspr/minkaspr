# Desarrollo

Guía para levantar, modificar y publicar el portafolio.

## Requisitos

- **Node.js 22.12 o superior** (lo pide `package.json` en `engines`)
- **pnpm** (`npm install -g pnpm` si no lo tienes)

## Primeros pasos

```sh
git clone https://github.com/Minkaspr/minkaspr.git
cd minkaspr
pnpm install
cp .env.example .env   # y completa las variables, ver más abajo
pnpm dev
```

El sitio queda en `http://localhost:4321`.

## Comandos

| Comando | Qué hace |
| :-- | :-- |
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Levanta el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera el sitio estático en `./dist/` |
| `pnpm preview` | Sirve el build localmente para revisarlo antes de publicar |
| `pnpm astro check` | Revisa tipos y errores en los archivos `.astro` |

## Variables de entorno

Se definen en un archivo `.env` en la raíz (no se sube a GitHub). La plantilla es [`.env.example`](../.env.example).

| Variable | Para qué sirve |
| :-- | :-- |
| `PUBLIC_WEB3FORMS_KEY` | Clave de [Web3Forms](https://web3forms.com) para el formulario de contacto |

Para obtener la clave, entra a web3forms.com y escribe el correo donde quieres recibir los mensajes. No pide tarjeta y el plan gratis permite 250 mensajes al mes. La clave está pensada para ser pública, solo sirve para enviarte mensajes a ti.

Si la variable falta, el formulario no se rompe. Muestra un enlace para que la persona envíe su mensaje desde su propio correo, y en la consola del navegador aparece un aviso.

Después de cambiar `.env` hay que reiniciar `pnpm dev`.

## Estructura

```text
├── docs/                    Guías del proyecto (esta y la del hero de proyectos)
├── public/                  Archivos servidos tal cual (favicon, foto de perfil)
├── src/
│   ├── components/          Componentes .astro
│   │   ├── AboutContent     Contenido de "Sobre mí"
│   │   ├── ContactForm      Formulario con validación Zod y envío por Web3Forms
│   │   ├── StackAreas       Sección "Lo que hago" del inicio
│   │   ├── DocHeroMock      Ilustración animada del hero de DynamicDoc
│   │   └── Header, Sidebar, LanguagePicker, ThemeToggle
│   ├── data/projects.ts     Lista de proyectos (fuente de verdad para tarjetas y conteos)
│   ├── i18n/                Textos compartidos y utilidades de idioma
│   ├── layouts/Layout.astro Estructura común, tema y favicon
│   ├── pages/               Rutas en español (sin prefijo)
│   │   └── en/              Rutas en inglés (/en/...)
│   └── styles/global.css    Tokens de color, tipografía y view transitions
├── DESIGN.md                Sistema de diseño
└── astro.config.mjs
```

## Cómo hacer cambios comunes

### Agregar un proyecto

1. Agrégalo en [`src/data/projects.ts`](../src/data/projects.ts) con sus textos en `es` y `en`. Si usa una tecnología nueva, agrega su nombre en `techLabels`.
2. Las tarjetas de Proyectos y los conteos de "Lo que hago" en el inicio se actualizan solos.
3. Si va a tener página propia, sigue [hero-de-proyecto.md](hero-de-proyecto.md) y marca `hasDetailPage: true`.

### Textos e idiomas

- Español es el idioma por defecto y no lleva prefijo (`/about/`). Inglés va bajo `/en/` (`/en/about/`).
- Cada página existe dos veces, una en `src/pages/` y otra en `src/pages/en/`. Los componentes compartidos reciben `lang="es"` o `lang="en"` y guardan sus textos en un objeto `{ es, en }`.
- Los textos del menú y del tema están en [`src/i18n/ui.ts`](../src/i18n/ui.ts).
- Tono de los textos del sitio. Primera persona, natural, sin dos puntos ni punto y coma en la prosa y sin frases que suenen a plantilla.

### Colores y contraste

- Todos los colores salen de los tokens de [`src/styles/global.css`](../src/styles/global.css), con valores para modo oscuro (por defecto) y modo claro (`html:not(.dark)`).
- Usa clases con tokens (`text-on-surface-variant`, `bg-surface-container`…) y no colores fijos como `text-slate-400`, que no cambian con el tema.
- El texto debe tener un contraste de al menos 4.5:1 en ambos modos (3:1 si es texto grande).

### Animaciones

- Las animaciones de entrada usan [Motion](https://motion.dev) en un `<script>` por página, dentro de `astro:page-load`.
- Ese listener queda activo al navegar a otras páginas, así que cada script empieza con una guarda, por ejemplo `if (!document.getElementById("contact")) return;`.
- No combines `transition-all` de Tailwind con elementos que anima Motion, porque se pelean y la animación se retrasa.
- Preferir fundidos suaves y siempre respetar `prefers-reduced-motion`.

### SEO y vista previa en redes

- Las etiquetas para Google y redes sociales (título, descripción, canonical, hreflang, Open Graph, Twitter/X y datos estructurados de persona) salen de [`src/components/Seo.astro`](../src/components/Seo.astro).
- Cada página puede pasar su propio título y descripción al layout, por ejemplo `<Layout title="Proyectos" description="...">`. Sin título se usa "Dario Quispe · Desarrollador de software".
- Las imágenes que aparecen al compartir un enlace son [`public/og-es.png`](../public/og-es.png) y [`public/og-en.png`](../public/og-en.png), de 1200×630. Si cambias tu foto o tu rol, hay que regenerarlas.
- El sitemap se genera solo al hacer `pnpm build` (`/sitemap-index.xml`) y [`public/robots.txt`](../public/robots.txt) lo anuncia a los buscadores.
- Para revisar cómo se ve un enlace al compartirlo puedes usar [opengraph.xyz](https://www.opengraph.xyz) o el [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/).

### Favicon

[`public/favicon.svg`](../public/favicon.svg) es un monograma "M" que cambia de color según el tema del navegador. `favicon.ico` y `apple-touch-icon.png` son copias en PNG/ICO generadas a partir del SVG, así que si cambias el SVG hay que regenerarlas (por ejemplo con `sharp`).

## Publicar

### En GitHub

```sh
git remote add origin https://github.com/Minkaspr/minkaspr.git
git push -u origin main
```

Este repositorio también es el README de perfil de GitHub (se llama igual que el usuario), así que el [README.md](../README.md) de la raíz es la presentación que aparece en github.com/Minkaspr.

### En Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com). Detecta Astro solo.
2. Revisa que el comando de build sea `pnpm build` y la carpeta de salida `dist`.
3. En **Settings → Environment Variables** agrega `PUBLIC_WEB3FORMS_KEY`.
4. Cada push a `main` publica el sitio, y cada push a otra rama genera una vista previa.
