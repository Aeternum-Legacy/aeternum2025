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
    <section className="mt-8 md:mt-5 mb-20 md:mb-40 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-row items-center space-x-2">
        <img
          src="/icons/arrow-right.svg"
          alt="Arrow Right Icon"
          className="w-6 h-6"
        />
        <p>Did you know...</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-24">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-[#FCFCF9] rounded-xl shadow-[3px_6px_4px_-1px_rgba(0,_0,_0,_0.2)] px-6 pt-20 pb-6 w-72 text-left"
          >
            <div className="flex items-start text-black text-6xl font-semibold leading-none">
              {fact.title}
              {fact.measurement === "%" ? (
                <span className="text-3xl font-normal align-super ml-1">
                  {fact.measurement}
                </span>
              ) : (
                <span className="text-4xl font-bold ml-1 self-end">
                  {fact.measurement}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-black leading-snug">
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
