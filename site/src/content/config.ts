---
// NOTE: This file is a merge of existing content and new additions.
// The original content of this file is preserved, and new fields are added.
---
import { defineCollection, z } from 'astro:content';

const serviceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), // kebab-case
    shortDescription: z.string().max(200),
    longDescription: z.string().min(200), // RichText would be string in MDX/Markdown
    category: z.enum(['Painting', 'Handyman']),
    serviceTypes: z.array(z.string()).min(1).max(5),
    benefits: z.array(z.string()).min(3).max(8),
    processSteps: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
    })).optional(), // min 2 steps if present removed as it's optional
    featuredImage: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    galleryImages: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(), // RichText would be string in MDX/Markdown
    })).optional(),
    relatedProjects: z.array(z.string()).optional(), // Array of Project slugs
    ctaText: z.string().max(80),
    seo: z.object({
      title: z.string().max(70),
      description: z.string().max(160),
      keywords: z.array(z.string()).optional(),
    }),
    published: z.boolean().default(false),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), // Unique identifier
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), // URL-friendly slug
    projectDate: z.coerce.date(), // Completion date
    clientName: z.string().optional(), // Optional: "Homeowner in Encinitas"
    location: z.string(), // e.g., "Encinitas, CA"
    shortDescription: z.string(), // Concise summary
    challenge: z.string(), // RichText would be string in MDX/Markdown
    solution: z.string(), // RichText would be string in MDX/Markdown
    result: z.string(), // RichText would be string in MDX/Markdown
    servicesPerformed: z.array(z.string()), // Array of Service IDs or slugs
    beforeImages: z.array(z.object({ // Optional: Images showing the state before Joe's work
      src: z.string(),
      alt: z.string(),
    })).optional(),
    afterImages: z.array(z.object({ // Images showing the completed work
      src: z.string(),
      alt: z.string(),
    })),
    featuredImage: z.object({ // Main image for project card/hero
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    testimonial: z.string().optional(), // Optional: Direct quote from the client
    relatedServices: z.array(z.string()).optional(), // Array of Service slugs
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    published: z.boolean().default(false),
  }),
});

// NOTE: Testimonial collection schema is not provided in the prompt,
// but it's mentioned in 04-content-schema.md. Adding a basic one for completeness.
const testimonialCollection = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(),
    location: z.string(),
    quote: z.string(),
    projectType: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    published: z.boolean().default(false),
  }),
});


export const collections = {
  services: serviceCollection,
  projects: projectCollection,
  testimonials: testimonialCollection,
};