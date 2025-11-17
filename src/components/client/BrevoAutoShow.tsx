"use client";

import { useEffect } from "react";

export default function BrevoAutoShow() {
  useEffect(() => {
    try {
      const key = "brevo_shown_session";
      if (sessionStorage.getItem(key)) return;

      const tryShow = () => {
        // Wait for Brevo to be available
        if (typeof window === "undefined") return;
        // @ts-ignore
        if (window.Brevo && typeof window.Brevo.push === "function") {
          // showForm will open the popup
          // @ts-ignore
          window.Brevo.push(["showForm"]);
          sessionStorage.setItem(key, "1");
        } else {
          // Retry a couple times if script hasn't loaded yet
          setTimeout(tryShow, 500);
        }
      };

      tryShow();
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
