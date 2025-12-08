import type { Metadata } from "next";
import SmoothScroller from "@/components/providers/smooth-scroller";
import Navbar from "@/components/layout/navbar";
import Preloader from "@/components/layout/preloader";
import CustomScrollbar from "@/components/ui/custom-scrollbar";
import AuroraBackground from "@/components/ui/aurora-background";
import {
  Cormorant_Garamond,
  Italianno,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRER SER | Clínica Boutique",
  description:
    "Clínica de Psicologia Boutique com foco sistêmico e infantil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${italianno.variable} antialiased`}
      >
        <SmoothScroller>
          <Preloader />
          <AuroraBackground variant="default" />
          <Navbar />
          {children}
          <CustomScrollbar />
        </SmoothScroller>
      </body>
    </html>
  );
}
