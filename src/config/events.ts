import { SOLIDITY_BOOTCAMP_FORM_URL } from "./site";

export type EventType = "event" | "course" | "workshop";
export type EventLocation = "Online" | "Offline";
export type EventLinkType = "luma" | "form" | "soon";
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
    status: "upcoming",
    location: "Offline",
    venue: "Coimbatore Community Hub",
    date: "2026-05-12",
    time: "6:30 PM IST",
    linkType: "soon",
    link: "",
  },
  {
    id: 2,
    title: "Hands-on Solidity Bootcamp",
    description:
      "Live online cohort (Mar 31–May 31): a structured path to build and deploy your first smart contract.",
    fullDescription:
      "This cohort is live and running from March 31 through May 31. Join builders moving from basics to shipping Solidity: guided sessions, hands-on exercises, and mentor support through the full arc of writing, testing, and deploying contracts.",
    agenda: [
      "Solidity fundamentals",
      "Contract structure and deployment",
      "Testing and debugging workflow",
      "Next steps for builders",
    ],
    type: "workshop",
    status: "live",
    location: "Online",
    date: "Mar 31 – May 31, 2026",
    time: "Cohort in session",
    linkType: "form",
    link: SOLIDITY_BOOTCAMP_FORM_URL,
  },
];
