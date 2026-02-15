```javascript
/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

// Design tokens from tokens.json
const colors = {
  primary: '#0047AB',
  secondary: '#6B7280',
  accent: '#E5B80B',
  background: '#F9FAFB',
  surface: '#FFFFFF',
  text: '#1F2937',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  error: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
  textSubtle: '#9CA3AF',
  info: '#3B82F6'
};

const typography = {
  fontFamily: {
    heading: ['Lora', 'Georgia', 'serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['Space Mono', 'monospace']
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
    base: ['1rem', { lineHeight: '1.5rem' }], // 16px (default body)
    lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px (h2)
    '5xl': ['3rem', { lineHeight: '1' }], // 48px (h1)
    '6xl': ['3.75rem', { lineHeight: '1' }] // 60px (hero h1)
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
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
    '6xl': '1.1'
  }
};

const spacing = {
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
};

const borderRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  full: '9999px',
};

const boxShadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
};

const animationDuration = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms'
};

const animationEasing = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
};


export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        ...colors, // Spread the defined color tokens
      },

      // --- Typography ---
      fontFamily: {
        heading: typography.fontFamily.heading,
        body: typography.fontFamily.body,
        mono: typography.fontFamily.mono,
      },
      fontSize: {
        ...typography.fontSize,
      },
      fontWeight: {
        ...typography.fontWeight,
      },
      lineHeight: {
        ...typography.lineHeight,
      },

      // --- Spacing (based on 4px grid) ---
      spacing: {
        ...spacing, // Spread the defined spacing tokens
        // Add more specific spacing if needed beyond the base scale
        '14': '3.5rem', // 56px
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

      // --- Border Radius ---
      borderRadius: {
        ...borderRadius, // Spread the defined border radius tokens
      },

      // --- Shadows ---
      boxShadow: {
        ...boxShadow, // Spread the defined shadow tokens
        'outline': '0 0 0 3px rgba(0, 71, 171, 0.5)', // Custom focus outline using primary blue
      },

      // --- Transitions ---
      transitionProperty: {
        'all': 'all', // Ensure 'all' is available for general transitions
        'height': 'height',
        'spacing': 'margin, padding',
        // Add specific properties for motion-safe/reduce
        'transform': 'transform',
        'colors': 'color, background-color, border-color, text-decoration-color',
      },
      transitionTimingFunction: {
        'ease-in-out': animationEasing.default,
      },
      transitionDuration: {
        'DEFAULT': animationDuration.normal,
        '150': animationDuration.fast,
        '200': '200ms', // Add 200ms as it's common
        '300': animationDuration.normal,
        '500': animationDuration.slow,
        '700': '700ms',
        '1000': '1000ms',
      },

      // --- Animation Keyframes & Definitions ---
      // This is where custom animations from 'Animations & Interactions' reference would go
      animation: {
        'spin': 'spin 1s linear infinite', // Tailwind's default spin
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'shake': 'shake 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' }
        }
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'), // Ensure forms plugin is included for better default form styles
  ],
};
```