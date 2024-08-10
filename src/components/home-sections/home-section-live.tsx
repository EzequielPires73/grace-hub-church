import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaMessage, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";

export function HomeSectionLive() {
  return (
    <section className="bg-background-aux min-h-[400px] py-10" id="section-live">
      <section className="h-full flex flex-col items-center flex-wrap gap-6 w-full max-w-7xl px-3 mx-auto">
        <iframe className="w-full max-w-[500px] h-[220px] lg:h-[315px]" src="https://www.youtube.com/embed/vyDMGdJjANY?si=FRA3UZ0aSR9xZyLT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <div className="flex flex-col items-center flex-1 gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-white text-center">ASSISTA AO VIVO NA ADCATALÃO</h2>
            <span className="text-sm text-white/90 text-center">PRÓXIMA REUNIÃO: DOMINGO ÀS 18:30H</span>
          </div>
          <div className="flex max-md:flex-col gap-4">
            <Link href={'https://www.youtube.com/@tvadcatalao9418/streams'} target="_blank" className="h-10 min-w-[168px] border border-white text-white px-8 flex items-center justify-center gap-4">
              <FaYoutube size={24} />
              Assista ao vivo
            </Link>
            <Link href={'/'} className="h-10 min-w-[168px] border border-white text-white px-8 flex items-center justify-center gap-4">
              <FaMessage />
              Deixe seu testemunho
            </Link>
          </div>
          <div className="flex items-center gap-4 w-full mt-6">
            <div className="flex-1 h-[.5px] bg-white"></div>
            <span className="text-sm font-medium text-white">Compartilhe</span>
            <div className="flex-1 h-[.5px] bg-white"></div>
          </div>
          <ul className="text-white flex gap-4">
            <li>
              <Link href={'https://www.instagram.com/adcatalao/'} target="_blank">
                <FaInstagram size={24} />
              </Link>
            </li>
            <li>
              <Link href={'https://www.facebook.com/ADCatalao/'} target="_blank">
                <FaFacebook size={24} />
              </Link>
            </li>
            <li>
              <Link href={'https://www.youtube.com/channel/UCJFhfyUb7kh0PJINKHO3Prg'} target="_blank">
                <FaYoutube size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}