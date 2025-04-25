export default function Notification({ title, text }: NotificationProps) {
  return (
    <div className="bg-[#E6F3F1] rounded-xl px-6 py-4 text-xs md:text-sm text-gray-800 max-w-4xl mx-5 md:mx-auto my-10 md:my-16 tracking-widest ">
      <p>{text}</p>
      <p className="mt-2">
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
