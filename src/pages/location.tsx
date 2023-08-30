import Header from "@/components/header";
import Footer from "@/components/footerComponents/footer";
import Data from "@/components/locationComponents/data";
import DataImage from "@/components/locationComponents/dataImage";
import DataTitle from "@/components/locationComponents/dataTitle";
import DataGroup from "@/components/locationComponents/dataGroup";

import { MdLocationOn, MdFax, MdCall, MdAccessTime } from "react-icons/md";

export default function Location() {
  return (
    <>
      <Header />

      {/* Conteiner grandão */}
      <section className="flex flex-col mt-36 mb-24 w-full gap-6 p-4 h-full shrink-0">

        <DataTitle
          title={"Ministério da Agricultura"}
          subtitle={"Órgão brasileiro"}
        />

        <DataImage
          src={"/assets/img/ministerio-agricultura.png"}
          alt={"Ministério da Agricultura"}
        />

        <DataGroup>

          <Data label={"Endereço"} content={"Salas 261 a 264"}>
            <MdLocationOn />
          </Data>

          <Data label={"Ramal"} content={"3039"}>
            <MdFax />
          </Data>

          <Data label={"Telefone"} content={"+55 (55) 3431 1300"}>
            <MdCall />
          </Data>

          <Data label={"Horário de Funcionamento"} content={"08:00 - 22:00"} hasPill>
            <MdAccessTime />
          </Data>

        </DataGroup>

      </section>

      <Footer />
    </>
  );
}
