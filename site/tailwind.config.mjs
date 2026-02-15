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
          light: '#3366CC', // Derived lighter variant for accents or hover states
          dark: '#003B8D', // Derived darker variant for contrast or backgrounds
        },
        secondary: {
          DEFAULT: '#6B7280', // Secondary Gray
          light: '#9CA3AF', // Derived lighter variant of secondary gray
          dark: '#4B5563', // Derived darker variant of secondary gray
        },
        accent: {
          DEFAULT: '#E5B80B', // Accent Gold
          light: '#FFD700', // Brighter variant for highlights
          dark: '#B38B00', // Deeper variant for subtle contrast
        },
        background: '#F9FAFB', // Background White
        surface: '#FFFFFF', // Surface Light
        text: '#1F2937', // Text Dark
        textMuted: '#6B7280', // Text Muted
        textSubtle: '#9CA3AF', // Text Subtle
        border: '#E5E7EB', // Border Light

        // Semantic feedback colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },

      // --- Typography ---
      fontFamily: {
        heading: ['"Lora"', ...defaultTheme.fontFamily.serif],
        body: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }], // 12px | 1.5
        'sm': ['0.875rem', { lineHeight: '1.5' }], // 14px | 1.5
        'base': ['1rem', { lineHeight: '1.6' }], // 16px (default body) | 1.6
        'lg': ['1.125rem', { lineHeight: '1.6' }], // 18px | 1.6
        'xl': ['1.25rem', { lineHeight: '1.4' }], // 20px | 1.4
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // 24px (H4 mobile) | 1.3
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px (H3 mobile, H4 desktop) | 1.3
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px (H2 mobile, H3 desktop) | 1.2
        '5xl': ['3rem', { lineHeight: '1.1' }], // 48px (H1 mobile, H2 desktop) | 1.1
        '6xl': ['3.75rem', { lineHeight: '1.1' }], // 60px (Hero H1 desktop) | 1.1
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
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // Default easing
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        'DEFAULT': '300ms', // normal
        '150': '150ms', // fast
        '500': '500ms', // slow
      },

      // --- Keyframes and Animations ---
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out forwards',
        'slide-in-up': 'slideInUp 300ms ease-out forwards', // Changed to normal (300ms)
        'scale-in': 'scaleIn 150ms ease-out forwards', // Changed to fast (150ms)
      },

      // --- Breakpoints ---
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