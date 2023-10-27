import { LoginHeader } from '@/components/header'

export default function Template({ children }) {
    return (
        <>
            <LoginHeader />
            {children}
        </>
    )
}