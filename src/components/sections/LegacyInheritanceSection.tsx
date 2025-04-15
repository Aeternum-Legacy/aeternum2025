import Image from "next/image";
import LegacyFeatureCard from "../ui/LegacyFeatureCard";
export default function LegacyInheritanceSection() {
  const legacyFeatures = [
    {
      icon: "/icons/inheritance2.svg",
      title: "Digital Inheritance",
      description:
        "Designate loved ones as inheritors of your digital legacy, ensuring your story, values, and wisdom will remain accessible to those that come after.",
    },
    {
      icon: "/icons/legacy-pin.svg",
      title: "Unfold Your Legacy",
      description:
        "Capture the essence of a life well-lived with a personal profile showcasing milestones, passions, achievements, and the tapestry of memories you preserved.",
    },
    {
      icon: "/icons/message.svg",
      title: "Legacy Messages",
      description: `"I'm sorry I can't be there with you, but remember that I will always love you." — Ensure your words, love, and wisdom reach your loved ones at just the right moment, even after you are gone.`,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:gap-12">
      <div className="flex lg:hidden items-center justify-center">
        <Image
          src="/images/legacy-inheritance.png"
          alt=""
          width={350}
          height={350}
        />
      </div>
      <div className="flex flex-col gap-6 text-center items-center justify-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl">Legacy Inheritance</h2>
        <p className="text-[#4F4949] text-sm md:text-lg md:mt-4">
          <span className="block">
            Because the impact you leave behind matters,
          </span>
          <span className="block">
            Aeternum ensures your legacy is preserved and inherited
          </span>
          by future generations, exactly as you intend.
        </p>
        <div className="flex flex-col gap-6 place-items-center justify-center mt-4">
          {legacyFeatures.map((feature, idx) => (
            <LegacyFeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <Image
          src="/images/legacy-inheritance.png"
          alt=""
          width={530}
          height={530}
        />
      </div>
    </div>
  );
}
