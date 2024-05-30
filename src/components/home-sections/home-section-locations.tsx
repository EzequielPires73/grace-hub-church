import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

export function HomeSectionLocations() {
  return (
    <>
      <section className="relative h-[248px]">
        <Image src={'/assets/bg-home-3.jpg'} alt="" fill sizes="100%" />
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/20">
          <div className="flex flex-col w-full max-w-7xl h-full items-center justify-center px-3 mx-auto gap-6">
            <h2 className="max-lg:text-xl text-3xl font-semibold text-white text-center">55 anos de dedicação incansável, impactando gerações com um estilo de vida que proclama que Jesus Cristo é o Senhor.</h2>
          </div>
        </div>
      </section>
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