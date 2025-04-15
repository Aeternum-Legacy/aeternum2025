export default function FeatureSummarySection() {
  const features = [
    {
      icon: "/icons/security.svg",
      title: "Privacy and Security",
      description:
        "Your family connections should be protected, free from outside intrusion. Connect with loved ones in Aeternum’s Private Family Tree — free from ads, forced content, and unwanted influence.",
    },
    {
      icon: "/icons/memory.svg",
      title: "Memory Preservation",
      description:
        "A photo without a story is just a snapshot in time. Aeternum keeps your cherished memories into lasting legacies by pairing images and videos with personal stories, voice recordings, and heartfelt reflections.",
    },
    {
      icon: "/icons/inheritance.svg",
      title: "Legacy Inheritance",
      description:
        "Your legacy is more than memories: it’s the values, traditions, and wisdom you pass down. With Aeternum’s proprietary design, you can securely share your life’s story and ensure it reaches your loved ones for generations to come.",
    },
  ];

  return (
    <section className="bg-[#F7F8EA] lg:px-10 py-10 lg:py-20 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 mb-7">
        <img src="icons/aeternum-logo2.svg" className="w-12" />
        <p className="leading-relaxed font-bold text-xs md:text-sm tracking-[0.25em] text-[#186E68]">
          AETERNUM
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-0 w-full lg:px-10 py-3 lg:-mr-20">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="relative flex items-center justify-center md:justify-start md:pr-3 md:gap-10"
            >
              <div className="hidden lg:block">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-[2px] bg-[#42590F]" />
              </div>
              <div className="flex flex-col items-center lg:items-start justify-center lg:text-left py-5 gap-2">
                <img
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  className="w-20 h-20 lg:mb-3 md:w-15 md:h-15"
                />
                <h3 className="text-2xl font-bold lg:mb-4 lg:w-2/3 text-center lg:text-left lg:-ml-0 whitespace-nowrap lg:whitespace-normal">
                  {feature.title}
                </h3>
                <p
                  className="text-base text-[#052922] leading-6 w-96  md:w-72 text-center lg:text-left md:tracking-wide
"
                >
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
