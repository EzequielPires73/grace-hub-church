import { ModalCreatePresence } from "@/components/modals/modal-create-presence";
import { Label } from "@/components/typography/label";
import { Title } from "@/components/typography/title";
import { formatDate } from "@/helpers/date";
import { fetchData } from "@/helpers/fetch";
import { getImagePath } from "@/helpers/functions";
import { IEvent } from "@/models/event";
import Image from "next/image";
import { FiCalendar, FiClock, FiShare } from "react-icons/fi";

function getEventDates(event: IEvent) {
    const startDates = event.schedules.map(schedule => schedule.date + ' ' + schedule.start);
    const minStartDate = new Date(Math.min(...startDates.map(date => new Date(date).getTime())));

    return {
        startDate: minStartDate?.toLocaleDateString(),
        startTime: minStartDate?.toLocaleTimeString(),
    };
}

export default async function NewsPage({ params }) {
    const { data } = await fetchData('churches?limit=50', 0);
    const { data: event }: { data: IEvent } = await fetchData(`events/${params.id}`, 0);
    const dates = getEventDates(event);
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-[800px] px-3 mx-auto lg:py-6 mb-6">
            {event.image &&
                <div className="w-full h-[248px] lg:h-[336px] relative overflow-hidden">
                    <Image src={getImagePath(event.image)} alt="" fill objectFit="cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                    <Image src={getImagePath(event.image)} alt="" fill objectFit="contain" />
                </div>
            }
            <div className="w-full flex items-center justify-between gap-6">
                <div className="flex flex-col gap-3">
                    <Title text={event.name} />
                    <div className="flex items-center gap-2">
                        <FiCalendar className="text-orange-600" />
                        <Label text={formatDate(new Date(dates.startDate))} />
                    </div>
                    <div className="flex items-center gap-2">
                        <FiClock className="text-orange-600" />
                        <Label text={new Date(dates.startTime).toLocaleTimeString()} />
                    </div>
                </div>
                <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <FiShare />
                </button>
            </div>
            {currentDate == dates.startDate && <div className="flex flex-col gap-4">
                <Label text={'Horários do evento'} />
                <div className="grid lgÇgrid-cols-3">
                    {event.schedules.map(item => (
                        <div key={item.id} className="flex flex-col gap-1 p-4 bg-gray-100">
                            <h4 className="text-base font-semibold">{item.description}</h4>
                            <span className="text-sm">Data: {formatDate(new Date(item.date))}</span>
                            <div className="flex gap-4 flex-wrap mb-2">
                                <span className="text-sm">Início: <strong>{item.start}</strong></span>
                                {/* <span className="text-sm">Final: <strong>{item.end}</strong></span> */}
                            </div>
                            <ModalCreatePresence churches={data} schedule={item} />
                        </div>
                    ))}
                </div>
            </div>}
            <p className="text-sm font-normal flex flex-col gap-2">{event.description}</p>
        </div>
    )
}