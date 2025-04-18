import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import SignUpStickyButton from "@/components/ui/SignUpStickyButton";
// import { headers } from "next/headers";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aeternum",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.className}`}>
      <body>
        <NavigationBar />
        {children}
        <SignUpStickyButton />
        <Footer />
      </body>
    </html>
  );
}
