'use client'
import { ChevronDown, User } from "lucide-react";
import Link from "next/link";

export function UserWrapper() {
    const user = {
        name: 'Ezequiel Pires'
    }

    return (
        <>
            {user ?
                <div className="flex gap-2 items-center">
                    <div className={'w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-lg'}>
                        <User size={20} />
                    </div>
                    <div>
                        <span className="text-sm font-medium text-zinc-800">{user.name}</span>
                    </div>
                    <div className="mt-1"><ChevronDown size={16}/></div>
                </div>
                :
                <div className="flex items-center gap-4">
                    <Link href={'/login'} className="font-medium text-zinc-900 text-base">Entrar</Link>
                    <Link href={'/login'} className={''}>Cadastre-se</Link>
                </div>
            }
        </>
    )
}