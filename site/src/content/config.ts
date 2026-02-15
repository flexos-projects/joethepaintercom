---
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Joe the Painter'),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Assuming 'services', 'projects', and 'testimonials' collections exist or will be created
const serviceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string().max(100),
    slug: z.string(),
    shortDescription: z.string().max(200),
    longDescription: z.string(), // RichText is difficult to represent in Zod directly, use string for now.
    category: z.enum(['Painting', 'Handyman']),
    serviceTypes: z.array(z.string()).min(1).max(5),
    benefits: z.array(z.string()).min(3).max(8),
    processSteps: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({ src: z.string(), alt: z.string() }).optional(),
    })).optional(),
    featuredImage: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    galleryImages: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    relatedProjects: z.array(z.string()).optional(),
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
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    projectDate: z.coerce.date(),
    clientName: z.string().optional(),
    location: z.string(),
    shortDescription: z.string(),
    challenge: z.string(), // RichText
    solution: z.string(), // RichText
    result: z.string(), // RichText
    servicesPerformed: z.array(z.string()),
    beforeImages: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
    afterImages: z.array(z.object({ src: z.string(), alt: z.string() })),
    featuredImage: z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }),
    testimonial: z.string().optional(),
    relatedServices: z.array(z.string()).optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    published: z.boolean().default(false),
  }),
});

const testimonialCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    clientName: z.string(),
    location: z.string(),
    quote: z.string(),
    projectType: z.string().optional(),
    rating: z.number().min(1).max(5).optional(), // Example for star rating
    published: z.boolean().default(false),
  }),
});


export const collections = {
  blog: blogCollection,
  services: serviceCollection,
  projects: projectCollection,
  testimonials: testimonialCollection,
};
---