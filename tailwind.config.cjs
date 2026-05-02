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
        // Cores base (Dark Mode)
        'bgPrimary': '#1A1A1A',     // Fundo escuro
        'bgSecondary': '#2A2A2A',  // Cartões e elementos
        'borderDark': '#444444',   // Bordas e linhas de separação
        'textPrimary': '#FFFFFF',  // Texto principal
        'textSecondary': '#AAAAAA',// Texto secundário/parágrafo
        
        // Cores de Destaque
        'primary': '#4F33A9',      // Base do gradiente (Roxo Escuro)
        'secondary': '#8A4FFF',    // Fim do gradiente (Roxo Claro)
        'accent': '#6EEB83',       // Verde Neon para CTA (Login/Comece Agora)
        'purpleAccent': '#9747FF', // Roxo claro (Botões Explorar)
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}