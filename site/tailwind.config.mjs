/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors from 06-design.md and tokens.json ---
      colors: {
        primary: '#0047AB', // Primary Blue
        secondary: '#6B7280', // Secondary Gray
        accent: '#E5B80B', // Accent Gold
        background: '#F9FAFB', // Background White
        surface: '#FFFFFF', // Surface Light
        text: '#1F2937', // Text Dark
        textMuted: '#6B7280', // Text Muted
        border: '#E5E7EB', // Border Light
        error: '#EF4444', // Error
        success: '#10B981', // Success
        warning: '#F59E0B', // Warning
        textSubtle: '#9CA3AF', // Text Subtle
        info: '#3B82F6', // Info
      },

      // --- Typography from 06-design.md and tokens.json ---
      fontFamily: {
        heading: ['Lora', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.5' }], // 14px
        base: ['1rem', { lineHeight: '1.6' }], // 16px (default body)
        lg: ['1.125rem', { lineHeight: '1.6' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.4' }], // 20px
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
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
        xs: '1.5',
        sm: '1.5',
        base: '1.6',
        lg: '1.6',
        xl: '1.4',
        '2xl': '1.3',
        '3xl': '1.3',
        '4xl': '1.2',
        '5xl': '1.1',
        '6xl': '1.1',
      },

      // --- Spacing from 06-design.md and 07-technical.md ---
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

      // --- Border Radius from 06-design.md and tokens.json ---
      borderRadius: {
        none: '0',
        sm: '0.125rem', // 2px
        md: '0.375rem', // 6px
        lg: '0.5rem', // 8px
        xl: '0.75rem', // 12px
        '2xl': '1rem', // 16px
        full: '9999px',
      },

      // --- Shadows from 06-design.md and tokens.json ---
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        outline: '0 0 0 3px rgba(0, 71, 171, 0.5)', // Custom focus outline using primary blue
      },

      // --- Transitions from 06-design.md and tokens.json ---
      transitionProperty: {
        'all': 'all', // Ensure 'all' is available for general transitions
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform',
        'colors': 'color, background-color, border-color, text-decoration-color',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // Default easing from tokens.json
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        'DEFAULT': '300ms', // normal
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },

      // --- Animation Keyframes & Definitions from Animations & Interactions reference ---
      animation: {
        'spin': 'spin 1s linear infinite', // Tailwind's default spin
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
      },

      // --- Breakpoints from 06-design.md ---
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
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'), // Ensure forms plugin is included for better default form styles
  ],
};