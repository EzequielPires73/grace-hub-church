import { CardChurch } from "@/components/cards/card-church";
import { Title } from "@/components/typography/title";
import { fetchData } from "@/helpers/fetch";
import { FiChevronDown, FiFilter } from "react-icons/fi";

export default async function CongregationsPage() {
    const {data} = await fetchData('churches?limit=30', 0);

    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-7xl mx-auto px-3">
            <Title text={"Congregrações"} />
            {/* <div className="grid lg:grid-cols-4 gap-4">
                <div className="w-full">
                    <button className="flex justify-between items-center h-10 w-full lg:max-w-80 px-3 border border-gray-300">
                        <div className="flex gap-2 items-center">
                            <FiFilter />
                            <span className="text-sm text-gray-400">Filtrar por cidade</span>
                        </div>
                        <FiChevronDown />
                    </button>
                </div>
            </div> */}
            <div className="grid lg:grid-cols-4 gap-4">
                {data.map(item => <CardChurch key={item.id} church={item} />)}
            </div>
        </div>
    )
}