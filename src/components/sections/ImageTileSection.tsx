import ImageTile from "../ui/ImageTile";

export default function ImageTileSection() {
  return (
    <section className="section-wrapper flex flex-col">
      <div className="content-wrapper">
        <h1 className="leading-tight tracking-tight text-center md:text-left">
          <span className="block">
            Do not let <span className="block sm:hidden" />
            memories fade
          </span>
          <span className="flex items-center justify-center md:justify-start gap-3 mt-2">
            Secure them forever
            <img
              src="/icons/aeternum-logo3.svg"
              alt="logo"
              className="w-[30px] md:w-[90px] md:h-[80px]"
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl mt-4 mb-5 md:mb-0 text-center md:text-left">
          Your memories, your legacy – <span className="block sm:hidden" />
          begin preserving them today.
        </p>
      </div>
      <div className="relative overflow-x-hidden w-full md:-mt-18">
        <div className="w-[120%]">
          <ImageTile />
        </div>
      </div>
    </section>
  );
}
