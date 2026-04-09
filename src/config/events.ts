export type EventType = "event" | "course" | "workshop";
export type EventLocation = "Online" | "Offline";
export type EventLinkType = "luma" | "form";
export type EventStatus = "live" | "upcoming";

export type CommunityEvent = {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  agenda?: string[];
  type: EventType;
  status: EventStatus;
  location: EventLocation;
  venue?: string;
  date?: string;
  time?: string;
  linkType: EventLinkType;
  link: string;
};

// Keep this array empty when there are no upcoming events.
export const events: CommunityEvent[] = [
  {
    id: 1,
    title: "Ethereum for Beginners: Wallets and Safety",
    description: "A practical onboarding session to set up wallets safely and understand Ethereum basics.",
    fullDescription:
      "This beginner-first community session helps newcomers confidently start their Web3 journey. We cover wallet setup, common scams, and how to navigate Ethereum safely.",
    agenda: [
      "Web3 basics and Ethereum intro",
      "Wallet setup walkthrough",
      "Security best practices and scam prevention",
      "Live Q&A with mentors",
    ],
    type: "event",
    status: "live",
    location: "Offline",
    venue: "Coimbatore Community Hub",
    date: "2026-05-12",
    time: "6:30 PM IST",
    linkType: "luma",
    link: "https://luma.com/",
  },
  {
    id: 2,
    title: "Hands-on Solidity Bootcamp",
    description: "A structured workshop to help developers build and deploy their first smart contract.",
    fullDescription:
      "An intermediate workshop focused on writing, testing, and deploying smart contracts. Ideal for developers who understand basics and want hands-on building experience.",
    agenda: [
      "Solidity fundamentals",
      "Contract structure and deployment",
      "Testing and debugging workflow",
      "Next steps for builders",
    ],
    type: "workshop",
    status: "upcoming",
    location: "Online",
    date: "2026-05-25",
    time: "7:00 PM IST",
    linkType: "form",
    link: "https://forms.google.com/",
  },
];
