import ImageTile from "../ui/ImageTile";

export default function ImageTileSection() {
  return (
    <section className="flex flex-col mb-10">
      <h3
        className="text-3xl md:text-6xl lg:text-[5.5rem]
                   leading-tight tracking-tight
                   text-center md:text-left
                   px-4 sm:px-10 lg:px-20"
        style={{ textShadow: "0 0 .9px currentColor" }}
      >
        <span className="block">Do not let memories fade</span>

        <span className="flex items-center justify-center md:justify-start gap-3 mt-2">
          Secure them forever
          <img
            src="/icons/aeternum-logo3.svg"
            alt="logo"
            className="w-[30px] md:w-[90px] md:h-[80px]"
          />
        </span>
      </h3>

      <p
        className="text-lg md:text-xl mt-4 mb-5 md:mb-0
                   text-center md:text-left
                   max-w-[90%] md:max-w-none mx-auto md:mx-0
                   px-2 sm:px-20"
      >
        Your memories, your legacy – begin preserving them today.
      </p>

      <div className="relative overflow-x-hidden w-full md:-mt-18">
        <div className="w-[120%]">
          <ImageTile />
        </div>
      </div>
    </section>
  );
}
