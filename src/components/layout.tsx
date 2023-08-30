import { ReactNode } from "react"
import { Lato } from "next/font/google"

const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin']
})

interface layoutProps {
    children: ReactNode
}

export default function Layout({children}:layoutProps) {
    return(
        <div className={lato.className}>
            {children}
        </div>
    )
} 