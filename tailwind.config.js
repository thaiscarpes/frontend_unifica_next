//IMPORTA AS CONFIGURAÇÕES DO NEXT-UI, CSS, ANIMAÇÕES
const { nextui } = require('@nextui-org/react')


/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      //IMPORTA POR AQUI O ÍCONE DOS PINS NO MAPA PARA SER USADO NO COMPONENTE
      backgroundImage: {
        'pin': "url('/public/pin.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
