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
          hover: '#003B8D', // Explicit hover state from 06-design.md
          active: '#002A6B', // Explicit active state from 06-design.md
        },
        secondary: {
          DEFAULT: '#6B7280', // Secondary Gray from 06-design.md
          hover: '#5A616E', // Explicit hover state from 06-design.md
          active: '#4D535E', // Explicit active state from 06-design.md
        },
        accent: {
          DEFAULT: '#E5B80B', // Accent Gold from 06-design.md
          light: '#FFD700', // Brighter variant for highlights from 06-design.md
          dark: '#B38B00', // Deeper variant for subtle contrast from 06-design.md
        },
        background: '#F9FAFB', // Background White from 06-design.md
        surface: '#FFFFFF', // Surface Light from 06-design.md
        text: '#1F2937', // Text Dark from 06-design.md
        textMuted: '#6B7280', // Text Muted from 06-design.md
        textSubtle: '#9CA3AF', // Text Subtle from 06-design.md
        border: '#E5E7EB', // Border Light from 06-design.md
        error: '#EF4444', // Error from 06-design.md
        success: '#10B981', // Success from 06-design.md
        warning: '#F59E0B', // Warning from 06-design.md
        info: '#3B82F6', // Info from 06-design.md
        white: '#FFFFFF', // Explicit white
        black: '#000000', // Explicit black
      },

      // --- Typography ---
      fontFamily: {
        heading: ['Lora', 'Georgia', 'serif'], // Heading font family from 06-design.md
        body: ['Inter', 'system-ui', 'sans-serif'], // Body font family from 06-design.md
        mono: ['Space Mono', 'monospace'], // Mono font family from 06-design.md
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
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)', // Shadow sm from 06-design.md
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // Shadow md from 06-design.md
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // Shadow lg from 06-design.md
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', // Shadow xl from 06-design.md
        'none': 'none',
        'outline': '0 0 0 3px rgba(0, 71, 171, 0.5)', // Custom focus outline using primary blue
      },

      // --- Transitions ---
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)', // default easing from tokens.json
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)', // ease-in from tokens.json
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)', // ease-out from tokens.json
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // Re-map to default easing as per 06-design.md
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // bounce from tokens.json
      },
      transitionDuration: {
        'DEFAULT': '300ms', // normal duration from tokens.json
        'fast': '150ms', // fast duration from tokens.json
        'normal': '300ms', // normal duration from tokens.json
        'slow': '500ms', // slow duration from tokens.json
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