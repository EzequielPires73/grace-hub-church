'use client'

import { FiLogOut } from "react-icons/fi";
import { ButtonIcon } from "../buttons/button-icon";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

export function HeaderAdmin({ user }) {
    const router = useRouter();

    return (
        <header className="h-24 bg-orange-500">
            <div className="w-full max-w-7xl h-full mx-auto px-3 flex items-center justify-between gap-6 text-white">
                <div className="flex items-center gap-6">
                    <div className="h-12 w-12 bg-zinc-800 rounded-full flex items-center justify-center border-2 font-medium">
                        {user.name.substring(0, 1)}
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold">Olá, {user.name}</h2>
                        <h3 className="text-sm">Bem-vindo ao <strong>Agenda Pastoral</strong></h3>
                    </div>
                </div>
                <ButtonIcon Icon={FiLogOut} onClick={() => {
                        destroyCookie(null, 'adcatalao.user', { path: '/' });
                        destroyCookie(null, 'adcatalao.access_token', { path: '/' });
                        router.refresh();
                    }}/>
            </div>
        </header>
    )
}