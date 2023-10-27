import { AdminHeader } from '@/components/header'

export default function Template({ children }) {
    return (
        <>
            <AdminHeader />
            {children}
        </>
    )
}