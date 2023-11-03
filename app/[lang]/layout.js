import Provider from '@/components/provider'
import '@/styles/globals.css'
import { Lato } from 'next/font/google'
import { i18n } from '../../config/i18n.config'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }))
  return languages
}

export const metadata = {
  title: 'Unifica',
  description: 'Unificando os locais do Centro Unificado de Fronteira',
}

export default async function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </head>
      <body className={`text-zinc-500 ${lato.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
