/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COMMUNITY_NAME?: string;
  readonly VITE_PAST_EVENTS_JSON?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
