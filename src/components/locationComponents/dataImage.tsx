import Image from 'next/image'

interface imageProps {
  src: String;
  alt: String;
}

// Componente que renderiza a imagem do local
export default function DataImage({ src, alt }: imageProps) {
  return (
    <>
      <div className="w-full">
        <Image
          src={`${src}`}
          width={358}
          height={140}
          quality={25}
          style={{ width: "100%", height: "auto" }}
          alt={`${alt}`}
        />
      </div>
    </>
  );
}
