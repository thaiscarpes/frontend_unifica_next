import { ReactNode } from "react";

interface dataGroupProps {
    children: ReactNode
}

// Componente que renderiza um grupo com todos os detalhes do local
// Colocar os componentes com os detalhes dentro da tag deste componente

export default function DataGroup({children}:dataGroupProps) {
    return (
        <div className="flex flex-col w-full gap-6 h-full shrink-0">
          {children}
        </div>
    )
}