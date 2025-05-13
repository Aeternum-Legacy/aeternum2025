import Image from "next/image";

interface LegacyFeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function LegacyFeatureCard({
  icon,
  title,
  description,
}: LegacyFeatureCardProps) {
  return (
    <div className="relative w-full mx-auto">
      {/* Icon placed exactly on the border */}
      <div className="absolute -left-[1.5rem] top-5 bg-[#BCC6C7] p-3 rounded-full z-10">
        <Image
          src={icon}
          alt={`Icon representing: ${title}`}
          width={32}
          height={32}
        />
      </div>

      {/* Card */}
      <div className="flex flex-col border border-[#8BA39C] rounded-xl bg-white p-5 pl-7">
        <h3 className="font-semibold text-2xl md:text-xl text-black mb-2">
          {title}
        </h3>
        <p className="text-lg md:text-base text-[#484844] leading-6 tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
}
