import { CardEvent } from "@/components/cards/card-event";
import { Title } from "@/components/typography/title";
import { fetchData } from "@/helpers/fetch";

export default async function Events() {
    const { data: events } = await fetchData('events', 0);

    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-7xl mx-auto px-3 max-lg:mt-4">
            <Title text={"Eventos"} />
            {
                events.length == 0 && <span className="px-8 py-2 bg-gray-100 w-fit font-medium">Nenhum resultado encontrado.</span>
            }
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {events.map((notice) =>
                    <CardEvent
                        key={notice.id}
                        event={notice}
                    />
                )}
            </div>
        </div>
    )
}