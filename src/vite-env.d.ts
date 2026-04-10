/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COMMUNITY_NAME?: string;
  readonly VITE_COMMUNITY_INSTAGRAM_URL?: string;
  readonly VITE_COMMUNITY_TWITTER_URL?: string;
  readonly VITE_COMMUNITY_WHATSAPP_URL?: string;
  readonly VITE_IMPACT_EVENTS_HOSTED?: string;
  readonly VITE_IMPACT_COMMUNITY_REACH?: string;
  readonly VITE_IMPACT_FOCUS?: string;
  readonly VITE_PAST_EVENTS_JSON?: string;
  readonly VITE_TEAM_NAME_1?: string;
  readonly VITE_TEAM_TITLE_1?: string;
  readonly VITE_TEAM_DESCRIPTION_1?: string;
  readonly VITE_TEAM_IMAGE_1?: string;
  readonly VITE_TEAM_NAME_2?: string;
  readonly VITE_TEAM_TITLE_2?: string;
  readonly VITE_TEAM_DESCRIPTION_2?: string;
  readonly VITE_TEAM_IMAGE_2?: string;
  readonly VITE_TEAM_NAME_3?: string;
  readonly VITE_TEAM_TITLE_3?: string;
  readonly VITE_TEAM_DESCRIPTION_3?: string;
  readonly VITE_TEAM_IMAGE_3?: string;
  readonly VITE_TEAM_NAME_4?: string;
  readonly VITE_TEAM_TITLE_4?: string;
  readonly VITE_TEAM_DESCRIPTION_4?: string;
  readonly VITE_TEAM_IMAGE_4?: string;
  readonly VITE_TEAM_NAME_5?: string;
  readonly VITE_TEAM_TITLE_5?: string;
  readonly VITE_TEAM_DESCRIPTION_5?: string;
  readonly VITE_TEAM_IMAGE_5?: string;
  readonly VITE_TEAM_NAME_6?: string;
  readonly VITE_TEAM_TITLE_6?: string;
  readonly VITE_TEAM_DESCRIPTION_6?: string;
  readonly VITE_TEAM_IMAGE_6?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
