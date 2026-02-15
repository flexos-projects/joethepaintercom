/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FORMSPREE_ENDPOINT_URL: string;
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string; // Added for TASK-025
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}