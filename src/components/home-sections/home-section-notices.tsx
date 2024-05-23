import Link from "next/link";
import { CardNotice } from "../cards/card-notice";

export function HomeSectionNotices({notices}) {
    return (
        <section className="bg-white min-min-h-[400px] py-10">
          <section className="h-full flex flex-col justify-center items-center gap-6 w-full max-w-7xl px-3 mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 text-center uppercase">Últimas notícias</h2>
            {
                notices.length == 0 && <span className="px-8 py-2 bg-gray-100 w-fit font-medium">Nenhum resultado encontrado.</span>
            }
            <div className="w-full grid lg:grid-cols-4 gap-4">
              {notices.map(notice => <CardNotice key={notice.id} notice={notice} />)}
            </div>
            {notices.length > 0 && <Link href={'/'} className="h-10 min-w-[168px] border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Veja mais</Link>}
          </section>
        </section>
    )
}