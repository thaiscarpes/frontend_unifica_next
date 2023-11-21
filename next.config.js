/** @type {import('next').NextConfig} */

//IMPORTA O NEXT-PWA PARA TRANSFORMAR A APLICAÇÃO EM UM PWA
const withPWA = require('next-pwa')

const nextConfig = {
  //DEFINIÇÃO DAS OPÇOES DO PWA
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true
  }),
  images: {
    //DEFINE AS ORIGENS DE FORA DA APLICAÇÃO ONDE SERÃO CHAMADAS IMAGENS EXTERNAS
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
