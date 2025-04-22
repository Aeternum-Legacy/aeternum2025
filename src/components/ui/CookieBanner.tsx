"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setShowBanner(false);
  };

  const handleLearnMore = () => {
    window.open("/cookie-policy", "_blank");
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 w-full max-w-[860px] bg-white rounded-2xl px-6 py-4 text-sm flex items-center justify-between shadow-[0px_10px_14px_4px_rgba(0,_0,_0,_0.1)]
"
    >
      <div className="flex items-start gap-3 max-w-[75%]">
        <img src="/icons/cookie.svg" alt="Cookie Icon" className="w-10 h-10" />{" "}
        <p className="text-black tracking-wide">
          We use cookies to ensure our website functions properly and to improve
          your experience. By clicking ‘Accept All,’ you agree to our use of
          cookies.
        </p>
      </div>

      <div className="flex-shrink-0 flex overflow-hidden gap-4">
        <button
          onClick={handleAccept}
          className="bg-[#106B67] hover:bg-[#0b5552] text-white px-5 py-2.5"
          style={{ borderRadius: "100px 50px 50px 100px" }}
        >
          Accept All
        </button>

        <button
          onClick={handleLearnMore}
          className="bg-[#E2E2E2] hover:bg-[#d4d4d4] text-black px-5 py-2.5"
          style={{ borderRadius: "50px 100px 100px 50px" }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
