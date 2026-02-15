# 06-design.md: The Craftsman's Palette – Visual Design System Specification

## Creative Direction

#### Concept
The visual vision is to forge a brand identity that is **Modern Craftsmanship Meets San Diego Serenity**. We will blend the timeless trust of a seasoned artisan with the clean, approachable aesthetic of contemporary design, reflecting Joe's dedication and the relaxed, yet refined, spirit of his service area.

#### Mood
**Trustworthy, Professional, Meticulous, Approachable, Authentic, Calm, Established.** The design will evoke confidence through clean lines and thoughtful details, while maintaining a warm, inviting feel that speaks to Joe's personal, customer-centric approach. It will feel solid and dependable, like a perfectly painted wall.

#### Principles
1.  **Crafted Clarity:** Every visual element, from typography to spacing, is meticulously chosen to communicate Joe's expertise and reliability without clutter. Information is easy to digest, and the user journey is intuitive.
2.  **Authentic Connection:** The design amplifies Joe's personal brand. His image, story, and values are integrated visually, building genuine trust and a sense of direct, individual service.
3.  **Enduring Quality:** Design choices reflect the longevity of Joe's 25+ years in business and the high standards of his work. This means classic elements reinterpreted with a modern sensibility, ensuring the site feels current now and for years to come.
4.  **Effortless Experience:** The user interface is designed for seamless navigation and clear calls to action. It minimizes friction, making it easy for homeowners to find information, understand services, and initiate contact.
5.  **San Diego Serenity:** Subtle visual cues, such as a color palette inspired by coastal light and natural textures, will ground the brand in its local environment, appealing to the target demographic without being overtly thematic.

#### References
*   **Brave Work (`https://bravework.com/`)**: We emulate its **simplicity and singular focus**. The Joe the Painter site will feature a clean, uncluttered hero section with a powerful, personal statement and clear choices for exploring services, avoiding visual noise.
*   **Blue Bottle Coffee (`https://bluebottlecoffee.com/`)**: Inspires us to **elevate the mundane through storytelling and process visualization**. We will use high-quality, authentic photography to showcase Joe's meticulous process, tools, and the "why" behind his craftsmanship, turning painting and handyman services into an art.
*   **Made by Landmark (`https://madebylandmark.com/`)**: We draw from its **"show, don't tell" approach** with dynamic, visually-driven project galleries. Our portfolio will feature before-and-after sliders and mini-case studies, allowing the quality of Joe's work to speak for itself.
*   **WPCraft (`https://www.wpcraft.co/`)**: For its **balance of professionalism and approachability**, and its use of subtle textures and thoughtful white space to create a premium, yet welcoming, feel.

#### Anti-patterns
*   **Generic Stock Photos & Clip Art:** Absolutely no generic, unauthentic imagery. Every visual will either be custom photography of Joe and his work or carefully curated, high-quality, abstract graphics that resonate with the brand. The old header graphic is the prime example of what to avoid.
*   **Dated Visual Patterns:** We are leaving behind system fonts (Times New Roman), rudimentary layouts, and any aesthetic reminiscent of early web design. The rebirth is about modern professionalism.
*   **Cluttered Layouts & Poor Hierarchy:** No more arbitrary spacing or confusing visual priorities. The design will be structured, clear, and guide the user's eye naturally to key information and calls to action.
*   **Hidden or Weak CTAs:** "Let's discuss your ideas!" as plain text is a business failure. Calls to action will be prominent, actionable, and strategically placed.
*   **Inconsistent Branding:** Every element will be harmonized within this design system, ensuring a cohesive and professional brand experience across all touchpoints.

---

## Color System

### Primary Palette
| Name | Hex | RGB | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Blue** | `#0047AB` | rgb(0, 71, 171) | Main brand color. Buttons, primary links, key headings, navigation accents. Represents professionalism, trust, and depth. |
| **Secondary Gray** | `#6B7280` | rgb(107, 114, 128) | Supporting elements, secondary text, borders, subtle backgrounds. Provides a stable, neutral foundation. |
| **Accent Gold** | `#E5B80B` | rgb(229, 184, 11) | Highlight elements, hover states, badges, special offers. Adds a touch of warmth, quality, and distinction. |

### Neutral Palette
| Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Background White** | `#F9FAFB` | Page background. Soft off-white to reduce eye strain from pure white. |
| **Surface Light** | `#FFFFFF` | Card backgrounds, modals, input fields. Crisp white for content areas. |
| **Text Dark** | `#1F2937` | Primary body text, main headings. High contrast for readability. |
| **Text Muted** | `#6B7280` | Secondary body text, captions, less emphasized information. |
| **Text Subtle** | `#9CA3AF` | Very subtle text, timestamps, disabled states. |
| **Border Light** | `#E5E7EB` | Dividers, subtle borders, outlines. |

### Semantic Colors
| Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Success** | `#10B981` | Success messages, positive feedback, completion states. |
| **Warning** | `#F59E0B` | Warning messages, alerts, non-critical issues. |
| **Error** | `#EF4444` | Error messages, invalid input, critical alerts. |
| **Info** | `#3B82F6` | Informational messages, tips, general notices. |

### Color Usage Rules
*   **Primary Blue** (`#0047AB`): Reserved for high-impact elements, interactive components, and brand reinforcement. Use sparingly but strategically to guide the user's eye.
*   **Secondary Gray** (`#6B7280`): Balances the primary blue, offering a sophisticated and calming presence. Ideal for structural elements and secondary information.
*   **Accent Gold** (`#E5B80B`): Used for moments of emphasis and interaction. It should draw attention but not overwhelm.
*   **Text Contrast:** Ensure all text colors meet WCAG AA standards for contrast against their respective backgrounds. Specifically, `Text Dark` on `Background White` or `Surface Light` has a contrast ratio of 10.9:1. `Text Muted` on `Background White` or `Surface Light` has a contrast ratio of 4.5:1 (meets AA).
*   **Dark Mode Considerations:** While not a primary requirement, the palette is designed to be adaptable. A future dark mode would invert light/dark neutrals and potentially desaturate primary/accent colors slightly.
*   **Accessibility:** Avoid using color alone to convey meaning. Always pair semantic colors with icons or text labels.

---

## Typography

### Font Families
*   **Heading**: `Lora`, `Georgia`, `serif` – Chosen for its classic, refined serif quality, conveying craftsmanship, legacy, and trust.
*   **Body**: `Inter`, `system-ui`, `sans-serif` – A modern, highly legible sans-serif for optimal readability across all devices and content types, reflecting professionalism and clarity.
*   **Mono**: `Space Mono`, `monospace` – For code snippets or specific data displays, if ever needed.

### Type Scale (Base: 16px)
| Name | Size (rem/px) | Line Height | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **xs** | 0.75rem (12px) | 1.5 | 400 | Captions, legal text, meta information |
| **sm** | 0.875rem (14px) | 1.5 | 400 | Small labels, secondary navigation, testimonials |
| **base** | 1rem (16px) | 1.6 | 400 | Body text, paragraph content |
| **lg** | 1.125rem (18px) | 1.6 | 400 | Large body text, introductory paragraphs |
| **xl** | 1.25rem (20px) | 1.4 | 500 | Subheadings, prominent callouts |
| **2xl** | 1.5rem (24px) | 1.3 | 600 | H4 – Section sub-titles |
| **3xl** | 1.875rem (30px) | 1.3 | 600 | H3 – Major content headings |
| **4xl** | 2.25rem (36px) | 1.2 | 700 | H2 – Main section titles |
| **5xl** | 3rem (48px) | 1.1 | 700 | H1 – Page titles, hero headlines |
| **6xl** | 3.75rem (60px) | 1.1 | 700 | Display – Hero headlines for maximum impact (use sparingly) |

### Heading Styles
*   **H1**: `font-family: Lora; font-size: 3rem; line-height: 1.1; font-weight: 700; color: var(--text-dark);` (5xl)
    *   *Mobile:* `font-size: 2.25rem;` (4xl)
*   **H2**: `font-family: Lora; font-size: 2.25rem; line-height: 1.2; font-weight: 700; color: var(--text-dark);` (4xl)
    *   *Mobile:* `font-size: 1.875rem;` (3xl)
*   **H3**: `font-family: Lora; font-size: 1.875rem; line-height: 1.3; font-weight: 600; color: var(--text-dark);` (3xl)
    *   *Mobile:* `font-size: 1.5rem;` (2xl)
*   **H4**: `font-family: Inter; font-size: 1.5rem; line-height: 1.3; font-weight: 600; color: var(--text-dark);` (2xl)
    *   *Mobile:* `font-size: 1.25rem;` (xl)

### Responsive Scaling
*   **Mobile (below `md` breakpoint):** Headings (H1-H4) scale down one step in the type scale to ensure readability and efficient use of screen real estate. Body text remains `base` or `lg` for optimal readability.
*   **Desktop (at or above `md` breakpoint):** All type sizes are at their standard values defined in the type scale, utilizing the larger canvas for impact and detail.

---

## Spacing System

### Scale (Base: 1rem = 16px)
| Name | Value (rem) | Pixels (px) | Usage |
| :--- | :--- | :--- | :--- |
| **px** | 1px | 1px | Fine borders, dividers. |
| **0.5** | 0.125rem | 2px | Micro spacing, icon-text gap. |
| **1** | 0.25rem | 4px | Tight spacing, small list item gaps. |
| **2** | 0.5rem | 8px | Compact spacing, button padding (sm). |
| **3** | 0.75rem | 12px | Default button padding, form field padding. |
| **4** | 1rem | 16px | Standard spacing, body text line-height base, card padding. |
| **5** | 1.25rem | 20px | Increased spacing for readability. |
| **6** | 1.5rem | 24px | Comfortable spacing, component vertical gaps. |
| **8** | 2rem | 32px | Section internal padding, large component margins. |
| **10** | 2.5rem | 40px | Medium section padding. |
| **12** | 3rem | 48px | Large component spacing, hero content margin. |
| **16** | 4rem | 64px | Significant section gaps, major content blocks. |
| **20** | 5rem | 80px | Extra large section gaps, hero section padding (mobile). |
| **24** | 6rem | 96px | Major sections vertical spacing, hero section padding (desktop). |

### Usage Rules
*   **Component Padding:** Use `spacing-3` to `spacing-4` for internal padding within smaller components (buttons, input fields). Cards will typically use `spacing-4` to `spacing-6`.
*   **Section Vertical Spacing:** Use `spacing-16` to `spacing-24` between major content sections to provide ample breathing room and clear visual separation. On mobile, these may reduce to `spacing-10` to `spacing-16`.
*   **Grid Gaps:** Utilize `spacing-4` (1rem) for mobile grid gaps and `spacing-8` (2rem) for desktop grid gaps to ensure responsive design.
*   **Vertical Rhythm:** Emphasize a consistent vertical rhythm using `spacing-4` (1rem) as a base unit for paragraph margins and list item spacing.

---

## Layout System

### Container
*   **Max width**: `1280px` (80rem) – Provides a comfortable reading width on large screens.
*   **Padding**:
    *   **Mobile (below `md` breakpoint)**: `1rem` (`spacing-4`) horizontal padding on left/right.
    *   **Desktop (at or above `md` breakpoint)**: `2rem` (`spacing-8`) horizontal padding on left/right.
*   **Centering**: `margin-left: auto; margin-right: auto;` to center the container.

### Grid
*   **Columns**: `12` – A flexible 12-column grid system for robust layout design.
*   **Gap**:
    *   **Mobile (below `md` breakpoint)**: `1rem` (`spacing-4`) gap between columns and rows.
    *   **Desktop (at or above `md` breakpoint)**: `2rem` (`spacing-8`) gap between columns and rows.

### Breakpoints
| Name | Min Width | Usage |
| :--- | :--- | :--- | :--- |
| **sm** | `640px` (40rem) | Small devices, landscape phones. |
| **md** | `768px` (48rem) | Tablets, larger phones in landscape. Primary breakpoint for layout changes. |
| **lg** | `1024px` (64rem) | Small laptops, large tablets in landscape. |
| **xl** | `1280px` (80rem) | Desktops, standard screens. |
| **2xl** | `1536px` (96rem) | Large screens, wide monitors. |

---

## Effects

### Shadows
*   **Shadow sm**: `0 1px 2px 0 rgb(0 0 0 / 0.05)` – Subtle lift for interactive elements.
*   **Shadow md**: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` – Standard card shadow, slight depth.
*   **Shadow lg**: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` – Prominent card shadow, modals, dropdowns.
*   **Shadow xl**: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` – Hero elements, highly elevated components.

### Border Radius
*   **none**: `0` – Sharp edges.
*   **sm**: `0.125rem` (2px) – Very slight rounding.
*   **md**: `0.375rem` (6px) – Standard button and input field radius.
*   **lg**: `0.5rem` (8px) – Card radius, larger interactive elements.
*   **xl**: `0.75rem` (12px) – Prominent rounded corners.
*   **2xl**: `1rem` (16px) – Large, soft rounded corners.
*   **full**: `9999px` – Pill shape, circular elements (e.g., avatars).

### Transitions
*   **fast**: `150ms ease-in-out` – Quick feedback for hovers, small state changes.
*   **normal**: `300ms ease-in-out` – Standard UI transitions, component reveals.
*   **slow**: `500ms ease-in-out` – Smoother, more deliberate visual changes.
*   **easing**: `cubic-bezier(0.4, 0, 0.2, 1)` – Default cubic-bezier for most transitions.

---

## Component Styles

#### Buttons
Buttons are designed to be clear, actionable, and reflect Joe's professional yet approachable brand.

*   **Base Styling**: `display: inline-flex; align-items: center; justify-content: center; font-family: Inter; font-weight: 600; text-align: center; text-decoration: none; cursor: pointer; border: 1px solid transparent; transition: background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast); border-radius: var(--border-radius-md);`

*   **Variants**:
    *   **Primary**:
        *   **Default**: `background-color: var(--primary-blue); color: var(--surface-light); border-color: var(--primary-blue);`
        *   **Hover**: `background-color: #003B8D; border-color: #003B8D; box-shadow: var(--shadow-sm);`
        *   **Active**: `background-color: #002A6B; border-color: #002A6B; transform: translateY(1px);`
        *   **Disabled**: `background-color: var(--text-subtle); border-color: var(--text-subtle); color: var(--surface-light); cursor: not-allowed;`
    *   **Secondary**:
        *   **Default**: `background-color: var(--secondary-gray); color: var(--surface-light); border-color: var(--secondary-gray);`
        *   **Hover**: `background-color: #5A616E; border-color: #5A616E; box-shadow: var(--shadow-sm);`
        *   **Active**: `background-color: #4D535E; border-color: #4D535E; transform: translateY(1px);`
        *   **Disabled**: `background-color: var(--text-subtle); border-color: var(--text-subtle); color: var(--surface-light); cursor: not-allowed;`
    *   **Outline**:
        *   **Default**: `background-color: transparent; color: var(--primary-blue); border-color: var(--primary-blue);`
        *   **Hover**: `background-color: var(--primary-blue); color: var(--surface-light); box-shadow: var(--shadow-sm);`
        *   **Active**: `background-color: #002A6B; border-color: #002A6B; color: var(--surface-light); transform: translateY(1px);`
        *   **Disabled**: `background-color: transparent; color: var(--text-subtle); border-color: var(--text-subtle); cursor: not-allowed;`
    *   **Ghost**:
        *   **Default**: `background-color: transparent; color: var(--primary-blue); border-color: transparent;`
        *   **Hover**: `background-color: rgba(0, 71, 171, 0.05);`
        *   **Active**: `background-color: rgba(0, 71, 171, 0.1); transform: translateY(1px);`
        *   **Disabled**: `background-color: transparent; color: var(--text-subtle); cursor: not-allowed;`

*   **Sizes**:
    *   **sm**: `padding: var(--spacing-2) var(--spacing-3); font-size: var(--font-size-sm);`
    *   **md**: `padding: var(--spacing-3) var(--spacing-4); font-size: var(--font-size-base);`
    *   **lg**: `padding: var(--spacing-4) var(--spacing-6); font-size: var(--font-size-lg);`

#### Cards
Cards are used to present services, projects, and testimonials in a clean, organized manner.

*   **Default**: `background-color: var(--surface-light); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-md); padding: var(--spacing-6); display: flex; flex-direction: column;`
*   **Variants**:
    *   **Service Card**: Image at top, H3 title, `text-muted` description, `outline` button.
    *   **Project Card**: Image (often before/after slider), H4 title, short description, `ghost` link to project page.
    *   **Testimonial Card**: Quote, client name (sm), optional client photo (full border-radius).
*   **Anatomy**: Typically includes an image, a heading, body text, and a call-to-action or link.
*   **Hover Behaviors**: For interactive cards (e.g., project cards), `transform: translateY(-4px); box-shadow: var(--shadow-lg); transition: var(--transition-normal);`

#### Forms
Form elements are clean, intuitive, and provide clear feedback.

*   **Input Styling (Text, Email, Phone, Textarea)**:
    *   **Default**: `border: 1px solid var(--border-light); border-radius: var(--border-radius-md); padding: var(--spacing-3); font-size: var(--font-size-base); color: var(--text-dark); background-color: var(--surface-light); width: 100%;`
    *   **Placeholder**: `color: var(--text-muted);`
    *   **Focus**: `outline: none; border-color: var(--primary-blue); box-shadow: 0 0 0 2px rgba(0, 71, 171, 0.2);`
    *   **Error State**: `border-color: var(--error);`
    *   **Disabled**: `background-color: var(--background-white); cursor: not-allowed; color: var(--text-subtle);`
*   **Label Styling**: `font-family: Inter; font-size: var(--font-size-sm); font-weight: 500; color: var(--text-dark); margin-bottom: var(--spacing-1); display: block;`
*   **Error States**: Error messages displayed directly below the input field, `font-size: var(--font-size-xs); color: var(--error); margin-top: var(--spacing-1);`

#### Navigation
A clear, intuitive navigation system for both desktop and mobile.

*   **Desktop Header**:
    *   `background-color: var(--surface-light); padding: var(--spacing-4) 0; box-shadow: var(--shadow-sm); position: sticky; top: 0; z-index: 100;`
    *   **Logo**: Prominent `JOE THE PAINTER` logo (SVG, brand mark + text) on the left.
    *   **Nav Links**: `font-family: Inter; font-size: var(--font-size-base); font-weight: 500; color: var(--text-dark); text-decoration: none; padding: var(--spacing-2) var(--spacing-3); transition: color var(--transition-fast);`
        *   **Hover**: `color: var(--primary-blue);`
        *   **Active/Current**: `color: var(--primary-blue); border-bottom: 2px solid var(--primary-blue);`
    *   **CTA Button**: Primary button `lg` size for "Get a Free Estimate" on the far right.
*   **Mobile Header/Menu**:
    *   **Header**: Simplified, logo on left, hamburger icon on right. `background-color: var(--surface-light); padding: var(--spacing-3) var(--spacing-4); box-shadow: var(--shadow-sm);`
    *   **Hamburger Icon**: `color: var(--text-dark); font-size: 1.5rem;`
    *   **Overlay Menu**: `background-color: var(--surface-light); position: fixed; top: 0; left: 0; width: 100%; height: 100vh; overflow-y: auto; z-index: 101; display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translateX(100%); transition: transform var(--transition-normal) var(--easing-out);`
        *   **Open State**: `transform: translateX(0);`
        *   **Menu Links**: `font-family: Lora; font-size: var(--font-size-3xl); color: var(--text-dark); margin-bottom: var(--spacing-6); text-decoration: none;`
            *   **Hover**: `color: var(--primary-blue);`
        *   **Close Button**: Prominent "X" icon.
*   **Footer**:
    *   `background-color: var(--text-dark); color: var(--text-muted); padding: var(--spacing-12) var(--spacing-8);`
    *   **Sections**: Logo, Navigation links, Contact Info, Legal (License, Copyright).
    *   **Links**: `color: var(--text-muted); text-decoration: none; font-size: var(--font-size-sm);`
        *   **Hover**: `color: var(--surface-light);`
    *   **License Number**: Prominently displayed and linked: `CA Lic. # 802167`

---

## Motion

### Principles
Motion on Joe the Painter's website will be **subtle, purposeful, and enhance clarity**, never distracting. It aims to guide the user's eye, provide immediate feedback, and subtly reinforce the brand's qualities of meticulousness and professionalism. Animations will be smooth and performant, avoiding any jarring experiences.

### Timing
*   **Duration fast**: `150ms` – For quick feedback, such as button hovers and small state changes.
*   **Duration normal**: `300ms` – For standard UI transitions, component reveals, and medium-paced feedback.
*   **Duration slow**: `500ms` – For more deliberate, graceful visual changes, like page transitions or complex element animations.

### Easing
*   **Default**: `cubic-bezier(0.4, 0, 0.2, 1)` – A standard, slightly accelerating and decelerating curve.
*   **In**: `cubic-bezier(0.4, 0, 1, 1)` – Starts slow, ends fast.
*   **Out**: `cubic-bezier(0, 0, 0.2, 1)` – Starts fast, ends slow.
*   **Bounce**: `cubic-bezier(0.34, 1.56, 0.64, 1)` – For playful, non-critical elements (use with extreme caution, if at all, to maintain professional mood).

### Scroll Animations
*   **Fade up**: Elements (e.g., service cards, testimonials, project images) will `opacity: 0; transform: translateY(20px);` when off-screen. On scroll into view, they transition to `opacity: 1; transform: translateY(0);` using `var(--transition-normal)` and `var(--easing-out)`.
*   **Fade in**: For large background images or hero elements, a simple `opacity: 0;` to `opacity: 1;` using `var(--transition-slow)` and `var(--easing-out)` upon initial load or scroll into view.
*   **Stagger**: When multiple similar elements (e.g., a grid of project cards) fade up, they will appear with a slight delay (`50ms` to `100ms` per item) to create a gentle, cascading effect. This adds a layer of refinement.

### Hover Effects
*   **Scale**: Interactive elements like images within project cards will subtly `scale(1.02)` on hover, using `var(--transition-fast)`.
*   **Lift**: Cards (e.g., service cards, project cards) will `transform: translateY(-4px); box-shadow: var(--shadow-lg);` on hover, using `var(--transition-normal)`. This provides a clear sense of interactivity and depth.
*   **Glow**: Outline buttons or text links might feature a subtle `text-shadow` or `box-shadow` with a hint of `primary-blue` or `accent-gold` on hover, creating a soft "glow" effect. Example: `box-shadow: 0 0 8px rgba(0, 71, 171, 0.3);`