/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        primary: {
          DEFAULT: '#0047AB', // Primary Blue from 06-design.md & tokens.json
          hover: '#003B8D',    // From 06-design.md Button Styles
          active: '#002A6B',   // From 06-design.md Button Styles
        },
        secondary: {
          DEFAULT: '#6B7280', // Secondary Gray from 06-design.md & tokens.json
          hover: '#5A616E',    // From 06-design.md Button Styles
          active: '#4D535E',   // From 06-design.md Button Styles
        },
        accent: '#E5B80B',    // Accent Gold from 06-design.md & tokens.json
        background: '#F9FAFB', // Background White from 06-design.md & tokens.json
        surface: '#FFFFFF',    // Surface Light from 06-design.md & tokens.json
        text: {
          dark: '#1F2937',     // Text Dark from 06-design.md & tokens.json
          muted: '#6B7280',    // Text Muted from 06-design.md & tokens.json
          subtle: '#9CA3AF',   // Text Subtle from 06-design.md & tokens.json
        },
        border: '#E5E7EB',     // Border Light from 06-design.md & tokens.json
        // Semantic feedback colors
        success: '#10B981',    // Success from 06-design.md & tokens.json
        warning: '#F59E0B',    // Warning from 06-design.md & tokens.json
        error: '#EF4444',      // Error from 06-design.md & tokens.json
        info: '#3B82F6',       // Info from 06-design.md & tokens.json
      },

      // --- Typography ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif], // Elegant serif for headings (professional, classic craftsmanship)
        body: ['"Inter"', ...defaultTheme.fontFamily.sans],    // Modern sans-serif for body (readable, clean)
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono], // For code snippets or specific data displays
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],    // 12px (matches 06-design.md)
        'sm': ['0.875rem', { lineHeight: '1.5' }],   // 14px (matches 06-design.md)
        'base': ['1rem', { lineHeight: '1.6' }],     // 16px (matches 06-design.md)
        'lg': ['1.125rem', { lineHeight: '1.6' }],   // 18px (matches 06-design.md)
        'xl': ['1.25rem', { lineHeight: '1.4' }],    // 20px (matches 06-design.md)
        '2xl': ['1.5rem', { lineHeight: '1.3' }],    // 24px (matches 06-design.md)
        '3xl': ['1.875rem', { lineHeight: '1.3' }],  // 30px (matches 06-design.md)
        '4xl': ['2.25rem', { lineHeight: '1.2' }],   // 36px (matches 06-design.md)
        '5xl': ['3rem', { lineHeight: '1.1' }],      // 48px (matches 06-design.md)
        '6xl': ['3.75rem', { lineHeight: '1.1' }],   // 60px (matches 06-design.md)
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // --- Spacing (based on 4px grid) ---
      spacing: {
        'px': '1px',
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
      },

      // --- Border Radius ---
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',   // 2px
        'md': '0.375rem',   // 6px (standard button/input)
        'lg': '0.5rem',     // 8px (card radius)
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        'full': '9999px',
      },

      // --- Shadows ---
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'outline': '0 0 0 3px rgba(0, 71, 171, 0.3)', // Custom focus outline using primary blue
      },

      // --- Transitions ---
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color',
        'opacity': 'opacity',
        'transform': 'transform',
        'shadow': 'box-shadow',
        'all': 'all',
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)', // ease-in-out
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        'DEFAULT': '300ms',
        '150': '150ms', // fast
        '300': '300ms', // normal
        '500': '500ms', // slow
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For styling markdown content if a blog is added
  ],
};