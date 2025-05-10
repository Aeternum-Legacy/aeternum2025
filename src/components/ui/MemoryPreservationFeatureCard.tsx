interface FeatureCardProps {
  icon: string;
  title: string;
  content: string;
}

export default function MemoryPreservationFeatureCard({
  icon,
  title,
  content,
}: FeatureCardProps) {
  return (
    <div className="max-w-sm p-6 border border-[#8BA39C] rounded-4xl flex flex-col gap-3 items-start w-96 bg-white">
      <div className="flex items-center justify-center gap-3">
        <div className="bg-[#D8E3E4] p-3 rounded-full">
          <img src={icon} alt={title} />
        </div>
        <h6 className="font-bold text-black">{title}</h6>
      </div>

      <p className="text-[#484844] text-lg lg:text-base tracking-wide">
        {content}
      </p>
    </div>
  );
}
