# User Flow and Journey Specifications: Joe the Painter - A Rebirth

## Conversion Philosophy

Our approach to conversion for Joe the Painter is rooted in **building profound trust** and **emphasizing personal accountability**, leveraging Joe's 25+ years of licensed experience. This isn't just about getting a job done; it's about inviting a trusted craftsman into your home or business.

1.  **Authenticity & Trust First:** Every interaction, from the first glance at the hero image to the final form submission, must reinforce Joe's genuine expertise and long-standing reputation. The CSLB license (#802167) and "Since 2001" are paramount trust signals.
2.  **Clarity & Simplicity:** We will make it effortless for users to understand Joe's unique value proposition (master painter *and* skilled handyman) and to take the next step. No jargon, no hidden fees, just straightforward communication.
3.  **Personal Connection:** We're selling Joe, the individual craftsman, not an impersonal company. The site will be infused with his personality, story, and commitment, fostered by direct language and high-quality, authentic imagery.
4.  **Problem-Solution Focused:** We address the common anxieties homeowners face (finding reliable help, ensuring quality, managing multiple contractors) by positioning Joe as the comprehensive, trustworthy solution.
5.  **Low-Friction Engagement:** The primary call-to-action (Free Consultation) will be prominent, accessible, and require minimal effort, guiding users toward a personal conversation rather than a hard sell.
6.  **Education & Empowerment:** For those not ready to convert, we provide valuable content that positions Joe as an authority, nurturing future leads and building long-term goodwill.

---

## User Journeys

---

## Journey: First-time Homeowner → Free Consultation (Primary Conversion)

### Persona
The Busy Homeowner (35-65 years old, dual-income, in San Diego County suburbs like Carlsbad, Encinitas, San Marcos). They are time-poor, value-conscious, and their home is a major investment. They seek reliable, high-quality, and convenient solutions for home maintenance and improvement.

### Goal
To receive a personalized, no-obligation consultation and estimate for their painting or handyman project, leading to booking Joe's services.

### Entry Points
-   **Search Result (Organic/Paid):** `painters san diego`, `handyman services north county`, `interior painting carlsbad`, `drywall repair and paint encinitas`.
-   **Referral:** Word-of-mouth, direct URL from a friend.
-   **Social Link:** Facebook/Instagram ad targeting local homeowners.
-   **Direct Navigation:** User types `joethepainter.com` after hearing about Joe.

### Journey Steps

#### Step 1: Initial Discovery & Trust Building
-   **Page**: `/` (Homepage)
-   **User State**: "I need a painter/handyman. Can I trust this person? Is this the right solution for me?" They are evaluating credibility and relevance.
-   **Action**: Scans hero section, reads tagline, looks at Joe's photo, notices trust signals.
-   **UI Element**:
    -   Hero section: High-quality photo of Joe, primary headline, "Since 2001" badge, "CA Lic. #802167" link.
    -   Primary CTA: "Request Your Free Consultation" (prominent, above the fold).
    -   Service overview: Quick summary of Painting & Handy Services with secondary CTAs.
-   **Result**: User feels a preliminary sense of trust and understands the core offerings. They are curious to learn more about specific services or see past work.

#### Step 2: Service Exploration & Value Proposition
-   **Page**: `/painting-services` or `/handy-services` (Service Pages)
-   **User State**: "What exactly do they offer? How do they work? What sets them apart?" They are looking for details, process, and proof.
-   **Action**: Clicks on a service category from the homepage or main navigation, reads detailed descriptions, views mini-galleries, reviews FAQs.
-   **UI Element**:
    -   Service-specific headlines and descriptions.
    -   "Joe's Process" section (e.g., "Our 5-Step Painting Process").
    -   Before & After sliders or project photos.
    -   Contextual testimonials relevant to the service.
    -   Secondary CTA: "View Our Painting Portfolio" or "See Handy Project Examples."
    -   Contextual Primary CTA: "Get a Free Painting Estimate" / "Discuss Your Handy Project."
-   **Result**: User gains a clear understanding of the specific service, Joe's quality standards, and how he operates. Their intent to inquire increases.

#### Step 3: Portfolio & Social Proof
-   **Page**: `/portfolio` (Portfolio Page) or specific project pages `/portfolio/project-name`
-   **User State**: "Can they deliver the quality I expect? What do others say about their work?" They are seeking visual evidence and external validation.
-   **Action**: Browses project gallery, clicks on individual project case studies, reads detailed descriptions and client testimonials.
-   **UI Element**:
    -   Filterable project gallery (e.g., by service, location).
    -   Individual project pages with "Problem," "Joe's Solution," "Result" structure.
    -   Large, high-resolution Before & After images.
    -   Direct client quotes/testimonials with names and locations.
    -   Contextual Primary CTA: "Ready for Your Transformation? Request a Free Consultation."
-   **Result**: User is convinced by the quality of work and the positive experiences of past clients. Their confidence in Joe is high.

#### Step 4: Personal Connection & Deeper Trust
-   **Page**: `/about` (About Joe Page)
-   **User State**: "Who is Joe? What's his story? Why should I choose *him*?" They are looking for the human element and reassurance.
-   **Action**: Reads Joe's personal story, learns about his values, sees his commitment to San Diego.
-   **UI Element**:
    -   Professional, approachable photo of Joe (different from hero).
    -   Biography detailing his journey, passion for craftsmanship, and commitment to client satisfaction.
    -   Mention of "Since 2001" and "Licensed #802167" again.
    -   Values statement (honesty, integrity, communication).
    -   Contextual Primary CTA: "Meet Joe for a Free Consultation."
-   **Result**: User feels a personal connection with Joe, reinforcing trust and making the decision to reach out more comfortable.

#### Step 5: Conversion - Requesting Consultation
-   **Page**: `/contact` (Contact Page) or modal/flyout form
-   **User State**: "I'm ready to talk about my project. How do I get in touch?" They are ready to commit to the next step.
-   **Action**: Fills out the "Free Consultation Request" form or calls Joe directly.
-   **UI Element**:
    -   Prominent "Free Consultation Request" form.
    -   Direct phone number with click-to-call.
    -   Brief, reassuring copy about the consultation process ("No pressure, just expert advice").
    -   Reiteration of "Free" and "No Obligation."
-   **Result**: User successfully submits their inquiry.

### Success State
The user successfully submits the "Free Consultation Request" form or initiates a phone call, expressing their interest in a project.

### Post-Conversion
1.  **Confirmation Page (`/thank-you`):**
    *   **Message:** "Thank You, [User's Name]! Your Free Consultation Request Has Been Received."
    *   **What to Expect:** "Joe personally reviews every request and will be in touch within 1 business day to discuss your project and schedule your consultation."
    *   **Next Action:** Suggest exploring the blog for helpful tips, or following Joe on social media. Provide direct links.
2.  **Automated Email:**
    *   **Subject:** "Your Free Consultation Request with Joe the Painter"
    *   **Content:** Reiterate the thank you, confirm details submitted, and restate the "what to expect" timeline. Include Joe's direct contact info for urgent questions.
    *   **Personal Touch:** A brief, friendly message from Joe (or on his behalf) reinforcing his commitment.
3.  **CRM Integration:** Lead details are automatically captured in Joe's CRM for follow-up.

### Fallback Paths
-   **Exit Points:** User leaves if they don't find what they need, are overwhelmed, or aren't ready.
-   **Secondary Conversions:**
    -   **Newsletter Signup:** (If implemented) "Get Pro Tips from Joe" in footer/blog.
    -   **Social Media Follow:** Links in footer, subtle prompts.
    -   **Bookmark Site:** For future reference.
-   **Nurture Paths:**
    -   **Retargeting Ads:** For users who visited service/portfolio pages but didn't convert, showing project examples or testimonials.
    -   **Content Marketing:** Blog posts relevant to their service interest, drawing them back to the site.

### Friction Points
-   **"Is this person actually licensed/experienced?"** → Prominent "Since 2001" and "CA Lic. #802167" throughout the site (header, footer, about page, service pages).
-   **"Will they just try to upsell me?"** → Emphasize "Free," "No Obligation," "Honest Advice" in CTA copy and consultation description.
-   **"I don't know what I need."** → Clear, descriptive service pages with examples. Use a dropdown for project type in the form to guide users.
-   **"Will they show up on time?"** → Highlight "Prompt" in messaging and "clear communication" in Joe's values.
-   **"The form is too long/intrusive."** → Optimize form length to essential fields. Provide clear help text.

---

## Journey: Returning Visitor → Re-engage/Re-hire

### Persona
Past Client (knows and trusts Joe), or a previous visitor who wasn't ready to commit but now has a new project or a renewed need.

### Goal
To easily contact Joe for a new project, follow up on a previous quote, or refer a friend.

### Entry Points
-   **Direct Navigation:** `joethepainter.com`
-   **Email:** Link from a past communication or newsletter.
-   **Phone Call:** User remembers Joe's number.
-   **Search Result:** `joe the painter phone number`, `joe the painter new project`.

### Journey Steps

#### Step 1: Quick Access & Recognition
-   **Page**: `/` (Homepage) or `/contact` (Contact Page)
-   **User State**: "I know Joe; I need to reach him quickly for X." They are looking for the most direct path.
-   **Action**: Immediately looks for contact information (phone/email) or a "Returning Client" option.
-   **UI Element**:
    -   Sticky header with phone number.
    -   Prominent "Contact" link in navigation.
    -   Footer with contact details.
    -   Potentially a "Returning Client?" button in the hero or footer.
-   **Result**: User quickly finds the necessary contact information.

#### Step 2: Direct Contact
-   **Page**: `/contact` (Contact Page) or direct phone call.
-   **User State**: "I need to explain my new project/question."
-   **Action**: Calls Joe directly or fills out a simplified "Returning Client Inquiry" form.
-   **UI Element**:
    -   **Phone:** Click-to-call.
    -   **Form:** "Returning Client Inquiry" form with fewer fields (Name, Email, Phone, Previous Project Ref. (optional), New Project Description).
-   **Result**: User successfully communicates their new need.

### Success State
Direct phone contact or submission of a "Returning Client Inquiry" form.

### Post-Conversion
1.  **Confirmation (for form):** "Great to hear from you again, [Name]! Joe will be in touch shortly."
2.  **Joe's Personal Follow-up:** Joe recognizes the client and provides a personalized response.

### Fallback Paths
-   Browse the new portfolio to see Joe's latest work.
-   Read blog for maintenance tips.

### Friction Points
-   **Difficulty finding contact info:** Add sticky header/footer with phone/email.
-   **Too many fields for a returning client:** Offer a simplified form.

---

## Journey: Information Seeker → Nurture/Soft Lead

### Persona
The Researching Homeowner (30-55 years old, planning future projects, seeking advice, not ready to hire immediately). They value knowledge and want to make informed decisions.

### Goal
To gain valuable information, establish Joe as a trusted authority, and potentially subscribe to receive ongoing insights, leading to a future direct inquiry.

### Entry Points
-   **Search Result (Organic):** `how to choose a paint color`, `drywall repair vs replace`, `licensed vs unlicensed contractor california`, `best exterior paint san diego`.
-   **Social Share:** A friend shares a helpful article from Joe's blog.

### Journey Steps

#### Step 1: Content Discovery
-   **Page**: `/blog/article-title` (Blog Post) or `/faq` (FAQ Page)
-   **User State**: "I have a question about my home project. Can this site help me?" They are seeking answers and expertise.
-   **Action**: Reads a blog post or browses FAQ answers.
-   **UI Element**:
    -   Well-written, informative article/FAQ answer.
    -   Related articles sidebar.
    -   Author bio (Joe) reinforcing his expertise.
-   **Result**: User finds the information they need and perceives Joe as knowledgeable and helpful.

#### Step 2: Value Exchange & Soft Conversion
-   **Page**: `/blog/article-title`
-   **User State**: "This was helpful. Is there more? How can I stay in touch?"
-   **Action**: Considers signing up for a newsletter or downloading a resource.
-   **UI Element**:
    -   Contextual CTA within blog posts: "Get More Pro Tips from Joe – Subscribe to Our Newsletter!"
    -   Optional: "Download Joe's Ultimate Homeowner Checklist" (lead magnet).
    -   Footer newsletter signup.
-   **Result**: User provides their email address in exchange for ongoing value.

### Success State
Email address captured via newsletter signup or lead magnet download.

### Post-Conversion
1.  **Confirmation Message (on-page):** "Thanks for subscribing! You'll receive Joe's latest tips directly in your inbox."
2.  **Welcome Email:** A friendly welcome from Joe, perhaps linking to popular blog posts or a special offer for new subscribers.
3.  **Email Nurture Sequence:** Regular, valuable content (tips, project ideas, seasonal advice) that keeps Joe top-of-mind.

### Fallback Paths
-   Browse other blog posts.
-   Explore service pages (if the article sparked a direct need).
-   Exit the site.

### Friction Points
-   **Irrelevant content:** Ensure blog topics are highly relevant to target audience pain points.
-   **Overly promotional content:** Maintain a 80/20 rule (80% value, 20% promotion).
-   **Unclear value of subscribing:** Clearly state what subscribers will receive.

---

## Journey: Mobile-Specific Journeys

### Persona
All personas, but specifically those on the go, looking for quick answers or immediate contact.

### Goal
Efficiently find information, view projects, and most importantly, contact Joe with minimal scrolling and tapping.

### Entry Points
-   Google Search (often "near me" queries).
-   Social media links.
-   Direct phone calls from saved contacts or search results.

### Journey Steps

#### Step 1: Immediate Contact & Navigation
-   **Page**: Any page, but especially `/` (Homepage)
-   **User State**: "I need to call Joe now," or "I need to find out if they do X service." Time is of the essence.
-   **Action**: Taps on sticky phone button, opens hamburger menu, or scrolls to find key information.
-   **UI Element**:
    -   **Sticky Footer Bar:** Prominent "Call Joe" button and "Get a Free Estimate" button.
    -   **Mobile Navigation (Hamburger Menu):** Clean, organized menu with clear links to Home, Painting, Handy Services, Portfolio, About, Contact.
    -   **Hero Section:** Concise headline, Joe's photo, core trust signals, and primary CTA.
-   **Result**: User quickly accesses contact options or key navigation.

#### Step 2: Content Consumption (Optimized)
-   **Page**: `/painting-services`, `/portfolio`, `/blog/article-title`
-   **User State**: "I want to quickly scan this information to see if it's relevant."
-   **Action**: Scrolls, skims headlines, looks at images.
-   **UI Element**:
    -   **Responsive Layout:** Content reflows gracefully, images scale.
    -   **Concise Copy:** Paragraphs are shorter, bullet points are used.
    -   **Optimized Images:** Fast loading, clear visuals.
    -   **Accordion/Tabs:** For detailed content (e.g., FAQs on service pages) to save vertical space.
-   **Result**: User efficiently consumes information without frustration.

#### Step 3: Form Submission (Mobile-Optimized)
-   **Page**: `/contact` or modal form
-   **User State**: "I'm ready to send my inquiry, but I hate typing on my phone."
-   **Action**: Fills out the "Free Consultation Request" form.
-   **UI Element**:
    -   **Simplified Form Layout:** Single column, large tap targets for fields and buttons.
    -   **Input Type Optimization:** `type="tel"` for phone, `type="email"` for email.
    -   **Autofill Support:** Browser autofill functionality.
    -   **Clear Validation:** Real-time feedback for errors.
-   **Result**: User successfully submits the form with minimal effort.

### Success State
Successful phone call or form submission from a mobile device.

### Post-Conversion
Same as primary conversion, ensuring confirmation messages are mobile-friendly.

### Fallback Paths
User leaves if the site is slow, hard to read, or difficult to navigate on mobile.

### Friction Points
-   **Slow load times:** Optimize images and code for speed.
-   **Small text/buttons:** Ensure accessible font sizes and generous tap targets.
-   **Complex forms:** Simplify forms and optimize input types.
-   **Excessive scrolling:** Use accordions, concise copy, and clear hierarchy.

---

## CTA Strategy

Our CTA strategy is designed to guide users through the trust-building journey, offering clear next steps at every stage, always leading back to a personal interaction with Joe.

### Primary CTAs
These are the core conversion goals, emphasizing ease, value, and Joe's personal touch.
-   **What:** Request a direct, personal discussion about their project.
-   **Where:**
    -   Hero section (most prominent).
    -   End of every service page.
    -   End of portfolio/project pages.
    -   Sticky footer on mobile.
    -   Contact page.
    -   Interspersed subtly in blog content.
-   **Why:** To initiate a direct conversation, which is the highest-value conversion for a service business. It leverages the "Free Consultation" as a low-risk entry point.
-   **CTA Copy:**
    -   **"Request Your Free Consultation"** (Main, direct, clear benefit)
    -   **"Get Your Free Project Estimate"** (Alternative, outcome-focused)
    -   **"Let's Discuss Your Project Ideas"** (Softer, collaborative)
    -   **"Call Joe Directly: (760) 580-8173"** (Always available, click-to-call on mobile)

### Secondary CTAs
These CTAs facilitate exploration and provide supporting information, moving users deeper into the site and building trust.
-   **What:** Explore services, view work, learn more about Joe.
-   **Where:**
    -   Below primary CTAs in hero.
    -   Homepage sections introducing services.
    -   Navigation menu.
    -   Contextual links within body copy.
-   **Why:** Not all users are ready to convert immediately. These allow for self-guided discovery, addressing different stages of the decision-making process.
-   **CTA Copy:**
    -   **"Explore Painting Services"**
    -   **"Discover Handy Services"**
    -   **"View Our Latest Projects"**
    -   **"Meet Joe, Your Trusted Craftsman"**
    -   **"Read Client Testimonials"**
    -   **"See How Joe Works"** (Links to "Joe's Process" page)

### Contextual CTAs
These CTAs are tailored to the specific content users are viewing, offering a relevant next step.
-   **What:** Specific service inquiries, related content, soft lead capture.
-   **Where:**
    -   Within service pages (e.g., after a section on exterior painting).
    -   Within blog posts (e.g., after an article on paint preparation).
    -   At the end of project case studies.
-   **Why:** To capitalize on user interest in a specific topic, offering a direct path to the next logical step or a soft conversion.
-   **CTA Copy:**
    -   **(On Interior Painting page):** "Ready for a Fresh Look? Get Your Free Interior Painting Consultation."
    -   **(On Drywall Repair blog post):** "Need a Seamless Repair? Ask Joe About Our Handy Services."
    -   **(On project page):** "Inspired? Let's Create Your Project Story."
    -   **(In blog footer):** "Get Joe's Pro Tips Delivered – Subscribe for Updates!"

---

## Form Experiences

## Form: Free Consultation Request

### Purpose
To capture essential lead information for a personalized project consultation and estimate. This is the primary conversion form.

### Fields
| Field                 | Type          | Required | Validation                                    | Help Text                                                                    |
| :-------------------- | :------------ | :------- | :-------------------------------------------- | :--------------------------------------------------------------------------- |
| **Full Name**         | text          | Yes      | Min 2 chars, letters only                     | Your full name, so Joe knows who to address.                                 |
| **Email Address**     | email         | Yes      | Valid email format                            | We'll send your confirmation here.                                           |
| **Phone Number**      | tel           | Yes      | Valid US phone number format (e.g., (XXX) XXX-XXXX) | For Joe to call you directly.                                                |
| **Project Type**      | select        | Yes      | Must select one option                        | What kind of project are you considering?                                    |
|                       | _Options_     |          |                                               | - Painting Services<br>- Handy Services<br>- Both Painting & Handy Services |
| **Service Location**  | text          | Yes      | Min 3 chars, city/zip                         | Which San Diego County city or zip code is your project located in?          |
| **Project Details**   | textarea      | Yes      | Min 10 chars, max 500 chars                   | Tell Joe about your project (e.g., "Exterior house paint, 3 bedrooms").     |
| **Preferred Contact** | radio         | Yes      | Must select one option                        | How would you prefer Joe to reach out for your consultation?                 |
|                       | _Options_     |          |                                               | - Phone Call<br>- Email                                                      |
| **How Did You Hear About Joe?** | text (optional) | No       | Max 100 chars                                 | (e.g., "Google," "Friend's referral," "Yelp")                                |

### Submit Button
-   **Text:** "Request My Free Consultation"
-   **Loading state:** "Sending Request..." (button text changes, spinner appears)

### Success State
-   **Message:** "Thank You, [User's Name]! Your Free Consultation Request Has Been Received."
    *   **Sub-text:** "Joe personally reviews every request and will be in touch within 1 business day to discuss your project and schedule your consultation. We appreciate your patience!"
-   **Next action:** Redirect to `/thank-you` page (as defined in Journey: First-time Homeowner)

### Error States
-   **Validation errors:** Inline error messages next to each invalid field (e.g., "Please enter a valid email address."). Fields will have a red border.
-   **Server errors:** A general message at the top of the form: "Oops! Something went wrong on our end. Please try again or call Joe directly at (760) 580-8173."

---

## Form: Quick Question

### Purpose
To provide a simple, low-friction way for users to ask general questions without committing to a full consultation.

### Fields
| Field             | Type     | Required | Validation                    | Help Text                                    |
| :---------------- | :------- | :------- | :---------------------------- | :------------------------------------------- |
| **Your Name**     | text     | Yes      | Min 2 chars                   |                                              |
| **Your Email**    | email    | Yes      | Valid email format            | So Joe can reply to your question.           |
| **Your Message**  | textarea | Yes      | Min 10 chars, max 1000 chars  | Ask anything!                                |

### Submit Button
-   **Text:** "Send My Message"
-   **Loading state:** "Sending..."

### Success State
-   **Message:** "Thank You! Your message has been sent to Joe."
    *   **Sub-text:** "He aims to respond to all inquiries within 2 business days."
-   **Next action:** Clear the form fields, display success message in place of the form.

### Error States
-   **Validation errors:** Inline error messages and red borders.
-   **Server errors:** General message: "Could not send message. Please try again or call Joe at (760) 580-8173."

---

## Micro-interactions

### Interaction: Primary Button Hover/Focus

### Trigger
User hovers mouse over a primary CTA button (e.g., "Request Your Free Consultation") or navigates to it via keyboard (focus state).

### Response
-   **Visual:** Button background color subtly brightens by 10% or shifts to a secondary brand color. Text color slightly darkens if on a light background, or lightens if on a dark background.
-   **Animation:** A subtle `transform: translateY(-2px);` to give a slight "lift" effect, with a `transition` of `0.2s ease-out`.
-   **Cursor:** Changes to `pointer`.

### States
-   **Default:** `background-color: var(--color-primary-blue); color: var(--color-white);`
-   **Hover/Focus:** `background-color: var(--color-primary-blue-light); transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);`
-   **Active (Click):** `transform: translateY(0); background-color: var(--color-primary-blue-dark); box-shadow: none;`

### Interaction: Form Field Focus

### Trigger
User clicks into a form input field or tabs to it.

### Response
-   **Visual:** The input field's border color changes to `var(--color-primary-blue)` and slightly thickens (`border-width: 2px`).
-   **Animation:** A smooth `transition: border-color 0.2s ease-in-out, border-width 0.2s ease-in-out;`.
-   **Help Text:** If applicable, help text slides up or fades in below the field.

### States
-   **Default:** `border: 1px solid var(--color-gray-300);`
-   **Focus:** `border: 2px solid var(--color-primary-blue);`
-   **Error:** `border: 2px solid var(--color-error-red);`

### Interaction: Mobile Navigation (Hamburger Menu)

### Trigger
User taps the hamburger icon on mobile.

### Response
-   **Visual:** The hamburger icon animates into an "X" or close icon. The navigation menu slides in from the right (or top) of the screen, overlaying the content.
-   **Animation:** Menu slides in smoothly using `transform: translateX(0);` from `translateX(100%);` with a `transition: transform 0.3s ease-in-out;`. Icon animation also `0.3s ease-in-out`.
-   **Content:** Underlying page content is inert (scroll disabled) and subtly dimmed or blurred to focus attention on the menu.

### States
-   **Default:** Hamburger icon, menu hidden.
-   **Active (Open):** "X" icon, menu visible.
-   **Close:** Tapping "X" or outside the menu reverses the animation.

### Interaction: Image Gallery (Lightbox/Slider)

### Trigger
User clicks on a thumbnail image in the portfolio or service pages.

### Response
-   **Visual:** A full-screen lightbox overlay appears, dimming the background content. The selected image (or a larger version) is displayed centrally. Navigation arrows appear to browse other images in the gallery. A close button (`X`) is visible.
-   **Animation:** Lightbox fades in (`opacity 0.3s`), image scales up slightly from thumbnail size or slides in.
-   **Functionality:**
    -   Clicking arrows navigates between images.
    -   Swiping left/right on mobile navigates.
    -   Esc key or clicking outside the image/close button closes the lightbox.
    -   Image captions/titles displayed below the image.

### States
-   **Default:** Thumbnail visible.
-   **Active:** Lightbox open, full image displayed.
-   **Navigation:** Arrows highlight on hover, indicate next/previous image.

### Interaction: "Since 2001" / License # Tooltip (Desktop)

### Trigger
User hovers over the "Since 2001" badge or "CA Lic. #802167" link.

### Response
-   **Visual:** A small, informative tooltip appears below/next to the element.
-   **Content:**
    -   For "Since 2001": "Joe the Painter has been a licensed contractor in California since March 22, 2001."
    -   For "CA Lic. #802167": "Click to verify Joe's active CSLB license."
-   **Animation:** Tooltip fades in (`opacity 0.2s ease-out`).

### States
-   **Default:** Element visible.
-   **Hover:** Tooltip visible.