---
// src/types/seo.ts
// Type definitions for SEO metadata.
---

export interface SiteMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string; // Full URL to the Open Graph image
}