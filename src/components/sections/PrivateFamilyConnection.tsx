import Image from "next/image";
export default function PrivateFamilyConnection() {
  const features = [
    {
      title: "Private Connection",
      desc: "Stay close to your family in a private, ad-free space to share memories, exchange messages, and celebrate life’s moments together.",
      icon: "/icons/private-connection.svg",
      iconSize: 45,
    },
    {
      title: "Collaborative Storytelling",
      desc: "Build living legacies together by contributing memories, sharing stories, and even recreating the profiles of loved ones who are no longer with us.",
      icon: "/icons/collaborative-storytelling.svg",
      iconSize: 35,
    },
    {
      title: "Personal Family Tree",
      desc: "Explore your lineage through a beautifully crafted visual map of your family’s connections, bringing generations together in one timeless space.",
      icon: "/icons/personal-family-tree.svg",
      iconSize: 40,
    },
    {
      title: "Curated Profiles",
      desc: "Create lasting profiles for children, seniors, and pets, with memories thoughtfully preserved to be gifted when they come of age or to honor a life well lived.",
      icon: "/icons/curated-profiles.svg",
      iconSize: 35,
    },
  ];
  return (
    <div className="mb-30 md:mb-40">
      <div className="flex lg:hidden items-center justify-center mb-10">
        <div className="relative w-[100%] aspect-[5/4]">
          <Image
            src="/images/pfc-image1.png"
            alt="hands holding"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <h2 className="text-3xl md:hidden font-bold text-center">
        Private Family Connection
      </h2>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="hidden lg:flex relative justify-center flex-[0.9] w-full h-auto">
          <div className="relative w-full h-full -left-5">
            <Image
              src="/images/pfc-image1.png"
              alt="hands holding"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-0 -right-5 z-10 w-full max-w-[350px] aspect-square">
            <Image
              src="/images/pfc-image2.png"
              alt="photo album"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-[1.1] text-center py-4 flex flex-col gap-6">
          <h2 className="hidden md:block text-4xl font-bold text-center">
            Private Family Connection
          </h2>

          <p className="text-[#4F4949] text-lg w-full mx-auto mb-5 text-center">
            Your family’s safety and well being should never be compromised.
            Aeternum provides a private and secure digital space to connect,
            interact, and be remembered, for generations that follow.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 mt-10
                 justify-items-center"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
                iconSize={feature.iconSize}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
  iconSize,
}: {
  title: string;
  desc: string;
  icon: string;
  iconSize: number;
}) {
  return (
    <div
      className="relative bg-[#F7F8EA] pt-[3.5rem] px-4 pb-5
                 rounded-t-[100px] text-center
                 w-full max-w-[18rem] z-0"
    >
      <div
        className="absolute -top-6 left-1/2 -translate-x-1/2
                   bg-[#D8E3E4] p-2 rounded-full
                   w-17 h-17 flex items-center justify-center
                   border-3 border-white z-10"
      >
        <img
          src={icon}
          alt={title}
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            objectFit: "contain",
          }}
        />
      </div>

      <p className="font-semibold text-[#052922] mb-2 text-2xl lg:text-xl">
        {title}
      </p>
      <p className="text-base text-[#5B5B5B] lg:text-base tracking-wide">
        {desc}
      </p>
    </div>
  );
}
