"use client";

import Image from "next/image";
import { Input } from "../ui/InputCustom";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    gtag: (...args: any[]) => void;
  }
}

export default function SignUpSection() {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agree: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get("first-name")?.toString().trim() || "";
    const lastName = formData.get("last-name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const agree = formData.get("agree");

    const newErrors = {
      firstName: firstName ? "" : "First name is required.",
      lastName: lastName ? "" : "Last name is required.",
      email: email ? "" : "Email is required.",
      agree: agree ? "" : "You must agree to the terms.",
    };

    setErrors(newErrors);
    const missingFields = Object.entries(newErrors)
      .filter(([_, msg]) => msg)
      .map(([key]) => {
        if (key === "firstName") return "first name";
        if (key === "lastName") return "last name";
        if (key === "email") return "email";
        if (key === "agree") return "agreement to the terms";
      });

    if (missingFields.length > 0) {
      const errorMessage = `Please provide your ${missingFields
        .join(", ")
        .replace(/, ([^,]*)$/, " and $1")}.`;
      toast.error(errorMessage);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to sign up.");

      toast.success(data.message || "Successfully signed up!");

      if (typeof window !== "undefined") {
        if (window.fbq) {
          window.fbq("track", "CompleteRegistration");
        }

        if (window.gtag) {
          window.gtag("event", "conversion", {
            send_to: process.env.NEXT_PUBLIC_GTAG_EVENT!,
          });
        }
      }
      form.reset();
      setErrors({ firstName: "", lastName: "", email: "", agree: "" });
    } catch (error: any) {
      toast.error(error.message || "Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="-mt-12 lg:-mt-32 flex flex-col lg:flex-row w-full"
      aria-labelledby="signup-heading"
    >
      <div className="relative w-full h-auto min-h-[600px] lg:min-h-0 bg-[url('/images/tree.png')] bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-20 py-16 lg:px-0 ">
        <div className="absolute inset-0 bg-white/70 z-10" />
        <div className="section-wrapper relative z-10 flex items-center justify-center min-h-full px-4">
          <header className="relative z-20 px-2 sm:px-6 text-black text-center max-w-xl">
            <h4
              id="signup-heading"
              className="mb-4 tracking-tight font-bold lg:font-normal"
            >
              Early Access to Aeternum
            </h4>

            <p className="mb-4">
              Sign up as a Priority User{" "}
              <span className="block lg:inline">
                and get exclusive early access to Aeternum,{" "}
              </span>
              <span className="block lg:inline">launching in 2025.</span>
            </p>

            <p className="mb-4 font-semibold">As a Priority User, you will:</p>

            <ul className="text-left">
              {[
                "Get an exclusive invitation to the Beta Test and shape the future of legacy preservation.",
                "Be the first to experience Aeternum through early access to the final version.",
                "Get exclusive updates on special offers, discount codes, events, and development progress.",
                "Get 50% off during the beta phase, plus 20% off an annual subscription when Aeternum officially launches.",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 tracking-normal leading-normal"
                >
                  <Image
                    src="/icons/list.svg"
                    alt="check icon"
                    width={20}
                    height={20}
                    className="mt-[0.3rem]"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </header>
        </div>
      </div>

      <div
        id="signup"
        className="bg-[#F7F8EA] w-full h-auto min-h-[600px] lg:min-h-0 flex flex-col items-center justify-center"
      >
        <div className="section-wrapper h-full flex flex-col justify-center items-center">
          <Image
            src="/icons/aeternum-logo4.svg"
            alt="Aeternum Logo"
            width={250}
            height={60}
            className="mb-10 mx-auto"
          />
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-5 text-[1rem]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "first-name", label: "First Name" },
                { id: "last-name", label: "Last Name" },
              ].map(({ id, label }) => (
                <div className="relative" key={id}>
                  <label
                    htmlFor={id}
                    className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-sm text-black"
                  >
                    {label}
                  </label>
                  <Input
                    id={id}
                    name={id}
                    type="text"
                    className="bg-[#F6F6E9] text-sm rounded-lg px-3 py-2"
                  />
                </div>
              ))}
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-sm text-black"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                className="bg-[#F6F6E9] text-sm rounded-lg px-3 py-2"
              />
            </div>

            <div className="text-sm space-y-1">
              <div className="flex items-start gap-2 text-left">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  className="w-4 h-4 mt-1"
                />
                <label htmlFor="agree" className="text-sm">
                  By signing up, you agree to Aeternum’s{" "}
                  <Link href="/terms" className="underline text-blue-600">
                    terms
                  </Link>{" "}
                  regarding data collection and usage.
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#186E68] hover:bg-[#2c4a48] text-white px-6 py-2 rounded-full text-base font-medium tracking-wide transition-colors duration-300 flex items-center justify-center relative"
              >
                {loading && (
                  <div className="absolute w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                <span className={loading ? "opacity-0" : "opacity-100"}>
                  Sign Up
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
