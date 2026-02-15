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
          light: '#3B82F6', // Lighter variant for accents or hover states, derived from design spec info color
          dark: '#003B8D', // Darker variant for contrast or backgrounds
        },
        secondary: {
          DEFAULT: '#6B7280', // Secondary Gray
          light: '#9CA3AF', // Lighter variant for subtle text, from textSubtle
          dark: '#4B5563', // Darker variant for contrast
        },
        accent: {
          DEFAULT: '#E5B80B', // Accent Gold
          light: '#F5BE2D', // Brighter variant for highlights
          dark: '#B38B00', // Deeper variant for subtle contrast
        },
        background: '#F9FAFB', // Background White
        surface: '#FFFFFF', // Surface Light
        text: '#1F2937', // Text Dark
        textMuted: '#6B7280', // Text Muted
        textSubtle: '#9CA3AF', // Text Subtle
        border: '#E5E7EB', // Border Light
        error: '#EF4444', // Error
        success: '#10B981', // Success
        warning: '#F59E0B', // Warning
        info: '#3B82F6', // Info
      },

      // --- Typography ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif], // Elegant serif for headings
        body: ['"Inter"', ...defaultTheme.fontFamily.sans], // Modern sans-serif for body
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono], // For code snippets
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

      // --- Transitions ---
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
      // Adding common transition properties to extend
      transitionProperty: {
        'all': 'all',
        'colors': 'background-color, border-color, color, fill, stroke',
        'opacity': 'opacity',
        'transform': 'transform',
        'shadow': 'box-shadow',
      },

      // --- Animation Keyframes ---
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For blog content, if implemented
    require('@tailwindcss/forms'), // Better form element styling
    // You might want to add a focus-visible plugin if not using Tailwind's default outline
    // For now, relying on Tailwind's default focus styles + custom ring utilities
  ],
};
---