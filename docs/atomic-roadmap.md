# 🚀 ATOMIC DEVELOPMENT ROADMAP
**Instructions:** Copy one task block at a time into the Cursor Chat. Do not proceed until the current task is verified.

## PHASE 1: SETUP & FOUNDATION

- [x] **Task 1.1: Initialization**
    * Initialize Next.js 14 project (TypeScript, Tailwind, ESLint).
    * Clean up default boilerplate (remove default CSS).
    * Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `lenis`, `zustand`, `sass` (if needed).
    * **Prompt:** "Initialize the project structure and install dependencies according to the Tech Stack doc."

- [x] **Task 1.2: Design System Configuration**
    * Configure `tailwind.config.ts` with the Project Colors, Fonts, and Border Radius defined in the Design Doc.
    * Setup Google Fonts in `layout.tsx` (Cormorant, Montserrat, Italianno).
    * Create `lib/utils.ts` for class merging.
    * **Prompt:** "Configure Tailwind and Fonts based on the Identity Manual."

- [x] **Task 1.3: Base Layout & Physics**
    * Implement `LenisScroll` wrapper in `layout.tsx`.
    * Create the `CustomScrollbar` component.
    * Set global background color (`#F9F8F6`).
    * **Prompt:** "Set up the global layout with Lenis Smooth Scroll and the custom background."

## PHASE 2: ATOMS & MOLECULES (BUILDING BLOCKS)

- [x] **Task 2.1: UI Primitives**
    * Create `Button` component (with variants and magnetic effect logic).
    * Create `GlassCard` component.
    * **Prompt:** "Build the Button and GlassCard components using Framer Motion."

- [x] **Task 2.2: The Aurora Background**
    * Create the `AuroraBackground` component with animated blobs.
    * Ensure it accepts color variants.
    * **Prompt:** "Create the animated AuroraBackground component."

- [x] **Task 2.3: The Floating Morphing Navbar**
    * **Library:** Use `framer-motion` (AnimatePresence, layoutId).
    * **Structure:** Create a generic `FloatingMenu` component that handles the "Open/Closed" state logic.
    * **State Closed:** Render the "Pill" with Logo (Left), Text (Center), Hamburger Trigger (Right - 2 lines SVG).
    * **State Open:** Animate the container height/width to reveal the Navigation Links list.
    * **Animation:** The transition must be "spring" based (bouncy and organic), not linear.
    * **Blur:** Ensure the `backdrop-blur` persists correctly during the resizing animation.
    * **Logic:** Implement "Hide on Scroll Down / Show on Scroll Up" logic using `useScroll` from Framer Motion.
    * **Prompt:** "Create the Floating Morphing Navbar component. It should be a centered glass pill that expands into a navigation card when the 2-line hamburger is clicked. Include hide-on-scroll logic."
    - [ ] **Task 2.4: The Monumental Footer & Portal Trigger**
    * **Component:** Build `MonumentalFooter` with the massive responsive typography.
    * **Feature:** Implement `NextPageTrigger` component.
    * **Logic:** The trigger needs to accept a `nextRoute` prop (e.g., if on Home, next is '/crianca').
    * **Animation:** Smooth fill effect on scroll. Reset to 0 if user scrolls back up.
    * **Prompt:** "Create the Monumental Footer with massive typography and the Scroll-Triggered Page Transition (Lusion effect) at the bottom."

## PHASE 3: CORE EXPERIENCE (HOME)

- [ ] **Task 3.1: The Preloader**
    * Build the Tree Animation (SVG drawing or Lottie).
    * Set up Zustand store to manage `hasLoaded` state.
    * **Prompt:** "Implement the Preloader sequence with the Tree animation."

- [ ] **Task 3.2: Home Hero Section**
    * Implement the layout with Image + Text + Magnetic CTA.
    * Apply Staggered Entry animation.
    * **Prompt:** "Build the Home Page Hero Section based on the Copywriting Doc."

- [ ] **Task 3.3: Service Navigation (The Compass)**
    * Implement the 3 Glass Cards grid.
    * Link them to dummy sub-pages for now.
    * **Prompt:** "Build the Services Navigation section on Home."

## PHASE 4: INTERNAL PAGES & POLISH

- [ ] **Task 4.1: Page Transitions**
    * Implement the "Wave" transition when changing routes.
    * **Prompt:** "Implement the Page Transition system using Framer Motion templates."

- [ ] **Task 4.2: Kids Page**
    * Build the content sections using the Copywriting Doc.
    * Apply "Salmon" color theme.
    * **Prompt:** "Build the 'Criança' page structure."

- [ ] **Task 4.3: Adult & Couple Pages**
    * Build remaining pages following the templates.
    * **Prompt:** "Build the 'Individual' and 'Casal' pages."

- [ ] **Task 4.4: Contact & Forms**
    * Build the Contact page with React Hook Form.
    * **Prompt:** "Build the Contact page and form validation."