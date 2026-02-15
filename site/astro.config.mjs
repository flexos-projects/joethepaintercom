import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.joethepainter.com', // Primary domain for sitemap and canonical URLs
  output: 'static', // Static Site Generation
  compressHTML: true, // Compress HTML output
  integrations: [
    tailwind({
      applyBaseStyles: true, // Ensure Tailwind's base styles are applied
    }),
    image({
      service: {
        entrypoint: 'astro/assets/services/squoosh', // Use Squoosh for local image optimization
      },
      // You can also configure cloud-based services like Cloudinary here if needed
    }),
    sitemap({
      // Configure sitemap generation
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    compress(), // General compression for static assets
  ],
  markdown: {
    // Configure markdown for content collections if using .md files
    syntaxHighlight: 'shiki', // Or 'prism'
    shikiConfig: {
      theme: 'dracula', // Example theme
    },
  },
  experimental: {
    contentCollections: true, // Enable Astro Content Collections
  },
  build: {
    assetsPrefix: '/_astro', // Prefix for assets in the build output
  },
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'], // Example for specific external dependencies in SSR
    },
  },
});