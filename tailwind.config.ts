/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'osas-dark': '#2E6E5E', // O Verde Escuro dos botões e textos
        'osas-light': '#C4D600', // O Verde Limão do Banner principal
        'osas-bg': '#F8F9FA', // Fundo cinza bem clarinho
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}