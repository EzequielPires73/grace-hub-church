import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

export function CardChurch({district}) {
    return (
        <Link href={'/congregations/1213'} className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
            <div className="max-lg:w-20">
                <Image src={'/assets/church.jpg'} alt="" width={300} height={300} className="w-full" />
            </div>
            <div className="flex flex-col flex-1">
                <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">{district}</h4>
                <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center text-amber-600">
                        <FiMapPin />
                        <span className="text-xs font-medium">Catalão - Go</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}