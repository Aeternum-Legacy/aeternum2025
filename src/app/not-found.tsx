import Image from "next/image";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Aeternum",
  description:
    "Sorry, this page is currently under construction. Visit our homepage to explore more.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="page-wrapper relative overflow-hidden bg-pattern">
      <div className="section-wrapper hero-wrapper flex flex-col items-center justify-center text-center min-h-[70vh]">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src="/images/tool-icon.png"
            alt="Spinning Background"
            width={400}
            height={400}
            className="opacity-10 animate-spin-slow"
          />
        </div>

        <div className="relative z-10 w-full max-w-xl">
          <Image
            src="/icons/aeternum-logo4.svg"
            alt="Aeternum logo"
            width={150}
            height={40}
            className="mx-auto mb-6 hidden md:block"
          />

          <h1 className=" font-bold mb-4">Under Construction</h1>

          <div className=" text-gray-600 mb-4 tracking-wider">
            <p>We're working hard to get this page ready.</p>
            <span>
              In the meantime, feel free to explore{" "}
              <LinkPreview
                url="https://aeternum2025.vercel.app/"
                className="underline text-teal-600"
              >
                our homepage
              </LinkPreview>{" "}
              for updates.
            </span>
          </div>

          <div className="flex items-center justify-center rounded-md overflow-hidden max-w-md mx-auto mt-4">
            <img
              src="/gifs/construction.gif"
              alt="Building animation"
              className="w-32 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
