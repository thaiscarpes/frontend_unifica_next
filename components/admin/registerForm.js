'use client'
import { newLocation } from '@/services/fetchData'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MdAccessTime, MdAddPhotoAlternate, MdCall, MdCheck, MdClose, MdDomain, MdFax, MdInfoOutline, MdLocationOn, MdMap } from 'react-icons/md'

export default function Form() {

  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [address, setAddress] = useState('')
  const [extension, setExtension] = useState('')
  const [phone, setPhone] = useState('')
  const [startJourney, setStartJourney] = useState('')
  const [endJourney, setEndJourney] = useState('')
  const [latitude, setlatitude] = useState('')
  const [longitude, setlongitude] = useState('')
  const [submiting, setSubmiting] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = { title, image, description, address, extension, phone, startJourney, endJourney, latitude, longitude }

    setSubmiting(true)
    console.log(`Submit: ${submiting}`)
    try {
      const response = await newLocation(formData)
      response.ok ? console.log('Formulário enviado com sucesso!') : console.log('Erro ao enviar o formulário')
      setSubmiting(false)
      router.push('/admin')
    } catch (error) {
      console.error(error)
      setSubmiting(false)
    }
  }

  const size = 'lg'
  const variant = 'bordered'
  const radius = 'sm'
  const label = 'outside'
  const iconStyle = 'text-xl text-zinc-300'
  const classNames = {
    label: 'text-zinc-500 text-base',
    input: 'text-zinc-700 text-base placeholder:text-zinc-300',
    inputWrapper: 'border-1 border-zinc-200 bg-white !cursor-text',
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-6 px-4'>
      <Input
        classNames={classNames}
        type='text'
        label='Nome'
        placeholder='Informe o nome do local'
        isRequired
        size={size}
        variant={variant}
        radius={radius}
        labelPlacement={label}
        startContent={<MdDomain className={iconStyle} />}
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <Input
        classNames={classNames}
        type='text'
        label='Descrição'
        placeholder='Informe uma breve descrição do local'
        isRequired
        size={size}
        variant={variant}
        radius={radius}
        labelPlacement={label}
        startContent={<MdInfoOutline className={iconStyle} />}
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <Input
        classNames={classNames}
        type='text'
        label='Imagem'
        placeholder='Cole aqui a ID da imagem'
        isRequired
        size={size}
        variant={variant}
        radius={radius}
        labelPlacement={label}
        startContent={<MdAddPhotoAlternate className={iconStyle} />}
        value={image}
        description='Informe o código fornecido pelo banco de imagens: Ex.: kU7bTDZHLOM'
        onChange={(e) => setImage(e.target.value)} />
      <div className='flex items-center gap-6'>
        <Input
          classNames={classNames}
          type='number'
          label='Ramal'
          placeholder='0000'
          size={size}
          variant={variant}
          radius={radius}
          labelPlacement={label}
          startContent={<MdFax className={iconStyle} />}
          value={extension}
          onChange={(e) => setExtension(e.target.value)} />
        <Input
          classNames={classNames}
          type='tel'
          label='Telefone'
          placeholder='+00 (00) 0000 0000'
          size={size}
          variant={variant}
          radius={radius}
          labelPlacement={label}
          startContent={<MdCall className={iconStyle} />}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='min-w-[65%]' />
      </div>
      <Input
        classNames={classNames}
        type='text'
        label='Endereço'
        placeholder='Endereço do local, ou número da sala'
        size={size}
        variant={variant}
        radius={radius}
        labelPlacement={label}
        startContent={<MdLocationOn className={iconStyle} />}
        value={address}
        onChange={(e) => setAddress(e.target.value)} />
      <div className='flex items-center gap-6'>
        <Input
          classNames={classNames}
          type='time'
          label='Início de jornada'
          placeholder='00:00'
          isRequired
          size={size}
          variant={variant}
          radius={radius}
          labelPlacement={label}
          startContent={<MdAccessTime className={iconStyle} />}
          value={startJourney}
          onChange={(e) => setStartJourney(e.target.value)} />
        <Input
          classNames={classNames}
          type='time'
          label='Fim de jornada'
          placeholder='00:00'
          isRequired
          size={size}
          variant={variant}
          radius={radius}
          labelPlacement={label}
          startContent={<MdAccessTime className={iconStyle} />}
          value={endJourney}
          onChange={(e) => setEndJourney(e.target.value)} />
      </div>
      <div className='flex items-center gap-6'>
        <Input
          classNames={classNames}
          type='text'
          label='Latitude'
          placeholder='-00.000000'
          isRequired
          size={size}
          variant={variant}
          radius={radius}
          labelPlacement={label}
          value={latitude}
          startContent={<MdMap className={iconStyle} />}
          onChange={(e) => setlatitude(e.target.value)} />
        <Input
          classNames={classNames}
          type='text'
          label='Longitude'
          placeholder='-00.000000'
          isRequired
          size={size}
          variant={variant}
          radius={radius}
          labelPlacement={label}
          value={longitude}
          startContent={<MdMap className={iconStyle} />}
          onChange={(e) => setlongitude(e.target.value)} />
      </div>
      <div className='flex items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed bottom-0 left-0 w-full md:px-[30%]'>
        <Button
          size='lg'
          radius='sm'
          variant='flat'
          startContent={<MdClose className='text-blue-600 text-lg' />}
          className='bg-blue-100 text-blue-600 hover:bg-blue-200 transition-background w-full'
          onClick={() => { router.push('/admin') }}
        >
          Cancelar
        </Button>
        <Button
          size='lg'
          radius='sm'
          variant='flat'
          startContent={<MdCheck className='text-white text-lg' />}
          className='bg-blue-600 text-white hover:bg-blue-700 transition-background w-full'
          type='submit'
          isLoading={submiting}
          disabled={submiting}
        >
          {submiting ? 'Salvando' : 'Confirmar'}
        </Button>
      </div>
    </form>
  )
}