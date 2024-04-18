import Image from "next/image";
import { Label } from "../typography/label";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";

export function CardCult() {
    return (
        <div className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex gap-3 max-w-md">
            <Image src={'/assets/image-04.png'} alt="" width={120} height={120} objectFit="cover" />
            <div className="flex flex-col gap-2">
                <Label text={`Culto de Doutrina`} />
                <div className="flex gap-2 items-center text-amber-600">
                    <FiCalendar />
                    <span className="text-xs font-medium">Segunda às 19:00</span>
                </div>
                <Link href={'/congregations'} className="h-10 min-w-[168px] border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Compartilhar</Link>
            </div>
        </div>
    )
}