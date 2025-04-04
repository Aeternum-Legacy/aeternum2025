import PrivateFamilyConnection from "./PrivateFamilyConnection";

export default function FeatureDetailSection() {
  return (
    <section className="py-40 px-6 md:px-20 bg-white">
      <div className="flex flex-col items-center gap-2 mb-40">
        <img src="icons/features.svg" />
        <p className="leading-relaxed font-bold text-xs tracking-[0.25em] text-[#186E68]">
          FEATURES
        </p>
      </div>
      <PrivateFamilyConnection />
      <div className="flex flex-col gap-6 text-center items-center justify-center">
        <h2 className="text-6xl">Memory Preservation</h2>
        <p className="text-[#4F4949] w-2/3">
          Your family’s safety and well being should never be compromised.
          Aeternum provides a private and secure digital space to connect,
          interact, and be remembered, for generations that follow.
        </p>
      </div>
    </section>
  );
}
