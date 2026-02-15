import type { AstroGlobal } from 'astro';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterImage?: string;
}

interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    email: string;
    areaServed: string[];
  };
  slogan: string;
  sameAs: string[];
}

interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  url: string;
  name: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

interface WebPageSchema {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
}

interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  image: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  priceRange: string;
  hasMap: string;
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  areaServed: ({ "@type": "State" | "City"; name: string } | string)[];
  geo?: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: number;
      longitude: number;
    };
    geoRadius: number;
  };
  review?: any[]; // To be populated dynamically
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
  };
  sameAs?: string[];
}

interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  serviceType: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
  };
  areaServed: {
    "@type": "AdministrativeArea";
    name: string;
  };
  description: string;
  url: string;
  image: string;
}

interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  image: string[];
  datePublished: string;
  dateModified: string;
  author: {
    "@type": "Person" | "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  description: string;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

export const defaultSiteTitle = "Joe the Painter: Your San Diego Craftsman Since 2001";
export const defaultSiteDescription = "Meticulous painting and reliable repairs, personally delivered by a licensed expert with a quarter-century of proven trust in San Diego County.";
export const defaultOgImage = "https://www.joethepainter.com/images/social-share-default.jpg";

export function getMetaTags(Astro: AstroGlobal, seo: SEOProps) {
  const canonicalURL = new URL(Astro.url.pathname, Astro.site);
  const title = seo.title ? `${seo.title} | Joe the Painter` : defaultSiteTitle;
  const description = seo.description || defaultSiteDescription;
  const ogImage = seo.ogImage || defaultOgImage;
  const twitterImage = seo.twitterImage || ogImage;

  return {
    title,
    description,
    canonicalURL,
    ogImage,
    twitterImage,
    keywords: seo.keywords ? seo.keywords.join(', ') : undefined,
  };
}

export function generateOrganizationSchema(Astro: AstroGlobal): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Joe the Painter",
    url: String(Astro.site),
    logo: `${Astro.site}images/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-760-580-8173",
      contactType: "customer service",
      email: "joe@joethepainter.com",
      areaServed: ["San Diego County", "Central San Diego County", "North San Diego County"],
    },
    slogan: "The Craftsman's Guarantee: Meticulous painting and reliable repairs, personally delivered by a licensed expert with a quarter-century of proven trust.",
    sameAs: [
      "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=802167",
      // Add Yelp, Google Business Profile, etc. links once established
    ],
  };
}

export function generateWebSiteSchema(Astro: AstroGlobal): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: String(Astro.site),
    name: "Joe the Painter",
    potentialAction: {
      "@type": "SearchAction",
      target: `${Astro.site}search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateWebPageSchema(Astro: AstroGlobal, seo: SEOProps): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: String(new URL(Astro.url.pathname, Astro.site)),
  };
}

export function generateLocalBusinessSchema(Astro: AstroGlobal, reviews?: any[], aggregateRating?: { ratingValue: number; reviewCount: number }): LocalBusinessSchema {
  const schema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Joe the Painter",
    image: `${Astro.site}images/joe-profile.jpg`, // Professional photo of Joe
    url: String(Astro.site),
    telephone: "+1-760-580-8173",
    email: "joe@joethepainter.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego County", // General service area
      addressRegion: "CA",
      addressCountry: "US",
    },
    priceRange: "$$", // Indicative price range
    hasMap: "https://www.google.com/maps/search/?api=1&query=Joe+the+Painter+San+Diego", // Link to Google Maps search
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "State", "name": "California" },
      { "@type": "City", "name": "Carlsbad" },
      { "@type": "City", "name": "Encinitas" },
      { "@type": "City", "name": "Vista" },
      { "@type": "City", "name": "San Marcos" },
      { "@type": "City", "name": "Oceanside" },
      { "@type": "City", "name": "Escondido" },
      { "@type": "City", "name": "Poway" },
      { "@type": "City", "name": "Rancho Bernardo" },
      { "@type": "City", "name": "Del Mar" },
      { "@type": "City", "name": "Solana Beach" },
    ],
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 33.0903, // Approximate center of North San Diego County
        longitude: -117.2519,
      },
      geoRadius: 50000, // Radius in meters, ~30 miles
    },
    sameAs: [
      "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=802167",
    ],
  };

  if (reviews && reviews.length > 0) {
    schema.review = reviews;
  }
  if (aggregateRating) {
    schema.aggregateRating = aggregateRating;
  }
  return schema;
}

export function generateServiceSchema(Astro: AstroGlobal, service: { title: string; shortDescription: string; featuredImage: { src: string; alt: string; }; }): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: "Joe the Painter",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "San Diego County, CA",
    },
    description: service.shortDescription,
    url: String(new URL(Astro.url.pathname, Astro.site)),
    image: `${Astro.site}${service.featuredImage.src}`,
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string; }[]): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateReviewSchema(testimonial: { clientName: string; location: string; quote: string; rating: number; date?: Date; }): any {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: testimonial.clientName,
    },
    reviewBody: testimonial.quote,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Joe the Painter",
    },
    datePublished: testimonial.date ? testimonial.date.toISOString().split('T')[0] : undefined,
  };
}

export function generateArticleSchema(Astro: AstroGlobal, post: { data: { title: string; description: string; pubDate: Date; updatedDate?: Date; author: string; image?: { url: string; alt: string; }; }; slug: string; }): ArticleSchema {
  const articleUrl = String(new URL(`/blog/${post.slug}`, Astro.site));
  const imageUrl = post.data.image ? `${Astro.site}${post.data.image.url}` : defaultOgImage;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    image: [imageUrl],
    datePublished: post.data.pubDate.toISOString(),
    dateModified: (post.data.updatedDate || post.data.pubDate).toISOString(),
    author: {
      "@type": "Person",
      name: post.data.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Joe the Painter",
      logo: {
        "@type": "ImageObject",
        url: `${Astro.site}images/logo.svg`,
      },
    },
    description: post.data.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}