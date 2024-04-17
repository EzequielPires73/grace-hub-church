import { FiHeart, FiMail } from "react-icons/fi";
import { Label } from "../typography/label";
import { Span } from "../typography/span";

export function CardPrayer() {
    return (
        <div className="border border-gray-300">
            <div className="p-4 flex flex-col gap-1">
                <div className="flex justify-between">
                    <Label text={'Família'} />
                    <Span text={'16 de abril de 2024'} />
                </div>
                <p className="text-sm line-clamp-2 text-gray-600 font-light">Gostaria de dizer que estou em batalha quero sair dos vicios presciso de libertaçao cura pelos meus em casa tambem meus pai odair ivonete prescisa</p>
                <span className="text-xs font-medium">Kemini Ferreira</span>
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