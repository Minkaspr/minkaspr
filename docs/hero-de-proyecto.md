# Hero de página de proyecto

Cómo armar la parte de arriba de una página de detalle de proyecto (`/projects/<codigo>/`).
La primera implementación es DynamicDoc:

- Página: [src/pages/projects/dynamic-doc.astro](../src/pages/projects/dynamic-doc.astro) (y su versión en `en/`)
- Ilustración: [src/components/DocHeroMock.astro](../src/components/DocHeroMock.astro)

## La idea

En vez de poner una foto de stock arriba, el hero **muestra lo que hace la app** con una
ilustración hecha en HTML y CSS. Es una versión simplificada de la pantalla real, con una
sola animación que repite la acción principal del proyecto.

Así quien entra entiende el proyecto en dos segundos, sin leer, y no depende de imágenes
externas que se pueden caer o verse genéricas.

## Estructura del hero

```
Proyectos > NombreProyecto                      ← breadcrumb

── CATEGORÍA                    ┌──────────────────────────┐
NOMBRE<span>PROYECTO</span>     │                          │
Descripción en una o dos        │   Ilustración animada    │
líneas.                         │   (componente propio)    │
[VER SITIO WEB] [VER DEMO]      │                          │
                                └──────────────────────────┘
```

- Grid de 12 columnas en desktop, 6 para el texto y 6 para la ilustración. En celular se apilan.
- Todo lo que debe entrar con animación lleva la clase `hero-fade-in`. El script de la página la usa.
- El botón **VER DEMO** apunta a `#demo`. La sección del video lleva `id="demo"` y `scroll-mt-20` para que no quede tapada por el header.
- Debajo del hero va el video y luego la documentación. La columna lateral (Tecnologías y Metadatos) es `lg:sticky lg:top-24 lg:self-start` para que se quede fija mientras se lee.

## Reglas para la ilustración

1. **Basarla en la app real.** Partir de una captura o del video y quedarse con 2 o 3 piezas que expliquen el proyecto. Por ejemplo formulario y PDF, o panel y gráfico.
2. **Una sola acción animada.** La que resume el proyecto. En DynamicDoc es escribir un nombre en el formulario y que aparezca en el PDF.
3. **Ciclo de unos 6 segundos, en bucle.** Que aparezca, se quede un rato visible y se reinicie suave. Nada de saltos ni rebotes; fundidos y movimientos lentos.
4. **Sin imágenes.** Solo HTML, CSS y, si hace falta, SVG en línea. Las "líneas de texto" son barras grises redondeadas.
5. **Colores del tema para la interfaz y colores fijos para el "papel".** Las tarjetas usan los tokens (`bg-surface-container-highest`, `text-on-surface`…). Lo que representa algo físico o externo (un PDF, una pantalla de celular) puede tener colores fijos para verse igual en claro y oscuro.
6. **Accesibilidad.**
   - El contenedor lleva `aria-hidden="true"`, porque es decorativo y el texto del hero ya explica el proyecto.
   - Todas las animaciones se apagan con `@media (prefers-reduced-motion: reduce)` y se muestra el estado final.
   - El texto que sí se lee debe pasar contraste 4.5:1.
7. **Componente propio por proyecto**, con prop `lang: 'es' | 'en'` y los textos de la ilustración en un objeto `{ es, en }`. Nombre sugerido `<Proyecto>HeroMock.astro`.
8. **Textos de la ilustración realistas**, sacados de la app, cortos y sin "Lorem ipsum".

## Pasos para un proyecto nuevo

1. Crear `src/pages/projects/<codigo>.astro` y `src/pages/en/projects/<codigo>.astro` copiando DynamicDoc.
2. Cambiar textos, `SITE_URL`, `YOUTUBE_ID`, tecnologías y metadatos.
3. Crear `src/components/<Proyecto>HeroMock.astro` siguiendo las reglas de arriba y usarlo en lugar de `DocHeroMock`.
4. En [src/data/projects.ts](../src/data/projects.ts), poner `hasDetailPage: true` en el proyecto.
5. Revisar que el script de la página empiece con su guarda (`if (!document.querySelector(".project-doc")) return;`). Los listeners de `astro:page-load` siguen activos al navegar a otras páginas.
6. Probar en modo claro y oscuro, en celular, y con reducir movimiento activado.

## Ideas para los otros proyectos

| Proyecto | Qué mostrar | Animación |
|---|---|---|
| FiberWave | Panel con tarjetas de planes de Internet y un gráfico de barras | Las barras crecen una tras otra y un contador de suscriptores sube |
| Fusion Cinema | Tres pósters (rectángulos con degradado) y una tarjeta de película | Las estrellas de calificación se llenan y el idioma cambia ES ⇄ EN |
| Pomodoro | Silueta de celular con un anillo de temporizador | El anillo se vacía y cambia de "Enfoque" a "Descanso" |
| Wayra | Celular vendiendo un pasaje con el ícono de "sin conexión" | El pasaje queda en una cola offline y al volver la señal se sincroniza con un check |
| Suite de Miniproyectos | Ventanas de escritorio apiladas, estilo app Java | Las ventanas se van mostrando una a una, como pestañas |
