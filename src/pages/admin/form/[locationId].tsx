'use client'
import { useRouter } from "next/router";
import Header from "@/components/header";
import { FooterContainer } from "@/components/footerComponents/footer";
import { FormButton } from "@/components/button";
import { MdCheck } from "react-icons/md"
import { LocationForm } from "@/components/form"
import { Title } from "@/components/title";
import CloseBtn from "@/components/footerComponents/closeBtn";

export default function Form() {

    const router = useRouter();
    const { locationId } = router.query;

  return (
    <>
      <Header />

      <div className="flex flex-col mt-16 mb-24 w-full gap-6 h-full shrink-0">

       <Title text="Cadastrar um local" />

       <LocationForm id={locationId} />

      </div>

      <FooterContainer>
        <CloseBtn link="/admin/locations" text="Cancelar" />
        <FormButton form="form" text="Confirmar">
            <MdCheck/>
        </FormButton>
      </FooterContainer>
    </>
  );
}
