import Link from "next/link";
import { Children, ReactNode } from "react";

//definindo tipos do botão
interface buttonProps {
    type: "default" | "secondary" | "success" | "error"
    children?: ReactNode
    text: String
    onClick: () => void
}

export default function Button({ type, children, text, onClick }: buttonProps) {

    //Criação das constantes com o estilo
    const buttonStyle = "flex w-full justify-center items-center gap-2 p-3 rounded-lg transition"
    const primaryButtonStyle = "bg-primary-500 text-surface-0 hover:bg-primary-800"
    const secondaryButtonStyle = "bg-primary-100 text-primary-800 hover:bg-primary-200"
    const successButtonStyle = "bg-success-100 text-success-800 hover:bg-success-200"
    const errorButtonStyle = "bg-error-100 text-error-800 hover:bg-error-200"

    //verificação do tipo
    const getButtonType = (type: string) => {
        if (type === "default") {
            return (primaryButtonStyle)
        }
        else if (type === "secondary") {
            return (secondaryButtonStyle)
        }
        else if (type === "success") {
            return (successButtonStyle)
        }
        else if (type == "error") {
            return (errorButtonStyle)
        }
    }

    //retornar o componente
    return (
        <button onClick={onClick} className={`${buttonStyle} ${getButtonType(type)}`}>
            <span>{text}</span>
            {children}
        </button>
    )
}

export function FormButton({text, children, form}:{text:string, children:React.ReactNode, form:string}) {
    return(
        <button type="submit" form={form} className={`flex w-full justify-center items-center gap-2 p-3 rounded-lg transition bg-primary-500 text-surface-0 hover:bg-primary-800}`}>
            <span>{text}</span>
            {children}
        </button>
    )
}

export function LinkButton({text, children, link}:{text:string, children:React.ReactNode, link:string}){
    return(
        <Link href={link} className={`flex w-full justify-center items-center gap-2 p-3 rounded-lg transition bg-primary-500 text-surface-0 hover:bg-primary-800}`}>
            <span>{text}</span>
            {children}
        </Link>
    )
}