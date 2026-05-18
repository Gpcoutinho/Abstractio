// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:   ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono:   ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        'bgPrimary':     '#0F172A',
        'bgSecondary':   '#1E293B',
        'borderDark':    '#334155',
        'textPrimary':   '#F8FAFC',
        'textSecondary': '#94A3B8',
        'textBody':      '#CBD5E1',
        'primary':       '#7C3AED',
        'secondary':     '#A78BFA',
        'accent':        '#06B6D4',
        'purpleAccent':  '#9F7AEA',
        'success':       '#10B981',
        'danger':        '#FB7185',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'pop-in': {
          '0%':   { opacity: '0', transform: 'scale(0.82) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'frame-shimmer': {
          '0%, 100%': { filter: 'brightness(0.8) saturate(0.9)' },
          '50%':      { filter: 'brightness(1.5) saturate(1.4)' },
        },
        'frame-wave': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'frame-pulse': {
          '0%, 100%': { opacity: '0.45' },
          '50%':      { opacity: '1' },
        },
        'frame-spin': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float:                 'float 6s ease-in-out infinite',
        'pop-in':              'pop-in 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'fade-in':             'fade-in 0.2s ease-out forwards',
        'frame-shimmer-slow':  'frame-shimmer 2s ease-in-out infinite',
        'frame-shimmer-fast':  'frame-shimmer 1s ease-in-out infinite',
        'frame-wave':          'frame-wave 3s ease-in-out infinite',
        'frame-pulse':         'frame-pulse 2.5s ease-in-out infinite',
        'frame-spin':          'frame-spin 4s linear infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after':   { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}