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
  // Helper: render a single entry which may be a string (with \n for line breaks
  // and \n\n for paragraph breaks) or a React node. Strings are split into
  // paragraph blocks on blank lines and single newlines become <br /> inside a
  // paragraph. This avoids using dangerouslySetInnerHTML and keeps rendering
  // safe.
  const renderEntry = (entry: string | React.ReactNode, baseKey: number) => {
    if (typeof entry !== "string") {
      // Wrap non-string entries in a block-level element so they can
      // safely contain other block-level children like <ul> without
      // producing invalid HTML (e.g. <p><ul>...). Use a div to keep the
      // same spacing behavior as the string paragraphs.
      return (
        <div key={baseKey} className="mb-4 last:mb-0">
          {entry}
        </div>
      );
    }

    // Split into paragraph blocks on two-or-more newlines
    const blocks = entry
      .split(/\n{2,}/)
      .map((b) => b.trim())
      .filter(Boolean);

    return blocks.map((block, idx) => (
      <p key={`${baseKey}-${idx}`} className="mb-4 last:mb-0">
        {block.split(/\n/).map((line, i) =>
          // preserve explicit single-line breaks with <br />
          i === 0 ? (
            line
          ) : (
            <span key={i}>
              <br />
              {line}
            </span>
          )
        )}
      </p>
    ));
  };

  // Flatten all rendered entries into a single array of <p> elements
  const renderedParagraphs = paragraphs.reduce<React.ReactNode[]>(
    (acc, p, i) => {
      const rendered = renderEntry(p, i);
      return acc.concat(rendered as React.ReactNode[]);
    },
    []
  );

  return (
    <>
      <div>
        <h2>{title}</h2>
        <small>
          Last Updated: <span className="font-semibold">{lastUpdated}</span>
        </small>
      </div>
      <div className="text-[#4F4949] text-left">{renderedParagraphs}</div>
    </>
  );
}
