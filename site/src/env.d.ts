/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly FORMSPREE_ENDPOINT_URL: string; // If using Formspree directly
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string; // Client-side reCAPTCHA site key
  readonly RECAPTCHA_SECRET_KEY: string; // Server-side reCAPTCHA secret key
  readonly JOE_EMAIL_ADDRESS: string; // Joe's email for notifications
  readonly EMAIL_SERVICE_API_KEY: string; // API key for email sending service
  readonly EMAIL_SERVICE_ENDPOINT: string; // Endpoint for email sending service
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}