import Link from "next/link";

interface LegalSectionTitleProps {
  title: string;
  lastUpdated: string;
  paragraphs: (string | React.ReactNode)[];
}

export default function LegalSectionTitle({
  title,
  lastUpdated,
  paragraphs,
}: LegalSectionTitleProps) {
  return (
    <div className="content-wrapper text-center">
      <h1>{title}</h1>
      <small>
        Last Updated: <span className="font-semibold">{lastUpdated}</span>
      </small>
      <p className="text-[#4F4949] mt-11 leading-loose tracking-wide">
        {paragraphs.map((text, i) => (
          <span key={i} className="block">
            {text}
          </span>
        ))}
      </p>
    </div>
  );
}
