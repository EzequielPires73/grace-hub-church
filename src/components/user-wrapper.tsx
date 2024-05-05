'use client'

import { deleteCookies } from "@/app/actions";
import { IChurch } from "@/models/church";
import { IUser } from "@/models/users";
import { ChevronDown, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiInfo, FiLogOut, FiUser } from "react-icons/fi";

export function UserWrapper({ user, church }: { user: IUser, church: IChurch }) {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const name = user?.name?.split(' ', 2) ?? church?.name.split(' ', 2) ?? '';

    const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShow(false);
        }
    };

    const handleLogout = async () => {
        await deleteCookies('gracehub.church');
        await deleteCookies('gracehub.user');
        await deleteCookies('gracehub.access_token');

        router.refresh();
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            {user || church ?
                <div className="relative" ref={ref}>
                    <button className="flex gap-3 items-center cursor-pointer" onClick={() => setShow(!show)}>
                        <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center font-semibold text-base">{name[0].substring(0, 1)}</div>
                        <span className="text-sm font-medium max-lg:hidden">{name[0] ?? ``} {name[1] ?? ``}</span>
                        <FiChevronDown />
                    </button>
                    {show &&
                        <div className="absolute z-50 right-0 w-full min-w-[200px] min-h-28 border rounded-md bg-white top-[110%]">
                            <ul className="p-3 flex flex-col gap-2">
                                <li>
                                    <Link href={'/minha-conta'} className="h-10 flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm"><FiUser size={20} />Minha conta</Link>
                                </li>
                                <li>
                                    <Link href={'/central-ajuda'} className="h-10 flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm"><FiInfo size={20} />Central de ajuda</Link>
                                </li>
                                <li>
                                    <button onClick={() => handleLogout()} className="h-10 w-full flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm"><FiLogOut size={20} />Sair</button>
                                </li>
                            </ul>
                        </div>
                    }
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