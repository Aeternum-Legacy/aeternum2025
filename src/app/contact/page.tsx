"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("first-name")?.toString().trim() || "";
    const lastName = formData.get("last-name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const notes = formData.get("notes")?.toString().trim() || "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, notes }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Submission failed.");

      toast.success(
        "Your message has been sent. We'll get back to you shortly."
      );
      form.reset();
    } catch (err: any) {
      toast.error(
        "Something went wrong. Please try again later or email us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page-wrapper bg-pattern overflow-x-hidden relative">
      <div className="section-wrapper relative z-10">
        <div className="content-wrapper">
          <header>
            <h1 className="text-center mb-6 text-nowrap">Get in Touch</h1>
          </header>

          {/* <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black mb-8">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md transition">
                  <img src="/icons/sns.png" alt="SNS" className="w-5 h-5" />
                  SNS
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Social Media</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.facebook.com/profile.php?id=100093069313770"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.instagram.com/aeternumlegacyproject/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.linkedin.com/company/aeternum-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://youtu.be/83ONjbzulhY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="mailto:media@aeternumproject.com"
              className="flex items-center gap-2 text-sm text-black hover:underline"
            >
              <img src="/icons/arroba.png" alt="Email" className="w-5 h-5" />
              <span>media@aeternumproject.com</span>
            </a>
          </div> */}

          <p className="text-center text-gray-500 mb-10">
            We want to hear from you and
            <br />
            will endeavor to respond to your inquiries and feedback promptly.
          </p>

          <div className="flex items-center justify-center w-full">
            {/* Circle wrapper */}
            <div className="w-full max-w-md sm:max-w-[500px] sm:aspect-square sm:rounded-full sm:bg-[#F3FAF9] sm:shadow-xl sm:flex sm:items-center sm:justify-center">
              {/* Inner wrapper to center the form inside the circle */}
              <div className="w-full h-full sm:w-[80%] sm:h-[80%] sm:flex sm:flex-col sm:items-center sm:justify-center">
                <form
                  onSubmit={handleContactSubmit}
                  className="flex flex-col w-full z-10 gap-4"
                >
                  <div className="flex justify-center">
                    <img
                      src="/icons/aeternum-logo4.svg"
                      alt="Aeternum Logo"
                      className="w-[140px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label
                        htmlFor="first-name"
                        className="absolute -top-2 left-3 bg-white sm:bg-[#F3FAF9] px-1 text-sm text-black"
                      >
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        name="first-name"
                        type="text"
                        className="bg-white sm:bg-[#F3FAF9] border border-black rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="last-name"
                        className="absolute -top-2 left-3 bg-white sm:bg-[#F3FAF9] px-1 text-sm text-black"
                      >
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        name="last-name"
                        type="text"
                        className="bg-white sm:bg-[#F3FAF9] border border-black rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="absolute -top-2 left-3 bg-white sm:bg-[#F3FAF9] px-1 text-sm text-black"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="bg-white sm:bg-[#F3FAF9] border border-black rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="notes"
                      className="absolute -top-2 left-3 bg-white sm:bg-[#F3FAF9] px-1 text-sm text-black"
                    >
                      Feedback
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      className="w-full bg-white sm:bg-[#F3FAF9] border border-black rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#186E68] hover:bg-[#2c4a48] text-white px-6 py-2 rounded-full text-lg tracking-wider font-medium transition-colors duration-300 flex items-center justify-center relative"
                    >
                      {loading && (
                        <div className="absolute w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      )}
                      <span className={loading ? "opacity-0" : "opacity-100"}>
                        Submit
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
