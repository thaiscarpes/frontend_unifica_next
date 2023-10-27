import Header from '@/components/header'

export default function Template({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}