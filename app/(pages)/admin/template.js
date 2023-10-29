import { AdminHeader } from '@/components/header'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Template({ children }) {

    const session = await getServerSession(authOptions)
    if (!session) redirect("/login?callbackUrl=/admin")

    return (
        <>
            <AdminHeader user={session?.user?.name} />
            {children}
        </>
    )
}