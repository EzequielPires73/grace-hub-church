import { formatDate } from "@/helpers/date";
import { getImagePath } from "@/helpers/functions";
import { INotice } from "@/models/notice";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";

export function CardNotice({ notice }: { notice: INotice }) {
    const time = new Date(notice.createdAt).toLocaleTimeString();
    
    return (
        <Link href={`/noticias/${notice.id}`} className="p-3 bg-white transition-colors hover:border-gray-500 border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
            <div className="max-md:w-20 max-md:h-20 h-[300px] overflow-hidden relative">
                {notice.image && <img src={getImagePath(notice.image)} alt="" className="object-cover w-full h-full" />}
            </div>
            <div className="flex flex-col flex-1">
                <h4 className="text-lg max-lg:text-base font-semibold text-background-aux mt-2 line-clamp-2">{notice.title}</h4>
                <p className="text-sm text-background-aux line-clamp-3">{notice.introduction}</p>
                <div className="flex justify-between items-center text-sm text-background-aux mt-2">
                    <div className="flex gap-2 items-center">
                        <FiCalendar />
                         {formatDate(new Date(notice.createdAt))}
                    </div>
                    <div className="flex items-center gap-2">
                        <FiClock />
                        <span>{time.split(':')[0]}:{time.split(':')[1]}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}