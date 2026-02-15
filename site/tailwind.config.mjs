/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors (from 06-design.md) ---
      colors: {
        'primary-blue': {
          DEFAULT: '#0047AB', // Primary Blue
          hover: '#003B8D',   // Derived from Button component styles
          active: '#002A6B',  // Derived from Button component styles
        },
        'secondary-gray': {
          DEFAULT: '#6B7280', // Secondary Gray
          hover: '#5A616E',   // Derived from Button component styles
          active: '#4D535E',  // Derived from Button component styles
        },
        'accent-gold': {
          DEFAULT: '#E5B80B', // Accent Gold
          light: '#FFD700',   // From 07-technical.md (as a variant)
          dark: '#B38B00',    // From 07-technical.md (as a variant)
        },
        'background-white': '#F9FAFB', // Background White
        'surface-light': '#FFFFFF',    // Surface Light
        'text-dark': '#1F2937',       // Text Dark
        'text-muted': '#6B7280',      // Text Muted
        'text-subtle': '#9CA3AF',     // Text Subtle
        'border-light': '#E5E7EB',    // Border Light

        // Semantic Colors (from 06-design.md)
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',

        // Explicit white and black (from 07-technical.md)
        'white': '#FFFFFF',
        'black': '#000000',
      },

      // --- Typography (from 06-design.md) ---
      fontFamily: {
        heading: ['Lora', ...defaultTheme.fontFamily.serif], // Elegant serif for headings
        body: ['Inter', ...defaultTheme.fontFamily.sans],    // Modern sans-serif for body
        mono: ['Space Mono', ...defaultTheme.fontFamily.mono], // For code snippets or specific data displays
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }], // 12px, from 06-design.md
        'sm': ['0.875rem', { lineHeight: '1.5' }], // 14px, from 06-design.md
        'base': ['1rem', { lineHeight: '1.6' }], // 16px, from 06-design.md
        'lg': ['1.125rem', { lineHeight: '1.6' }], // 18px, from 06-design.md
        'xl': ['1.25rem', { lineHeight: '1.4' }], // 20px, from 06-design.md
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // 24px, from 06-design.md
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px, from 06-design.md
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px, from 06-design.md
        '5xl': ['3rem', { lineHeight: '1.1' }], // 48px, from 06-design.md
        '6xl': ['3.75rem', { lineHeight: '1.1' }], // 60px, from 06-design.md
      },
      fontWeight: {
        normal: '400', // From 06-design.md
        medium: '500', // From 06-design.md
        semibold: '600', // From 06-design.md
        bold: '700', // From 06-design.md
      },

      // --- Spacing (from 06-design.md and 07-technical.md for comprehensive list) ---
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

      // --- Border Radius (from 06-design.md) ---
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        'full': '9999px',
      },

      // --- Shadows (from 06-design.md) ---
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },

      // --- Transitions (from 06-design.md) ---
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