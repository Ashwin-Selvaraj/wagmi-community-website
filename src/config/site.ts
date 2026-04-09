const fallbackCommunityName = "Community";

export const COMMUNITY_NAME =
  import.meta.env.VITE_COMMUNITY_NAME?.trim() || fallbackCommunityName;
