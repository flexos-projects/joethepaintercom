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
          hover: '#003B8D', // Explicit hover state from design.md
          active: '#002A6B', // Explicit active state from design.md
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // #6B7280
          hover: '#5A616E', // Explicit hover state from design.md
          active: '#4D535E', // Explicit active state from design.md
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // #E5B80B
          light: '#FFD700', // Brighter variant for highlights
          dark: '#B38B00', // Deeper variant for subtle contrast
        },
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        textMuted: 'var(--color-text-muted)',
        textSubtle: 'var(--color-text-subtle)',
        border: 'var(--color-border)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
        white: '#FFFFFF', // Explicit white
        black: '#000000', // Explicit black
      },

      // --- Typography ---
      fontFamily: {
        heading: ['var(--font-family-heading)', ...defaultTheme.fontFamily.serif],
        body: ['var(--font-family-body)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-family-mono)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },
      lineHeight: {
        'tight': 'var(--line-height-tight)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
      },

      // --- Spacing (based on 4px grid) ---
      spacing: {
        'px': 'var(--spacing-px)',
        '0-5': 'var(--spacing-0-5)',
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
        'none': 'var(--border-radius-none)',
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'xl': 'var(--border-radius-xl)',
        '2xl': 'var(--border-radius-2xl)',
        'full': 'var(--border-radius-full)',
      },

      // --- Shadows ---
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // Default Tailwind 2xl
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', // Default Tailwind inner
        'none': 'none',
        'outline': '0 0 0 3px rgba(0, 71, 171, 0.5)', // Custom focus outline using primary blue
      },

      // --- Transitions ---
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'DEFAULT': 'var(--easing-default)',
        'ease-in': 'var(--easing-in)',
        'ease-out': 'var(--easing-out)',
        'ease-in-out': 'var(--easing-default)', // Re-map to default easing
        'bounce': 'var(--easing-bounce)',
      },
      transitionDuration: {
        'DEFAULT': 'var(--transition-normal)',
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
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