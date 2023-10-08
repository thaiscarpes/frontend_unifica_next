import { Input } from "@nextui-org/react"
import { FormEvent, useState } from "react"
import { MdAccessTime, MdCall, MdDomain, MdFax, MdImageSearch, MdInfo, MdLocationOn, MdMap } from "react-icons/md"

export function LocationForm({id}:{id:any}){

    const [ name, setName ] = useState("")
    const [ image, setImage ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ extension, setExtension ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ time1, setTime1 ] = useState("")
    const [ time2, setTime2 ] = useState("")
    const [ time3, setTime3 ] = useState("")
    const [ time4, setTime4 ] = useState("")
    const [ coords1, setCoords1 ] = useState("")
    const [ coords2, setCoords2 ] = useState("")

    const handleSubmit = (e:FormEvent) => {

        e.preventDefault()
  
        return(
            console.log('Data:',{name, image, description, address, extension, phone, time1, time2, time3, time4, coords1, coords2})
        )
    }

    return(
        <form onSubmit={handleSubmit} id="form" className="flex flex-col gap-6 p-4">
            <Input
            isRequired
            variant="bordered"
            labelPlacement="outside"
            type="text"
            label="Nome"
            placeholder="Nome do local"
            startContent={<MdDomain className="text-gray-900" />}
            radius="sm"
            size="lg"
            value={name}
            onChange={e => { setName(e.target.value) }}
            />
            <Input
            isRequired
            variant="bordered"
            labelPlacement="outside"
            type="file"
            label="Foto"
            placeholder="Foto do local"
            startContent={<MdImageSearch className="text-gray-900" />}
            radius="sm"
            size="lg"
            value={image}
            onChange={e => { setImage(e.target.value) }}
            />
            <Input
            isRequired
            variant="bordered"
            labelPlacement="outside"
            type="text"
            label="Descrição"
            placeholder="Breve descrição do local"
            startContent={<MdInfo className="text-gray-900" />}
            radius="sm"
            size="lg"
            value={description}
            onChange={e => { setDescription(e.target.value) }}
            />
            <Input
            isRequired
            variant="bordered"
            labelPlacement="outside"
            type="text"
            label="Endereço"
            placeholder="Endereço do local, ou número da sala"
            startContent={<MdLocationOn className="text-gray-900" />}
            radius="sm"
            size="lg"
            value={address}
            onChange={e => { setAddress(e.target.value) }}
            />

            {/* Contato */}
            <div className="flex flex-col gap-6 py-6">
            <div className="flex gap-2 items-center font-bold text-base leading-relaxed text-surface-800">
                <MdCall className="text-gray-900" />
                <h2>Contato</h2>
            </div>
            <div className="flex gap-6 items-center">
                <Input
                isRequired
                variant="bordered"
                labelPlacement="outside"
                type="number"
                label="Ramal"
                placeholder="0000"
                startContent={<MdFax className="text-gray-900" />}
                radius="sm"
                size="lg"
                value={extension}
                onChange={e => { setExtension(e.target.value) }}
                />
                <Input
                isRequired
                variant="bordered"
                labelPlacement="outside"
                type="tel"
                label="Telefone"
                placeholder="+00 (00) 0000 0000"
                startContent={<MdCall className="text-gray-900" />}
                radius="sm"
                size="lg"
                value={phone}
                onChange={e => { setPhone(e.target.value) }}
                />
            </div>
            </div>

            {/* Horarios de funcionamento */}
            <div className="flex flex-col gap-6 py-6">
            <div className="flex gap-2 items-center font-bold text-base leading-relaxed text-surface-800">
                <MdAccessTime className="text-gray-900" />
                <h2>Horário de funcionamento</h2>
            </div>
            <div className="flex gap-6 items-center">
                <Input
                isRequired
                variant="bordered"
                labelPlacement="outside"
                type="time"
                label="Horário Inicio (manhã)"
                placeholder="00:00"
                radius="sm"
                size="lg"
                value={time1}
                onChange={e => { setTime1(e.target.value) }}
                />
                <Input
                isRequired
                variant="bordered"
                labelPlacement="outside"
                type="time"
                label="Horário de Término (manhã)"
                placeholder="00:00"
                radius="sm"
                size="lg"
                value={time2}
                onChange={e => { setTime2(e.target.value) }}
                />
            </div>
            <div className="flex gap-6 items-center">
                <Input
                isRequired
                variant="bordered"
                labelPlacement="outside"
                type="time"
                label="Horário de inicio (tarde)"
                placeholder="00:00"
                radius="sm"
                size="lg"
                value={time3}
                onChange={e => { setTime3(e.target.value) }}
                />
                <Input
                isRequired
                variant="bordered"
                labelPlacement="outside"
                type="time"
                label="Horário de término (tarde)"
                placeholder="00:00"
                radius="sm"
                size="lg"
                value={time4}
                onChange={e => { setTime4(e.target.value) }}
                />
            </div>
            </div>

            {/* Localização */}
            <div className="flex flex-col gap-6 py-6">
            <div className="flex gap-2 items-center font-bold text-base leading-relaxed text-surface-800">
                <MdMap className="text-gray-900" />
                <h2>Localização</h2>
            </div>
            <Input
                isRequired
                variant="bordered"
                labelPlacement="outside"
                type="text"
                label="Coordenadas X"
                placeholder="Coordenadas X do local"
                radius="sm"
                size="lg"
                value={coords1}
                onChange={e => { setCoords1(e.target.value) }}
            />
            <Input
                isRequired
                variant="bordered"
                labelPlacement="outside"
                type="text"
                label="Coordenadas Y"
                placeholder="Coordenadas Y do local"
                radius="sm"
                size="lg"
                value={coords2}
                onChange={e => { setCoords2(e.target.value) }}
            />
            </div>
        </form>
    )
}