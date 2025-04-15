import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-5 md:rounded-3xl md:m-3">
      <div className="flex justify-center">
        <Image
          src="/icons/aeternum-logo.svg"
          alt="Logo"
          width={130}
          height={40}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 border-b border-white/40 pb-3 mt-3">
        <h2 className="text-2xl text-center md:text-left font-light">
          Ready to turn your memories into a lasting legacy?
        </h2>
        <button className="rounded-full border border-white px-6 py-1 hover:bg-white hover:text-black transition">
          Join Beta Now
        </button>
      </div>

      <div className="flex flex-row justify-between py-13 gap-8">
        <div className="w-full md:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  text-sm gap-6">
          <div className="hidden md:block">
            <h3 className="font-bold mb-2 text-xl md:text-lg">Home</h3>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-xl md:text-lg">Company</h3>
            <ul className="space-y-2 indent-8 md:indent-0 text-lg md:text-sm">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-xl md:text-lg">Product</h3>
            <ul className="space-y-2 indent-8 md:indent-0 text-lg md:text-sm">
              <li>
                <Link href="#">Pricing Information</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-xl md:text-lg">Updates</h3>
            <ul className="space-y-2 indent-8 md:indent-0 text-lg md:text-sm">
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Development Progress</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-xl md:text-lg">Support</h3>
            <ul className="space-y-2 indent-8 md:indent-0 text-lg md:text-sm">
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-end justify-end gap-4">
          <Link href="#">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
          </Link>
          <Link href="#">
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="w-5 h-5"
            />
          </Link>
          <Link href="#">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          </Link>
          <Link href="#">
            <img src="/icons/youtube.svg" alt="YouTube" className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-between items-center pt-6 text-xs gap-2 border-t border-white/40">
        <div className="flex space-x-4">
          <Link href="#">Terms & Conditions</Link>
          <span>|</span>
          <Link href="#">Privacy Policy</Link>
        </div>
        <p className="italic">©2025 Aeternum Corp. All rights reserved.</p>
      </div>
    </footer>
  );
}
