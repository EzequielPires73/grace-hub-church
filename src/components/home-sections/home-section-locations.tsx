import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

export function HomeSectionLocations() {
  return (
    <>
      <section className="bg-white">
        <section className="h-full py-10 flex flex-col justify-center items-center gap-6 w-full max-w-7xl px-3 mx-auto">
          <FiMapPin size={32} />
          <h2 className="text-xl font-semibold text-gray-800 text-center uppercase">Nossos locais</h2>
          <span className="max-w-lg text-center">Confira nossos endereços e horários de funcionamento.</span>
          <Link href={'/congregacoes'} className="h-10 min-w-[168px] border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Selecione uma unidade</Link>
        </section>
      </section>
    </>
  )
}