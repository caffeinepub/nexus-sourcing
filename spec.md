# NEXUS Sourcing

## Current State
The frontend has a main.tsx entry point that imports `App` but App.tsx does not exist. The website needs to be built from scratch with all pages and now enhanced with interactive features.

## Requested Changes (Diff)

### Add
- Custom branded crosshair cursor (red crosshair + center dot, replaces default system cursor)
- Scroll-triggered fade/slide-in animations for sections and content blocks as user scrolls
- Hover effects on cards (subtle lift + red accent glow) and CTAs (smooth color transition)
- Full multi-page NEXUS website with dark corporate theme (black background, red accents)

### Modify
- App.tsx: Create from scratch with full routing and all pages

### Remove
- Nothing (App.tsx doesn't exist yet)

## Implementation Plan
1. Create CustomCursor component - SVG crosshair in brand red, hides native cursor globally, dot at center
2. Create useScrollAnimation hook - IntersectionObserver to trigger CSS class when element enters viewport
3. Build all pages: Home, About, Services, How It Works, Industries, Why NEXUS, Contact
4. Apply scroll-in animations to all sections (fade up on enter)
5. Apply hover effects on all cards and CTA buttons
6. Wire up contact form (Name, Company, Email, Phone, Product Requirement)
7. Floating WhatsApp button
8. Responsive navigation with mobile menu
