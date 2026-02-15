/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        primary: {
          blue: {
            DEFAULT: '#0047AB', // Main brand color
            light: '#3366CC',   // Lighter variant for accents or subtle backgrounds
            dark: '#003B8D',    // Darker variant for hover/active states or contrast
          },
        },
        accent: {
          gold: {
            DEFAULT: '#E5B80B', // Warm, inviting golden ochre
            light: '#FFD700',   // Brighter variant for highlights
            dark: '#B38B00',    // Deeper variant for subtle contrast
          },
        },
        background: '#F9FAFB', // Page background. Soft off-white to reduce eye strain from pure white.
        surface: '#FFFFFF',    // Card backgrounds, modals, input fields. Crisp white for content areas.
        text: {
          dark: '#1F2937',     // Primary body text, main headings. High contrast for readability.
          muted: '#6B7280',    // Secondary body text, captions, less emphasized information.
          subtle: '#9CA3AF',   // Very subtle text, timestamps, disabled states.
        },
        border: '#E5E7EB',     // Dividers, subtle borders, outlines.
        // Semantic feedback colors
        success: '#10B981',    // Green for success messages
        warning: '#F59E0B',    // Orange for warnings
        error: '#EF4444',      // Red for errors
        info: '#3B82F6',       // Blue for informational messages
      },

      // --- Typography ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif], // Elegant serif for headings (professional, classic craftsmanship)
        body: ['"Inter"', ...defaultTheme.fontFamily.sans],    // Modern sans-serif for body (readable, clean)
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono], // For code snippets or specific data displays
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],    // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],   // 14px
        'base': ['1rem', { lineHeight: '1.6' }],     // 16px (default body)
        'lg': ['1.125rem', { lineHeight: '1.6' }],   // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3' }],  // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],   // 36px (h2)
        '5xl': ['3rem', { lineHeight: '1.1' }],      // 48px (h1)
        '6xl': ['3.75rem', { lineHeight: '1.1' }],   // 60px (hero h1)
        '7xl': ['4.5rem', { lineHeight: '1.1' }],    // 72px (display hero)
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
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
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
        '200': '200ms',
        '300': '300ms', // normal
        '500': '500ms', // slow
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For styling markdown content if a blog is added
  ],
};