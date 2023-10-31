import Provider from '@/components/provider'
import { Lato } from 'next/font/google'
import '@/styles/globals.css'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Unifica',
  description: 'Unificando os locais do Centro Unificado de Fronteira',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </head>
      <body className={`text-zinc-500 ${lato.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
