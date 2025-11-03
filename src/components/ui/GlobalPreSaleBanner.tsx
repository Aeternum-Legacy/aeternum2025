"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function GlobalPreSaleBanner() {
  const [visible, setVisible] = useState(true);
  // The banner is visible by default. If you want to hide it on certain
  // routes (marketing pages), we'll detect pathname instead of relying on
  // DOM markers; keeping the banner always visible avoids accidental
  // client-side hiding.

  // expose the banner height + gap via a CSS variable so fixed navbars can offset
  useEffect(() => {
    const el = document.getElementById("global-presale-banner");
    const GAP = 6; // px gap between banner and navbar (reduced)
    const setVar = () => {
      const height = el ? `${el.offsetHeight}px` : "0px";
      const gap = `${GAP}px`;
      document.documentElement.style.setProperty(
        "--pre-sale-banner-height",
        height
      );
      document.documentElement.style.setProperty("--pre-sale-gap", gap);
      // also push page content down so there's a persistent gap under the fixed banner
      try {
        (
          document.body as HTMLBodyElement
        ).style.paddingTop = `calc(var(--pre-sale-banner-height, 0px) + var(--pre-sale-gap, ${gap}))`;
      } catch (e) {
        /* ignore */
      }
    };

    setVar();
    window.addEventListener("resize", setVar);
    return () => {
      window.removeEventListener("resize", setVar);
      document.documentElement.style.setProperty(
        "--pre-sale-banner-height",
        "0px"
      );
      document.documentElement.style.setProperty("--pre-sale-gap", "0px");
      try {
        (document.body as HTMLBodyElement).style.paddingTop = "0px";
      } catch (e) {
        /* ignore */
      }
    };
  }, []);

  return (
    <div
      id="global-presale-banner"
      className="fixed top-0 left-0 w-full text-white"
      style={{
        zIndex: 70,
        background: "linear-gradient(90deg, #3A68B3 0%, #6CDDD3 100%)",
      }}
      role="banner"
    >
      <div className="mx-auto flex items-center justify-center py-3">
        <Link href="/alpha/presale" className="font-semibold text-lg">
          Pre-Sale: 75% Off
        </Link>
      </div>
    </div>
  );
}
