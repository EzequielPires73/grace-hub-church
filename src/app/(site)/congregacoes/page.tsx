import { CardChurch } from "@/components/cards/card-church";
import { Title } from "@/components/typography/title";
import { fetchData } from "@/helpers/fetch";

export default async function CongregationsPage() {
    const {data} = await fetchData('churches?limit=50', 0);

    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-7xl mx-auto px-3">
            <Title text={"Congregrações"} />
            <div className="grid lg:grid-cols-4 gap-4">
                {data.map(item => <CardChurch key={item.id} church={item} />)}
            </div>
        </div>
    )
}