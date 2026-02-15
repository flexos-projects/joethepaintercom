import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
  title: z.string().max(70, "SEO title should not exceed 70 characters."),
  description: z.string().max(160, "SEO description should not exceed 160 characters."),
  keywords: z.array(z.string()).optional(), // Specific keywords for this page
  ogImage: z.string().optional(), // Open Graph image URL
  twitterImage: z.string().optional(), // Twitter card image URL
});

const serviceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100), // e.g., "Interior Painting Services"
    slug: z.string(), // e.g., "interior-painting"
    shortDescription: z.string().max(200), // Concise summary for cards/listings
    longDescription: z.string(), // Detailed description of the service, including what's involved and client benefits
    category: z.enum(['Painting', 'Handyman']), // Primary service category
    serviceTypes: z.array(z.string()).min(1).max(5), // Specific types within category, e.g., ["Residential", "Commercial", "Cabinet Refinishing"]
    benefits: z.array(z.string()).min(3).max(8), // Key advantages of choosing Joe for this specific service
    processSteps: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({ src: z.string(), alt: z.string() }).optional(), // Optional image for each step
    })).optional(), // Step-by-step process for the service, demystifying the work
    featuredImage: z.object({ // Main image for the service page hero and cards
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    galleryImages: z.array(z.object({ // Additional visual examples of the service
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    faqs: z.array(z.object({ // Service-specific FAQs, embedded for context
      question: z.string(),
      answer: z.string(),
    })).optional(),
    relatedProjects: z.array(z.string()).optional(), // Array of Project slugs related to this service
    ctaText: z.string().max(80), // Call-to-action text specific to this service (e.g., "Get a Free Interior Painting Estimate")
    seo: seoSchema,
    published: z.boolean().default(false), // Controls visibility on the live site
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // e.g., "Encinitas Coastal Home Exterior Refresh"
    slug: z.string(), // e.g., "encinitas-coastal-home-exterior"
    projectDate: z.coerce.date(), // Completion date of the project (YYYY-MM-DD)
    clientName: z.string().optional(), // Optional: "Homeowner in Encinitas" (for privacy, not full name)
    location: z.string(), // e.g., "Encinitas, CA"
    shortDescription: z.string(), // Concise summary for gallery cards
    challenge: z.string(), // The problem or need the client presented
    solution: z.string(), // How Joe addressed the challenge, detailing process and expertise
    result: z.string(), // The positive outcome for the client and their property
    servicesPerformed: z.array(z.string()), // Array of Service IDs or slugs related to this project
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
    seo: seoSchema,
    published: z.boolean().default(false), // Controls visibility on the live site
  }),
});

const testimonialCollection = defineCollection({
  type: 'data', // Use 'data' type if testimonials are JSON, 'content' if Markdown
  schema: z.object({
    clientName: z.string(), // e.g., "Sarah P."
    location: z.string(), // e.g., "Homeowner, Carlsbad"
    quote: z.string(), // The actual testimonial text
    projectType: z.string().optional(), // e.g., "Exterior Painting"
    rating: z.number().min(1).max(5).default(5), // Star rating
    date: z.coerce.date().optional(), // Date of testimonial
    featured: z.boolean().default(false), // Whether to feature on homepage
  }),
});

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
    seo: seoSchema,
  }),
});

const faqCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(), // e.g., "General Business FAQs", "Painting FAQs"
    questions: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

export const collections = {
  services: serviceCollection,
  projects: projectCollection,
  testimonials: testimonialCollection,
  blog: blogCollection,
  faqs: faqCollection,
};