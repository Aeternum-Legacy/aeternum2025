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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        {/* Brevo form styles */}
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />

        {/* Facebook Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        {/* Google Analytics / Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            ${
              process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
                ? `gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');`
                : ""
            }
          `}
        </Script>

        {/* Brevo Popup SDK */}
        <Script
          src="https://cdn.brevo.com/js/sdk-loader.js"
          strategy="afterInteractive"
          async
        />
        <Script id="brevo-init" strategy="afterInteractive">
          {`
            window.Brevo = window.Brevo || [];
            Brevo.push([
              "init",
              {
                client_key: "${process.env.NEXT_PUBLIC_BREVO_CLIENT_KEY}",
                popup: {
                  url: "/brevo-frame.html",
                  trigger: "auto",
                  delay: 1000
                }
              }
            ]);
            Brevo.push(["showForm"]);
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
      </head>

      <body className="bg-pattern">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
      </body>
    </html>
  );
}
