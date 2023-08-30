import Link from "next/link";
import { Children, ReactNode } from "react";

//definindo tipos do botão
interface linkButtonProps {
    type: "default" | "secondary" | "success" | "error"
    children?: ReactNode
    text: String
    href: String
}

export default function LinkButton({ type, children, text, href }: linkButtonProps) {

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
        <Link href={href} passHref className={`${buttonStyle} ${getButtonType(type)}`}>
            <span>{text}</span>
            {children}
        </Link>
    )
}