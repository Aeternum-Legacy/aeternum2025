export default function SectionBlock({
  id,
  title,
  intro,
  bullets,
  outro,
}: SectionBlockProps) {
  return (
    <div id={id} className="my-20 px-5 md:px-20 scroll-mt-28">
      <h1 className="tracking-wider font-bold text-[#186E68] text-xl md:text-3xl text-left">
        {title}
      </h1>

      <div className="mt-3 md:mt-6 text-sm md:text-md tracking-wider text-gray-800 text-left md:ml-10 lg:ml-64 leading-loose">
        {intro && <p>{intro}</p>}

        {bullets && (
          <ul className="list-disc pl-6 mt-4 space-y-2">
            {bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {outro && <p className="mt-4">{outro}</p>}
      </div>
    </div>
  );
}

interface SectionBlockProps {
  id?: string;
  title: string;
  intro?: string;
  bullets?: string[];
  outro?: string;
}
