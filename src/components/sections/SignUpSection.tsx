"use client";
import Image from "next/image";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    gtag: (...args: any[]) => void;
  }
}

export default function SignUpSection() {
  return (
    <section aria-labelledby="signup-heading" className="w-full h-fit">
      <div
        className="
      lg:mx-8 overflow-hidden lg:rounded-3xl
      bg-[#F7F8EA] h-fit
    "
      >
        <div
          className="
        relative flex items-center justify-center 
        shadow-[4px_8px_8px_rgba(0,0,0,0.38)] overflow-hidden bg-cover bg-center
        min-h-[320px] py-12
      "
          style={{ backgroundImage: "url('/images/tree.png')" }}
        >
          <div className="absolute inset-0 bg-[#F7F8EA]/80 w-full h-full " />
          <div className="relative z-10 flex flex-col justify-center items-center text-black px-8 py-8 w-full h-full max-w-7xl mx-auto">
            <h4
              id="signup-heading"
              className="mb-8 font-bold lg:font-normal tracking-tight text-center"
            >
              Early Access to Aeternum
            </h4>
            <div>
              <h5 className="font-semibold text-lg mb-2">Supporter Benefit:</h5>
              <p className="text-sm" style={{ marginBottom: "48px" }}>
                As a Founding Supporter, you get immediate access to the Alpha
                platform and a first-in-line pass to all new features as they
                roll out!
              </p>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              <div>
                <h5 className="font-semibold text-lg mb-2">
                  Available at Alpha Launch (This November):
                </h5>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>
                    2 TB Secure Storage for photos, videos, audio, & PDF files
                  </li>
                  <li>Private Digital Vault with end-to-end encryption</li>
                  <li>Family Connections</li>
                  <li>Curated Profiles for a loved one</li>
                  <li>Privacy Circles (Standard Version)</li>
                  <li>Ad-Free & Privacy-First experience</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-lg mb-2">
                  Coming Soon (Rolling out in the next 2 months!):
                </h5>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Family Tree Integration</li>
                  <li>Share with 5 Family Members</li>
                  <li>Native Mobile Version for iOS and Android</li>
                  <li>File Management System</li>
                  <li>Timeline Memory View</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-lg mb-2">
                  Enhanced Memory & Legacy Suite:
                </h5>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Customizable Privacy Circles</li>
                  <li>Memory Collections & Chain Memory System</li>
                  <li>Memory Integrated File Management System</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-lg mb-2">
                  Coming Soon to Aeternum Beta (Q1 2026):
                </h5>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Aeternum Legacy Messages</li>
                  <li>Digital Inheritance Management System</li>
                  <li>In App Recorded Voice Notes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
