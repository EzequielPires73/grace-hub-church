import { CardPrayer } from "@/components/cards/card-prayer";
import { Title } from "@/components/typography/title";
import { fetchData } from "@/helpers/fetch";
import Link from "next/link";
import { FiChevronDown, FiFilter, FiSearch } from "react-icons/fi";

export default async function PrayerPage() {
    const {data: prayers} = await fetchData('prayers', 0);

    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-7xl mx-auto px-3">
            <div className="flex justify-between items-center flex-wrap gap-4">
            <Title text={"Mural de orações"} />
                {/* <div className="flex flex-wrap gap-4">
                    <div>
                        <button className="flex justify-between items-center h-10 min-w-80 px-3 border border-gray-300">
                            <div className="flex gap-2 items-center">
                                <FiFilter />
                                <span className="text-sm text-gray-400">Filtrar por motivo</span>
                            </div>
                            <FiChevronDown />
                        </button>
                    </div>
                    <div className="relative flex items-center h-10 min-w-80 border border-gray-300">
                        <FiSearch className="absolute left-3" />
                        <input className="h-full w-full outline-none pl-10 placeholder:text-sm pr-3 text-ellipsis" placeholder="Buscar por nome do autor ou mensagem" />
                    </div>
                </div> */}
                <Link href={'/prayer/create'} className="h-10 min-w-[168px] bg-gray-800 border border-gray-800 text-white px-8 flex items-center justify-center">Fazer um pedido</Link>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
                {prayers.map(item => <CardPrayer key={item} prayer={item}/>)}
            </div>
        </div>
    )
}