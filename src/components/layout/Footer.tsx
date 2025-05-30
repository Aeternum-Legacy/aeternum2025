import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-6">
      <div className="flex justify-center mb-6">
        <Image
          src="/icons/Aeternum_logo_TM_white.svg"
          alt="Aeternum Logo"
          width={130}
          height={40}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 border-b border-white/40 pb-6 text-center lg:text-left px-4 md:px-10">
        <h5 className="font-light leading-snug max-w-[80%]">
          Ready to turn your memories into a lasting legacy?
        </h5>
        <Link href="/#signup">
          <button className="font-medium px-6 py-2 border border-white rounded-full transition-colors duration-200 hover:bg-white hover:text-black">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between pt-10 gap-10 items-center md:items-start text-center md:text-left px-4 md:px-10">
        <div className="w-full md:w-[90%] xl:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 md:gap-x-5">
          {[
            {
              title: "Company",
              links: [
                { label: "About Us", href: "/about" },
                { label: "Career", href: "/career" },
              ],
            },
            {
              title: "Product",
              links: [
                { label: "Pricing Information", href: "/pricing" },
                { label: "FAQ", href: "/faq" },
              ],
            },
            {
              title: "Updates",
              links: [
                { label: "News", href: "/news" },
                {
                  label: "Development Progress",
                  href: "/development-progress",
                },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Contact", href: "/contact" },
                { label: "Sign Up", href: "/#signup" },
              ],
            },
          ].map(({ title, links }) => (
            <div
              key={title}
              className="flex flex-col w-full min-w-0 items-center md:items-start text-center md:text-left break-words"
            >
              <h6 className="font-bold mb-4 break-words">{title}</h6>
              <ul className="space-y-3 break-words">
                {links.map(({ label, href }) => (
                  <li key={label} className="tracking-normal leading-normal">
                    <Link
                      href={href}
                      className="block break-words whitespace-normal leading-snug"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-start lg:justify-end items-center gap-4">
          {[
            {
              icon: "facebook",
              alt: "Facebook",
              link: "https://www.facebook.com/profile.php?id=100093069313770",
            },
            {
              icon: "instagram",
              alt: "Instagram",
              link: "https://www.instagram.com/aeternumlegacyproject/",
            },
            {
              icon: "linkedin",
              alt: "LinkedIn",
              link: "https://www.linkedin.com/company/aeternum-project",
            },
            {
              icon: "youtube",
              alt: "YouTube",
              link: "https://youtu.be/83ONjbzulhY",
            },
          ].map(({ icon, alt, link }) => (
            <Link href={link} key={icon}>
              <img src={`/icons/${icon}.svg`} alt={alt} className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 pt-8 mt-10 border-t border-white/40 text-center px-4 md:px-10">
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="/terms">Terms & Conditions</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <p className="italic">©2025 Aeternum Corp. All rights reserved.</p>
      </div>
    </footer>
  );
}
