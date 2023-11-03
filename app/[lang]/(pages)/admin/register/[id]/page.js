'use client'
import Form from '@/components/admin/updateForm'
import { AdminHeader } from '@/components/header'

export default function Register({ params }) {

  const id = params.id

  return (
    <main className="flex flex-col gap-8 w-full py-12 mb-14 relativev md:px-[30%]">
      <AdminHeader />
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-zinc-800 text-2xl px-4 mt-[35px]">Editar local</h2>
      </div>
      <Form id={id} />
    </main>
  )
}