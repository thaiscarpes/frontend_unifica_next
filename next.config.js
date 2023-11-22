/** @type {import('next').NextConfig} */

//IMPORTA O NEXT-PWA PARA TRANSFORMAR A APLICAÇÃO EM UM PWA
const withPWA = require("next-pwa");

const nextConfig = {
  //DEFINIÇÃO DAS OPÇOES DO PWA
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  images: {
    //DEFINE AS ORIGENS DE FORA DA APLICAÇÃO ONDE SERÃO CHAMADAS IMAGENS EXTERNAS
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: 'frontend-unifica-next.vercel.app' }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
