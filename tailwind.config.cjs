// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgPrimary':     '#0F172A',
        'bgSecondary':   '#1E293B',
        'borderDark':    '#334155',
        'textPrimary':   '#F8FAFC',
        'textSecondary': '#94A3B8',
        'primary':       '#7C3AED',
        'secondary':     '#A78BFA',
        'accent':        '#06B6D4',
        'purpleAccent':  '#9F7AEA',
        'success':       '#10B981',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}