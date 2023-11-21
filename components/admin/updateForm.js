'use client'
import { editLocation, fetchLocation } from '@/services/fetchData'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, useDisclosure } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdAccessTime, MdAddPhotoAlternate, MdArrowBack, MdCall, MdCheck, MdDelete, MdDomain, MdFax, MdInfoOutline, MdLocationOn, MdMap, MdSave } from 'react-icons/md'

export default function Form({ id }) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const locationId = id
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [address, setAddress] = useState('')
  const [extension, setExtension] = useState('')
  const [phone, setPhone] = useState('')
  const [startJourney, setStartJourney] = useState('')
  const [endJourney, setEndJourney] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [submiting, setSubmiting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // FUNÇÃO PARA ATUALIZAR OS DADOS
  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchLocation(id)
      if (response) {
        setTitle(response[0].title)
        setDescription(response[0].description)
        setImage(response[0].image)
        setAddress(response[0].address)
        setExtension(response[0].extension)
        setPhone(response[0].phone)
        setStartJourney(response[0].startJourney)
        setEndJourney(response[0].endJourney)
        setLatitude(response[0].pointer.coordinates[1])
        setLongitude(response[0].pointer.coordinates[0])
      }
    }
    fetchDataAsync()
    setIsLoading(false)
  }, [])

  const handleDelete = async () => {
    setSubmiting(true)
    console.log(locationId)
    try {
      const response = await fetch(`/api/locations/${id}`, {
        method: 'DELETE',
      })
      response.ok ? console.log('Local removido com sucesso!') : console.log('Erro ao remover o local')
      setSubmiting(false)
      router.push('/admin')
    } catch (error) {
      console.error(error)
      setSubmiting(false)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = { title, image, description, address, extension, phone, startJourney, endJourney, latitude, longitude }
    setSubmiting(true)
    console.log(`Submit: ${submiting}`)
    try {
      const response = await editLocation(id, formData)
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

    <>
      {/* MODAL DE REMOVER */}
      <Modal
        isOpen={isOpen}
        placement='bottom'
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Remover Local</ModalHeader>
              <ModalBody className='py-4' >
                <p>
                  Tem certeza que deseja remover este local?
                </p>
                <p className='text-zinc-400'>
                  Não será possível recuperá-lo após a exclusão.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className='w-full'
                  size='lg'
                  radius='sm'
                >
                  Cancelar
                </Button>
                <Button
                  size='lg'
                  radius='sm'
                  variant='flat'
                  startContent={<MdCheck className='text-white text-lg' />}
                  className='bg-blue-600 text-white hover:bg-blue-700 transition-background w-full'
                  onPress={handleDelete}
                  isLoading={submiting}
                  disabled={submiting}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* FORMULÁRIO DE EDIÇÃO */}
      {isLoading ?
        (
          <main className="flex justify-center items-center absolute top-1/2 left-1/2 mt-24">
            <Spinner size='lg' />
          </main>
        ) : (
          <form onSubmit={onSubmit} className='flex flex-col gap-6 px-4'>
            <div className='flex items-end gap-6'>
              <Input
                classNames={classNames}
                type='text'
                label='Nome'
                placeholder='Informe o nome do local'
                name='title'
                size={size}
                variant={variant}
                radius={radius}
                value={title}
                labelPlacement={label}
                startContent={<MdDomain className={iconStyle} />}
                onChange={(e) => setTitle(e.target.value)} />
              <Button
                size='lg'
                radius='sm'
                variant='flat'
                color='danger'
                isIconOnly
                startContent={<MdDelete className='text-red-500 text-xl group' />}
                className='bg-red-100 hover:bg-red-200 hover:text-white transition-background w-max'
                // onPress={onOpen}
                onClick={onOpen}
              />
            </div>
            <Input
              classNames={classNames}
              type='text'
              label='Descrição'
              placeholder='Informe uma breve descrição do local'
              name='description'
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
              name='image'
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
                name='extension'
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
                name='phone'
                size={size}
                variant={variant}
                radius={radius}
                labelPlacement={label}
                startContent={<MdCall className={iconStyle} />}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='min-w-[60%]' />
            </div>
            <Input
              classNames={classNames}
              type='text'
              label='Endereço'
              placeholder='Endereço do local, ou número da sala'
              name='address'
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
                name='startJourney'
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
                name='endJourney'
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
                label='latitude'
                placeholder='-00.000000'
                name='latitude'
                size={size}
                variant={variant}
                radius={radius}
                labelPlacement={label}
                value={latitude}
                startContent={<MdMap className={iconStyle} />}
                onChange={(e) => setLatitude(e.target.value)} />
              <Input
                classNames={classNames}
                type='text'
                label='Longitude'
                placeholder='-00.000000'
                name='longitude'
                size={size}
                variant={variant}
                radius={radius}
                labelPlacement={label}
                value={longitude}
                startContent={<MdMap className={iconStyle} />}
                onChange={(e) => setLongitude(e.target.value)} />
            </div>
            <div className='flex items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed bottom-0 left-0 w-full md:px-[30%]' >
              <Button
                size='lg'
                radius='sm'
                variant='flat'
                startContent={<MdArrowBack className='text-blue-600 text-lg' />}
                className='bg-blue-100 text-blue-600 hover:bg-blue-200 transition-background w-full'
                onClick={() => { router.push('/admin') }}
              >
                Voltar
              </Button>
              <Button
                size='lg'
                radius='sm'
                variant='flat'
                startContent={<MdSave className='text-white text-lg' />}
                className='bg-blue-600 text-white hover:bg-blue-700 transition-background w-full'
                type='submit'
                isLoading={submiting}
                disabled={submiting}
              >
                {submiting ? 'Salvando' : 'Salvar'}
              </Button>
            </div>
          </form>
        )}
    </>
  )
}