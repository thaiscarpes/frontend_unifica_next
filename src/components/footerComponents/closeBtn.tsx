import { MdClose } from "react-icons/md";
import LinkButton from "../linkButton";

export default function CloseBtn({link, text}:{link:string, text:string}) {
    return (
        <LinkButton 
            type="secondary" 
            text={text} 
            href={link}>
            <MdClose className="text-primary-800"/>
        </LinkButton>
    )
}