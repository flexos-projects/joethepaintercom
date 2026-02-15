/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        // Semantic colors referencing CSS variables defined in src/styles/tokens.css
        primary: {
          DEFAULT: 'var(--color-primary)', // #0047AB
          hover: '#003B8D', // As per 06-design.md, Component Styles -> Buttons -> Primary Hover
          active: '#002A6B', // As per 06-design.md, Component Styles -> Buttons -> Primary Active
        },
        secondary: 'var(--color-secondary)', // #6B7280
        accent: {
          DEFAULT: 'var(--color-accent)', // #E5B80B
          hover: '#F5C62C', // Derived from accent gold for consistent hover effect
          active: '#D4A700', // Derived from accent gold for consistent active effect
        },
        background: 'var(--color-background)', // #F9FAFB
        surface: 'var(--color-surface)',     // #FFFFFF
        text: 'var(--color-text)',           // #1F2937 (Text Dark)
        textMuted: 'var(--color-textMuted)', // #6B7280 (Text Muted)
        textSubtle: 'var(--color-textSubtle)', // #9CA3AF
        border: 'var(--color-border)',       // #E5E7EB
        white: 'var(--color-surface)',       // Explicitly map white to surface for consistency
        black: '#000000', // Pure black for specific high-contrast needs, not general text
        
        // Semantic feedback colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
      },

      // --- Typography ---
      fontFamily: {
        heading: ['Lora', 'Georgia', 'serif'], // Elegant serif for headings
        body: ['Inter', 'system-ui', 'sans-serif'], // Modern sans-serif for body
        mono: ['Space Mono', 'monospace'], // For code snippets or specific data displays
      },
      fontSize: {
        'xs': ['var(--font-size-xs)', { lineHeight: 'var(--line-height-xs)' }],
        'sm': ['var(--font-size-sm)', { lineHeight: 'var(--line-height-sm)' }],
        'base': ['var(--font-size-base)', { lineHeight: 'var(--line-height-base)' }],
        'lg': ['var(--font-size-lg)', { lineHeight: 'var(--line-height-lg)' }],
        'xl': ['var(--font-size-xl)', { lineHeight: 'var(--line-height-xl)' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-2xl)' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-3xl)' }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-4xl)' }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: 'var(--line-height-5xl)' }],
        '6xl': ['var(--font-size-6xl)', { lineHeight: 'var(--line-height-6xl)' }],
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },

      // --- Spacing (based on 4px grid) ---
      spacing: {
        'px': 'var(--spacing-px)',
        '0.5': 'var(--spacing-0-5)',
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '8': 'var(--spacing-8)',
        '10': 'var(--spacing-10)',
        '12': 'var(--spacing-12)',
        '16': 'var(--spacing-16)',
        '20': 'var(--spacing-20)',
        '24': 'var(--spacing-24)',
      },

      // --- Border Radius ---
      borderRadius: {
        'none': 'var(--border-radius-none)',
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'xl': 'var(--border-radius-xl)',
        '2xl': 'var(--border-radius-2xl)',
        'full': 'var(--border-radius-full)',
      },

      // --- Shadows ---
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },

      // --- Transitions ---
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'color, background-color, border-color, text-decoration-color', // Include default Tailwind colors
        'opacity': 'opacity',
        'transform': 'transform',
        'shadow': 'box-shadow',
        'all': 'all', // Ensure 'transition-all' works as expected
      },
      transitionTimingFunction: {
        'DEFAULT': 'var(--ease-default)', // As per 06-design.md, Motion -> Easing -> Default
        'in': 'var(--ease-in)',
        'out': 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)', 
        'bounce': 'var(--ease-bounce)',
      },
      transitionDuration: {
        'DEFAULT': 'var(--duration-normal)', // As per 06-design.md, Motion -> Timing -> Duration normal
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
      },
    },
  },
  plugins: [],
};