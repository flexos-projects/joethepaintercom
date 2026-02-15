/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors (Aligned with 06-design.md) ---
      colors: {
        primary: {
          DEFAULT: '#0047AB', // Primary Blue
          hover: '#003B8D',   // Derived from Primary Button Hover state
          active: '#002A6B',  // Derived from Primary Button Active state
        },
        secondary: {
          DEFAULT: '#6B7280', // Secondary Gray
          hover: '#5A616E',   // Derived from Secondary Button Hover state
          active: '#4D535E',  // Derived from Secondary Button Active state
        },
        accent: {
          DEFAULT: '#E5B80B', // Accent Gold
        },
        background: '#F9FAFB', // Background White
        surface: '#FFFFFF',    // Surface Light
        text: '#1F2937',       // Text Dark
        textMuted: '#6B7280',  // Text Muted
        textSubtle: '#9CA3AF', // Text Subtle
        border: '#E5E7EB',     // Border Light
        success: '#10B981',    // Semantic
        warning: '#F59E0B',    // Semantic
        error: '#EF4444',      // Semantic
        info: '#3B82F6',       // Semantic
      },

      // --- Typography (Aligned with 06-design.md) ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif], // Elegant serif for headings
        body: ['"Inter"', ...defaultTheme.fontFamily.sans], // Modern sans-serif for body
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono], // For specific data displays
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'base': ['1rem', { lineHeight: '1.6' }], // 16px (default body)
        'lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // 24px (H4)
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px (H3)
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px (H2, Mobile H1)
        '5xl': ['3rem', { lineHeight: '1.1' }], // 48px (H1)
        '6xl': ['3.75rem', { lineHeight: '1.1' }], // 60px (Display - Hero large)
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // --- Spacing (Aligned with 06-design.md) ---
      spacing: {
        'px': '1px',
        '0.5': '0.125rem', // 2px
        '1': '0.25rem', // 4px
        '2': '0.5rem', // 8px
        '3': '0.75rem', // 12px
        '4': '1rem', // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '8': '2rem', // 32px
        '10': '2.5rem', // 40px
        '12': '3rem', // 48px
        '16': '4rem', // 64px
        '20': '5rem', // 80px
        '24': '6rem', // 96px
        '80': '20rem', // 320px for h-80
        '96': '24rem', // 384px for h-96
      },

      // --- Border Radius (Aligned with 06-design.md) ---
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        'full': '9999px',
      },

      // --- Shadows (Aligned with 06-design.md) ---
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },

      // --- Transitions (Aligned with 06-design.md) ---
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // --- Breakpoints (Aligned with 06-design.md) ---
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};