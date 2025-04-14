export default function DidYouKnowSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 md:gap-36 text-center mb-15">
      <div>
        <h2 className="text-3xl md:text-6xl text-black">
          What if there is a solution?
        </h2>
        <div className="mt-4 text-xl text-[#738483]">
          <p>Deliver timeless messages</p>
          <p>Pass on cherished memories</p>
          <p>Private and safe for families</p>
        </div>
      </div>

      <div className="relative inline-block">
        <img
          src="/icons/quote.svg"
          alt=""
          aria-hidden="true"
          className="absolute bottom-4 md:bottom-10 left-6 -translate-x-full w-10 h-10 md:w-20 md:h-20"
        />
        <img
          src="/icons/quote.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-2 md:top-0 md:bottom-0 right-6 translate-x-full translate-y-1/4 w-10 h-10 md:w-20 md:h-20 rotate-180"
        />
        <h1 className="text-4xl md:text-[5.5rem] relative z-10">
          Reimagine Your Legacy
        </h1>
      </div>
    </section>
  );
}
