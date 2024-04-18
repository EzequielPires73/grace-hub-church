import { CardChurch } from "@/components/cards/card-church";
import { CardEvent } from "@/components/cards/card-event";
import { Title } from "@/components/typography/title";
import { notices } from "@/models/notice";
import { FiChevronDown, FiFilter, FiSearch } from "react-icons/fi";

export default function CongregationsPage() {
    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-7xl mx-auto px-3">
            <Title text={"Congregrações"} />
            <div className="grid grid-cols-4 gap-4">
                <div className="w-full">
                    <button className="flex justify-between items-center h-10 w-full max-w-80 px-3 border border-gray-300">
                        <div className="flex gap-2 items-center">
                            <FiFilter />
                            <span className="text-sm text-gray-400">Filtrar por cidade</span>
                        </div>
                        <FiChevronDown />
                    </button>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-4">
                <CardChurch district={'Sede'}/>
                <CardChurch district={'Ipanema'}/>
                <CardChurch district={'São João'}/>
                <CardChurch district={'Vila Erondina'}/>
            </div>
        </div>
    )
}