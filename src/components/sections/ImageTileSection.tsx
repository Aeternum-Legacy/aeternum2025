import ImageTile from "../ui/ImageTile";
export default function ImageTileSection() {
  return (
    <section className="flex flex-col mb-10">
      <h3
        className="text-center md:text-left px-10 lg:px-20 tracking-tight leading-tight text-3xl md:text-6xl lg:text-[5.5rem]"
        style={{ textShadow: "0 0 .9px currentColor" }}
      >
        <span className="block">Do not let memories fade</span>

        <span className="flex items-center justify-center md:justify-start gap-3">
          Secure them forever
          <img
            src="/icons/aeternum-logo3.svg"
            alt="logo"
            className="w-[30px] md:w-[90px] md:h-[80px]"
          />
        </span>
      </h3>
      <p className="px-20 mt-4 text-lg md:text-xl mb-5 md:mb-0 text-center md:text-left">
        Your memories, your legacy – begin preserving them today.
      </p>
      <div className="md:-mt-18 md:-ml-28">
        <ImageTile />
      </div>
    </section>
  );
}
