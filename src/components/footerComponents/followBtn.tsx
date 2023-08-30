import { LuCompass } from "react-icons/lu"
import Button from "../button";

import { useRouter } from "next/router";

interface FollowBtnProps {
  location?: String
}

export default function FollowBtn({location}:FollowBtnProps) {

  const router = useRouter()
  
  function handleClick() {
    const locationName = 'Ministério da Agricultura'
    router.push('/')
  }

  return (
    <Button
      type="default"
      text="Seguir no mapa"
      onClick={() => {}}
    >
      <LuCompass className="text-surface-0" />
    </Button>
  );
}
