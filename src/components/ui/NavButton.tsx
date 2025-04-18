"use client";

import { useRouter } from "next/navigation";

export default function NavButton() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/#signup");
  };
  return (
    <button
      className="rounded-full border px-4 py-1 hover:bg-white hover:border-white transition-colors duration-300 ease-in-out flex items-center gap-2 text-white hover:text-black hover:font-semibold"
      onClick={handleButtonClick}
    >
      <p className=" text-base font-light tracking-normal">Sign Up</p>
    </button>
  );
}
