import { CardPrayer } from "@/components/cards/card-prayer";
import { Label } from "@/components/typography/label";
import { Span } from "@/components/typography/span";
import { Title } from "@/components/typography/title";
import Link from "next/link";
import { FiChevronDown, FiFilter, FiHeart, FiMail, FiSearch } from "react-icons/fi";

export default async function PrayerPage() {
    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-7xl mx-auto px-3">
            <Title text={"Mural de orações"} />
            <div className="flex justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-4">
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
                </div>
                <Link href={'/prayer/create'} className="h-10 min-w-[168px] bg-gray-800 border border-gray-800 text-white px-8 flex items-center justify-center">Fazer um pedido</Link>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
            </div>
        </div>
    )
}