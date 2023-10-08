import StopFollowBtn from "./stopFollowBtn";
import FollowText from "./followtext";
import CloseBtn from "./closeBtn";
import FollowBtn from "./followBtn";

interface footerProps {
  isFollowing?: Boolean
  locationName?: String
}

export default function Footer({ isFollowing, locationName }: footerProps) {

  return (
    // Conteiner do footer
    <div className="flex items-center gap-4 p-4 bg-surface-0 border-t-2 border-surface-200 fixed bottom-0 w-full">
      {isFollowing ? (
        <>
          <FollowText location={`${locationName}`} />
          <StopFollowBtn />
        </>
      ) : (
        <>
          <CloseBtn text="Fechar" link="/" />
          <FollowBtn />
        </>
      )}
    </div>
  );
}

export function FooterContainer({children}:{children:React.ReactNode}) {
  return(
    <div className="flex items-center gap-4 p-4 bg-surface-0 border-t-2 border-surface-200 fixed bottom-0 w-full">
      {children}
    </div>
  )
}
