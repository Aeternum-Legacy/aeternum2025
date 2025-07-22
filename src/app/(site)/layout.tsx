//File: src/app/(site)/layout.tsx
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";

import Footer from "@/components/layout/Footer";
import SignUpStickyButton from "@/components/ui/SignUpStickyButton";
import CookieBanner from "@/components/ui/CookieBanner";
import { NavbarDemo } from "@/components/layout/NavBarDemo";
import { Toaster } from "sonner";
import { MobileNavProvider } from "@/context/MobileNavContext";
import Script from "next/script";

import SignupTracker from "@/components/client/SignupTracker";
import { Suspense } from "react";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memory Preservation & Digital Legacy Platform – Aeternum",
  description:
    "Aeternum helps families preserve memories, share stories, and plan secure digital inheritance for future generations.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-pattern ${lato.className}`}>
      <MobileNavProvider>
        <NavbarDemo />
        <Suspense fallback={null}>
          <SignupTracker />
        </Suspense>
        {children}
        <SignUpStickyButton />
        <CookieBanner />
        <Toaster />
        <Footer />
      </MobileNavProvider>
    </div>
  );
}
