export default function Notification({ title, text }: NotificationProps) {
  const lines = text?.split("(next line)").map((line) => line.trim()) || [];

  return (
    <div className="bg-[#E6F3F1] rounded-xl px-6 py-4 text-gray-800 w-10/12 tracking-widest text-center">
      {lines.map((line, idx) => (
        <p key={idx} className={idx > 0 ? "mt-2" : ""}>
          {line}
        </p>
      ))}

      <p className="mt-4">
        For <span className="font-bold">any questions</span> regarding these{" "}
        {title}, contact us at{" "}
        <a
          href="mailto:info@aeternumproject.com"
          className="underline underline-offset-2 font-medium"
        >
          info@aeternumproject.com
        </a>
        .
      </p>
    </div>
  );
}

interface NotificationProps {
  title?: string;
  text?: string;
}
