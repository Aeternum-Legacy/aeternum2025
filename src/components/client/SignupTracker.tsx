"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function SignupTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const signup = searchParams.get("signup");

    if (signup === "1") {
      window.gtag?.("event", "brevo_signup_success", {
        event_category: "engagement",
        event_label: "signup",
        value: 1,
      });

      toast.success("Thank you for signing up!");

      const url = new URL(window.location.href);
      url.searchParams.delete("signup");
      window.history.replaceState({}, "", url.toString());
    }
  }, [searchParams]);

  return null;
}
