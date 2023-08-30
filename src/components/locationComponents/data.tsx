import { ReactNode } from "react";

interface dataProps {
  children?: ReactNode;
  label: String;
  content: String;
  hasPill?: Boolean;
}

// componente que renderiza um item das informações ex.: Endereço, Telefone, etc.
export default function Data({ children, label, content, hasPill }: dataProps) {
  return (
    <>
      {/* Conteiner com uma informação */}
      <div className="flex flex-col">
        {/* Label */}
        <div className="flex items-center gap-1 text-surface-500">
          {children}
          <h3>{label}</h3>
        </div>
        {/* Informação */}
        {hasPill
          ? (
          <div className="ml-[22px] flex justify-center px-3 py-2 rounded-full bg-primary-50 w-max">
            <p className="text-primary-500">{content}</p>
          </div>
        ) : (
          <p className="ml-[22px] text-surface-800">{content}</p>
        )}
      </div>
    </>
  );
}
