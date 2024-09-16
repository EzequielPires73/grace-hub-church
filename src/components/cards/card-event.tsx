import { getImagePath } from "@/helpers/functions";
import { IEvent } from "@/models/event";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";

export function CardEvent({ event }: { event: IEvent }) {
    return (
        <Link href={`/eventos/${event.id}`} className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex flex-col">
            {event.image &&
                <div className="w-full h-[220px] relative overflow-hidden">
                    <img src={getImagePath(event.image)} alt="" className="object-cover w-full h-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                    <img src={getImagePath(event.image)} alt="" className="object-contain w-full h-full" />
                </div>
            }
            <div className="flex flex-col flex-1">
                <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">{event.name}</h4>
                <p className="whitespace-pre-wrap text-sm text-gray-800 line-clamp-3">{event.description}</p>
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