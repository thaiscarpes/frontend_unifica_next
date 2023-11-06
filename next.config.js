/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true
  }),
  images: {
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
