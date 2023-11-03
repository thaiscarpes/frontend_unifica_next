'use client'
import RegisterForm from '@/components/admin/registerForm'
import { AdminHeader } from '@/components/header'

export default function Register() {
  return (
    <>
      <AdminHeader />
      <main className="flex flex-col gap-8 w-full py-12 mb-14 relativev md:px-[30%]">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-zinc-800 text-2xl px-4 mt-[35px]">Cadastrar um local</h2>
        </div>
        <RegisterForm />
      </main>
    </>
  )
}