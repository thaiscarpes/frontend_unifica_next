import { Spinner } from "@nextui-org/react";

export default function LoadSpinner() {
  return (
    <main className="flex flex-col justify-center items-center w-full fixed h-screen">
      <Spinner size='lg' />
    </main>
  )
}