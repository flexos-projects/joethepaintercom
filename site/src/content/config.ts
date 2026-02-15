import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // e.g., "Encinitas Coastal Home Exterior Refresh"
    projectDate: z.coerce.date(), // Completion date of the project (YYYY-MM-DD)
    clientName: z.string().optional(), // Optional: "Homeowner in Encinitas"
    location: z.string(), // e.g., "Encinitas, CA"
    shortDescription: z.string(), // Concise summary for gallery cards
    challenge: z.string(), // The problem or need the client presented
    solution: z.string(), // How Joe addressed the challenge, detailing process and expertise
    result: z.string(), // The positive outcome for the client and their property
    servicesPerformed: z.array(z.enum(['Painting', 'Handy', 'Combined'])), // Array of Service categories related to this project
    beforeImages: z.array(z.object({
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
    testimonial: z.string().optional(), // Optional: Direct quote from the client for this project
    relatedServices: z.array(z.string()).optional(), // Array of Service slugs relevant to this project
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    published: z.boolean().default(true), // Controls visibility on the live site
  }),
});

const testimonialCollection = defineCollection({
  type: 'data', // Using 'data' for easier access and smaller files for now, as it's just quotes. Can be 'content' later.
  schema: z.object({
    clientName: z.string(),
    location: z.string().optional(),
    quote: z.string(),
    projectType: z.string().optional(), // e.g., "Exterior Painting"
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false), // For homepage carousel
  }),
});

// Assuming 'services' collection might exist too, but not explicitly used in this task.
const serviceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    category: z.enum(['Painting', 'Handyman']),
    featuredImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    published: z.boolean().default(true),
  }),
});


export const collections = {
  projects: projectCollection,
  testimonials: testimonialCollection,
  services: serviceCollection, // Placeholder
};