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
      if (!res.ok) throw new Error(data.message || "Failed to sign up.");

      toast.success(data.message || "Successfully signed up!");
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
      id="signup"
      className="flex flex-col md:flex-row mb-10"
      aria-labelledby="signup-heading"
    >
      <div className="content-wrapper relative w-full md:w-1/2 h-[450px] md:h-auto md:min-h-[700px] overflow-hidden">
        <Image
          src="/images/tree.png"
          alt="Tree"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-white/70 md:bg-white/50 block lg:hidden z-10" />

        <header className="absolute inset-0 z-20 mt-10 px-4 sm:px-10 text-black flex flex-col justify-start items-center text-center">
          <h4
            id="signup-heading"
            className="mb-4 tracking-tight font-bold md:font-normal"
          >
            Early Access to Aeternum
          </h4>

          <p className="mb-4">
            Sign up as a priority user
            <span className="block md:inline">
              and get exclusive early access to Aeternum,
            </span>
            <span className="block md:inline">launching in 2025.</span>
          </p>

          <p className="mb-4 font-semibold md:font-normal">
            As a Priority User, you will:
          </p>

          <ul className="ml-5 space-y-2 text-[1rem] tracking-wide text-left max-w-[95%] md:max-w-lg">
            {[
              "Be among the first to experience Aeternum with an exclusive Beta launch invitation.",
              "Be the first to experience Aeternum’s new approach to memory preservation.",
              "Get exclusive updates on special offers, discount codes, events, and development progress.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Image
                  src="/icons/list.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                  className="mt-[0.2rem]"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </header>
      </div>

      <div className="bg-[#F7F8EA] content-wrapper w-full md:w-1/2 md:min-h-[700px] flex flex-col items-center justify-center px-4 sm:px-20 py-16">
        <Image
          src="/icons/aeternum-logo4.svg"
          alt="Aeternum Logo"
          width={250}
          height={60}
          className="mb-10"
        />

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 text-[1rem]"
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
                  className="bg-[#F6F6E9] text-sm rounded-md px-3 py-2"
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
              className="bg-[#F6F6E9] text-sm rounded-md px-3 py-2"
            />
          </div>

          <div className="text-sm space-y-1">
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
    </section>
  );
}
