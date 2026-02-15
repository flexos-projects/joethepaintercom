/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)', // #0047AB
          light: '#005AC2', // Adjusted for contrast from original #0047AB
          dark: '#003B8D',  // Adjusted for contrast from original #0047AB
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // #6B7280
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // #E5B80B
        },
        background: 'var(--color-background)', // #F9FAFB
        surface: 'var(--color-surface)',     // #FFFFFF
        text: 'var(--color-text)',         // #1F2937
        textMuted: 'var(--color-text-muted)',  // #6B7280
        textSubtle: 'var(--color-text-subtle)', // #9CA3AF
        border: 'var(--color-border)',       // #E5E7EB

        // Semantic Colors
        success: 'var(--color-success)', // #10B981
        warning: 'var(--color-warning)', // #F59E0B
        error: 'var(--color-error)',   // #EF4444
        info: 'var(--color-info)',     // #3B82F6

        // Explicit white/black for utility
        white: '#FFFFFF',
        black: '#000000',
      },

      // --- Typography ---
      fontFamily: {
        heading: ['var(--font-heading)', ...defaultTheme.fontFamily.serif],
        body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        'xs': ['var(--text-xs)', { lineHeight: 'var(--leading-xs)' }],
        'sm': ['var(--text-sm)', { lineHeight: 'var(--leading-sm)' }],
        'base': ['var(--text-base)', { lineHeight: 'var(--leading-base)' }],
        'lg': ['var(--text-lg)', { lineHeight: 'var(--leading-lg)' }],
        'xl': ['var(--text-xl)', { lineHeight: 'var(--leading-xl)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--leading-2xl)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--leading-3xl)' }],
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--leading-4xl)' }],
        '5xl': ['var(--text-5xl)', { lineHeight: 'var(--leading-5xl)' }],
        '6xl': ['var(--text-6xl)', { lineHeight: 'var(--leading-6xl)' }],
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },

      // --- Spacing ---
      spacing: {
        'px': 'var(--spacing-px)',
        '0.5': 'var(--spacing-0-5)',
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '8': 'var(--spacing-8)',
        '10': 'var(--spacing-10)',
        '12': 'var(--spacing-12)',
        '16': 'var(--spacing-16)',
        '20': 'var(--spacing-20)',
        '24': 'var(--spacing-24)',
      },

      // --- Border Radius ---
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },

      // --- Shadows ---
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'outline': '0 0 0 3px rgba(0, 71, 171, 0.2)', // Custom focus outline using primary color
      },

      // --- Transitions ---
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform',
        'colors': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        'all': 'all',
      },
      transitionTimingFunction: {
        'default': 'var(--easing-default)',
        'in': 'var(--easing-in)',
        'out': 'var(--easing-out)',
        'in-out': 'var(--easing-in-out)',
        'bounce': 'var(--easing-bounce)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },

      // --- Keyframes and Animations ---
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 3s linear infinite',
        'fade-in': 'fade-in var(--transition-normal) var(--easing-out) forwards',
        'slide-in-right': 'slide-in-right var(--transition-normal) var(--easing-out) forwards',
        'slide-out-right': 'slide-out-right var(--transition-normal) var(--easing-in) forwards',
      },
    },
  },
  plugins: [],
};