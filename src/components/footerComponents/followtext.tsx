import { LuInfo } from "react-icons/lu";

interface followTextProps {
    location: String
}

export default function FollowText({location}:followTextProps) {
  return (
    <div className="flex w-full gap-2 items-center">
        <LuInfo className="text-2xl text-surface-500" />
        <div className="flex flex-col">
          <span className="text-sm text-surface-500">Seguindo</span>
          <h2 className="text-base font-bold text-surface-800">{location}</h2>
        </div>
      </div>
  );
}
