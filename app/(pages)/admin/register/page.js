'use client'
import RegisterForm from '@/components/admin/registerForm'

export default function Register() {
  return(
    <main className="flex flex-col gap-8 w-full mt-[120px] py-12 mb-14 relative md:px-[30%]">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-zinc-800 text-2xl px-4">Cadastrar um local</h2>
      </div>
      <RegisterForm />
    </main>
  )
}