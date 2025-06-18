"use client";

import Image from "next/image";
import BrevoFixedForm from "../brevo/BrevoFixedForm";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    gtag: (...args: any[]) => void;
  }
}

export default function SignUpSection() {
  return (
    <section
      className="lg:-mt-12 w-full relative h-fit lg:h-[550px]"
      aria-labelledby="signup-heading"
    >
      <div className="lg:mx-8 flex flex-col lg:flex-row overflow-hidden lg:rounded-3xl bg-[#F7F8EA] h-full lg:p-4">
        <div
          className="lg:w-1/2 relative flex items-center justify-center lg:rounded-3xl shadow-[4px_8px_8px_rgba(0,0,0,0.38)] overflow-hidden bg-cover bg-center min-h-[520px] lg:min-h-0 lg:h-full"
          style={{ backgroundImage: "url('/images/tree.png')" }}
        >
          <div className="absolute inset-0 bg-[#F7F8EA]/80 w-full h-full lg:rounded-3xl" />

          <div className="relative z-10 flex flex-col justify-center items-center text-black text-center px-4 py-8 lg:py-4 w-full h-full">
            <h4
              id="signup-heading"
              className="mb-4 font-bold lg:font-normal tracking-tight"
            >
              Early Access to Aeternum
            </h4>
            <p className="mb-4">
              Sign up as an Early Adopter and get exclusive early access to
              Aeternum.
            </p>
            <p className="mb-4 font-semibold">As an Early Adopter, you will:</p>
            <ul className="text-left max-w-lg">
              {[
                "Get an exclusive invitation to the Beta Test and shape the future of legacy preservation.",
                "Be the first to experience Aeternum through early access to the final version.",
                "Get exclusive updates on special offers, discount codes, events, and development progress.",
                "Get 50% off during the beta phase, plus 20% off an annual subscription when Aeternum officially launches.",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 leading-normal tracking-normal mb-2"
                >
                  <Image
                    src="/icons/list.svg"
                    alt="check icon"
                    width={20}
                    height={20}
                    className="mt-[0.3rem]"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          id="signup"
          className="lg:w-1/2 flex items-center justify-center overflow-hidden h-full"
        >
          <div className="flex justify-center items-center w-full h-full">
            <BrevoFixedForm />
          </div>
        </div>
      </div>
    </section>
  );
}
