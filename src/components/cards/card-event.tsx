import { getImagePath } from "@/helpers/functions";
import { IEvent } from "@/models/event";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";

export function CardEvent({ event }: { event: IEvent }) {
    function createMarkup(content: string) {
        return { __html: content.replaceAll('pt;', 'px;') };
    }

    return (
        <Link href={`/events/${event.id}`} className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex flex-col">
            <div className="h-[220px] overflow-hidden relative">
                {event.image && <Image src={getImagePath(event.image)} alt="" fill objectFit="cover" className="w-full" />}
            </div>
            <div className="flex flex-col flex-1">
                <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">{event.name}</h4>
                {event.description.startsWith("<") ? <div className="content-notice text-sm text-gray-800 line-clamp-3" dangerouslySetInnerHTML={createMarkup(event.description)} /> : <p className="whitespace-pre-wrap text-sm text-gray-800 line-clamp-3">{event.description}</p>}
                <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center text-amber-600">
                        <FiCalendar size={20}/>
                        <span className="text-xs font-medium flex-1">De 24 de abril à 26 de abril</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}