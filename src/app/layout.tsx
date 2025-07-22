//File: src/app/layout.tsx
import { lato } from "@/app/font";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
