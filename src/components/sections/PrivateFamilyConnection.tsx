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
    <div className="mb-70">
      <h2 className="text-6xl text-right">Private Family Connection</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative w-full mx-auto">
          <div className="relative w-full h-[320px] -mt-10">
            <Image
              src="/images/pfc-image1.png"
              alt="hands holding"
              width={500}
              height={400}
            />
          </div>

          <div className="absolute left-3/5 -translate-x-2/5 top-[350px] w-[350px] h-auto z-10">
            <div className="relative w-full h-full">
              <Image
                src="/images/pfc-image2.png"
                alt="photo album"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className="text-center py-10 pr-7 flex flex-col gap-3">
          <p className="text-[#4F4949]">
            Your family’s safety and well being should never be compromised.
            Aeternum provides a private and secure digital space to connect,
            interact, and be remembered, for generations that follow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 mt-10">
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
    <div className="relative bg-[#F7F8EA] pt-16 p-4 rounded-t-[100px] text-center ">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D8E3E4] p-2 rounded-full w-17 h-17 flex items-center justify-center border-3 border-white">
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
      <p className="font-semibold text-[#052922] mb-2 text-base">{title}</p>

      <p className="text-sm text-[#5B5B5B]">{desc}</p>
    </div>
  );
}
