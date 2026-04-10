const fallbackCommunityName = "Community";

export const COMMUNITY_NAME =
  import.meta.env.VITE_COMMUNITY_NAME?.trim() || fallbackCommunityName;

export type PastEvent = {
  title: string;
  url: string;
  image?: string;
};

export type TeamMember = {
  name: string;
  title: string;
  description: string;
  image: string;
};

const DEFAULT_PAST_EVENTS: PastEvent[] = [
  {
    title: "Scaling Ethereum: Mastering Layer 2 Technologies",
    url: "https://luma.com/qhipk1q8",
  },
  {
    title: "Ethereum EIPs & ERCs Insight",
    url: "https://luma.com/b2gvop48",
  },
  {
    title: "Devcon Debrief: Talks, Insights, and Conversations",
    url: "https://luma.com/ufbk8pi4",
  },
  {
    title: "ETHUnite: Bringing Devcon Home",
    url: "https://luma.com/whs7wlk7",
  },
  {
    title: "Decade of Decentralization Coimbatore",
    url: "https://luma.com/wuyo2328",
  },
];

const parsePastEvents = (value: string | undefined): PastEvent[] => {
  if (!value) return DEFAULT_PAST_EVENTS;
  try {
    const parsed = JSON.parse(value) as unknown;
    if (!Array.isArray(parsed)) return DEFAULT_PAST_EVENTS;
    const normalized: PastEvent[] = parsed.reduce<PastEvent[]>((acc, item) => {
      if (!item || typeof item !== "object") return acc;
      const title = String((item as { title?: unknown }).title ?? "").trim();
      const url = String((item as { url?: unknown }).url ?? "").trim();
      const imageRaw = (item as { image?: unknown }).image;
      const image = typeof imageRaw === "string" && imageRaw.trim() ? imageRaw.trim() : undefined;
      if (!title || !url) return acc;
      acc.push({ title, url, image });
      return acc;
    }, []);
    return normalized.length ? normalized : DEFAULT_PAST_EVENTS;
  } catch {
    return DEFAULT_PAST_EVENTS;
  }
};

export const PAST_EVENTS = parsePastEvents(import.meta.env.VITE_PAST_EVENTS_JSON);

const TEAM_SLOTS = [1, 2, 3, 4, 5, 6] as const;

const parseTeamMembers = (): TeamMember[] => {
  return TEAM_SLOTS.reduce<TeamMember[]>((acc, index) => {
    const name = import.meta.env[`VITE_TEAM_NAME_${index}`]?.trim();
    const title = import.meta.env[`VITE_TEAM_TITLE_${index}`]?.trim();
    const description = import.meta.env[`VITE_TEAM_DESCRIPTION_${index}`]?.trim();
    const image = import.meta.env[`VITE_TEAM_IMAGE_${index}`]?.trim();

    if (!name || !title || !description || !image) return acc;
    acc.push({ name, title, description, image });
    return acc;
  }, []);
};

export const TEAM_MEMBERS = parseTeamMembers();
