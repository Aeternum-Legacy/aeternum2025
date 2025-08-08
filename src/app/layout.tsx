//File: src/app/layout.tsx
import { lato } from "@/app/font";
import "./globals.css";
import Head from "./(site)/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <Head />
        {children}
      </body>
    </html>
  );
}
