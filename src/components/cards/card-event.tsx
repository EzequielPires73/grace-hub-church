import { INotice } from "@/models/notice";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";

export function CardEvent({ notice }: { notice: INotice }) {
    return (
        <Link href={'/events/1213'} className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
            <div className="max-lg:w-20">
                <Image src={notice.image} alt="" width={300} height={300} className="w-full" />
            </div>
            <div className="flex flex-col flex-1">
                <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">{notice.title}</h4>
                <p className="text-sm text-gray-800">{notice.introduction}</p>
                <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center text-amber-600">
                        <FiCalendar />
                        <span className="text-xs font-medium">De 24 de abril às 16h até 26 de abril às 16h</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}