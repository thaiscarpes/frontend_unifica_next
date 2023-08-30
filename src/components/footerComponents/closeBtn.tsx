import { MdClose } from "react-icons/md";
import LinkButton from "../linkButton";

export default function CloseBtn() {
    return (
        <LinkButton 
            type="secondary" 
            text="Fechar" 
            href="/">
            <MdClose className="text-primary-800"/>
        </LinkButton>
    )
}