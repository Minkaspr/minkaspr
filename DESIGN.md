
# Design System Specification

## 1. Overview & Creative North Star: "The Engineering Monograph"

This design system is built to move the developer portfolio away from the "generic template" and toward a high-end, editorial experience. The Creative North Star is **The Engineering Monograph**: a fusion of technical precision and premium print journalism. 

The layout should feel like a multi-page web application—robust and functional—but visually it should mirror a luxury architectural journal. We achieve this through intentional asymmetry (e.g., placing a `display-lg` headline off-center), significant negative space, and a depth model based on tonal layering rather than physical borders. This is not just a site; it is a curated archive of technical mastery.

## 2. Color Philosophy & Tonal Depth

The palette is rooted in deep obsidian tones (`#0f1417`) contrasted with a luminous tech-blue (`#4fc3f7`), grounded by a deeper obsidian-blue (`#005c78`) for shadow and gradient depth. The goal is to create a "Glow in the Dark" effect where the primary actions feel like illuminated components on a high-tech console — a signal glowing on a dark circuit board, not a warning light.

### The "No-Line" Rule
Prohibit the use of 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts. 
- A project section should transition from `surface` to `surface-container-low` to signal a new context.
- Use `surface-container-highest` only for the most critical interactive elements to provide a natural, elevation-based contrast.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (The foundation).
- **Secondary Containers:** `surface-container-low` (Used for sidebar or secondary navigation).
- **In-Page Modules:** `surface-container` (For content cards or technical documentation blocks).
- **Floating Accents:** `surface-bright` (For active status indicators or tooltips).

### The "Glass & Gradient" Rule
To elevate the "High-Tech" aesthetic, use Glassmorphism for floating navigation bars or code-snippet overlays.
- **Style:** `surface-container` at 70% opacity with a `24px` backdrop-blur.
- **Signature Gradients:** Use a subtle linear gradient from `primary` to `primary-container` (at a 135-degree angle) for hero CTAs to provide a sense of "inner light" and professional polish.

## 3. Typography Scale

The typography is a dialogue between the brutalist geometry of **Space Grotesk** and the invisible precision of **Inter**.

- **Display & Headlines (Space Grotesk):** These are your "Editorial" voices. Use `display-lg` for massive project numbers or section headings. The wide apertures and geometric forms of Space Grotesk convey a high-tech, modern-architectural vibe.
- **Body & Titles (Inter):** These are your "Technical" voices. Inter is used for technical documentation and long-form project descriptions to ensure maximum readability and a "software-native" feel.
- **Labeling (Space Grotesk):** Use `label-md` in all-caps with 5% letter spacing for metadata (e.g., "TECHNOLOGIES USED," "TIMELINE"). This adds an authoritative, blueprint-like quality to the layout.

## 4. Elevation & Depth: The Layering Principle

Depth in this system is achieved through **Tonal Layering** rather than traditional structural lines.

- **Stacking Logic:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a "recessed" look, making the content feel etched into the interface.
- **Ambient Shadows:** When a "floating" effect is required (e.g., a modal or a floating action button), use a shadow with a blur radius of `32px` and an opacity of `6%`. The shadow color must be a tinted version of `on-surface` (not pure black) to mimic natural ambient light.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a **Ghost Border**. Use the `outline-variant` token at **15% opacity**. This provides a hint of a container without breaking the "No-Line" rule.

## 5. Component Guidelines

### Buttons
- **Primary:** `primary-container` background with `on-primary-container` text. Use a `md` (0.375rem) corner radius. On hover, apply a `primary` glow (subtle outer shadow).
- **Secondary:** No background. Use a `Ghost Border` (outline-variant @ 20%) and `secondary` text.
- **Tertiary:** Purely text-based using `label-md`, styled in `secondary`.

### Cards & Lists
- **The Divider Ban:** Never use horizontal rules (`<hr>`). Use vertical white space from the spacing scale (e.g., `2rem` between list items) or a subtle shift to `surface-container-low`.
- **Project Cards:** Use `surface-container` with a `lg` (0.5rem) corner radius. On hover, the background should shift to `surface-container-high` to provide tactile feedback without a "lift" animation.

### Technical Documentation Inputs
- **Text Fields:** Use `surface-container-highest` for the input field background. The label should be `label-sm` in `on-surface-variant`.
- **Code Snippet Blocks:** Use `surface-container-lowest` with a "Ghost Border." Use `secondary` for syntax highlights to maintain the high-tech blue/orange balance.

### Navigation (Web App Style)
- **Sidebar:** Use `surface-container-low`. Active links should use a vertical `primary` indicator bar (4px wide) on the left edge, with the text color shifting to `on-background`.

## 6. Do's and Don'ts

### Do:
- **Do** embrace asymmetry. If a headline is 2.75rem (`display-md`), let it span across 70% of the screen, leaving 30% as pure, intentional "negative space."
- **Do** use `secondary_container` for subtle background highlights behind code blocks or data visualizations.
- **Do** ensure all interactive states have a `0.2s ease-out` transition for color and opacity changes.

### Don't:
- **Don't** use standard 1px borders to separate content. It makes the site look like a legacy enterprise tool rather than a bespoke portfolio.
- **Don't** use pure black `#000000`. The depth of `#0f1417` (surface) allows for much more sophisticated layering.
- **Don't** clutter the screen. If a piece of information isn't vital to the "Engineering Monograph" narrative, move it to a secondary page or a "details" tooltip.

---
*This system is designed for the future of technical storytelling. Use the tokens precisely, but apply the layout with the eye of an editor.*