//src/app/layout.tsx

import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import SignUpStickyButton from "@/components/ui/SignUpStickyButton";
import CookieBanner from "@/components/ui/CookieBanner";
import { NavbarDemo } from "@/components/layout/NavBarDemo";
import { Toaster } from "sonner";
import { MobileNavProvider } from "@/context/MobileNavContext";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aeternum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body className="bg-pattern">
        <MobileNavProvider>
          <NavbarDemo />
          <div className="fixed top-0 left-0 bg-black text-white text-sm px-2 py-1 z-[9999]">
            <div className="block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden">sm</div>
            <div className="hidden md:block lg:hidden">md</div>
            <div className="hidden lg:block xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block">2xl</div>
          </div>
          {children}
          <SignUpStickyButton />
          <CookieBanner />
          <Toaster />
          <Footer />
        </MobileNavProvider>
      </body>
    </html>
  );
}
