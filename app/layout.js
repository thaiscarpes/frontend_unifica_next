import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Unifica',
  description: 'Unificando os locais do Centro Unificado de Fronteira',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </head>
      <body className={`bg-[#F8FBFF] text-zinc-500 ${lato.className}`}>
        {children}
      </body>
    </html>
  )
}
