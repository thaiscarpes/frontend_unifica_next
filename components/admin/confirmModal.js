import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { MdArrowBack, MdCheck } from 'react-icons/md'

export default function ConfirmMessage() {

  const router = useRouter()

  return (
    <main className='flex flex-col gap-6 px-6 h-full min-h-[450px] justify-end'>
      <div className="flex flex-col gap-2 flex-1 my-12 leading-tight">
        <div className='flex items-center gap-2 pb-3'>
          <MdCheck className='text-3xl text-green-500' />
          <h3 className='text-xl text-green-500'>Cadastro realizado com sucesso!</h3>
        </div>
        <p>Parabéns!</p>
        <p>o novo local agora aparerá no mapa e poderá ser buscado.</p>
      </div>
      <div className='flex items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed bottom-0 left-0 w-full' >
        <Button 
          size='lg'
          radius='sm'
          variant='flat'
          startContent={<MdArrowBack className='text-white text-lg'/>}
          className='bg-blue-600 text-white hover:bg-blue-700 transition-background w-full'
          onClick={() => router.push('/admin')}
        >
        Voltar para a listagem
        </Button>
      </div>
    </main>
  )
}
