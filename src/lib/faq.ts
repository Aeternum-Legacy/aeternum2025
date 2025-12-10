export interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  questions: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "what-is-aeternum",
    label: "What Is Aeternum",
    questions: [
      {
        question:
          "What is Aeternum, and how is it different from Facebook, Instagram, or Google Drive?",
        icon: "/icons/aeternum-logo2.svg",
        answer:
          "That's the most important question we get! Here's the simple difference: Social media (like Facebook or Instagram) is a public broadcast system. You and your memories are the product. They use your life to sell ads, and you risk losing everything—16 years of your children's memories—overnight if an algorithm bans your account. Cloud storage (like Google Drive) is a digital shoebox. It's a utility for files, not a home for your family's story. Aeternum is your family's private, digital vault. We designed it to fix both problems. It's a 'family-safe' space with no ads, no 'doom scrolling,' and no data selling. Most importantly, our unique Inheritance System ensures your memories are designed to be passed down, so your story connects generations—safely and forever.",
      },
      {
        question: "Who is Aeternum built for?",
        icon: "/icons/people.svg",
        answer:
          "Aeternum is designed for anyone who believes their story is worth preserving. Our core community is families, especially parents who want a safe, private space to build their digital legacy. But it's also for: Aging Loved Ones who want to pass down wisdom and stories, High-Risk Professionals (like first responders) who need to ensure their legacy is safe, no matter what, and Historians & Communities looking to preserve cultural heritage and empower marginalized voices.",
      },
      {
        question: "What makes Aeternum unique?",
        icon: "/icons/features.svg",
        answer:
          "Unlike social media or generic cloud storage, Aeternum is designed for permanence, privacy, and family connection. No ads. No data selling. Private by design—you control who sees what. Features like Circles, Memory Collections, and Legacy Preservation allow your family to share stories securely, not publicly. It's built for generations, not algorithms.",
      },
      {
        question:
          "My family's memories are already on social media. Why should I move them?",
        icon: "/icons/memory.svg",
        answer:
          "This is a feeling we understand completely, and it's the #1 reason we built Aeternum. The truth is, your memories are not safe on social media. You don't own your account; you are borrowing it. An AI bot can permanently delete your account, and all your photos and videos, with no customer service to appeal to. Aeternum is built on the principle of ownership. You own your data. It's a permanent, private home for your legacy, not a temporary feed for an advertiser.",
      },
      {
        question: "Aeternum has no ads. How do you make money?",
        icon: "/icons/payment.svg",
        answer:
          "Our business model is simple and transparent: We charge a fair price for secure data storage, not for access to your life. This is a core part of our promise. Our only customer is you, not an advertiser. This means we are 100% focused on protecting your memories and serving your family, rather than finding new ways to monetize your data.",
      },
      {
        question: "When will the platform be available?",
        icon: "/icons/calendar.svg",
        answer:
          "Aeternum's Alpha phase launches November 28th, 2025, offering early access to core features. The Beta phase is expected in Q1 2026, and our official public launch is targeted for Q2–Q3 2026. You can follow our progress in the Aeternum Launch Roadmap.",
      },
      {
        question: "What is the 'Alpha Launch,' and why should I join now?",
        icon: "/icons/star.svg",
        answer:
          "The Alpha (launching November 2025) is your chance to be first. This is an early-access version of our platform where you get to help us build the future of digital legacy. By joining now, you become a 'Founding Supporter,' which comes with fantastic perks: Exclusive early-access discounts, A special 'Founding Supporter' profile badge, and The ability to shape our product with your direct feedback. You can sign up directly on our website.",
      },
      {
        question: "Is Aeternum available on Mobile?",
        icon: "/icons/mobile.svg",
        answer:
          "We are moving fast! Here is our current roadmap: Alpha Launch (Core Platform): November 2025, Beta Launch (with Inheritance System & Mobile Apps): Q1 2026, Official Public Launch: Q2-Q3 2026. You can follow our full Launch Roadmap for all the latest updates!",
      },
    ],
  },
  {
    id: "plans-pricing",
    label: "Plans & Pricing",
    questions: [
      {
        question: "How much does Aeternum cost?",
        icon: "/icons/payment.svg",
        answer:
          "We believe in simple, transparent pricing with no hidden fees. We offer three tiers: Free (2GB): Perfect for getting started and exploring the platform. Premium ($2.99/month): Our most popular plan, with 100GB of storage for your growing family legacy. Legacy ($9.99/month): For the ultimate peace of mind, with 2TB (2,000GB) of storage, enough for a lifetime of memories. For more details visit our pricing page.",
      },
      {
        question: "Can I switch my plan later?",
        icon: "/icons/upgrade.svg",
        answer:
          "Yes. You can upgrade or downgrade your plan anytime from your Account Settings → Billing page.",
      },
      {
        question: "What happens if I downgrade my plan?",
        icon: "/icons/downgrade.svg",
        answer:
          "If you downgrade to a lower plan, you'll keep access to all data within your new storage limit. Any files beyond that limit will be archived for 12 months and may be deleted if your plan isn't upgraded again within that time. If you are past your new data limit, you will not be able to add new memories till you have upgraded again or removed data.",
      },
      {
        question: "Do you offer discounts for multiple family members?",
        icon: "/icons/family-tree.svg",
        answer:
          "Yes. Family sharing is built into all paid plans, allowing up to five additional members per family account.",
      },
      {
        question: "How do I manage my billing information?",
        icon: "/icons/settings.svg",
        answer:
          "You can update payment details and manage your plan through Account → Billing in your Aeternum settings. All billing is securely handled through Stripe; Aeternum never stores credit card data.",
      },
      {
        question: "When do you charge my account?",
        icon: "/icons/calendar.svg",
        answer:
          "You'll be charged on the date you subscribe (your anniversary date) for monthly or annual renewals.",
      },
    ],
  },
  {
    id: "security",
    label: "Security & Privacy",
    questions: [
      {
        question: "What does 'Privacy First' mean?",
        icon: "/icons/lock.svg",
        answer:
          "It means Aeternum is designed from the ground up with your privacy as the foundation, not an afterthought. Every post, photo, and memory is private by default, and you decide exactly who can view, comment, or contribute.",
      },
      {
        question:
          "How secure is my family's data? Can Aeternum employees see my photos?",
        icon: "/icons/security.svg",
        answer:
          "This is the foundation of your trust in us, and we take it incredibly seriously. The answer is no, our team cannot see your personal memories. We use end-to-end encryption and secure, world-class Amazon Web Services (AWS) servers. Your data is private by default. Unlike social media platforms that scan your content for ad targeting, your memories are visible only to you and the people you explicitly choose to share them with.",
      },
      {
        question: "What data does Aeternum keep?",
        icon: "/icons/data.svg",
        answer:
          "We store only the data you upload (photos, videos, stories, etc.) and essential account info such as your login credentials and plan type. We do not store or access payment details, all payments are processed by Stripe.",
      },
      {
        question: "Does Aeternum sell data?",
        icon: "/icons/shield.svg",
        answer:
          "Never. Aeternum is a subscription-based platform. Your data will never be shared or sold.",
      },
      {
        question:
          "Can I edit or update my information after I create an account?",
        icon: "/icons/edit.svg",
        answer:
          "Yes. You can edit Memories, update details, and adjust Circle permissions anytime from your account dashboard.",
      },
      {
        question: "Can I export my data from Aeternum?",
        icon: "/icons/download.svg",
        answer:
          "Absolutely! Your data is yours to own. Aeternum allows you to download your entire archive at any time, similar to a cloud-storage system. Yes. You can request a full export by contacting support@aeternumproject.com. Our team will assist you in securely retrieving your archive.",
      },
    ],
  },
  {
    id: "using-aeternum",
    label: "Using Aeternum",
    questions: [
      {
        question: "What are Memories?",
        icon: "/icons/memory.svg",
        answer:
          "Memories are your digital keepsakes—photos, videos, voice notes, letters, or milestones—preserved in a secure and shareable format.",
      },
      {
        question: "How do I share these Memories?",
        icon: "/icons/share.svg",
        answer:
          "You can share Memories within selected Circles. Each Memory's visibility is fully customizable, so only the people you choose can view or comment.",
      },
      {
        question: "What are Memory Collections?",
        icon: "/icons/collection.svg",
        answer:
          "Collections group your Memories around a theme or life event—like 'Wedding,' 'Childhood,' or 'Family Trips.' They make browsing and storytelling intuitive for your loved ones.",
      },
      {
        question: "Who can see my Memories?",
        icon: "/icons/eye.svg",
        answer:
          "Only the Circles or individuals you select. Nothing is public by default.",
      },
      {
        question: "What is a 'Privacy Circle'?",
        icon: "/icons/private-connection.svg",
        answer:
          "A 'Privacy Circle' is our 'family-safe' alternative to a social media group. It's a completely private, invitation-only space where you can share specific memories with your inner circle. It's designed for meaningful connection, not public performance. You can share your children's milestones or personal reflections without any external influence, algorithms, or 'doom scrolling.' It's your digital living room, just for you and the people you trust.",
      },
      {
        question: "Can I customize these Circles?",
        icon: "/icons/settings.svg",
        answer:
          "Coming soon. Yes! You can create, name, and edit Circles however you like, from 'Mom's Side' to 'Family Abroad.' Circles can even include sub-groups for flexible privacy control.",
      },
      {
        question:
          "What really happens to my account and memories when I'm gone?",
        icon: "/icons/inheritance.svg",
        answer:
          "This is our most unique and powerful feature. On other platforms, your account is either deleted or locked in a 'memorial' state, with all those precious memories lost. With Aeternum, you are in control. Our Inheritance Management System (launching in Beta) allows you to designate trusted 'Legacy Heirs.' You can automate the secure transfer of your entire digital legacy to the next generation, ensuring your story, your voice, and your wisdom are never lost.",
      },
      {
        question: "What do I do if a loved one has passed away?",
        icon: "/icons/inheritance2.svg",
        answer:
          "Coming soon. Aeternum's Inheritance System (launching in Beta) will allow you to designate inheritors and securely transfer Memories when the time comes.",
      },
      {
        question: "What can an Inheritor do on an account they inherited?",
        icon: "/icons/legacy-pin.svg",
        answer:
          "Coming soon. Inheritors will have controlled access to view and manage Memories, finalize collections, and preserve the legacy for future generations.",
      },
    ],
  },
  {
    id: "family",
    label: "Family & Sharing",
    questions: [
      {
        question: "How many family members can I connect with?",
        icon: "/icons/family-tree.svg",
        answer:
          "The number of family members you can connect with depends on your subscription plan. Our Premium plan supports up to 6 users in a shared family space, while our Legacy plan offers the same capacity with enhanced features. You can build your private family tree and invite members to share memories, stories, and stay connected in a secure environment.",
      },
      {
        question:
          "Can I create profiles for family members who have passed away?",
        icon: "/icons/curated-profiles.svg",
        answer:
          "Yes, Aeternum's Curated Profiles feature allows you to create and maintain memorial profiles for loved ones who have passed away. Family members can collaboratively add memories, photos, stories, and tributes to honor and preserve their legacy. This creates a lasting digital memorial that can be passed down through generations.",
      },
      {
        question: "How does collaborative storytelling work?",
        icon: "/icons/collaborative-storytelling.svg",
        answer:
          "Collaborative storytelling allows multiple family members to contribute to shared memories and family narratives. Family members can add their own perspectives, photos, and stories to collective memories, creating a richer, multi-dimensional family history. Everyone's voice is preserved, ensuring that different viewpoints and experiences are captured for future generations.",
      },
      {
        question: "Can I control what each family member sees?",
        icon: "/icons/private-connection.svg",
        answer:
          "Yes, you have granular control over sharing permissions. You can choose which memories, photos, and stories to share with specific family members or groups. This allows you to maintain appropriate boundaries while still fostering meaningful family connections. Each piece of content can have its own privacy settings tailored to your preferences.",
      },
    ],
  },
  {
    id: "platform",
    label: "Platform & Features",
    questions: [
      {
        question: "What is a Legacy Message and how does it work?",
        icon: "/icons/message.svg",
        answer:
          "Legacy Messages are heartfelt messages you create to be delivered to your loved ones at specific times in the future—whether after you pass away, on milestone birthdays, weddings, graduations, or other important life events. You can write, record video, or leave audio messages that provide comfort, guidance, and love to your family members when they need it most, ensuring your presence is felt across generations.",
      },
      {
        question: "How much storage space do I get?",
        icon: "/icons/storage.svg",
        answer:
          "Storage capacity varies by plan: Our Basic plan offers 100GB of storage for photos, videos, documents, and audio recordings. The Premium plan provides 100GB with enhanced features, while our Legacy plan includes a massive 2TB of storage—enough to preserve extensive photo libraries, hours of video content, and comprehensive family archives for generations to come.",
      },
      {
        question: "Can I upload videos and audio recordings?",
        icon: "/icons/video.svg",
        answer:
          "Absolutely! Aeternum supports multiple media formats including photos, videos, audio recordings, and documents. You can upload family videos, voice recordings, scanned documents, and more. Our platform preserves these memories in their original quality, and you can add context through stories, captions, and voice narrations to bring your memories to life.",
      },
      {
        question: "What devices can I use to access Aeternum?",
        icon: "/icons/devices.svg",
        answer:
          "Aeternum is accessible on any device with a web browser—including desktop computers, laptops, tablets, and smartphones. Our responsive design ensures a seamless experience whether you're on iOS, Android, Windows, or Mac. You can add memories on the go with your phone and view them on a larger screen at home. Your data syncs automatically across all your devices.",
      },
      {
        question: "Is there a mobile app?",
        icon: "/icons/mobile.svg",
        answer:
          "While we currently offer a fully responsive web application that works beautifully on mobile browsers, we're actively developing dedicated iOS and Android apps. These native apps will offer enhanced features like offline access, push notifications, and optimized mobile experiences. Subscribers will be notified as soon as the apps are available for download.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Subscriptions",
    questions: [
      {
        question: "What happens if I cancel my subscription?",
        icon: "/icons/cancel.svg",
        answer:
          "If you cancel your subscription, you'll continue to have full access to your account through the end of your current billing period. After that, your account will be preserved in a read-only state for up to 6 months, allowing you to reactivate anytime during that period without losing any data. There are no cancellation fees or hidden charges.",
      },
      {
        question: "What happens to my data after I cancel?",
        icon: "/icons/data-retention.svg",
        answer:
          "We securely retain your account data for up to 6 months after cancellation, giving you time to reactivate your subscription without losing your precious memories. If you wish to permanently delete your data, you can do so at any time through your account settings. For complete details, please review our Terms of Service and Privacy Policy.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        icon: "/icons/upgrade.svg",
        answer:
          "Yes, you can change your subscription plan at any time. When upgrading, you'll gain immediate access to additional features and storage, with prorated billing for the remainder of your billing cycle. When downgrading, the change will take effect at the start of your next billing period, ensuring you receive the full value of your current plan.",
      },
      {
        question: "Do you offer refunds?",
        icon: "/icons/refund.svg",
        answer:
          "We want you to be completely satisfied with Aeternum. If you're not happy with your subscription within the first 30 days, contact our support team for a full refund. After 30 days, refunds are evaluated on a case-by-case basis. Please refer to our refund policy in the User License Agreement for complete details.",
      },
      {
        question: "Is there a free trial available?",
        icon: "/icons/trial.svg",
        answer:
          "While we don't currently offer a traditional free trial, we do provide special promotional offers for new users, including our Alpha pre-launch discounts. These limited-time offers give you access to premium features at significantly reduced rates, allowing you to experience the full value of Aeternum. Watch for announcements about new user promotions.",
      },
      {
        question: "What payment methods do you accept?",
        icon: "/icons/payment.svg",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and debit cards through our secure payment processor, Stripe. All transactions are encrypted and processed securely. We do not store your payment information on our servers. Your billing information is protected by industry-standard security measures.",
      },
    ],
  },
  {
    id: "help-support",
    label: "Help & Support",
    questions: [
      {
        question: "What kind of support does Aeternum provide?",
        icon: "/icons/support.svg",
        answer:
          "We offer full platform support, from account access issues to technical guidance and data export assistance. Stripe securely handles billing or payment issues.",
      },
      {
        question: "If I need help with Aeternum, how do I contact Support?",
        icon: "/icons/email.svg",
        answer:
          "You can reach us anytime at support@aeternumproject.com for technical or account assistance, or info@aeternumproject.com for general inquiries.",
      },
      {
        question: "How long does it take to receive a response?",
        icon: "/icons/clock.svg",
        answer:
          "Our team aims to respond to all messages within one business day (Monday–Friday).",
      },
      {
        question: "Where can I follow Aeternum's development?",
        icon: "/icons/roadmap.svg",
        answer:
          "Check our Launch Roadmap and follow Aeternum on social channels for updates, release notes, and feature previews.",
      },
    ],
  },
];

export const supportSection = {
  heading: "Can't find what you need?",
  cta: "Chat with our friendly team.",
  description:
    "At Aeternum, we're dedicated to delivering exceptional experiences every day.",
};

export const contactSection = {
  icon: "/icons/email.svg",
  title: "Contact Us",
  description:
    "At Aeternum, your voice matters. Use the form to share your feedback, questions, or anything else you'd like us to know.",
  link: "/contact",
};
