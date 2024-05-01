import Link from "next/link";
import { FaEnvelope, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";

export function HomeSectionLive() {
    return (
        <section className="bg-gray-100 min-h-[400px] py-10">
          <section className="h-full flex items-center flex-wrap gap-6 w-full max-w-7xl px-3 mx-auto">
            <iframe width="560" className="h-[220px] lg:h-[315px]" src="https://www.youtube.com/embed/vyDMGdJjANY?si=FRA3UZ0aSR9xZyLT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div className="flex flex-col items-center flex-1 gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-gray-800 text-center">ASSISTA AO VIVO NA ADCATALÃO</h2>
                <span className="text-sm text-gray-600 text-center">PRÓXIMA REUNIÃO: DOMINGO ÀS 18:30H</span>
              </div>
              <div className="flex gap-4">
                <Link href={'/'} className="h-10 min-w-[168px] border border-gray-700 text-gray-700 px-8 flex items-center justify-center">Contribua</Link>
                <Link href={'/'} className="h-10 min-w-[168px] border border-gray-700 text-gray-700 px-8 flex items-center justify-center">Testemunhos</Link>
              </div>
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-[.5px] bg-gray-800"></div>
                <span className="text-sm font-medium">Compartilhe</span>
                <div className="flex-1 h-[.5px] bg-gray-800"></div>
              </div>
              <ul className="text-gray-700 flex gap-4">
                <li><FaTwitter size={18} /></li>
                <li><FaEnvelope size={18} /></li>
                <li><FaFacebook size={18} /></li>
                <li><FaWhatsapp size={18} /></li>
              </ul>
            </div>
          </section>
        </section>
    )
}