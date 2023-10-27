import LoginForm from '@/components/loginForm'

export default function Login() {
    return (
        <main className="flex flex-col gap-8 w-full mt-[120px] py-12 mb-14 relativev md:px-[30%]">
            <div className="flex flex-col">
                <h2 className="font-semibold text-zinc-800 text-2xl px-4">Acesso administrativo</h2>
                <p className="text-base text-zinc-400 px-4">Faça login para gerenciar os locais.</p>
            </div>
            <LoginForm />
        </main>
    )
}