---
/// <reference types="astro/client" />
/// <reference types="astro/content" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly FORMSPREE_ENDPOINT_URL: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
---