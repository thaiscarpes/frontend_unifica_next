'use client'
import Form from '@/components/admin/updateForm'

export default function Register({params}) {

  const id = params.id

  return(
    <main className="flex flex-col gap-8 w-full mt-[120px] py-12 mb-14 relative md:px-[30%]">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-zinc-800 text-2xl px-4">Editar local</h2>
      </div>
      <Form id={id} />
    </main>
  )
}