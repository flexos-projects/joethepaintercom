import { defineCollection, z } from 'astro:content';

// Schema for Services
const serviceCollection = defineCollection({
  type: 'data', // Using 'data' for JSON/YAML files
  schema: z.object({
    id: z.string(),
    title: z.string().max(100),
    slug: z.string(),
    shortDescription: z.string().max(200),
    longDescription: z.string().min(200), // RichText treated as string for data collection
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
    faqs: z.array(z.object({ // Service-specific FAQs
      question: z.string(),
      answer: z.string(), // RichText treated as string for data collection
    })).optional().max(5),
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

// Schema for Projects
const projectCollection = defineCollection({
  type: 'data', // Using 'data' for JSON/YAML files
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    projectDate: z.coerce.date(),
    clientName: z.string().optional(),
    location: z.string(),
    shortDescription: z.string(),
    challenge: z.string(), // RichText treated as string for data collection
    solution: z.string(), // RichText treated as string for data collection
    result: z.string(), // RichText treated as string for data collection
    servicesPerformed: z.array(z.string()),
    beforeImages: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
    afterImages: z.array(z.object({ src: z.string(), alt: z.string() })),
    featuredImage: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    testimonial: z.string().optional(),
    relatedServices: z.array(z.string()).optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    published: z.boolean().default(false),
  }),
});

// Schema for Testimonials
const testimonialCollection = defineCollection({
  type: 'data', // Using 'data' for JSON/YAML files
  schema: z.object({
    id: z.string(),
    clientName: z.string(),
    location: z.string(),
    quote: z.string(),
    projectType: z.string().optional(),
    rating: z.number().min(1).max(5).optional(), // e.g., 5 for 5-star
    date: z.coerce.date().optional(),
    published: z.boolean().default(false),
  }),
});

// Schema for FAQs (for dedicated FAQ page)
const faqCollection = defineCollection({
  type: 'data', // Using 'data' for JSON/YAML files
  schema: z.object({
    category: z.enum(['General Business', 'Painting', 'Handy Services']),
    questions: z.array(z.object({
      question: z.string(),
      answer: z.string(), // Assuming markdown string that will be converted to HTML
    })),
  }),
});


export const collections = {
  services: serviceCollection,
  projects: projectCollection,
  testimonials: testimonialCollection,
  faqs: faqCollection, // Add the new FAQ collection
};
---