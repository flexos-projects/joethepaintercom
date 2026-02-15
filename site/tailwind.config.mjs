/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        primary: {
          DEFAULT: '#0047AB', // Primary Blue from 06-design.md
          hover: '#003B8D',   // Derived from 06-design.md > Component Styles > Buttons > Primary > Hover
          active: '#002A6B',  // Derived from 06-design.md > Component Styles > Buttons > Primary > Active
        },
        secondary: '#6B7280', // Secondary Gray from 06-design.md
        accent: '#E5B80B',    // Accent Gold from 06-design.md
        background: '#F9FAFB', // Background White from 06-design.md
        surface: '#FFFFFF',   // Surface Light from 06-design.md
        text: '#1F2937',      // Text Dark from 06-design.md
        textMuted: '#6B7280', // Text Muted from 06-design.md
        textSubtle: '#9CA3AF', // Text Subtle from 06-design.md
        border: '#E5E7EB',    // Border Light from 06-design.md
        error: '#EF4444',     // Error from 06-design.md
        success: '#10B981',   // Success from 06-design.md
        warning: '#F59E0B',   // Warning from 06-design.md
        info: '#3B82F6',      // Info from 06-design.md
      },

      // --- Typography ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif], // From 06-design.md
        body: ['"Inter"', ...defaultTheme.fontFamily.sans],   // From 06-design.md
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono], // From 06-design.md
      },
      fontSize: { // From 06-design.md
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      fontWeight: { // From 06-design.md
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // --- Spacing (based on 4px grid) ---
      spacing: { // From 06-design.md and tokens.json
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
      borderRadius: { // From 06-design.md and 07-technical.md
        'none': '0',
        'sm': '0.125rem', // 2px
        'DEFAULT': '0.25rem', // 4px, added based on 07-technical.md sample
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        'full': '9999px',
      },

      // --- Shadows ---
      boxShadow: { // From 06-design.md
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'focus-primary': '0 0 0 2px rgba(0, 71, 171, 0.2)', // Custom for focus, matching 06-design.md specification
      },

      // --- Transitions ---
      transitionDuration: { // From 06-design.md
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: { // From 06-design.md
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // From 07-technical.md
    require('@tailwindcss/typography'), // From 07-technical.md
    require('@tailwindcss/aspect-ratio'), // From 07-technical.md
  ],
};