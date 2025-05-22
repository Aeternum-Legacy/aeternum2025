export const facts = [
  {
    title: "62",
    measurement: "%",
    description:
      "of parents fear their children will not have access to their digital memories",
  },
  {
    title: "127",
    measurement: "M",
    description:
      "deceased social media accounts are at risk of being deleted, erasing valuable memories and family history",
  },
  {
    title: "71",
    measurement: "%",
    description:
      "of children are exposed to online hate content through social media",
  },
];

export const features = [
  {
    icon: "/icons/security.svg",
    title: "Privacy and Security",
    description:
      "Your family connections should be protected, free from outside intrusion. Connect with loved ones on Aeternum’s Private Family Tree — free from ads, forced content, and unwanted influence.",
  },
  {
    icon: "/icons/memory.svg",
    title: "Memory Preservation",
    description:
      "A photo without a story is just a snapshot in time. Aeternum turns your cherished memories into lasting legacies by pairing images and videos with personal stories, voice recordings, and heartfelt reflections.",
  },
  {
    icon: "/icons/inheritance.svg",
    title: "Legacy Inheritance",
    description:
      "Your legacy is more than memories: it’s the values, traditions, and wisdom you pass down. With Aeternum’s proprietary design, you can securely share your life’s story and ensure it reaches your loved ones for generations to come.",
  },
];

export interface PFCFeaturesCardProps {
  title: string;
  desc: string;
  icon: string;
  iconSize: number;
}

export const PFCFeatures: PFCFeaturesCardProps[] = [
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

export const legacyFeatures = [
  {
    icon: "/icons/inheritance2.svg",
    title: "Digital Inheritance",
    description:
      "Designate loved ones as inheritors of your digital legacy, ensuring your story, values, and wisdom will remain accessible to those that come after.",
  },
  {
    icon: "/icons/legacy-pin.svg",
    title: "Unfold Your Legacy",
    description:
      "Capture the essence of a life well-lived with a personal profile showcasing milestones, passions, achievements, and the tapestry of memories you preserved.",
  },
  {
    icon: "/icons/message.svg",
    title: "Legacy Messages",
    description: `"I'm sorry I can't be there with you, but remember that I will always love you." — Ensure your words, love, and wisdom reach your loved ones at just the right moment, even after you are gone.`,
  },
];

export interface LegacyFeatureCardProps {
  icon: string;
  title: string;
  description: string;
}
