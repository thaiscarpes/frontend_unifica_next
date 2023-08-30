import { MdStopCircle } from "react-icons/md";
import LinkButton from "../linkButton";

export default function StopFollowBtn() {
    return (
        <LinkButton 
            type="error" 
            text="Parar de seguir"
            href="/">
            <MdStopCircle className="text-error-800"/>
        </LinkButton>
    )
}