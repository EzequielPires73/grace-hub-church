import { INotice } from "@/models/notice";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";

export function CardNotice({ notice }: { notice: INotice }) {
    return (
        <Link href={`/news/${notice.id}`} className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
            <div className="max-md:w-20 max-md:h-20 h-[220px] overflow-hidden relative">
                {notice.image && <Image src={process.env.NEXT_PUBLIC_URL_DEFAULT + notice.image} alt="" fill objectFit="cover" className="w-full" />}
            </div>
            <div className="flex flex-col flex-1">
                <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2 line-clamp-2">{notice.title}</h4>
                <p className="text-sm text-gray-800 line-clamp-3">{notice.introduction}</p>
                <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center">
                        <FiCalendar />
                        8 de mar de 2024
                    </div>
                    <div className="flex items-center gap-2">
                        <FiClock />
                        18:20
                    </div>
                </div>
            </div>
        </Link>
    )
}