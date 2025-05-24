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

export const aboutContent = {
  mission: {
    title: "Our Mission",
    headline: "Preserving Legacies, Connecting Generations",
    body: `At Aeternum, our mission is to preserve legacies and connect generations through a secure, timeless digital platform. Aeternum empowers families to safeguard their memories, share their stories, and pass down their history, values, and wisdom. We strive to ensure that every person’s voice, love, and essence remain a beacon for their descendants — not just as memories, but as a lasting presence across time.`,
  },
  vision: {
    title: "Our Vision",
    headline: "Where Memories Live Forever",
    body: `Our vision is a world where every family is prepared for the inevitable — where loss doesn’t mean disconnection, and every story, lesson, and memory lives on. We envision a future where families, across generations, remain bonded by love, wisdom, and the voices of those who came before them. In this world, farewells are softened by lasting presence, and no life fades into silence.`,
  },
  values: [
    {
      title: "Timeless Purpose",
      body: `At Aeternum, we make decisions with the future in mind, striving to create lasting positive impacts that grow in value over time. We are committed to building something that improves the present, connects our past, and enriches the generations that follow. As time changes, so do we — learning, adapting, and evolving to ensure the choices we make today continue to bring meaningful benefits well into the future.`,
    },
    {
      title: "Respect",
      body: `Respect is a core value of Aeternum. We embrace the richness of diverse experiences, perspectives, and identities, and believe that respect is best shown in how we engage with one another — especially when our views differ. Through empathy, openness, and humility, we foster a culture where all voices are heard and valued.`,
    },
    {
      title: "Family First",
      body: `At Aeternum, we believe that family is at the heart of everything we do. Our Family First Policy provides employees with the flexibility and support to prioritize their families, recognizing that caring for loved ones, being present for life’s precious moments, and maintaining personal wellness are essential to a fulfilling life. By caring for our own families, we better understand how to care for the families we serve.`,
    },
    {
      title: "Trust",
      body: `We believe that trust is built through presence, support, and honesty. It serves as the foundation for strong relationships and underpins the way Aeternum operates. Our commitment to reliability and integrity ensures a secure and respectful environment for all.`,
    },
    {
      title: "Security & Privacy",
      body: `Security and privacy are not just obligations at Aeternum — they are responsibilities we take personally. We safeguard personal data and moderate content with the same care and vigilance we would expect for our own families. For us, it is not about meeting the minimum regulatory standards; it is about setting a new benchmark for how families should be safeguarded.`,
    },
  ],
};

