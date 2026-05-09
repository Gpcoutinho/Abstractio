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
        'bgPrimary':     '#1A1A1A',
        'bgSecondary':   '#2A2A2A',
        'borderDark':    '#444444',
        'textPrimary':   '#FFFFFF',
        'textSecondary': '#AAAAAA',
        'primary':       '#4F33A9',
        'secondary':     '#8A4FFF',
        'accent':        '#6EEB83',
        'purpleAccent':  '#9747FF',
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