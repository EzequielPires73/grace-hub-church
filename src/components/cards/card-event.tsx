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
        <Link href={`/eventos/${event.id}`} className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex flex-col">
            {event.image &&
                <div className="w-full h-[220px] relative overflow-hidden">
                    <Image src={getImagePath(event.image)} alt="" fill objectFit="cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                    <Image src={getImagePath(event.image)} alt="" fill objectFit="contain" />
                </div>
            }
            <div className="flex flex-col flex-1">
                <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">{event.name}</h4>
                {event.description.startsWith("<") ? <div className="content-notice text-sm text-gray-800 line-clamp-3" dangerouslySetInnerHTML={createMarkup(event.description)} /> : <p className="whitespace-pre-wrap text-sm text-gray-800 line-clamp-3">{event.description}</p>}
                <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center text-amber-600">
                        <FiCalendar size={20}/>
                        <span className="text-xs font-medium flex-1">25 de maio de 2024</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}