import Image from "next/image";
import { Label } from "../typography/label";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";
import { ICult } from "@/models/cult";
import { getImagePath } from "@/helpers/functions";

export enum WeekDay {
    sunday = 'Domingo',
    monday = 'Segunda',
    tuesday = 'Terça-Feira',
    wednesday = 'Quarta-Feira',
    thursday = 'Quinta-Feira',
    friday = 'Sexta-Feira',
    saturday = 'Sábado',
}

export function CardCult({cult, weekDay}: {cult: ICult, weekDay: WeekDay}) {
    const getTime = () => {
        switch(weekDay) {
            case WeekDay.friday:
                return cult.friday;
            case WeekDay.monday:
                return cult.monday;
            case WeekDay.saturday:
                return cult.saturday;
            case WeekDay.sunday:
                return cult.sunday;
            case WeekDay.thursday:
                return cult.thursday;
            case WeekDay.tuesday:
                return cult.tuesday;
            case WeekDay.wednesday:
                return cult.wednesday;
        }
    }

    return (
        <div className="p-2 border transition-colors hover:border-gray-500 border-gray-300 flex gap-3 max-w-md">
           <div className="w-[120px] h-[120px] overflow-hidden relative">
                {cult.image && <img src={getImagePath(cult.image)} alt="" className="object-cover w-full h-full" />}
            </div>
            <div className="flex flex-col gap-2">
                <Label text={cult.title} />
                <div className="flex gap-2 items-center text-amber-600">
                    <FiCalendar />
                    <span className="text-xs font-medium">{weekDay} às {getTime()}</span>
                </div>
                <Link href={'/congregacoes'} className="h-10 min-w-[168px] border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Compartilhar</Link>
            </div>
        </div>
    )
}