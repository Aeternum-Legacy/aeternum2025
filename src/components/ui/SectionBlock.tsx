export default function SectionBlock({
  id,
  title,
  intro,
  bullets,
  outro,
  useRomanStyle = false,
}: SectionBlockProps) {
  return (
    <div id={id}>
      <h5 className="font-extrabold text-[#186E68] text-left tracking-widest uppercase">
        {title}
      </h5>

      <div className="mt-3 md:mt-6 text-left md:ml-10 lg:ml-64">
        {intro && <div className="tracking-widest leading-loose">{intro}</div>}

        {bullets && (
          <ul
            className={`pl-6 mt-4 tracking-wider leading-loose ${
              useRomanStyle ? "list-[lower-roman]" : "list-disc"
            }`}
          >
            {bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {outro && <p className="mt-4 tracking-widest leading-loose">{outro}</p>}
      </div>
    </div>
  );
}

interface SectionBlockProps {
  id?: string;
  title: string;
  intro?: string | React.ReactNode;
  bullets?: React.ReactNode[];
  outro?: string | React.ReactNode;
  useRomanStyle?: boolean;
}
