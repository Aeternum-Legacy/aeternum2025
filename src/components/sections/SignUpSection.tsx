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
    <section
      aria-labelledby="signup-heading"
      className="w-full h-fit lg:h-[550px]"
    >
      <div
        className="
      lg:mx-8 flex flex-col lg:flex-row overflow-hidden lg:rounded-3xl
      bg-[#F7F8EA] h-fit lg:h-[550px]   
    "
      >
        <div
          className="
        lg:w-1/2 relative flex items-center justify-center 
        shadow-[4px_8px_8px_rgba(0,0,0,0.38)] overflow-hidden bg-cover bg-center
        min-h-[320px] lg:h-[550px]      // 모바일에서는 최소 높이만 유지
      "
          style={{ backgroundImage: "url('/images/tree.png')" }}
        >
          <div className="absolute inset-0 bg-[#F7F8EA]/80 w-full h-full " />
          <div className="relative z-10 flex flex-col justify-center items-center text-black text-center px-4 py-8 w-full h-full">
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
          className="
        lg:w-1/2 grid place-items-center
        h-[500px] lg:h-[550px]        
      "
        >
          <div className="w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden">
            <iframe
              src="https://a276752d.sibforms.com/serve/MUIFADvHCOpCEY3oWkUMEl0bNTu2r09khoCDyqLgkEe-hOlEgdxdU9gPyTRaP0e1NOFFQeYwTKPB7rZm6sJnRQGrPoylhMtagAyY-FnpUKGfAev6xW8VHhNDQNGMruySbHNJgaLOeJ4BhhmHLE5tvatv5Iz6qYRHOKX9U65whVcBOdcEvOSjPU1R_-caY6olFWkwnLc4WzzpQMTL"
              className="block w-full h-full"
              style={{ border: 0, maxWidth: "100%", maxHeight: "100%" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
