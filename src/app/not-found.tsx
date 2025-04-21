import Image from "next/image";
import { LinkPreview } from "@/components/ui/LinkPreview";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 text-center py-32 overflow-hidden">
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
          className="mx-auto mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Under Construction
        </h1>

        <div className="text-base text-gray-600 mb-4 tracking-wider">
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

        {/* Animated construction GIF */}
        <div className="flex items-center justify-center rounded-md overflow-hidden max-w-md mx-auto mt-4">
          <img
            src="/gifs/construction.gif"
            alt="Building animation"
            className="w-32 h-auto"
          />
        </div>
      </div>

      <footer className="relative z-10 mt-16 text-xs text-gray-400">
        © {new Date().getFullYear()} Aeternum. All rights reserved.
      </footer>
    </div>
  );
}
