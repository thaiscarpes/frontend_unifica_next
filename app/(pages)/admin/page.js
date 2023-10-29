import Footer from '@/components/admin/footer'
import LocationList from '@/components/admin/locationList'

export const metadata = {
  title: 'Unifica - Admin',
}

export default async function Admin() {

  return (
    <main className='flex flex-col gap-8 w-full mt-[120px] py-12 mb-14 relativev md:px-[30%]'>

      <div className='flex flex-col gap-1'>
        <h2 className='font-semibold text-zinc-800 text-2xl px-4'>Locais</h2>
      </div>

      <LocationList />

      <Footer />

    </main>
  )
}