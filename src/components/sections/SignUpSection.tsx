"use client";

import Image from "next/image";

export default function SignUpSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
    };

    fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => alert(res.message))
      .catch((err) => alert("Failed to sign up"));
  }

  return (
    <section
      className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1
                 h-auto lg:h-[700px] mb-10"
      id="signup"
    >
      {/* Left: Tree + Text */}
      <div className="relative">
        {/* Background image */}
        <div className="relative h-[700px] w-full">
          {/* or any fixed height */}
          <Image
            src="/images/tree.png"
            alt="Tree"
            fill
            className="object-cover"
          />
        </div>
        {/* White overlay for mobile only */}
        <div className="absolute inset-0 bg-white/50 block lg:hidden z-10" />

        {/* Text Content */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-start
                     mt-10 px-4 sm:px-10 text-black"
        >
          <h2 className="text-3xl md:text-[42px] mb-3 tracking-tighter text-center md:text-left">
            Early Access to
            <span className="inline-flex items-center ml-1">
              Aeternum
              <img
                src="/icons/trademark.png"
                alt="Trademark"
                className="w-4 h-4 ml-1 relative -mt-4"
              />
            </span>
          </h2>

          <p className="mb-3 text-center md:text-left tracking-tight max-w-[90%] md:max-w-full">
            Sign up as a private user and get exclusive access to Aeternum,
            launching in 2025.
          </p>

          <p className="tracking-tight mb-3">As a Priority User, you will:</p>

          <ul className="ml-5 space-y-2 tracking-tight max-w-[95%] md:max-w-full text-sm">
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

      {/* Right: Form */}
      <div className="bg-[#F7F8EA] flex flex-col items-center justify-center px-6 sm:px-20 py-10">
        <img
          src="/icons/aeternum-logo4.svg"
          alt="Aeternum Logo"
          className="w-[200px] sm:w-[250px] mb-10"
        />

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label
                htmlFor="first-name"
                className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-sm text-black"
              >
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                className="border border-black p-3 pt-5 rounded-md w-full bg-transparent"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="last-name"
                className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-sm text-black"
              >
                Last Name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                className="border border-black p-3 pt-5 rounded-md w-full bg-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-sm text-black"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border border-black p-3 pt-5 rounded-md w-full bg-transparent"
            />
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="agree" className="w-4 h-4 mt-[0.2rem]" />
            <label htmlFor="agree" className="leading-snug">
              By signing up, you agree to Aeternum’s&nbsp;
              <a href="#" className="underline text-blue-600">
                terms
              </a>{" "}
              regarding data collection and usage.
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#186E68] hover:bg-[#2c4a48]
                         text-white px-6 py-2 rounded-full
                         text-lg tracking-wider font-medium
                         transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
