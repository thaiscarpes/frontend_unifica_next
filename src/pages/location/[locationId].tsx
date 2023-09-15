import Header from "@/components/header";
import Footer from "@/components/footerComponents/footer";
import Data from "@/components/locationComponents/data";
import DataImage from "@/components/locationComponents/dataImage";
import DataTitle from "@/components/locationComponents/dataTitle";
import DataGroup from "@/components/locationComponents/dataGroup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdLocationOn, MdFax, MdCall, MdAccessTime } from "react-icons/md";
import { Locations } from "@/utils/FakeDatabase"

export default function Location() {

  //Pega o id do local da rota ex.: /locations/id
  const router = useRouter()
  const {locationId} = router.query

  //Filtra as localizações do array de objetos exemplo que tenha o ID da rota
  const filtrado = Locations.filter((obj) => obj.id === locationId);

  return (
    <>
      <Header />

      {/* Faz um mapeamento do objeto que esta dentro do array e colocar cada campo em cada local correto da interface */}
      {filtrado.map((loc) => (
          <section key={loc.id} className="flex flex-col mt-36 mb-24 w-full gap-6 p-4 h-full shrink-0">
            <DataTitle
          title={loc.name}
          subtitle={loc.description}
        />

          <DataImage
            src={loc.image}
            alt={loc.name}
          />

          <DataGroup>

            <Data label={"Endereço"} content={loc.address}>
              <MdLocationOn />
            </Data>

            <Data label={"Ramal"} content={loc.extension}>
              <MdFax />
            </Data>

            <Data label={"Telefone"} content={loc.phone}>
              <MdCall />
            </Data>

            <Data label={"Horário de Funcionamento"} content={`${loc.workours[0]} - ${loc.workours[1]}`} hasPill>
              <MdAccessTime />
            </Data>

          </DataGroup>
            </section>
          ))}

      <Footer />
    </>
  );
}
