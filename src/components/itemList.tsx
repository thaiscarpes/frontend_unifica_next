import { Image } from "@nextui-org/react";
import { MdChevronRight } from "react-icons/md";

export function ItemList({
  image,
  name,
  description,
}: {
  image: any;
  name: string;
  description: string;
  id: string;
}) {
  return (
    <div className="flex items-center gap-3 p-5 border-t-1 border-surface-200">
      <Image
        width={48}
        height={48}
        alt="NextUI hero Image"
        src={image}
        radius="sm"
      />
      <div className="flex flex-col w-full">
        <h3 className="font-bold text-surface-800 leading-tight">
          {name}
        </h3>
        <p className="text-sm text-surface-500">{description}</p>
      </div>
      <MdChevronRight className="text-lg text-surface-500" />
    </div>
  );
}
