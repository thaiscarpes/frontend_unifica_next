import Footer from '@/components/admin/footer'
import LocationList from '@/components/admin/locationList'
import { AdminHeader } from '@/components/header'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Unifica - Admin',
}

export default async function Admin() {

  //VERIFICA SE TEM UMA SESSÃO INICIADA
  const session = await getServerSession(authOptions)
  //VERIFICA SE O USUÁRIO ESTA AUTORIZADO
  if (!session) redirect("/login?callbackUrl=/admin")

  return (
    <main className='flex flex-col gap-8 w-full py-12 mb-14 relativev md:px-[30%]'>

      <AdminHeader user={session?.user?.name} />

      <div className='bg-white text-zinc-800 px-5 pt-8 pb-0 text-lg font-bold'>
        <span className='text-base font-normal text-zinc-500'>Olá,</span>
        <h2 className='text-xl'>Admin</h2>
      </div>


      <LocationList />

      <Footer />

    </main>
  )
}