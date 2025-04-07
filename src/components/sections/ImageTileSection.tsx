import ImageTile from "../ui/ImageTile";
export default function ImageTileSection() {
  return (
    <section className="flex flex-col mb-20">
      <h3
        className="px-20 tracking-tight leading-tight"
        style={{ textShadow: "0 0 .9px currentColor", fontSize: "5.5rem" }}
      >
        <span className="block">Do not let memories fade</span>

        <span className="flex items-center gap-7">
          Secure
          <img
            src="/icons/logo3.svg"
            alt="logo"
            className="w-[90px] h-[90px]"
          />
          them forever
        </span>
      </h3>
      <p className="px-20 mt-4 text-xl">
        Your memories, your legacy – begin preserving them today.
      </p>
      <div className="-mt-18">
        <ImageTile />
      </div>
    </section>
  );
}
