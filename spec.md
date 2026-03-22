# NEXUS Trading Company — Visual Overhaul

## Current State
- 7-page React site with dark theme (black + red), Bricolage Grotesque / General Sans fonts
- Cards and boxes are sharp-cornered (no border-radius beyond CSS var --radius: 0.25rem)
- No real images anywhere — purely text and borders
- Scroll animations exist but are simple fade-up only
- Google Maps embed query lacks company name; address text below map is tiny/muted
- Core values and service cards have straight edges
- Responsiveness is basic grid-based, not fully optimised for mobile
- Buttons are sharp-cornered

## Requested Changes (Diff)

### Add
- Hero section: full-width background image (hero-shipping-port) with dark overlay, parallax-style depth
- About page: business-handshake image in the story section
- Services page: warehouse-containers image as a visual accent
- Home: global-network-map image in the "Why NEXUS" section
- Animated counters on stats (count up on scroll into view)
- Subtle particle/dot floating animation in hero background
- Gradient red glow behind section headings / CTA band
- Staggered entrance animations (slide from different directions per section)
- Scroll progress indicator bar at top of page
- Active nav underline animation

### Modify
- ALL cards, boxes, buttons: add rounded-xl (or rounded-2xl for cards) border-radius — core values boxes, service cards, stat boxes, about stat boxes, CTA band, contact info box, WhatsApp box, form inputs
- Responsiveness overhaul: hero text scales properly xs→xl; core values grid collapses to 2-col on mobile then single-col, not forced 5-col; service grids stack cleanly; contact layout stacks on mobile; navbar mobile menu is polished
- Google Maps embed src query: change to include "NEXUS Trading Company, Shop 19, Basement Madina Bara Center, Shah Alam Market, Lahore" so the pin label shows the company name
- Address text below map: make it white/foreground color, larger font size (text-sm or text-base), add a MapPin icon inline, wrap in a styled card/box so it visually stands out
- Hero CTA buttons: rounded-full or rounded-lg for a modern pop
- Overall visual intensity: increase contrast, use red glows more liberally on hover, add border-primary/40 glow on key sections
- Navbar: add blur backdrop more aggressively, logo slightly larger
- Footer: use the NEXUS logo image instead of text wordmark

### Remove
- Hard-coded `grid-cols-5` for core values (replace with responsive grid)

## Implementation Plan
1. Update index.css: increase --radius to 0.75rem, add new animation keyframes (float, counter, shimmer), add scroll progress bar styles
2. Update Home.tsx: hero with background image + overlay, animated counter stats, core values with responsive grid + rounded cards, global-network image in Why NEXUS section, rounded CTA band
3. Update About.tsx: add business-handshake image, round all stat boxes and value cards
4. Update Services.tsx: add warehouse image banner, round all service cards
5. Update Contact.tsx: fix Google Maps embed URL to include company name, make address text visible and styled prominently
6. Update Navbar.tsx: polish mobile responsiveness, slightly larger logo
7. Update Footer.tsx: use logo image
8. All pages: apply rounded-xl/2xl to every card/box across the site
