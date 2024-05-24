import { CardEvent } from "@/components/cards/card-event";
import { CardNotice } from "@/components/cards/card-notice";
import { Title } from "@/components/typography/title";
import { fetchData } from "@/helpers/fetch";
import { FiChevronDown, FiFilter, FiSearch } from "react-icons/fi";

export default async function Events() {
    const { data: notices } = await fetchData('notices', 0);

    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-7xl mx-auto px-3">
            <Title text={"Notícias e Publicações"} />
            {/* <div className="grid lg:grid-cols-4 gap-4">
                <div className="w-full">
                    <button className="flex justify-between items-center h-10 w-full lg:max-w-80 px-3 border border-gray-300">
                        <div className="flex gap-2 items-center">
                            <FiFilter />
                            <span className="text-sm text-gray-400">Filtrar por motivo</span>
                        </div>
                        <FiChevronDown />
                    </button>
                </div>
                <div className="relative flex items-center h-10 w-full lg:max-w-80 border border-gray-300">
                    <FiSearch className="absolute left-3" />
                    <input className="h-full w-full outline-none pl-10 placeholder:text-sm pr-3 text-ellipsis" placeholder="Buscar por nome do autor ou mensagem" />
                </div>
            </div> */}
            {
                notices.length == 0 && <span className="px-8 py-2 bg-gray-100 w-fit font-medium">Nenhum resultado encontrado.</span>
            }
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {notices.map((notice) =>
                    <CardNotice
                        key={notice.id}
                        notice={notice}
                    />
                )}
            </div>
        </div>
    )
}