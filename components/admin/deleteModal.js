'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { useState } from "react"

export default function DeleteModal(id, onOpen, isOpen, onOpenChange) {

  const [submiting, setSubmiting] = useState(false)

  const onSubmit = async() => {
    submiting(true)
    try {
      const response = await fetch(`/api/locations/${locationId}`, {
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

  return(
    <Modal isOpen={isOpen} placement="bottom" onOpenChange={onOpenChange} >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <p> 
                Você tem certeza que deseja remover este local? Não será possível recuperá-lo após a remoção.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}