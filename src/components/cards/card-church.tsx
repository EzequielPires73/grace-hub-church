import { getImagePath } from "@/helpers/functions";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

export function CardChurch({ church }) {
    return (
        <Link href={`/congregacoes`} className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex flex-col">
            {church?.logo ?
                <div className="w-full h-[220px] relative overflow-hidden">
                    <img src={getImagePath(church.logo)} alt="" className="object-cover w-full h-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                    <img src={getImagePath(church.logo)} alt="" className="object-contain w-full h-full" />
                </div> :
                <div className="w-full h-[220px] relative overflow-hidden">
                    <img src={'/no-image.png'} alt="" className="object-cover w-full h-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                    <img src={'/no-image.png'} alt="" className="object-contain w-full h-full" />
                </div>
            }
            <div className="flex flex-col flex-1">
                <h4 className="text-base font-semibold text-gray-800 mt-2">{church.name}</h4>
                <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    {church.address[0] &&
                        <div className="flex gap-2 items-start text-amber-600">
                            <FiMapPin className="" />
                            <span className="text-xs font-medium">{church.address[0].route}, {church.address[0].district}, nº {church.address[0].number} - {church.address[0].city}, {church.address[0].state}</span>
                        </div>
                    }
                </div>
            </div>
        </Link>
    )
}