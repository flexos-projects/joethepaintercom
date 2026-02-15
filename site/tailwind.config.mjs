/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        // Primary Palette (from 06-design.md)
        'primary-blue': '#0047AB',
        'secondary-gray': '#6B7280',
        'accent-gold': '#E5B80B',

        // Neutral Palette (from 06-design.md)
        'background-white': '#F9FAFB',
        'surface-light': '#FFFFFF',
        'text-dark': '#1F2937',
        'text-muted': '#6B7280',
        'text-subtle': '#9CA3AF',
        'border-light': '#E5E7EB',

        // Semantic Colors (from 06-design.md)
        'success-color': '#10B981',
        'warning-color': '#F59E0B',
        'error-color': '#EF4444',
        'info-color': '#3B82F6',

        // Derived Interaction Colors (from 06-design.md Component Styles -> Buttons)
        'primary-blue-hover': '#003B8D',
        'primary-blue-active': '#002A6B',
        'secondary-gray-hover': '#5A616E',
        'secondary-gray-active': '#4D535E',
      },

      // --- Typography ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif], // From 06-design.md
        body: ['"Inter"', ...defaultTheme.fontFamily.sans], // From 06-design.md
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono], // From 06-design.md
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }], // From 06-design.md (12px, 1.5)
        'sm': ['0.875rem', { lineHeight: '1.5' }], // From 06-design.md (14px, 1.5)
        'base': ['1rem', { lineHeight: '1.6' }], // From 06-design.md (16px, 1.6)
        'lg': ['1.125rem', { lineHeight: '1.6' }], // From 06-design.md (18px, 1.6)
        'xl': ['1.25rem', { lineHeight: '1.4' }], // From 06-design.md (20px, 1.4)
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // From 06-design.md (24px, 1.3)
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // From 06-design.md (30px, 1.3)
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // From 06-design.md (36px, 1.2)
        '5xl': ['3rem', { lineHeight: '1.1' }], // From 06-design.md (48px, 1.1)
        '6xl': ['3.75rem', { lineHeight: '1.1' }], // From 06-design.md (60px, 1.1)
      },
      fontWeight: {
        normal: '400', // From 06-design.md
        medium: '500', // From 06-design.md
        semibold: '600', // From 06-design.md
        bold: '700', // From 06-design.md
      },

      // --- Spacing (based on 4px grid) --- (from 06-design.md)
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

      // --- Border Radius --- (from 06-design.md)
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        'full': '9999px',
      },

      // --- Shadows --- (from 06-design.md)
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },

      // --- Transitions --- (from 06-design.md)
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)', // ease-in-out
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionProperty: {
        'all': 'all',
        'colors': 'background-color, border-color, color, fill, stroke',
        'opacity': 'opacity',
        'transform': 'transform',
        'shadow': 'box-shadow',
      },

      // --- Animation Keyframes --- (Derived from Animation & Interaction patterns)
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutToRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in-right': 'slideInFromRight 0.3s ease-out',
        'slide-out-right': 'slideOutToRight 0.3s ease-in',
        'scale-in': 'scaleIn 0.2s ease-out',
        'shake': 'shake 0.5s ease-in-out',
      },

      // --- Breakpoints --- (from 06-design.md Layout System)
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
    require('@tailwindcss/typography'), // For blog content, as specified
    require('@tailwindcss/forms'), // For better form element styling, as specified
  ],
};