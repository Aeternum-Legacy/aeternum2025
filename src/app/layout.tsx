//src/app/layout.tsx

import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
// import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import SignUpStickyButton from "@/components/ui/SignUpStickyButton";
import CookieBanner from "@/components/ui/CookieBanner";
import { NavbarDemo } from "@/components/layout/NavBarDemo";
import { Toaster, toast } from "sonner";

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
    <html lang="en" className={`${lato.className}`}>
      <body>
        <NavbarDemo />
        {/* <NavigationBar /> */}
        <div className="mt-10 md:mt-25">{children}</div>
        <SignUpStickyButton />
        <CookieBanner />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
