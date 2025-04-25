"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

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
    <div className="fixed bottom-6 left-4 right-4 md:left-6 md:right-auto z-50 w-auto md:w-full max-w-[860px] bg-white rounded-2xl px-4 md:px-6 py-4 text-sm shadow-[0px_10px_14px_4px_rgba(0,_0,_0,_0.1)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:max-w-[75%]">
          <img
            src="/icons/cookie.svg"
            alt="Cookie Icon"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <p className="text-black tracking-wide">
            We use cookies to ensure our website functions properly and to
            improve your experience. By clicking ‘Accept All,’ you agree to our
            use of cookies.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="bg-[#106B67] hover:bg-[#0b5552] text-white px-5 py-2.5 w-32"
            style={{ borderRadius: "100px 50px 50px 100px" }}
          >
            Accept All
          </button>

          <button
            onClick={handleLearnMore}
            className="bg-[#E2E2E2] hover:bg-[#d4d4d4] text-black px-5 py-2.5 w-32"
            style={{ borderRadius: "50px 100px 100px 50px" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
