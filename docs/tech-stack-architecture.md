# 🏗️ TECHNICAL ARCHITECTURE & STACK SPEC
**Project:** Clínica Crer Ser
**Type:** High-End Institutional Website (SPA Feel)
**Status:** Initialization Phase

## 1. Core Stack (Non-Negotiable)
The AI Agent must strictly adhere to these versions and libraries.

* **Framework:** Next.js 14+ (App Router). *Do not use Pages Router.*
* **Language:** TypeScript (Strict mode).
* **Styling:** Tailwind CSS (v3.4+).
* **Motion/Animations:** Framer Motion (v11+).
* **Smooth Scroll:** @studio-freight/react-lenis (or `lenis/react`).
* **State Management:** Zustand (Only for global UI states like Preloader & Menu).
* **Forms:** React Hook Form + Zod (Validation).
* **Icons:** Lucide React (Clean, thin strokes).
* **Fonts:** `next/font/google` (Cormorant Garamond & Montserrat).

## 2. Project Folder Structure (App Router)
Maintain this exact structure to ensure organization.

```text
/src
  /app
    layout.tsx        # Global Layout (Lenis Wrapper + Fonts + Metadata)
    page.tsx          # Home Page
    globals.css       # Tailwind Directives & Custom Utilities
    /crianca
      page.tsx        # Child Service Page
    /adulto
      page.tsx        # Adult Service Page
    /casal
      page.tsx        # Couple Service Page
    /sobre
      page.tsx        # About Page
    /contato
      page.tsx        # Contact Page
  
  /components
    /ui               # Generic Atoms (Button, Input, ScrollBar)
    /layout           # Structural (Navbar, Footer, Container)
    /sections         # Page Specific Sections (HomeHero, ChildMethodology...)
    /motion           # Animation Wrappers (FadeIn, Reveal, PageTransition)
  
  /lib
    utils.ts          # cn() helper for Tailwind merging
    store.ts          # Zustand Store (Preloader state)
    schemas.ts        # Zod Schemas for forms
  
  /public
    /images           # Optimized images
    /fonts            # Local fonts (if Italianno not in Google)
3. Global Styles & Tailwind Config (tailwind.config.ts)
The Agent must extend the theme with our specific palette, not hardcode hex values.

Colors Extension:

primary: #Salmão (Define exact HEX from Design Doc)

secondary: #RosaQueimado

tertiary: #Lilás/Verde

background: #OffWhite (#F9F8F6)

foreground: #MarromCafé

Border Radius:

glass: '2rem' (32px)

Font Family:

sans: ['var(--font-montserrat)']

serif: ['var(--font-cormorant)']

script: ['var(--font-italianno)']

4. Key Technical Behaviors
A. The "Liquid" Layout
Wrap the entire application in a <LenisScroll> provider component in layout.tsx.

Disable default scrollbar in CSS and create a custom floating scrollbar component.

B. Page Transitions (Template.tsx)
Use template.tsx (instead of layout.tsx for inner pages) or a specific AnimatePresence wrapper in layout.tsx to handle the "Wave" transition effect between routes.

The transition state must be aware of the "next route" color (Color Coding).

C. Glassmorphism Utility
Create a utility class or component .glass-panel that applies:

bg-white/60

backdrop-blur-md

border border-white/40

shadow-sm