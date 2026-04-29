---
name: Basys Web
colors:
    surface: "#f7f9fc"
    surface-dim: "#d8dadd"
    surface-bright: "#f7f9fc"
    surface-container-lowest: "#ffffff"
    surface-container-low: "#f2f4f7"
    surface-container: "#eceef1"
    surface-container-high: "#e6e8eb"
    surface-container-highest: "#e0e3e6"
    on-surface: "#191c1e"
    on-surface-variant: "#45464d"
    inverse-surface: "#2d3133"
    inverse-on-surface: "#eff1f4"
    outline: "#76777d"
    outline-variant: "#c6c6cd"
    surface-tint: "#5e5e5e"
    primary: "#000000"
    on-primary: "#ffffff"
    primary-container: "#1b1b1b"
    on-primary-container: "#848484"
    inverse-primary: "#c6c6c6"
    secondary: "#5e5e5c"
    on-secondary: "#ffffff"
    secondary-container: "#e1dfdc"
    on-secondary-container: "#636360"
    tertiary: "#000000"
    on-tertiary: "#ffffff"
    tertiary-container: "#1c1b1b"
    on-tertiary-container: "#858382"
    error: "#ba1a1a"
    on-error: "#ffffff"
    error-container: "#ffdad6"
    on-error-container: "#93000a"
    primary-fixed: "#e2e2e2"
    primary-fixed-dim: "#c6c6c6"
    on-primary-fixed: "#1b1b1b"
    on-primary-fixed-variant: "#474747"
    secondary-fixed: "#e4e2df"
    secondary-fixed-dim: "#c8c6c3"
    on-secondary-fixed: "#1b1c1a"
    on-secondary-fixed-variant: "#474745"
    tertiary-fixed: "#e5e2e0"
    tertiary-fixed-dim: "#c9c6c5"
    on-tertiary-fixed: "#1c1b1b"
    on-tertiary-fixed-variant: "#474746"
    background: "#f7f9fc"
    on-background: "#191c1e"
    surface-variant: "#e0e3e6"
typography:
    headline-xl:
        fontFamily: Inter
        fontSize: 36px
        fontWeight: "700"
        lineHeight: 44px
        letterSpacing: -0.02em
    headline-lg:
        fontFamily: Inter
        fontSize: 28px
        fontWeight: "600"
        lineHeight: 36px
        letterSpacing: -0.01em
    headline-md:
        fontFamily: Inter
        fontSize: 20px
        fontWeight: "600"
        lineHeight: 28px
    body-lg:
        fontFamily: Inter
        fontSize: 16px
        fontWeight: "400"
        lineHeight: 24px
    body-md:
        fontFamily: Inter
        fontSize: 14px
        fontWeight: "400"
        lineHeight: 20px
    label-md:
        fontFamily: Inter
        fontSize: 12px
        fontWeight: "500"
        lineHeight: 16px
        letterSpacing: 0.05em
    label-sm:
        fontFamily: Inter
        fontSize: 11px
        fontWeight: "600"
        lineHeight: 14px
rounded:
    sm: 0.5rem
    DEFAULT: 1rem
    md: 1.5rem
    lg: 2rem
    xl: 3rem
    full: 9999px
spacing:
    base: 4px
    xs: 8px
    sm: 12px
    md: 16px
    lg: 24px
    xl: 32px
    gutter: 20px
    margin: 24px
---

## Brand & Style

This design system targets high-stakes enterprise environments where Agentic AI must feel both autonomous and strictly governed. The brand personality is one of "Invisible Strength"-highly capable, data-driven, and calm under pressure.

The aesthetic follows a **Corporate / Modern** movement with a shift toward **Monochromatic Minimalism**. It prioritizes extreme clarity and information density. Visual interest is generated through high-contrast structural elements and a sophisticated, neutral palette rather than vibrant colors. The goal is to evoke a sense of absolute reliability, technical authority, and architectural precision.

## Colors

The palette is anchored by absolute **Black (#000000)**, providing a definitive and authoritative foundation. This primary color is used for key structural elements, typography, and primary actions to command attention through contrast. A warm **Soft Sand (#f6f4f1)** serves as the secondary color, providing a human, tactile layer to the interface that softens the starkness of the black.

**Muted Greys (#949291)** are utilized for tertiary accents and secondary information, maintaining a professional and desaturated technical feel. The neutral background is a crisp **Off-White (#F5F7FA)**, which ensures high legibility and a clean workspace while differentiating from the warmer secondary surfaces.

## Typography

The design system utilizes **Inter** exclusively to ensure maximum legibility across complex data dashboards and agentic chat interfaces. The type scale is optimized for high information density.

Headlines use tighter letter-spacing and heavier weights to command authority. Body text is set with generous line-height to maintain readability during long-form data analysis. Labels utilize an uppercase style with increased tracking to differentiate metadata from actionable content.

## Layout & Spacing

The layout employs a **Fixed Grid** system for administrative consoles and a **Fluid Grid** for live monitoring dashboards. A 12-column structure is the standard, allowing for modular "agent widgets" to span 3, 4, 6, or 12 columns.

The spacing rhythm is based on a 4px baseline, ensuring all components align to a mathematical grid. This precision reinforces the "agentic" nature of the product-everything is calculated and intentional. Gutters are kept narrow (20px) to maximize screen real estate for data-heavy views.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than heavy shadows. The primary surface is the light neutral (#F5F7FA), with "Surface-Container" tiers using pure white (#FFFFFF) or the warm secondary (#f6f4f1) to lift active work areas.

To indicate depth, use **Low-Contrast Outlines** (1px solid, 10% opacity of Black) instead of traditional box shadows. This keeps the interface feeling "flat" and architectural. A subtle, extra-diffused shadow may be used only for transient elements like dropdown menus or modal overlays to ensure they sit clearly above the workspace.

## Shapes

The shape language is **Pill-shaped (1rem)**. This pronounced rounding provides a friendly, modern, and highly approachable feel, contrasting with the rigorous data-heavy nature of the tool to create a balanced user experience.

Larger containers (Cards) use `rounded-lg` (2rem) to create distinct, encapsulated modules within the workspace. This generous approach to corner radii ensures that the UI feels fluid and modern, using "pill" shapes for buttons and status indicators to emphasize interactable elements.

## Components

### Buttons

Primary buttons use a solid **Black (#000000)** background with white text, representing the definitive action point. They feature a full pill-shaped profile for maximum visual distinction. Secondary buttons use a Black outline with the warm **Soft Sand (#f6f4f1)** or no fill.

### Input Fields

Inputs are defined by a 1px border in a muted grey with a `1rem` radius. On focus, the border transitions to Primary Black with a 2px thickness. Labels sit strictly above the input field in the `label-md` style.

### Chips & Tags

Used for "Agent Status" or "Data Categories." These use light tints of grey or the warm secondary color with high-contrast black text. They are fully pill-shaped.

### Cards

Cards are white or Soft Sand (#f6f4f1) with a 1px subtle border and a `2rem` radius. They do not use shadows by default. Card headers should have a distinct 1px bottom border to separate controls from content.

### Agent Console

A specialized component featuring a high-contrast appearance: a dark header using the Black primary color, containing monospaced status indicators in grey, while the content area remains clean and neutral with the system's signature pill-shaped corners.
