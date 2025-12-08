import Link from "next/link";

import HomeHero from "@/components/sections/home-hero";
import HomeManifesto from "@/components/sections/home-manifesto";
import HomeServices from "@/components/sections/home-services";
import HomeGallery from "@/components/sections/home-gallery";
import HomeAbout from "@/components/sections/home-about";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeManifesto />
      <HomeServices />
      <HomeGallery />
      <HomeAbout />

      {/* FOOTER SECTION */}
      <footer className="w-full relative overflow-hidden pt-24 pb-8 text-[var(--color-background)] bg-[var(--color-foreground)]">
        {/* MOBILE: Vertical Big Text */}
        <div
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 text-[12vh] leading-none font-serif opacity-10 select-none pointer-events-none"
          style={{ writingMode: "vertical-rl" }}
        >
          CRER SER
        </div>

        <div className="mx-auto w-full px-6 md:px-12 relative z-10">
          {/* CONTENT AREA */}
          <div className="flex flex-col md:flex-row md:justify-end mb-12 md:mb-4">
            {/* Desktop: Content ocupa 50% da direita */}
            <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-10 md:text-right">
              {/* Coluna 1: Navegação */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs tracking-[0.2em] opacity-60 uppercase mb-2">Menu</h4>
                <nav className="flex flex-col gap-2 font-medium text-sm md:text-base">
                  <Link href="/crianca" className="hover:opacity-70 transition-opacity">
                    Criança
                  </Link>
                  <Link href="/adulto" className="hover:opacity-70 transition-opacity">
                    Adulto
                  </Link>
                  <Link href="/casal" className="hover:opacity-70 transition-opacity">
                    Casal
                  </Link>
                  <Link href="/sobre" className="hover:opacity-70 transition-opacity">
                    Sobre
                  </Link>
                  <Link href="/contato" className="hover:opacity-70 transition-opacity">
                    Contato
                  </Link>
                </nav>
              </div>

              {/* Coluna 2: Contato & Social */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs tracking-[0.2em] opacity-60 uppercase mb-2">Contato</h4>
                <div className="flex flex-col gap-1 opacity-80 text-sm md:text-base">
                  <p>Santa Adélia - SP</p>
                  <p>(17) 99999-9999</p>
                  <a href="mailto:contato@crerser.com.br" className="hover:underline">
                    contato@crerser.com.br
                  </a>
                </div>
              </div>

              {/* Coluna 3: Social */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs tracking-[0.2em] opacity-60 uppercase mb-2">Social</h4>
                <div className="flex flex-col gap-2 font-medium text-sm md:text-base md:items-end md:text-right">
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Instagram
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP: Horizontal Big Text */}
          <div className="hidden md:block w-full text-center mt-12">
            <h1 className="text-[18vw] leading-[0.8] font-serif opacity-10 select-none tracking-tighter">CRER SER</h1>
          </div>

          {/* SEPARATOR & COPYRIGHT */}
          <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 gap-4">
            <p>© 2025 Crer Ser.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}