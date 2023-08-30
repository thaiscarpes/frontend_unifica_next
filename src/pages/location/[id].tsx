import Header from "@/components/header";
import Footer from "@/components/footerComponents/footer";
import Data from "@/components/locationComponents/data";
import DataImage from "@/components/locationComponents/dataImage";
import DataTitle from "@/components/locationComponents/dataTitle";
import DataGroup from "@/components/locationComponents/dataGroup";

import { MdLocationOn, MdFax, MdCall, MdAccessTime } from "react-icons/md";

export default function Location() {

    //colcoar nesta const a ID da rota digitada ex.:"/location/1"
    const locationId = 12345679

    //buscar no banco de dados o local com este ID

    //colocar neste objeto os dados do local buscado no banco
    const locationData = {
        name: "SB Despachos",
        description: "Despachante brasileiro",
        image: "/assets/img/ministerio-agricultura.png",
        address: "Salas 101 a 329",
        extension: "1028",
        phone: "555534313900",
        workours: ["08:00", "18:00"]
    }

  return (
    <>
      <Header />

      {/* Conteiner grandão */}
      <section className="flex flex-col mt-36 mb-24 w-full gap-6 p-4 h-full shrink-0">

        <DataTitle
          title={locationData.name}
          subtitle={locationData.description}
        />

        <DataImage
          src={locationData.image}
          alt={locationData.name}
        />

        <DataGroup>

          <Data label={"Endereço"} content={locationData.address}>
            <MdLocationOn />
          </Data>

          <Data label={"Ramal"} content={locationData.extension}>
            <MdFax />
          </Data>

          <Data label={"Telefone"} content={locationData.phone}>
            <MdCall />
          </Data>

          <Data label={"Horário de Funcionamento"} content={`${locationData.workours[0]} - ${locationData.workours[1]}`} hasPill>
            <MdAccessTime />
          </Data>

        </DataGroup>

      </section>

      <Footer />
    </>
  );
}
