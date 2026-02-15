/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  readonly FORMSPREE_ENDPOINT_URL: string;
  // Add other environment variables here as they are defined
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}