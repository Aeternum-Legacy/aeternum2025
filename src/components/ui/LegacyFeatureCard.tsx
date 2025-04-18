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
    <div className="relative flex items-start gap-6 border border-[#8BA39C] rounded-xl p-5 w-4/5 max-w-2xl bg-white">
      <div className="absolute -left-8 top-6 bg-[#BCC6C7] p-3 rounded-full">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>

      <div className="pl-7 md:pr-10 text-left gap-3">
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
