import { FiHeart, FiMail } from "react-icons/fi";
import { Label } from "../typography/label";
import { Span } from "../typography/span";
import { IPrayer } from "@/models/prayer";
import { motiveOptions } from "@/utils/data";

export function CardPrayer({prayer}: {prayer: IPrayer}) {
    const date = new Date(prayer.createdAt);

    return (
        <div className="border border-gray-300">
            <div className="p-4 flex flex-col gap-1">
                <div className="flex justify-between">
                    <Label text={motiveOptions.find(item => item.enum == prayer.reason)?.name} />
                    <Span text={date.toLocaleDateString()} />
                </div>
                <p className="text-sm line-clamp-2 text-gray-600 font-light">{prayer.description}</p>
                <span className="text-xs font-medium">{prayer.user.name}</span>
            </div>
            <div className="border-t border-gray-300 flex">
                <button className="p-2 flex items-center justify-center gap-2 flex-1 border-r">
                    <FiHeart />
                    <span className="text-sm font-medium">Orando</span>
                    <span className="w-7 h-7 text-xs rounded-full bg-gray-800 flex items-center justify-center text-white">1</span>
                </button>
                <button className="p-2 flex items-center justify-center gap-2 flex-1">
                    <FiMail />
                    <span className="text-sm font-medium">Enviar mensagem</span>
                </button>
            </div>
        </div>
    )
}