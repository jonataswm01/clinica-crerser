### 📄 DOC 5: COMPONENT LIBRARY (ATOMIC DESIGN)

```markdown
# 🧩 COMPONENT LIBRARY & REUSABLE UI
Use this guide to build the "Lego Blocks" before building the pages.

## 1. Atoms (Base UI)

### `Button` (`components/ui/button.tsx`)
* **Variants:**
    * `primary`: Solid background (Dynamic Color based on page), White Text, Rounded-Full. *Effect: Magnetic Hover.*
    * `outline`: Border 1px (Dynamic Color), Transparent BG.
    * `ghost`: No border, just text. Hover: organic underline.
* **Props:** `variant`, `size`, `colorTheme` (salmon, rose, lilac).

### `Typography` (`components/ui/typography.tsx`)
* **Components:** `Heading` (H1-H3, Serif), `Text` (P, Sans), `Script` (Span, Italianno).
* **Purpose:** Enforce font weights and mobile/desktop sizing consistency.

### `GlassCard` (`components/ui/glass-card.tsx`)
* **Base Styles:** `bg-white/60 backdrop-blur-lg border border-white/50 rounded-3xl`.
* **Hover:** Optional slight lift (`translate-y-[-5px]`) and glow.

## 2. Molecules (Complex UI)

### `ServiceCard`
* Used in Home Page Navigation.
* Combines: GlassCard + Icon + Heading + Text + Link.
* Prop: `activeColor` (Changes the icon and link color).

### `MagneticWrapper`
* A functional component that wraps any button.
* Logic: Uses Framer Motion to track mouse position and pull the child element slightly towards the cursor.

### `AuroraBackground`
* A background component with absolute positioned "blobs" (divs with heavy blur).
* Animation: Blobs move slowly in a loop.
* Prop: `variant` (kids, adult, couple) -> Changes blob colors.

## 3. Organisms (Global)

### `FloatingNavbar`
* **Concept:** Centralized floating glass capsule that morphs into a menu card.
* **Dimensions:**
    * *Closed:* `h-14 w-[340px] rounded-full`.
    * *Open:* `h-auto w-[360px] rounded-3xl p-6`.
* **Z-Index:** Must be highest (Z-50).
* **Trigger:** Custom SVG Icon (2 horizontal lines) that animates to an 'X'.

### `Preloader`
* The "Growing Tree" animation.
* Logic: Runs only once per session (check Zustand store).
* Z-Index: 9999 (Covers everything).

### `NextPageTrigger` (The Lusion Effect)
* **Concept:** A scroll-jacking area at the bottom of the page that navigates to the next route on persistence.
* **UI:** * Background: Dark Chocolate (Contrast with page).
    * Indicator: A progress line or circle that fills from 0% to 100% based on `scrollY` delta.
    * Text: "Keep scrolling to visit [Next Page Name]".
* **Logic:** Use `framer-motion`'s `useScroll`. If progress > 99%, router.push(nextPage).

### `MonumentalFooter`
* **Structure:**
    * **Top Row:** Grid Layout (Gap-12).
        * *Input Group:* "Keep in touch" minimal input (underline style).
        * *Contact Info:* Vertical list of address/phone.
        * *Socials:* Horizontal or vertical list.
    * **Bottom Row:** Massive Typography ("CRER SER").
        * *Font-Size:* `text-[12vw]` to `text-[18vw]`.
        * *Font-Family:* `Cormorant Garamond`.
        * *Opacity:* Low (Watermark effect).
* **Vibe:** Solid, grounding, architectural.