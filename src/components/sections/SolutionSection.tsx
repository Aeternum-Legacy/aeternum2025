export default function DidYouKnowSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center
                 gap-[5rem] md:gap-36
                 mt-[10rem] mb-[3.75rem] md:mt-0"
    >
      <div className="mb-[5rem] md:mb-0">
        <h2 className="text-3xl md:text-3xl text-black md:mb-5">
          What if there is a solution?
        </h2>

        <div className="flex flex-col gap-2 mt-4 text-xl md:text-xl text-[#738483]">
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
          className="absolute left-6 bottom-[1rem] md:bottom-10 -translate-x-full
                     w-10 h-10 md:w-20 md:h-20"
        />
        <img
          src="/icons/quote.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-6 top-[0.5rem] md:top-0 md:bottom-0
                     translate-x-full translate-y-1/4 rotate-180
                     w-10 h-10 md:w-20 md:h-20"
        />
        <h1 className="relative z-10 text-[2rem] md:text-[4.5rem] lg:text-[5.5rem]">
          Reimagine Your Legacy
        </h1>
      </div>
    </section>
  );
}
