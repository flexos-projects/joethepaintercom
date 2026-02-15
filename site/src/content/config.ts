import { defineCollection, z } from 'astro:content';

const serviceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // e.g., "Interior Painting Services"
    slug: z.string(), // e.g., "interior-painting"
    shortDescription: z.string().max(200), // Concise summary for cards/listings
    longDescription: z.string().min(200), // Detailed description of the service (RichText represented as string for Markdown)
    category: z.enum(['Painting', 'Handyman']), // Primary service category
    serviceTypes: z.array(z.string()).min(1).max(5), // Specific types within category
    benefits: z.array(z.string()).min(3).max(8), // Key advantages
    processSteps: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({ src: z.string(), alt: z.string() }).optional(),
    })).optional(), // Step-by-step process
    featuredImage: z.object({ // Main image for the service page hero and cards
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    galleryImages: z.array(z.object({ // Additional visual examples
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    faqs: z.array(z.object({ // Service-specific FAQs
      question: z.string(),
      answer: z.string(), // RichText represented as string for Markdown
    })).optional(),
    relatedProjects: z.array(z.string()).optional(), // Array of Project slugs
    ctaText: z.string().max(80), // Call-to-action text
    seo: z.object({
      title: z.string().max(70),
      description: z.string().max(160),
      keywords: z.array(z.string()).optional(),
    }),
    published: z.boolean().default(false), // Controls visibility
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // e.g., "Encinitas Coastal Home Exterior Refresh"
    slug: z.string(), // e.g., "encinitas-coastal-home-exterior"
    projectDate: z.coerce.date(), // Completion date of the project (YYYY-MM-DD)
    clientName: z.string().optional(), // Optional: "Homeowner in Encinitas"
    location: z.string(), // e.g., "Encinitas, CA"
    shortDescription: z.string(), // Concise summary for gallery cards
    challenge: z.string(), // The problem or need the client presented (RichText as string)
    solution: z.string(), // How Joe addressed the challenge (RichText as string)
    result: z.string(), // The positive outcome (RichText as string)
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
    testimonial: z.string().optional(), // Optional: Direct quote from the client for this project
    relatedServices: z.array(z.string()).optional(), // Array of Service slugs relevant to this project
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    published: z.boolean().default(false), // Controls visibility on the live site
  }),
});

const testimonialCollection = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(), // e.g., "Sarah P."
    location: z.string(), // e.g., "Homeowner, Carlsbad"
    projectType: z.string().optional(), // Optional: "Exterior Painting", "Drywall Repair"
    rating: z.number().min(1).max(5), // Star rating
    date: z.coerce.date(), // Date of testimonial
    published: z.boolean().default(false), // Controls visibility
  }),
});


export const collections = {
  services: serviceCollection,
  projects: projectCollection,
  testimonials: testimonialCollection,
};