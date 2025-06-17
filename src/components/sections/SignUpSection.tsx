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
      className="-mt-12 w-full relative h-fit"
      aria-labelledby="signup-heading"
    >
      <div className="md:m-8 flex flex-col md:flex-row overflow-hidden rounded-3xl bg-[#F7F8EA] md:min-h-[650px]">
        <div className="md:flex-[2] flex flex-col justify-center items-center md:px-4 xl:px-36 bg-[url('/images/tree-fullwidth.jpg')] bg-cover bg-center rounded-3xl m-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <div className="flex justify-center items-center min-h-full">
            <header
              className="text-black text-center px-6 py-10  rounded-3xl"
              style={{ backgroundColor: "rgba(247, 248, 234, 0.5)" }}
            >
              <h4
                id="signup-heading"
                className="mb-4 font-bold lg:font-normal tracking-tight"
              >
                Early Access to Aeternum
              </h4>
              <p className="mb-4">
                Sign up as an Early Member{" "}
                <span className="block lg:inline">
                  and get exclusive early access to Aeternum,
                </span>
                <span className="block lg:inline">launching in 2025.</span>
              </p>
              <p className="mb-4 font-semibold">
                As an Early Member, you will:
              </p>
              <ul className="text-left">
                {[
                  "Get an exclusive invitation to the Beta Test and shape the future of legacy preservation.",
                  "Be the first to experience Aeternum through early access to the final version.",
                  "Get exclusive updates on special offers, discount codes, events, and development progress.",
                  "Get 50% off during the beta phase, plus 20% off an annual subscription when Aeternum officially launches.",
                ].map((text, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 leading-normal tracking-normal"
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
            </header>
          </div>
        </div>
        <div
          id="signup"
          className="flex-1 flex items-center justify-center rounded-3xl overflow-hidden 
             min-h-[550px] md:min-h-[650px]"
        >
          <div className="flex justify-center items-center max-w-[540px] h-[480px] md:h-full">
            <div className="mt-32">
              <BrevoFixedForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
