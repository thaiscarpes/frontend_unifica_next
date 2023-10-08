"use client";
import Header from "@/components/header";
import { FooterContainer } from "@/components/footerComponents/footer";
import { LinkButton } from "@/components/button";
import { MdAdd } from "react-icons/md";
import { Title } from "@/components/title";
import { ItemList } from "@/components/itemList";
import { Locations } from "@/utils/FakeDatabase";
import Link from "next/link";

export default function LocationsList() {
  return (
    <>
      <Header />

      <div className="flex flex-col mt-16 mb-24 w-full gap-6 h-full shrink-0">
        <Title text="Admin :)" hasText subtext="Olá," />
        <Title text="Localizações cadastradas" />
        <div className="flex flex-col w-full">
          {Locations.map((data) => {
            return (
              <Link href={`/admin/form/${data.id}`} className="w-full" key={data.id}>
                <ItemList
                  name={data.name}
                  description={data.description}
                  image={data.image}
                  id={data.id}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <FooterContainer>
        <LinkButton link="/admin/form/new" text="Cadastrar">
          <MdAdd />
        </LinkButton>
      </FooterContainer>
    </>
  );
}
