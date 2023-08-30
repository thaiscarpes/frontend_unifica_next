interface titleProps {
  title: String;
  subtitle: String;
}

// Componente que renderiza o títlo e o subtítulo do local
export default function Data({ title, subtitle }: titleProps) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-surface-800 font-bold text-2xl leading-none">
          {title}
        </h2>
        <p className="text-surface-500 leading-normal">{subtitle}</p>
      </div>
    </>
  );
}
