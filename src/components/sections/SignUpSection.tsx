"use client";

import Image from "next/image";
import { Input } from "../ui/Input";
import { useState } from "react";
import { toast } from "sonner";

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

      if (!res.ok) {
        throw new Error(data.message || "Failed to sign up.");
      }

      toast.success(data.message || "Successfully signed up!");

      form.reset();
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        agree: "",
      });
    } catch (error: any) {
      toast.error(error.message || "Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="signup"
      className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-[700px] mb-10"
    >
      <div className="relative">
        <div className="relative h-full w-full">
          <Image
            src="/images/tree.png"
            alt="Tree"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/70 md:bg-white/50 block lg:hidden z-10" />

        <div className="absolute inset-0 z-20 mt-10 px-4 sm:px-10 text-black flex flex-col justify-start items-center">
          <h2 className="text-3xl md:text-[42px] mb-3 tracking-tighter text-center md:text-left">
            Early Access to{" "}
            <span className="inline-flex items-center ml-1">Aeternum™</span>
          </h2>
          <p className="mb-3 text-center md:text-left tracking-tight max-w-[90%] md:max-w-full">
            Sign up as a private user and get exclusive access to Aeternum,
            launching in 2025.
          </p>
          <p className="tracking-tight mb-3">As a Priority User, you will:</p>
          <ul className="ml-5 space-y-2 text-sm tracking-tight max-w-[95%] md:max-w-full">
            {[
              "Be among the first to experience Aeternum with an exclusive Beta launch invitation.",
              "Be the first to experience Aeternum’s new approach to memory preservation.",
              "Get exclusive updates on special offers, discount codes, events, and development progress.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img
                  src="/icons/list.svg"
                  alt="bullet"
                  className="w-4 h-4 mt-[0.2rem]"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#F7F8EA] h-full flex flex-col items-center justify-center px-4 sm:px-20 py-6">
        <img
          src="/icons/aeternum-logo4.svg"
          alt="Aeternum Logo"
          className="hidden sm:block w-[250px] mb-10"
        />

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 sm:space-y-5 text-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="relative">
              <label
                htmlFor="first-name"
                className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-xs sm:text-sm text-black"
              >
                First Name
              </label>
              <Input
                id="first-name"
                name="first-name"
                type="text"
                className="bg-[#F6F6E9] text-sm rounded-md px-3 py-2"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="last-name"
                className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-xs sm:text-sm text-black"
              >
                Last Name
              </label>
              <Input
                id="last-name"
                name="last-name"
                type="text"
                className="bg-[#F6F6E9] text-sm rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-xs sm:text-sm text-black"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              className="bg-[#F6F6E9] text-sm rounded-md px-3 py-2"
            />
          </div>

          <div className="text-xs sm:text-sm space-y-1">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="w-4 h-4 mt-[0.2rem]"
              />
              <label htmlFor="agree" className="leading-snug">
                By signing up, you agree to Aeternum’s{" "}
                <a href="/terms" className="underline text-blue-600">
                  terms
                </a>{" "}
                regarding data collection and usage.
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-[#186E68] hover:bg-[#2c4a48] text-white px-6 py-2 rounded-full text-base sm:text-lg tracking-wide font-medium transition-colors duration-300 flex items-center justify-center relative"
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
    </section>
  );
}
