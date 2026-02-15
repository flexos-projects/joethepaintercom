# Build Tasks

Generated: 2026-02-15T03:19:20.664Z

## TASK-001: Project Setup & Tailwind CSS Config

- **Category:** setup
- **Priority:** P0
- **Dependencies:** None
- **Dependency Reason:** Foundational task for all styling and development.
- **Output Files:** astro.config.mjs, tailwind.config.mjs, postcss.config.mjs, src/env.d.ts, src/styles/global.css

### Specification
Initialize Astro project, install dependencies, and configure Tailwind CSS for styling. Set up core directories.

### Spec Reference
> Implement using a robust CSS framework (e.g., Tailwind CSS or custom SCSS).

### Acceptance Criteria
- [ ] Astro project initializes without errors.
- [ ] Tailwind CSS classes are applied correctly in a test component.
- [ ] Global CSS file is linked and working.
- [ ] Necessary environment typings are available.

---

## TASK-002: Design Tokens & Global Styles

- **Category:** setup
- **Priority:** P0
- **Dependencies:** TASK-001
- **Dependency Reason:** Requires Tailwind CSS setup to define and apply tokens.
- **Output Files:** tailwind.config.mjs, src/styles/global.css, src/styles/tokens.css

### Specification
Define design tokens (colors, typography, spacing) in `tailwind.config.mjs` and apply global styles for typography and base elements in `src/styles/global.css` or `src/styles/tokens.css`.

### Spec Reference
> Sufficient color contrast ratio (minimum 4.5:1 for text/background). ... Our brand voice is Direct, Confident, Personal, Expert, and Reassuring.

### Acceptance Criteria
- [ ] Primary brand colors, fonts, and spacing are defined as Tailwind tokens.
- [ ] Global typography (headings, body text) is consistently styled.
- [ ] Basic elements (links, paragraphs) reflect the brand identity.
- [ ] Color contrast ratios meet WCAG AA standards for basic text.

---

## TASK-003: Base Layout Component

- **Category:** foundation
- **Priority:** P0
- **Dependencies:** TASK-002
- **Dependency Reason:** Requires global styles and design tokens for consistent appearance and initial SEO setup.
- **Output Files:** src/layouts/BaseLayout.astro

### Specification
Create the `BaseLayout.astro` component to provide a consistent page structure, including `<head>` elements for SEO, `lang` attribute, and placeholders for header and footer. Implement initial SEO meta tags.

### Spec Reference
> Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`). ... Language attribute set (`lang="en"`). ... Unique, descriptive `<title>` tags for every page. ... Unique, compelling `<meta name="description">` tags for every page.

### Acceptance Criteria
- [ ] All pages use `BaseLayout.astro` to ensure consistent structure.
- [ ] HTML `lang` attribute is set to 'en'.
- [ ] Default `<title>` and `<meta name='description'>` are present.
- [ ] Basic accessibility attributes (e.g., `role='document'`) are included.

---

## TASK-004: UI Primitive: Button Component

- **Category:** component
- **Priority:** P0
- **Dependencies:** TASK-002
- **Dependency Reason:** Buttons are fundamental interactive elements used across the site, requiring global styles.
- **Output Files:** src/components/ui/Button.astro

### Specification
Develop a reusable `Button.astro` component with variations for primary CTA, secondary actions, and different sizes. Ensure accessibility with keyboard navigation and focus states.

### Spec Reference
> States: Default: Defined button style. Hover: Subtle visual feedback (e.g., background color change, slight scale). Active: Depressed state.

### Acceptance Criteria
- [ ] Button component displays correctly with default and variant styles.
- [ ] Buttons are focusable via keyboard and have clear focus indicators.
- [ ] Hover and active states are visually distinct.
- [ ] Clicking buttons triggers expected actions.

---

## TASK-005: UI Primitives: Form Inputs & Labels

- **Category:** component
- **Priority:** P0
- **Dependencies:** TASK-002
- **Dependency Reason:** These primitives are essential for any form on the website (contact, consultation).
- **Output Files:** src/components/ui/Input.astro, src/components/ui/Label.astro

### Specification
Create reusable `Input.astro` and `Label.astro` components for text, email, phone, and textarea fields. Implement basic styling, accessibility for labels, and focus states.

### Spec Reference
> Form fields have explicit labels and error messages are clear and programmatically associated. ... States: Form fields have default, focus, error states.

### Acceptance Criteria
- [ ] Input fields and labels are correctly associated and styled.
- [ ] Fields are navigable via keyboard and have visible focus states.
- [ ] Placeholder text is visible and accessible.
- [ ] Error states can be visually represented (e.g., red border).

---

## TASK-006: Header & Global Navigation (Desktop)

- **Category:** foundation
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-004
- **Dependency Reason:** The Header uses the `BaseLayout` and requires the `Button` component for the CTA. It defines the main navigation structure.
- **Output Files:** src/components/Header.astro, src/components/Nav.astro

### Specification
Implement the `Header.astro` component containing the logo (linking to homepage) and desktop global navigation with primary menu items and the 'Book a Free Consultation' CTA button.

### Spec Reference
> Navigation bar visible on all pages. ... Clear, concise menu items: 'Home', 'Painting Services', 'Handy Services', 'Our Work', 'About Joe', 'Contact'. ... 'Book a Free Consultation' CTA button prominently integrated into the navigation. ... Logo (Joe the Painter) always links to the homepage. ... Semantic HTML5 for navigation elements. ... Navigation is fully accessible via keyboard and screen readers.

### Acceptance Criteria
- [ ] Header is visible on all pages (via BaseLayout).
- [ ] Logo links to homepage.
- [ ] Menu items ('Home', 'Painting Services', etc.) are visible and link correctly.
- [ ] CTA button is present, styled, and clickable.
- [ ] Navigation is keyboard accessible with clear focus states.

---

## TASK-007: Footer Component

- **Category:** foundation
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-004
- **Dependency Reason:** The Footer requires `BaseLayout` for placement and `Button` for its CTA.
- **Output Files:** src/components/Footer.astro

### Specification
Develop the `Footer.astro` component with copyright information, sitemap links (Home, Services, About, Contact), and potentially placeholder for social links. Include 'Book a Free Consultation' CTA.

### Spec Reference
> CTA buttons present in: Global Navigation, Hero Section, Contact Page, Service Pages, Footer.

### Acceptance Criteria
- [ ] Footer is consistently displayed at the bottom of all pages.
- [ ] Sitemap links are present and functional.
- [ ] Copyright text is accurate.
- [ ] CTA button is present and clickable.

---

## TASK-008: Mobile Navigation (Hamburger Menu)

- **Category:** foundation
- **Priority:** P0
- **Dependencies:** TASK-006
- **Dependency Reason:** Extends the global navigation to mobile devices.
- **Output Files:** src/components/Header.astro, src/components/Nav.astro

### Specification
Implement the mobile-specific navigation within `Header.astro`, transforming the desktop navigation into a hamburger menu icon that reveals a full-screen overlay or slide-out menu on click. Ensure touch-friendly design.

### Spec Reference
> Mobile behavior: Hamburger menu icon (`☰`) on top-right. Clicking hamburger reveals full-screen overlay navigation or slide-out menu. 'Book a Free Consultation' CTA remains visible or easily accessible within the mobile menu. Menu items are touch-friendly with generous tap targets. ... All content, images, and interactive elements scale and rearrange appropriately for different screen widths. Navigation transforms into a mobile-friendly menu (e.g., hamburger icon).

### Acceptance Criteria
- [ ] Hamburger menu icon is visible on mobile breakpoints.
- [ ] Clicking the icon reveals/hides the mobile navigation menu.
- [ ] Mobile menu items are touch-friendly with generous tap targets.
- [ ] The 'Book a Free Consultation' CTA is visible or easily accessible within the mobile menu.
- [ ] Navigation is fully accessible via keyboard and screen readers on mobile.

---

## TASK-009: Consultation Request Form Component

- **Category:** component
- **Priority:** P0
- **Dependencies:** TASK-005, TASK-004
- **Dependency Reason:** Requires input and button primitives for form construction. This is a core lead generation mechanism.
- **Output Files:** src/components/ConsultationForm.astro

### Specification
Create a reusable `ConsultationForm.astro` component with fields for Name, Email, Phone, Service Type (Dropdown: Painting, Handy Services, Both), Project Description, and Preferred Contact Method (Radio). Include a placeholder for reCAPTCHA.

### Spec Reference
> Form fields: Name, Email, Phone, Service Type (Dropdown: Painting, Handy Services, Both), Project Description (Textarea), Preferred Contact Method (Radio: Phone, Email). ... Form includes a reCAPTCHA or similar spam prevention.

### Acceptance Criteria
- [ ] Form fields are correctly rendered and labelled.
- [ ] Dropdown and radio button selections function as expected.
- [ ] Form is navigable via keyboard.
- [ ] Submission button is functional (even if backend is placeholder initially).

---

## TASK-010: Consultation Modal/Page Integration

- **Category:** component
- **Priority:** P0
- **Dependencies:** TASK-009, TASK-004, TASK-003
- **Dependency Reason:** This task makes the core CTA system functional by linking buttons to the form.
- **Output Files:** src/pages/consultation.astro, src/components/Modal.astro

### Specification
Integrate the `ConsultationForm.astro` into a dedicated 'Consultation Request' page (`/consultation`) and/or a modal component (`Modal.astro`) that can be triggered by 'Book a Free Consultation' CTAs.

### Spec Reference
> Clicking a CTA button triggers a modal form or navigates to a dedicated 'Consultation Request' page. ... Mobile behavior: Buttons are touch-friendly. Modal form adapts to full-screen overlay for optimal input experience.

### Acceptance Criteria
- [ ] Clicking 'Book a Free Consultation' CTA (e.g., in header) opens the consultation form (modal or navigates to page).
- [ ] Consultation form is fully functional within its context.
- [ ] Modal (if used) can be closed by clicking outside or an 'X' button.
- [ ] Modal form adapts to full-screen overlay for optimal input experience on mobile.

---

## TASK-011: Homepage (index.astro)

- **Category:** page
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-006, TASK-007, TASK-010
- **Dependency Reason:** The homepage is the entry point and requires the main layout, header, footer, and the consultation CTA system to be functional.
- **Output Files:** src/pages/index.astro

### Specification
Create the main `index.astro` page, integrating the `BaseLayout`, `Header`, and `Footer`. Set up the page structure to include placeholder sections for Hero, About Joe, Services overview, and Testimonials.

### Spec Reference
> Location: Top of the Homepage, immediately below the global navigation. ... Shortened 'Meet Joe' section on the homepage, linking to the full 'About Joe' page. ... Dedicated 'Testimonials' section on the Homepage, featuring a rotating carousel of 3-5 key testimonials.

### Acceptance Criteria
- [ ] Homepage loads with header and footer.
- [ ] Placeholder sections are present for major content blocks.
- [ ] Homepage is responsive on various screen sizes.
- [ ] Title and meta description are unique for the homepage.

---

## TASK-012: Hero Section Component

- **Category:** component
- **Priority:** P0
- **Dependencies:** TASK-011, TASK-004, TASK-010
- **Dependency Reason:** The Hero section is a key component of the homepage and requires CTA functionality.
- **Output Files:** src/components/Hero.astro

### Specification
Implement the `Hero.astro` component with the primary headline, secondary tagline, 'Book Your Free Consultation' CTA, and the CA License # prominently displayed. Integrate Joe's photo.

### Spec Reference
> High-quality, authentic photo of Joe. ... Primary headline: 'Your Home, My Craft. Done Right Since 2001.' ... Secondary tagline: 'Meticulous Painting & Reliable Handy Services in San Diego County.' ... Prominent 'Book Your Free Consultation' CTA button. ... CA License #802167 displayed with a direct link to CSLB verification.

### Acceptance Criteria
- [ ] Hero section displays the correct headline, tagline, and license number.
- [ ] Joe's authentic photo is present and responsive.
- [ ] CTA button links to the consultation flow.
- [ ] CA License # links directly to CSLB verification.
- [ ] Content is legible and visually appealing across all screen sizes.

---

## TASK-013: About Joe Section (Homepage) & About Page

- **Category:** page
- **Priority:** P0
- **Dependencies:** TASK-011, TASK-003, TASK-004, TASK-010
- **Dependency Reason:** These components and pages provide essential brand trust and context, linking from the homepage and using shared layout elements and CTAs.
- **Output Files:** src/pages/about.astro, src/components/AboutJoeSection.astro

### Specification
Create a condensed 'AboutJoeSection.astro' for the homepage, linking to a full 'about.astro' page. The 'About' page will detail Joe's biography, founding story (since 2001), core values, and San Diego connection, with a professional headshot.

### Spec Reference
> 'About Joe' page accessible from global navigation. ... Content includes: Joe's biography, founding story (since 2001), core values (craftsmanship, integrity, communication), and connection to San Diego. ... Prominent display of 'CA Lic. # 802167' and 'Serving San Diego County Since 2001'. ... Integration of Joe's professional, approachable headshot and potentially action shots. ... Shortened 'Meet Joe' section on the homepage, linking to the full 'About Joe' page.

### Acceptance Criteria
- [ ] Homepage displays the condensed 'Meet Joe' section with a link to the full 'About' page.
- [ ] The 'About' page contains Joe's bio, values, founding date, and license number.
- [ ] Joe's headshot and/or action shots are integrated and responsive.
- [ ] The content clearly conveys 'Craftsman with a Legacy' positioning.
- [ ] CTA is accessible on the 'About' page.

---

## TASK-014: Services Page: Painting

- **Category:** page
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-006, TASK-007, TASK-010
- **Dependency Reason:** This is a core service page requiring the main layout, navigation, and consultation system.
- **Output Files:** src/pages/services/painting.astro

### Specification
Create `src/pages/services/painting.astro`. Detail sections for Interior, Exterior, Cabinet Refinishing, and Commercial Painting, including descriptions, process steps, and benefits. Include a prominent 'Book a Free Consultation' CTA.

### Spec Reference
> 'Painting Services' page with sections for: Interior Painting, Exterior Painting, Cabinet Refinishing, Commercial Painting. ... For each painting service: description, typical process steps, key benefits. ... Prominent 'Book a Free Consultation' CTA on both service pages.

### Acceptance Criteria
- [ ] The 'Painting Services' page is accessible via navigation.
- [ ] All specified painting services (Interior, Exterior, Cabinet, Commercial) have dedicated sections with descriptions.
- [ ] Process steps and key benefits are clearly articulated for each service.
- [ ] The 'Book a Free Consultation' CTA is prominently displayed and functional.
- [ ] Content supports SEO for specific painting service keywords.

---

## TASK-015: Services Page: Handy Services

- **Category:** page
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-006, TASK-007, TASK-010
- **Dependency Reason:** This is a core service page requiring the main layout, navigation, and consultation system.
- **Output Files:** src/pages/services/handy.astro

### Specification
Create `src/pages/services/handy.astro`. List comprehensive handyman tasks with brief descriptions and project examples. Include a prominent 'Book a Free Consultation' CTA.

### Spec Reference
> 'Handy Services' page with a comprehensive list of specific tasks Joe can perform (e.g., drywall repair, minor carpentry, pressure washing, fixture installation). ... For each handy service: brief description, examples of projects. ... Prominent 'Book a Free Consultation' CTA on both service pages.

### Acceptance Criteria
- [ ] The 'Handy Services' page is accessible via navigation.
- [ ] A comprehensive list of handyman tasks is presented with descriptions.
- [ ] Examples of handyman projects are included.
- [ ] The 'Book a Free Consultation' CTA is prominently displayed and functional.
- [ ] Content supports SEO for specific handyman service keywords.

---

## TASK-016: Project Portfolio Card Component

- **Category:** component
- **Priority:** P0
- **Dependencies:** TASK-002
- **Dependency Reason:** This component is essential for building the project portfolio grid and individual project pages.
- **Output Files:** src/components/ProjectCard.astro

### Specification
Develop a `ProjectCard.astro` component to display individual portfolio items. Each card should include a project title, location, a brief description, and a high-resolution 'After' photo.

### Spec Reference
> Each project entry includes: Project Title, Location (e.g., 'Encinitas Home Exterior'), Brief Description (Challenge, Joe's Solution, Result). ... High-resolution 'After' photos. ... Use `figure` and `figcaption` for semantic image presentation.

### Acceptance Criteria
- [ ] Project cards display title, location, description, and an 'After' image.
- [ ] Images are responsive and optimized for display within the card.
- [ ] Card layout is clean and visually appealing.
- [ ] Semantic HTML (`<figure>`, `figcaption`) is used for images.

---

## TASK-017: Project Portfolio Gallery Page

- **Category:** page
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-006, TASK-007, TASK-010, TASK-016
- **Dependency Reason:** The portfolio page is a core marketing asset and depends on the main layout, navigation, and the project card component.
- **Output Files:** src/pages/our-work.astro, src/components/PortfolioGrid.astro

### Specification
Create `src/pages/our-work.astro` to showcase Joe's completed projects using a grid of `ProjectCard.astro` components. Implement basic categorization or filtering. Include a 'Book a Free Consultation' CTA.

### Spec Reference
> 'Our Work' page accessible from global navigation. ... Gallery displays projects categorized by service type (Painting, Handy, Combined). ... 'Book a Free Consultation' CTA prominently displayed. ... Image lazy loading for performance.

### Acceptance Criteria
- [ ] The 'Our Work' page is accessible from global navigation.
- [ ] A grid of project cards is displayed.
- [ ] Projects can be categorized (e.g., Painting, Handy, Combined).
- [ ] The 'Book a Free Consultation' CTA is prominently displayed and functional.
- [ ] Images are lazy-loaded for performance.

---

## TASK-018: Testimonial Card & Homepage Carousel

- **Category:** component
- **Priority:** P0
- **Dependencies:** TASK-002, TASK-011
- **Dependency Reason:** Testimonials build trust and are a key component of the homepage content.
- **Output Files:** src/components/TestimonialCard.astro, src/components/TestimonialCarousel.astro

### Specification
Develop `TestimonialCard.astro` to display client quotes, name/initial, and location. Implement `TestimonialCarousel.astro` for the homepage, featuring a rotating selection of these cards.

### Spec Reference
> Dedicated 'Testimonials' section on the Homepage, featuring a rotating carousel of 3-5 key testimonials. ... Each testimonial includes: Client Name (or initial), Location (e.g., 'Homeowner, Carlsbad'), Quote, and optionally a project type. ... Carousel auto-plays or has navigation arrows/dots. ... Carousel remains functional and touch-friendly.

### Acceptance Criteria
- [ ] Testimonial cards correctly display client info and quotes.
- [ ] Homepage carousel rotates testimonials automatically or via navigation controls.
- [ ] Carousel is touch-friendly and responsive.
- [ ] Accessibility features are included for carousel navigation.

---

## TASK-019: Testimonials Page

- **Category:** page
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-006, TASK-007, TASK-018
- **Dependency Reason:** Provides a dedicated space for social proof, using the testimonial card component.
- **Output Files:** src/pages/testimonials.astro

### Specification
Create `src/pages/testimonials.astro` to display a comprehensive list of testimonials. Include direct links to Google/Yelp for users to read more or leave a review. Display an average star rating placeholder.

### Spec Reference
> Full 'Testimonials' page accessible from the footer and potentially a menu item. ... Integration with third-party review platforms (e.g., Google, Yelp) via direct links for users to read more or leave a review. ... Prominent display of Joe's average star rating (if aggregated from multiple sources). ... Testimonial cards stack vertically on the dedicated page.

### Acceptance Criteria
- [ ] Dedicated testimonials page is accessible from the footer.
- [ ] Multiple testimonials are clearly displayed.
- [ ] Links to third-party review platforms are present and functional.
- [ ] Placeholder for average star rating is shown.
- [ ] Testimonial cards stack vertically on the dedicated page for mobile.

---

## TASK-020: Contact Page

- **Category:** page
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-006, TASK-007, TASK-009, TASK-010
- **Dependency Reason:** Provides the primary contact point for users, utilizing core layout, navigation, and the consultation form.
- **Output Files:** src/pages/contact.astro

### Specification
Create `src/pages/contact.astro`. Display Joe's phone number (+1 (760) 580-8173) with a click-to-call link, email address (joe@joethepainter.com) with a mailto link, and integrate the `ConsultationForm.astro` component for inquiries. Link to 'Book a Free Consultation' system.

### Spec Reference
> Dedicated 'Contact' page accessible from global navigation and footer. ... Display Joe's phone number (`+1 (760) 580-8173`) with a click-to-call link. ... Display Joe's email address (`joe@joethepainter.com`) with a mailto link. ... Contact form with fields: Name, Email, Phone (optional), Subject, Message. ... Link to 'Book a Free Consultation' system. ... Mobile behavior: Content stacks linearly. Form fields and buttons are touch-friendly and scale.

### Acceptance Criteria
- [ ] Dedicated 'Contact' page is accessible from global navigation and footer.
- [ ] Phone number is displayed with a functional click-to-call link.
- [ ] Email address is displayed with a functional mailto link.
- [ ] Contact form (ConsultationForm) is integrated and functional.
- [ ] Link to 'Book a Free Consultation' system is present.
- [ ] Content stacks linearly on mobile, and form fields are touch-friendly.

---

## TASK-021: Local SEO & Structured Data Implementation

- **Category:** polish
- **Priority:** P0
- **Dependencies:** TASK-003, TASK-011, TASK-013, TASK-014, TASK-015, TASK-017, TASK-020
- **Dependency Reason:** Requires all core pages to be built to apply specific meta and schema markup. This is a foundational SEO task.
- **Output Files:** src/layouts/BaseLayout.astro, src/pages/index.astro, src/pages/about.astro, src/pages/services/painting.astro, src/pages/services/handy.astro, src/pages/our-work.astro, src/pages/contact.astro, public/robots.txt, public/sitemap.xml

### Specification
Enhance `BaseLayout.astro` and individual pages with specific SEO meta tags (`title`, `description`) and implement Schema.org markup for LocalBusiness, Service, and Review (aggregatedRating if applicable) types.

### Spec Reference
> Implement fundamental SEO best practices and structured data markup. ... Unique, descriptive `<title>` tags for every page. ... Unique, compelling `<meta name="description">` tags for every page. ... Proper use of `<h1>` for primary page headings, and `<h2>` for major sections. ... Image `alt` attributes for all descriptive images. ... XML sitemap automatically generated and submitted to search engines. ... Robot.txt file configured correctly. ... Schema.org markup for LocalBusiness, Service, and Review (aggregatedRating) types. ... Structured data testing tool validates all implemented schema markup for P0 pages.

### Acceptance Criteria
- [ ] All P0 pages have unique, descriptive `title` and `meta description` tags.
- [ ] Schema.org markup for LocalBusiness is correctly implemented (Name, Address, Phone, Website, Logo, `sameAs`).
- [ ] Schema.org markup for Service is correctly implemented on service pages.
- [ ] Robots.txt and sitemap.xml are present and correctly configured.
- [ ] Structured data testing tool validates all implemented schema markup for P0 pages.

---

## TASK-022: Performance Optimization: Initial Image & Asset Handling

- **Category:** polish
- **Priority:** P0
- **Dependencies:** TASK-012, TASK-013, TASK-016, TASK-017
- **Dependency Reason:** Requires visual components and pages to apply image optimization techniques.
- **Output Files:** src/components/Hero.astro, src/components/AboutJoeSection.astro, src/components/ProjectCard.astro, src/pages/index.astro, src/pages/about.astro, src/pages/our-work.astro

### Specification
Implement initial performance optimizations including image compression, using modern formats (WebP), responsive image techniques (`srcset`), and lazy loading for images in core pages (Hero, About, Portfolio).

### Spec Reference
> Image optimization (compression, correct formats like WebP, responsive images). ... Lazy loading for off-screen images and videos. ... The website will be optimized for fast loading speeds and smooth interactions. ... Google Lighthouse scores for Performance are 90+ on both desktop and mobile. Pages load within 2-3 seconds on a typical broadband connection.

### Acceptance Criteria
- [ ] All major images are optimized and served in efficient formats (e.g., WebP).
- [ ] Responsive image handling (`srcset`) is implemented for key images.
- [ ] Off-screen images on P0 pages are lazy-loaded.
- [ ] Initial Lighthouse Performance score shows improvement for image loading.
- [ ] Pages load within reasonable limits on typical connections.

---

## TASK-023: Accessibility Audit & Refinements (P0 Pages)

- **Category:** polish
- **Priority:** P0
- **Dependencies:** TASK-008, TASK-010, TASK-012, TASK-013, TASK-014, TASK-015, TASK-017, TASK-018, TASK-020, TASK-021
- **Dependency Reason:** This is a pervasive quality task that can only be fully assessed once core features and pages are implemented.
- **Output Files:** src/components/Header.astro, src/components/Nav.astro, src/components/Footer.astro, src/components/ui/Button.astro, src/components/ui/Input.astro, src/components/ConsultationForm.astro, src/pages/index.astro, src/pages/about.astro, src/pages/services/painting.astro, src/pages/services/handy.astro, src/pages/our-work.astro, src/pages/contact.astro

### Specification
Conduct an initial accessibility audit for all P0 pages and components (Header, Footer, Hero, About, Services, Portfolio, Contact, Forms) to ensure WCAG 2.1 AA compliance. Refine keyboard navigation, focus indicators, semantic HTML, and ARIA attributes.

### Spec Reference
> Ensure the website meets WCAG 2.1 AA guidelines. ... Keyboard navigation for all interactive elements (menus, buttons, forms). ... Sufficient color contrast ratio (minimum 4.5:1 for text/background). ... `alt` attributes for all meaningful images. ... Form fields have explicit labels and error messages are clear and programmatically associated. ... ARIA attributes used where native HTML isn't sufficient. ... Focus indicators are visible and clear. ... Automated accessibility tools (e.g., Lighthouse, WAVE) report no critical errors. ... Website is fully navigable using only a keyboard. ... Screen reader users can interpret all content and interactive elements.

### Acceptance Criteria
- [ ] Automated accessibility tools (e.g., Lighthouse, WAVE) report no critical errors on P0 pages.
- [ ] All interactive elements on P0 pages are fully navigable and operable via keyboard.
- [ ] Screen reader users can interpret all content and interactive elements on P0 pages accurately.
- [ ] Color contrast checks pass for all text and UI elements on P0 pages.
- [ ] Meaningful images on P0 pages have descriptive `alt` attributes.

---

## TASK-024: Backend Integration for Consultation & Contact Forms

- **Category:** integration
- **Priority:** P0
- **Dependencies:** TASK-009, TASK-020
- **Dependency Reason:** Makes the primary lead generation forms functional by processing submissions and sending notifications.
- **Output Files:** src/api/submit-form.js, src/components/ConsultationForm.astro, src/components/ContactForm.astro

### Specification
Set up a backend API endpoint (e.g., serverless function) to handle form submissions from `ConsultationForm.astro` and `ContactForm.astro`. Implement auto-email notifications to Joe and client-side validation.

### Spec Reference
> Backend API endpoint for form submission. ... Email service integration (e.g., SendGrid, AWS SES). ... Client-side validation for form fields. ... Auto-email notification to `joe@joethepainter.com` upon form submission. ... Submission confirmation message.

### Acceptance Criteria
- [ ] Submitting the consultation form successfully sends an email to `joe@joethepainter.com`.
- [ ] Submitting the contact form successfully sends an email to `joe@joethepainter.com`.
- [ ] Users receive a confirmation message after successful submission.
- [ ] Client-side validation prevents submission of invalid data.
- [ ] Backend endpoint securely processes form data.

---

## TASK-025: reCAPTCHA Integration for Forms

- **Category:** integration
- **Priority:** P0
- **Dependencies:** TASK-024
- **Dependency Reason:** Adds a critical spam prevention layer to the functional forms.
- **Output Files:** src/components/ConsultationForm.astro, src/components/ContactForm.astro, src/utils/recaptcha.js

### Specification
Integrate reCAPTCHA (v3 or similar) into `ConsultationForm.astro` and `ContactForm.astro` to prevent spam submissions.

### Spec Reference
> Form includes a reCAPTCHA or similar spam prevention. ... ReCAPTCHA v3 or similar for spam protection.

### Acceptance Criteria
- [ ] reCAPTCHA script loads correctly on pages with forms.
- [ ] Form submissions are protected by reCAPTCHA.
- [ ] Legitimate submissions are not blocked by reCAPTCHA.
- [ ] Spam submissions are effectively reduced.

---

## TASK-026: Content Collection for Portfolio Projects

- **Category:** content
- **Priority:** P1
- **Dependencies:** TASK-017
- **Dependency Reason:** Provides a structured way to manage portfolio content for the 'Our Work' page and future project detail pages.
- **Output Files:** src/content/config.ts, src/content/projects/example-project-1.md, src/content/projects/_index.ts

### Specification
Define Astro content collection for 'projects' to manage portfolio data (title, location, description, images, testimonial snippet, categories). Populate with initial project data.

### Spec Reference
> Each project entry includes: Project Title, Location (e.g., 'Encinitas Home Exterior'), Brief Description (Challenge, Joe's Solution, Result). ... Testimonial snippet associated with each project, if available.

### Acceptance Criteria
- [ ] Content collection for 'projects' is defined and validates project data schema.
- [ ] Initial project data is loaded and displayed correctly by `PortfolioGrid.astro`.
- [ ] Project titles, descriptions, and images are rendered from content collection.
- [ ] Easy to add new project entries via Markdown/MDX files.

---

## TASK-027: Content Collection for Testimonials

- **Category:** content
- **Priority:** P1
- **Dependencies:** TASK-018, TASK-019
- **Dependency Reason:** Provides a structured way to manage testimonial content for the carousel and testimonials page.
- **Output Files:** src/content/config.ts, src/content/testimonials/client-testimonial-1.md, src/content/testimonials/_index.ts

### Specification
Define Astro content collection for 'testimonials' to manage client feedback (client name, location, quote, project type). Populate with initial testimonial data.

### Spec Reference
> Each testimonial includes: Client Name (or initial), Location (e.g., 'Homeowner, Carlsbad'), Quote, and optionally a project type.

### Acceptance Criteria
- [ ] Content collection for 'testimonials' is defined and validates testimonial data schema.
- [ ] Initial testimonial data is loaded and displayed correctly by `TestimonialCarousel.astro` and `testimonials.astro`.
- [ ] Testimonial content (quote, client, location) is rendered from content collection.
- [ ] Easy to add new testimonial entries.

---

## TASK-028: FAQs Section & Accordion Component

- **Category:** component
- **Priority:** P1
- **Dependencies:** TASK-003, TASK-014, TASK-015
- **Dependency Reason:** The FAQ section enhances user experience and reduces direct inquiries, used on service pages and a dedicated page.
- **Output Files:** src/components/Accordion.astro, src/pages/faq.astro, src/pages/services/painting.astro, src/pages/services/handy.astro

### Specification
Develop an `Accordion.astro` component to display Q&A pairs. Create `src/pages/faq.astro` to host general FAQs, categorized by topic. Integrate condensed, relevant FAQ sections into `painting.astro` and `handy.astro` pages.

### Spec Reference
> General 'FAQ' page accessible from the footer. ... Accordion-style UI for questions and answers. ... Categorization of FAQs (e.g., 'Painting FAQs', 'Handy Services FAQs', 'General Business FAQs'). ... Each service page (Painting, Handy Services) includes a relevant, condensed FAQ section. ... Use `details` and `summary` HTML elements for semantic accessibility.

### Acceptance Criteria
- [ ] Accordion component functions correctly (expand/collapse) via click and keyboard.
- [ ] Dedicated 'FAQ' page is accessible from the footer.
- [ ] FAQs are categorized and logically organized.
- [ ] Relevant FAQ sections are integrated into 'Painting Services' and 'Handy Services' pages.
- [ ] Content addresses common client questions.
- [ ] Use `details` and `summary` HTML elements for semantic accessibility.

---

## TASK-029: 'Joe's Process' Page/Section

- **Category:** page
- **Priority:** P1
- **Dependencies:** TASK-003, TASK-011, TASK-010
- **Dependency Reason:** Clarifies expectations and builds trust by outlining the project process, integrated on the homepage and a dedicated page.
- **Output Files:** src/pages/process.astro, src/components/ProcessSection.astro

### Specification
Create `src/pages/process.astro` to detail Joe's typical workflow from consultation to completion for both painting and handyman projects. Include a condensed 'ProcessSection.astro' for the homepage, linking to the full page.

### Spec Reference
> A transparent overview of Joe's typical workflow for both painting and handyman projects, from initial consultation to project completion, building trust through clarity and setting expectations.

### Acceptance Criteria
- [ ] Dedicated 'Process' page is accessible and clearly outlines Joe's workflow.
- [ ] Homepage includes a condensed 'Process' section linking to the full page.
- [ ] The process is clearly articulated for both painting and handyman services.
- [ ] Content supports trust-building and expectation setting.
- [ ] CTA is accessible on the 'Process' page.

---

## TASK-030: Hyper-Local Service Area Pages (Initial 3-5)

- **Category:** page
- **Priority:** P1
- **Dependencies:** TASK-003, TASK-006, TASK-007, TASK-010, TASK-017, TASK-019, TASK-027
- **Dependency Reason:** Targets local search queries and uses existing layout, navigation, consultation, portfolio, and testimonial components.
- **Output Files:** src/pages/areas/carlsbad.astro, src/pages/areas/encinitas.astro, src/pages/areas/vista.astro

### Specification
Create dedicated pages for 3-5 high-priority North San Diego County areas (e.g., Carlsbad, Encinitas, Vista). Each page will feature unique, location-specific content, local testimonials, and a prominent 'Book a Free Consultation' CTA. Optimize for local SEO keywords.

### Spec Reference
> Create dedicated pages for 3-5 high-priority North San Diego County areas. ... Each page includes unique, location-specific content (e.g., 'Carlsbad's Trusted Painter,' mentioning local landmarks or challenges). ... Feature testimonials from clients within that specific area. ... Prominent 'Book a Free Consultation' CTA. ... Optimized for local SEO keywords (e.g., 'painter Carlsbad CA', 'handyman Encinitas').

### Acceptance Criteria
- [ ] Each local service page is unique and provides content specific to the area.
- [ ] Pages are accessible (e.g., from footer 'Service Areas' link or direct URL).
- [ ] Testimonials from clients within the specific area are displayed (if available).
- [ ] CTA is present and functional.
- [ ] Pages are optimized for target local SEO keywords.

---

## TASK-031: Interactive Before/After Sliders

- **Category:** animation
- **Priority:** P1
- **Dependencies:** TASK-016, TASK-026
- **Dependency Reason:** Enhances the visual impact of portfolio projects by showing transformations. Requires `ProjectCard` and project content.
- **Output Files:** src/components/BeforeAfterSlider.astro, src/components/ProjectCard.astro, src/utils/beforeAfterSlider.js

### Specification
Develop a JavaScript-based interactive slider component for before-and-after images. Integrate this into `ProjectCard.astro` or dedicated project detail pages. Ensure accessible controls and touch-friendly interaction.

### Spec Reference
> Dynamic image sliders that allow users to interactively compare 'before' and 'after' photos of Joe's projects. ... Implement a JavaScript-based interactive slider component. ... A movable handle/line that allows users to reveal more of either image. ... Accessible controls for keyboard navigation. ... Integrated into the Project Portfolio / Gallery pages. ... Touch-friendly drag interaction for the slider handle.

### Acceptance Criteria
- [ ] Users can interactively compare before and after images on project pages.
- [ ] The slider functions smoothly and intuitively across devices (desktop/touch).
- [ ] Movable handle/line reveals more of either image.
- [ ] Accessible controls (e.g., keyboard arrows) function correctly.
- [ ] Visual transformations are clear and compelling.

---

## TASK-032: Blog Content Collection & Listing Page

- **Category:** content
- **Priority:** P2
- **Dependencies:** TASK-003
- **Dependency Reason:** Establishes the content marketing foundation and requires the base layout.
- **Output Files:** src/content/config.ts, src/content/blog/first-post.md, src/content/blog/_index.ts, src/pages/blog/index.astro, src/components/BlogPostCard.astro

### Specification
Define Astro content collection for 'blog' posts (title, author, publish date, category, body content, images). Create `src/pages/blog/index.astro` to list blog posts with `BlogPostCard.astro` component.

### Spec Reference
> 'Blog' or 'Resources' section accessible from the footer. ... Content Management System (CMS) for creating, editing, and publishing articles. ... Articles include: Title, Author (Joe), Publish Date, Category, Body Content (text, images, embedded videos).

### Acceptance Criteria
- [ ] Content collection for 'blog' is defined and validates post schema.
- [ ] Blog listing page displays initial blog posts using `BlogPostCard`.
- [ ] Posts include title, author, and publish date.
- [ ] Easy to add new blog entries via Markdown/MDX files.
- [ ] Blog page is accessible from the footer.

---

## TASK-033: Blog Post Detail Pages

- **Category:** page
- **Priority:** P2
- **Dependencies:** TASK-032, TASK-010, TASK-004
- **Dependency Reason:** Extends the blog functionality by providing individual pages for each article, integrating CTAs and social sharing.
- **Output Files:** src/pages/blog/[...slug].astro, src/components/SocialShareButtons.astro

### Specification
Implement dynamic routing for individual blog posts using Astro's content collection. Each post page will display the full article content, including images and embedded videos. Include social sharing buttons and a 'Book a Free Consultation' CTA.

### Spec Reference
> Articles include: Title, Author (Joe), Publish Date, Category, Body Content (text, images, embedded videos). ... Search functionality within the blog. ... Social sharing buttons for individual articles. ... 'Book a Free Consultation' CTA integrated into blog posts (e.g., in sidebar or at end of article).

### Acceptance Criteria
- [ ] Individual blog posts are accessible via dynamic URLs (e.g., `/blog/my-first-post`).
- [ ] Full article content, including images and embedded media, is rendered correctly.
- [ ] Social sharing buttons are present and functional.
- [ ] A 'Book a Free Consultation' CTA is integrated into blog posts.
- [ ] Blog posts are optimized for long-tail keywords.

---

## TASK-034: Blog Search & Category Filtering

- **Category:** component
- **Priority:** P2
- **Dependencies:** TASK-032
- **Dependency Reason:** Enhances discoverability of blog content.
- **Output Files:** src/components/BlogSearch.astro, src/components/BlogCategoryFilter.astro, src/pages/blog/index.astro, src/utils/blog-search.js

### Specification
Implement search functionality within the blog section and enable filtering by categories. This might involve client-side JavaScript for search or server-side filtering if content is large.

### Spec Reference
> Search functionality within the blog.

### Acceptance Criteria
- [ ] Users can search for keywords within blog articles.
- [ ] Users can filter blog posts by category.
- [ ] Search results and filtered lists update dynamically.
- [ ] Functionality is responsive and accessible.

---

## TASK-035: Overall Performance Optimization

- **Category:** polish
- **Priority:** P3
- **Dependencies:** TASK-022, TASK-033
- **Dependency Reason:** A final pass over the entire site once all content and features are in place to ensure top-tier performance.
- **Output Files:** astro.config.mjs, src/styles/global.css, src/layouts/BaseLayout.astro

### Specification
Perform comprehensive performance optimization, including minification of all CSS, JS, and HTML, browser caching for static assets, efficient font loading (`font-display: swap`), and critical CSS inlining. Aim for 90+ Lighthouse scores.

### Spec Reference
> The website will be optimized for fast loading speeds and smooth interactions. ... Image optimization (compression, correct formats like WebP, responsive images). ... Lazy loading for off-screen images and videos. ... Minification of CSS, JavaScript, and HTML. ... Browser caching implemented for static assets. ... Efficient font loading strategy (e.g., `font-display: swap`). ... Critical CSS inlining for initial page load. ... Minimize render-blocking resources. ... Google Lighthouse scores for Performance are 90+ on both desktop and mobile. ... Core Web Vitals metrics are within optimal ranges.

### Acceptance Criteria
- [ ] Google Lighthouse Performance scores are 90+ on both desktop and mobile across key pages.
- [ ] Core Web Vitals metrics are within optimal ranges.
- [ ] All CSS, JavaScript, and HTML are minified.
- [ ] Browser caching headers are correctly configured for static assets.
- [ ] Critical CSS is inlined for faster initial render.
- [ ] Fonts load efficiently without blocking content.

---

## TASK-036: Final SEO Review & Schema Enhancements

- **Category:** polish
- **Priority:** P3
- **Dependencies:** TASK-021, TASK-028, TASK-033
- **Dependency Reason:** Ensures all content, including new blog posts and FAQs, is optimally structured for search engines.
- **Output Files:** src/layouts/BaseLayout.astro, src/pages/faq.astro, src/pages/blog/[...slug].astro

### Specification
Conduct a final review of all page metadata. Implement additional specific schema markup (e.g., for blog articles, FAQPage on appropriate pages). Verify Google Search Console configuration and submission.

### Spec Reference
> Implement fundamental SEO best practices and structured data markup. ... Unique, descriptive `<title>` tags for every page. ... Unique, compelling `<meta name="description">` tags for every page. ... Schema.org markup for LocalBusiness, Service, and Review (aggregatedRating) types. ... Structured data testing tool validates all implemented schema markup.

### Acceptance Criteria
- [ ] All pages have unique, optimized `title` and `meta description` tags.
- [ ] Schema.org markup is validated for all content types (LocalBusiness, Service, Review, Article, FAQPage).
- [ ] Google Search Console reports no critical crawl errors.
- [ ] Sitemap.xml is up-to-date and submitted.
- [ ] Target keywords show improving rankings.

---

## TASK-037: Final Accessibility Audit & Refinements (Full Site)

- **Category:** polish
- **Priority:** P3
- **Dependencies:** TASK-023, TASK-028, TASK-030, TASK-031, TASK-033
- **Dependency Reason:** A final, holistic review of accessibility for the complete website, incorporating all features.
- **Output Files:** src/layouts/BaseLayout.astro, src/components/**/*.astro, src/pages/**/*.astro

### Specification
Conduct a comprehensive accessibility audit across the entire website, including newly added P1/P2 features (local pages, blog, FAQs, sliders). Address any remaining WCAG 2.1 AA violations, focusing on keyboard navigation, screen reader compatibility, and ARIA attributes.

### Spec Reference
> Ensure the website meets WCAG 2.1 AA guidelines. ... Automated accessibility tools (e.g., Lighthouse, WAVE) report no critical errors. ... Website is fully navigable using only a keyboard. ... Screen reader users can interpret all content and interactive elements. ... Color contrast checks pass for all text and UI elements. ... Integrate accessibility testing into the development workflow.

### Acceptance Criteria
- [ ] Automated accessibility tools (Lighthouse, WAVE) report no critical errors on any page.
- [ ] Manual keyboard navigation tests pass for all interactive elements.
- [ ] Screen reader tests confirm correct interpretation of all content and functionality.
- [ ] All media (`img`, `video`) has appropriate `alt` text or captions.
- [ ] All forms have clear labels, error handling, and accessible submissions.

