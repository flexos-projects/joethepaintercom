import { defineCollection, z } from 'astro:content';

// Helper for image schema
const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const serviceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // e.g., "Precision Interior Painting"
    slug: z.string(), // e.g., "interior-painting"
    shortDescription: z.string(), // Concise summary for cards/listings
    longDescription: z.string(), // Detailed description of the service (markdown string)
    category: z.enum(['Painting', 'Handyman']), // Primary service category
    serviceTypes: z.array(z.string()), // Specific types within category, e.g., ["Residential", "Commercial", "Cabinet Refinishing"]
    benefits: z.array(z.string()), // Key advantages of choosing Joe for this specific service
    processSteps: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: imageSchema.optional(), // Optional image for each step
    })).optional(),
    featuredImage: imageSchema, // Main image for the service page hero and cards
    galleryImages: z.array(imageSchema).optional(), // Additional visual examples of the service
    faqs: z.array(z.object({ // Service-specific FAQs
      question: z.string(),
      answer: z.string(), // Answer (markdown string)
    })).optional(),
    relatedProjects: z.array(z.string()).optional(), // Array of Project slugs related to this service
    ctaText: z.string(), // Call-to-action text specific to this service
    seo: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()).optional(), // Specific keywords for this service page
    }),
    published: z.boolean().default(false), // Controls visibility on the live site
  }),
});

export const collections = {
  services: serviceCollection,
};