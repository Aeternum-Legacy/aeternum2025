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
    <section className="bg-[#F7F8EA] px-5 py-20 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2">
        <img src="icons/Logo2.svg" />
        <p className="leading-relaxed font-bold text-xs tracking-[0.25em] text-[#186E68]">
          AETERNUM
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 w-full px-10 py-3">
        {/* Feature 1 */}
        {features.map((feature, index) => {
          return (
            <div key={index} className="relative flex items-center pl-9 pr-6">
              <div>
                <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-[2px] bg-[#42590F]" />
              </div>
              <div className="flex flex-col items-start justify-center text-left py-5 gap-2">
                <img
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  className="w-15 h-15 mb-3"
                />
                <h3 className="text-3xl font-bold mb-4 w-2/3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#052922] leading-4 w-80">
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
