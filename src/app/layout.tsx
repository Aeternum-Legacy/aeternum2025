import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import SignUpStickyButton from "@/components/ui/SignUpStickyButton";
import CookieBanner from "@/components/ui/CookieBanner";
import { NavbarDemo } from "@/components/layout/NavBarDemo";
import { Toaster } from "sonner";
import { MobileNavProvider } from "@/context/MobileNavContext";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1596991894262715');
      fbq('track', 'PageView');
    `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1596991894262715&ev=PageView&noscript=1"
          />
        </noscript>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11453881245"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11453881245');
    `}
        </Script>
      </head>

      <body className="bg-pattern">
        <MobileNavProvider>
          <NavbarDemo />
          {/* <div className="fixed top-0 left-0 bg-black text-white text-sm px-2 py-1 z-[9999]">
            <div className="block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden">sm</div>
            <div className="hidden md:block lg:hidden">md</div>
            <div className="hidden lg:block xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block">2xl</div>
          </div> */}
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
