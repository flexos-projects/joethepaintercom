/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        primary: {
          DEFAULT: '#0047AB', // Primary Blue
          dark: '#003B8D',    // Derived from Primary hover state in 06-design.md
          darker: '#002A6B',  // Derived from Primary active state in 06-design.md
        },
        secondary: {
          DEFAULT: '#6B7280', // Secondary Gray
          dark: '#5A616E',    // Derived from Secondary hover state in 06-design.md
          darker: '#4D535E',  // Derived from Secondary active state in 06-design.md
        },
        accent: {
          DEFAULT: '#E5B80B', // Accent Gold
        },
        background: '#F9FAFB', // Background White
        surface: '#FFFFFF',    // Surface Light
        text: '#1F2937',       // Text Dark
        'text-muted': '#6B7280', // Text Muted (same as secondary.DEFAULT)
        'text-subtle': '#9CA3AF', // Text Subtle
        'border-light': '#E5E7EB', // Border Light
        error: '#EF4444',      // Error
        success: '#10B981',    // Success
        warning: '#F59E0B',    // Warning
        info: '#3B82F6',       // Info
        // Keeping a full neutral scale for general utility where specific semantic colors aren't needed
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        white: '#FFFFFF',
        black: '#000000',
      },

      // --- Typography ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif], // Elegant serif for headings
        body: ['"Inter"', ...defaultTheme.fontFamily.sans], // Modern sans-serif for body
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono], // Monospace for specific data displays
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'base': ['1rem', { lineHeight: '1.6' }], // 16px (default body)
        'lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // 24px (H4)
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px (H3)
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px (H2)
        '5xl': ['3rem', { lineHeight: '1.1' }], // 48px (H1)
        '6xl': ['3.75rem', { lineHeight: '1.1' }], // 60px (Display/Hero H1)
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
      },

      // --- Border Radius ---
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'md': '0.375rem', // 6px (Standard button/input radius)
        'lg': '0.5rem', // 8px (Card radius)
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        'full': '9999px',
      },

      // --- Shadows ---
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },

      // --- Transitions ---
      transitionDuration: {
        'fast': '150ms', // For quick feedback
        'normal': '300ms', // For standard UI transitions
        'slow': '500ms', // For more deliberate changes
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // Default cubic-bezier
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Use with caution
      },
    },
  },
  plugins: [],
};
---