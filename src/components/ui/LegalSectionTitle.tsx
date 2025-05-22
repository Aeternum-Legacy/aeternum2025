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
    <>
      <div className="content-wrapper">
        <h1>{title}</h1>
        <small>
          Last Updated: <span className="font-semibold">{lastUpdated}</span>
        </small>
      </div>
      <p className="text-[#4F4949] md:mt-11">
        {paragraphs.map((text, i) => (
          <span key={i} className="block">
            {text}
          </span>
        ))}
      </p>
    </>
  );
}
