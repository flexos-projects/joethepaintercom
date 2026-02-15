import { defineCollection, z } from 'astro:content';

// Define the schema for the Service collection
const serviceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string().max(200),
    longDescription: z.string().min(200), // RichText is represented as string in Markdown
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
    galleryImages: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(), // RichText is represented as string in Markdown
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

// Define the schema for the Project collection
const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    projectDate: z.coerce.date(), // YYYY-MM-DD format
    clientName: z.string().optional(),
    location: z.string(),
    shortDescription: z.string(),
    challenge: z.string(), // RichText is represented as string in Markdown
    solution: z.string(), // RichText is represented as string in Markdown
    result: z.string(), // RichText is represented as string in Markdown
    servicesPerformed: z.array(z.string()), // Array of Service slugs
    beforeImages: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
    afterImages: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })),
    featuredImage: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    testimonial: z.string().optional(),
    relatedServices: z.array(z.string()).optional(), // Array of Service slugs
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    published: z.boolean().default(false),
  }),
});

// Define the schema for the Testimonial collection
const testimonialCollection = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(),
    location: z.string(),
    quote: z.string(),
    projectType: z.string().optional(), // e.g., "Exterior Painting", "Drywall Repair"
    rating: z.number().min(1).max(5).optional(), // 5-star rating
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false), // For homepage carousel
    published: z.boolean().default(false),
  }),
});


export const collections = {
  services: serviceCollection,
  projects: projectCollection,
  testimonials: testimonialCollection,
};
---