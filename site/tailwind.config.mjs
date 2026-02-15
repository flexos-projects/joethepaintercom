/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors (from 06-design.md and 07-technical.md, prioritizing 06-design.md for specific hex values) ---
      colors: {
        primary: {
          DEFAULT: '#0047AB', // Primary Blue
          hover: '#003B8D',   // Primary Blue Hover (from Button component styles)
          active: '#002A6B',  // Primary Blue Active (from Button component styles)
        },
        secondary: {
          DEFAULT: '#6B7280', // Secondary Gray
          hover: '#5A616E',   // Secondary Gray Hover (from Button component styles)
          active: '#4D535E',  // Secondary Gray Active (from Button component styles)
        },
        accent: {
          DEFAULT: '#E5B80B', // Accent Gold
          light: '#FFD700',   // Brighter variant for highlights (from 07-technical.md)
          dark: '#B38B00',    // Deeper variant for subtle contrast (from 07-technical.md)
        },
        neutral: { // Renaming to match 06-design.md's semantic names
          background: '#F9FAFB', // Background White
          surface: '#FFFFFF',    // Surface Light
          text: '#1F2937',       // Text Dark
          textMuted: '#6B7280',  // Text Muted
          textSubtle: '#9CA3AF', // Text Subtle
          border: '#E5E7EB',     // Border Light
        },
        white: '#FFFFFF', // Explicit white
        black: '#000000', // Explicit black
        // Semantic colors (from 06-design.md)
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },

      // --- Typography (from 06-design.md and 07-technical.md) ---
      fontFamily: {
        heading: ['"Lora Variable"', ...defaultTheme.fontFamily.serif], // Elegant serif for headings
        body: ['"Inter Variable"', ...defaultTheme.fontFamily.sans], // Modern sans-serif for body
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono], // For code snippets or specific data displays
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }], // 16px (default body)
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px (H4 desktop, H3 mobile)
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px (H3 desktop, H2 mobile)
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px (H2 desktop, H1 mobile)
        '5xl': ['3rem', { lineHeight: '1' }], // 48px (H1 desktop)
        '6xl': ['3.75rem', { lineHeight: '1' }], // 60px (Display Hero desktop)
      },
      fontWeight: {
        thin: '100', // Not explicitly used but standard
        extralight: '200', // Not explicitly used but standard
        light: '300', // Not explicitly used but standard
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800', // Not explicitly used but standard
        black: '900', // Not explicitly used but standard
      },

      // --- Spacing (from 06-design.md and 07-technical.md) ---
      spacing: {
        'px': '1px',
        '0.5': '0.125rem', // 2px
        '1': '0.25rem', // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem', // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem', // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem', // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '1.75rem', // 28px
        '8': '2rem', // 32px
        '9': '2.25rem', // 36px
        '10': '2.5rem', // 40px
        '11': '2.75rem', // 44px
        '12': '3rem', // 48px
        '14': '3.5rem', // 56px
        '16': '4rem', // 64px
        '20': '5rem', // 80px
        '24': '6rem', // 96px
        '28': '7rem', // 112px
        '32': '8rem', // 128px
        '36': '9rem', // 144px
        '40': '10rem', // 160px
        '44': '11rem', // 176px
        '48': '12rem', // 192px
        '52': '13rem', // 208px
        '56': '14rem', // 224px
        '60': '15rem', // 240px
        '64': '16rem', // 256px
        '72': '18rem', // 288px
        '80': '20rem', // 320px
        '96': '24rem', // 384px
      },

      // --- Border Radius (from 06-design.md and 07-technical.md) ---
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'DEFAULT': '0.25rem', // 4px (Tailwind default)
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
        'full': '9999px',
      },

      // --- Shadows (from 06-design.md and 07-technical.md) ---
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // Tailwind default
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // Tailwind default
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', // Tailwind default
        'none': 'none',
        'outline': '0 0 0 3px rgba(0, 71, 171, 0.5)', // Custom focus outline using primary-blue
      },

      // --- Transitions (from 06-design.md) ---
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'all': 'all', // Tailwind default
        'colors': 'background-color, border-color, color, fill, stroke', // Tailwind default
        'opacity': 'opacity', // Tailwind default
        'shadow': 'box-shadow', // Tailwind default
        'transform': 'transform', // Tailwind default
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // Default cubic-bezier from 06-design.md
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        'fast': '150ms', // from 06-design.md
        'normal': '300ms', // from 06-design.md
        'slow': '500ms', // from 06-design.md
      },

      // --- Breakpoints (from 06-design.md) ---
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};