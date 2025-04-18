import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-6 md:rounded-3xl md:m-3">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Image
          src="/icons/aeternum-logo.svg"
          alt="Logo"
          width={130}
          height={40}
        />
      </div>

      {/* Call to Action */}
      <div
        className="flex flex-col md:flex-row items-center justify-center md:justify-between
                   gap-3 md:gap-6 border-b border-white/40 pb-4 text-center md:text-left"
      >
        <h2 className="text-2xl font-light max-w-[90%]">
          Ready to turn your memories into a lasting legacy?
        </h2>
        <button
          className="rounded-full border border-white px-6 py-1
                     hover:bg-white hover:text-black
                     transition-colors duration-200"
        >
          Join Beta Now
        </button>
      </div>

      {/* Navigation + Social */}
      <div
        className="flex flex-col md:flex-row justify-between pt-8 gap-10
                   items-center md:items-start text-center md:text-left"
      >
        {/* Navigation */}
        <div
          className="w-full md:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
                     text-sm gap-y-10 sm:gap-y-6 place-items-center md:place-items-start"
        >
          <div className="hidden md:block">
            <h3 className="font-bold mb-2 text-xl md:text-lg">Home</h3>
          </div>

          {[
            {
              title: "Company",
              links: ["About Us", "Career"],
            },
            {
              title: "Product",
              links: ["Pricing Information", "FAQ"],
            },
            {
              title: "Updates",
              links: ["News", "Development Progress"],
            },
            {
              title: "Support",
              links: ["Contact", "Sign Up"],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-bold mb-2 text-xl md:text-lg">{title}</h3>
              <ul className="space-y-2 text-base md:text-sm indent-6 md:indent-0">
                {links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className={label === "Development Progress" ? "whitespace-nowrap" : ""}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:flex-col items-center gap-4">
          {[
            { icon: "facebook", alt: "Facebook" },
            { icon: "instagram", alt: "Instagram" },
            { icon: "linkedin", alt: "LinkedIn" },
            { icon: "youtube", alt: "YouTube" },
          ].map(({ icon, alt }) => (
            <Link href="#" key={icon}>
              <img
                src={`/icons/${icon}.svg`}
                alt={alt}
                className="w-5 h-5"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Legal */}
      <div
        className="flex flex-col items-center justify-center gap-2 pt-6 mt-6
                   text-xs border-t border-white/40 text-center"
      >
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="#">Terms & Conditions</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="#">Privacy Policy</Link>
        </div>
        <p className="italic">©2025 Aeternum Corp. All rights reserved.</p>
      </div>
    </footer>
  );
}
