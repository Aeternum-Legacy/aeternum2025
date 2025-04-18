export default function FeatureSummarySection() {
  const facts = [
    {
      title: "62",
      measurement: "%",
      description:
        "of parents fear their children will not have access to their digital memories",
    },
    {
      title: "127",
      measurement: "M",
      description:
        "deceased social media accounts are at risk of being deleted, erasing valuable memories and family history",
    },
    {
      title: "71",
      measurement: "%",
      description:
        "of children are exposed to online hate content through social media",
    },
  ];

  return (
    <section
      className="flex flex-col justify-center items-center gap-[2.5rem]
                 mt-[5rem] md:mt-[1.25rem] lg:mt-[4rem]
                 mb-[5rem] md:mb-[10rem] lg:mb-[12rem]
                 px-4 lg:px-8"
    >
      {/* Header */}
      <div className="flex flex-row items-center gap-[0.5rem]">
        <img
          src="/icons/arrow-right.svg"
          alt="Arrow Right Icon"
          className="w-[1.25rem] h-[1.25rem]"
        />
        <p className="text-base">Did you know...</p>
      </div>

      {/* Stats Grid */}
      <div
        className="grid w-full max-w-6xl
                   gap-[1.25rem]
                   md:grid-cols-3 md:gap-[2rem]
                  lg:max-w-7xl"
      >
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-[#FCFCF9] rounded-xl
                       shadow-[3px_6px_4px_-1px_rgba(0,_0,_0,_0.2)]
                       px-[1.5rem] pt-[5rem] pb-[1.5rem]
                       text-left w-full max-w-[20rem] mx-auto"
          >
            <div className="flex items-start text-black font-semibold leading-none text-[3.5rem] lg:text-[4rem]">
              {fact.title}
              {fact.measurement === "%" ? (
                <span className="ml-[0.25rem] text-[2rem] lg:text-[2.25rem] font-normal align-super">
                  {fact.measurement}
                </span>
              ) : (
                <span className="ml-[0.25rem] text-[2rem] lg:text-[2.25rem] font-bold self-end">
                  {fact.measurement}
                </span>
              )}
            </div>

            <p className="mt-[0.75rem] text-base text-black leading-snug">
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
