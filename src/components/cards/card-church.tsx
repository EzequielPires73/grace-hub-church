import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

export function CardChurch({ church }) {
    return (
        <Link href={`/congregations/${church.id}`} className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
            <div className="max-md:w-20 max-md:h-20 h-[220px] overflow-hidden relative">
                {church.logo && <Image src={process.env.NEXT_PUBLIC_URL_DEFAULT + church.logo} alt="" fill objectFit="cover" className="w-full" />}
            </div>
            <div className="flex flex-col flex-1">
                <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">{church.name}</h4>
                <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    {church.address[0] &&
                        <div className="flex gap-2 items-start text-amber-600">
                            <FiMapPin className=""/>
                            <span className="text-xs font-medium">{church.address[0].route} - {church.address[0].city}, {church.address[0].state}</span>
                        </div>
                    }
                </div>
            </div>
        </Link>
    )
}