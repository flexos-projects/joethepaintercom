```javascript
/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        // Semantic colors referencing CSS variables defined in src/styles/tokens.css
        primary: {
          DEFAULT: 'var(--color-primary-blue)',
          light: 'var(--color-primary-blue-light)', // Derived for hover states
          dark: 'var(--color-primary-blue-dark)',   // Derived for active states
        },
        // 'Secondary Gray' from design spec is mapped to Tailwind's neutral.500 or text-muted
        accent: {
          DEFAULT: 'var(--color-accent-gold)',
          light: 'var(--color-accent-gold-light)', // Derived for hover states
          dark: 'var(--color-accent-gold-dark)',   // Derived for active states
        },
        neutral: {
          50: 'var(--color-background-white)',
          100: 'var(--color-surface-light)',
          200: 'var(--color-border-light)',
          300: 'var(--color-text-subtle)',
          400: 'var(--color-text-muted)',
          500: 'var(--color-secondary-gray)', // Direct mapping for Secondary Gray
          600: 'var(--color-text)',
          700: 'var(--color-text)',
          800: 'var(--color-text)',
          900: 'var(--color-text)',
        },
        white: 'var(--color-surface-light)', // Surface Light
        black: '#000000', // Pure black for specific high-contrast needs, not general text
        
        // Semantic feedback colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
      },

      // --- Typography ---
      fontFamily: {
        heading: ['Lora', 'Georgia', 'serif'], // Elegant serif for headings
        body: ['Inter', 'system-ui', 'sans-serif'], // Modern sans-serif for body
        mono: ['Space Mono', 'monospace'], // For code snippets or specific data displays
      },
      fontSize: {
        'xs': ['var(--font-size-xs)', { lineHeight: 'var(--line-height-xs)' }],
        'sm': ['var(--font-size-sm)', { lineHeight: 'var(--line-height-sm)' }],
        'base': ['var(--font-size-base)', { lineHeight: 'var(--line-height-base)' }],
        'lg': ['var(--font-size-lg)', { lineHeight: 'var(--line-height-lg)' }],
        'xl': ['var(--font-size-xl)', { lineHeight: 'var(--line-height-xl)' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-2xl)' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-3xl)' }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-4xl)' }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: 'var(--line-height-5xl)' }],
        '6xl': ['var(--font-size-6xl)', { lineHeight: 'var(--line-height-6xl)' }],
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },

      // --- Spacing (based on 4px grid) ---
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
      },

      // --- Transitions ---
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'color, background-color, border-color, text-decoration-color', // Include default Tailwind colors
        'opacity': 'opacity',
        'transform': 'transform',
        'shadow': 'box-shadow',
        'all': 'all', // Ensure 'transition-all' works as expected
      },
      transitionTimingFunction: {
        'DEFAULT': 'var(--ease-default)',
        'in': 'var(--ease-in)',
        'out': 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)', // This will be the default for transition-all
        'bounce': 'var(--ease-bounce)',
      },
      transitionDuration: {
        'DEFAULT': 'var(--duration-normal)',
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
      },
    },
  },
  plugins: [],
};
```