import { MetadataRoute } from 'next'
 
export default function manifest() {
  return {
    name: 'Unifica',
    short_name: 'Unifica',
    description: 'Ajudando pessoas a encontrar os principais locais do CUF',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}