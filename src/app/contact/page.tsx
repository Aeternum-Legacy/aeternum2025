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

export default function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const notes = formData.get("notes");

    if (!firstName || !email) {
      alert("First name and Email are required.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        notes,
      }),
    });

    if (res.ok) {
      alert("Message sent! We'll get back to you soon.");
      form.reset(); // ✅ Safe now
    } else {
      alert("There was a problem. Please try again later.");
    }
  }

  return (
    <section className="text-center tracking-wide bg-pattern">
      <div className="max-w-4xl mx-auto px-6 py-5 md:pt-14 md:pb-8">
        <h1 className="text-4xl md:text-5xl mb-2">Get in Touch</h1>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black mb-8">
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
        </div>

        <p className="text-gray-500 mb-5">
          We want to hear from you. Let us know how we can help.
          <br />
          We'll respond promptly to your inquiries and feedback.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-16 px-4">
        <div className="border rounded-xl p-6 md:w-80 text-left shadow-sm hover:shadow-md transition border-[#979980]">
          <div className="text-3xl mb-8">
            <img src="icons/faq.svg" alt="FAQ" className="w-15 h-15" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">FAQ</h3>
          <p className="text-sm text-gray-600">
            Before reaching out, check our
          </p>
          <Link
            href="/faq"
            className="underline text-teal-700 hover:text-teal-900 transition-colors text-sm"
          >
            Frequently Asked Questions
          </Link>
        </div>

        <div className="border rounded-xl p-6 md:w-80 text-left shadow-sm hover:shadow-md transition border-[#979980]">
          <div className="text-3xl mb-8">
            <img src="icons/news.svg" alt="News" className="w-15 h-15" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">News</h3>
          <p className="text-sm text-gray-600">
            Stay updated with our latest news, insights, and updates on our{" "}
          </p>
          <Link
            href="/news"
            className="underline text-teal-700 hover:text-teal-900 transition-colors text-sm"
          >
            Blog
          </Link>
        </div>
      </div>

      <div>
        <div className="relative flex items-center justify-center min-h-[800px]">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-fit h-[1200px] bg-white opacity-[0.15] rounded-full blur-[300px]" />
            <div className="absolute w-[600px] h-[600px] bg-[#F3FAF9] rounded-full shadow-[0_0_100px_rgba(255,255,255,0.6)] opacity-90" />
          </div>


          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between w-full max-w-md h-[550px] z-10 px-4 py-10"
          >
            <div className="flex justify-center mb-6">
              <img
                src="icons/aeternum-logo4.svg"
                alt="Aeternum Logo"
                className="w-[180px]"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="first-name"
                    className="absolute -top-2 left-3 bg-[#F3FAF9] px-1 text-sm text-black"
                  >
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    name="first-name"
                    type="text"
                    className="bg-[#F3FAF9] border border-black rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="last-name"
                    className="absolute -top-2 left-3 bg-[#F3FAF9] px-1 text-sm text-black"
                  >
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    name="last-name"
                    type="text"
                    className="bg-[#F3FAF9] border border-black rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-3 bg-[#F3FAF9] px-1 text-sm text-black"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="bg-[#F3FAF9] border border-black rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="notes"
                  className="absolute -top-2 left-3 bg-[#F3FAF9] px-1 text-sm text-black"
                >
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={8} // <-- made it taller
                  placeholder=""
                  className="w-full bg-[#F3FAF9] border border-black rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full text-lg tracking-wider font-medium transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  explanation,
  link,
  linkText,
}: {
  icon: string;
  title: string;
  explanation: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="border rounded-xl p-6 md:w-80 text-left shadow-sm hover:shadow-md transition border-[#979980]">
      <div className="text-3xl mb-8">
        <img src={icon} alt={title} className="w-15 h-15" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      <p className="text-sm text-gray-600">
        {explanation}{" "}
        <Link
          href={link}
          className="underline text-teal-700 hover:text-teal-900 transition-colors"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
}
