import ImageTile from "@/components/ui/ImageTile";
import Image from "next/image";

export default function ImageTileDesktop() {
  return (
    <>
      <section className="hidden lg:flex section-wrapper flex-col">
        
          <h1 className="leading-tight tracking-tight text-center lg:text-left">
            <span className="block">
              Do not let <span className="block sm:hidden" />
              memories fade
            </span>
            <span className="flex items-center justify-center lg:justify-start gap-3 mt-2">
              Secure them forever
              <img
                src="/icons/aeternum-logo3.svg"
                alt="Aeternum logo representing memory preservation"
                title="Aeternum logo"
                className="hidden lg:block w-[90px] lg:h-[80px]"
              />
            </span>
          </h1>

          <p className="text-lg lg:text-xl mt-4 mb-5 lg:mb-0 text-center lg:text-left">
            <span className="sr-only">
              Preserve your memories today with Aeternum.
            </span>
            Your memories, your legacy – <span className="block sm:hidden" />
            begin preserving them today.
          </p>
       
      </section>
      <div className="hidden lg:block relative overflow-x-hidden w-full lg:-mt-52">
        <div className="w-[120%]">
          <ImageTile />
        </div>
      </div>
    </>
  );
}
