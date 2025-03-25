import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

const lato = Lato({
  weight: ["400", "700"],
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
      <body>{children}</body>
    </html>
  );
}
