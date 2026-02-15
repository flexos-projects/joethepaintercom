/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors from 06-design.md ---
      colors: {
        'primary-blue': '#0047AB',
        'secondary-gray': '#6B7280',
        'accent-gold': '#E5B80B',
        'background-white': '#F9FAFB',
        'surface-light': '#FFFFFF',
        'text-dark': '#1F2937',
        'text-muted': '#6B7280',
        'text-subtle': '#9CA3AF',
        'border-light': '#E5E7EB',
        'success-green': '#10B981',
        'warning-orange': '#F59E0B',
        'error-red': '#EF4444',
        'info-blue': '#3B82F6',
      },

      // --- Typography ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif],
        body: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'base': ['1rem', { lineHeight: '1.6' }], // 16px (default body)
        'lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px (h2)
        '5xl': ['3rem', { lineHeight: '1.1' }], // 48px (h1)
        '6xl': ['3.75rem', { lineHeight: '1.1' }], // 60px (hero h1)
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // --- Spacing (using existing defaultTheme for common values, and extending for specific design tokens) ---
      // The design spec uses a mix of specific rem values and multiples of 4px.
      // Tailwind's default spacing goes up to 96 (384px), which covers most needs.
      // I'll add specific names from 06-design for clarity, mapping to Tailwind's scale where possible.
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
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
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

      // --- Transitions (from 06-design.md Motion section) ---
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // Same as default
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
---