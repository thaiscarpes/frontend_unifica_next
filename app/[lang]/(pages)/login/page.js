import { LoginHeader } from '@/components/header'
import LoginForm from '@/components/loginForm'
import { getDictionaryUseServer } from '../../../../dictionaries/default-dictionaries-use-server'

export default function Login({params}) {

    const dict = getDictionaryUseServer(params.lang)

    return (
        <>
            <LoginHeader language={dict} />
            <main className="flex flex-col gap-8 w-full mt-[120px] py-12 mb-14 relativev md:px-[30%]">
                <div className="flex flex-col">
                    <h2 className="font-semibold text-zinc-800 text-2xl px-4">{dict.login.adminAccess}</h2>
                    <p className="text-base text-zinc-400 px-4">{dict.login.doLogintoManageLocations}</p>
                </div>
                <LoginForm language={dict} />
            </main>
        </>
    )
}