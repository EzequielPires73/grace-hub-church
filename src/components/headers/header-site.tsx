'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FiMail, FiMenu, FiPhone } from "react-icons/fi";
import { MenuHeader } from "../menus/menu-header";
import { ButtonPrimary } from "../buttons/button-primary";
import { IUser } from "@/models/users";
import { UserWrapper } from "../user-wrapper";

export function HeaderSite({ user }: { user?: IUser }) {
    const path = usePathname();

    return (
        <>
            <header className="min-lg:hidden h-20 bg-white border-b fixed w-full top-0 flex justify-between items-center px-3 z-[9999]">
                <Link href={'/'}>
                    <Image src="/assets/logo-icon.svg" alt="Logo" width={64} height={64} />
                </Link>
                <MenuHeader user={user} />
            </header>
            <header className="max-lg:hidden w-full h-28 bg-white fixed top-0 left-0 z-[9999] border-b">
                <nav className="h-8 bg-blue-700">
                    <div className="flex justify-between items-center h-full w-full max-w-7xl mx-auto px-3">
                        <div className="flex gap-6 text-sm text-white font-medium">
                            <div className="flex items-center gap-2">
                                <FiPhone size={16} />
                                <span>(64) 3441-4477</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiMail size={16} />
                                <span>contato@adcatalao.com.br</span>
                            </div>
                        </div>
                        <ul className="text-white flex gap-4 max-lg:hidden">
                            {/* <li><FaTwitter size={16} /></li> */}
                            <li>
                                <Link href={'https://www.instagram.com/adcatalao/'} target="_blank">
                                    <FaInstagram size={16} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://www.facebook.com/ADCatalao/'} target="_blank">
                                    <FaFacebook size={16} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://www.youtube.com/channel/UCJFhfyUb7kh0PJINKHO3Prg'} target="_blank">
                                    <FaYoutube size={16} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="w-full max-w-7xl h-20 mx-auto px-3 flex items-center justify-between max-md:justify-center relative">
                    <div className="flex gap-8 items-center text-gray-800">
                        <Link href={'/'}>
                            <Image src="/assets/logo-icon.svg" alt="Logo" width={64} height={64} />
                        </Link>
                        <Link href={'/'} className={`${path.startsWith('/') && path.endsWith('/') && 'font-medium text-blue-500'}`}>Início</Link>
                        <Link href={'/igreja'} className={`${path.startsWith('/igreja') && 'font-medium text-blue-500'}`}>Igreja</Link>
                        {/* <Link href={'/'}>Doação</Link>  */}
                        <Link href={'/noticias'} className={`${path.startsWith('/noticias') && 'font-medium text-blue-500'}`}>Notícias</Link>
                        <Link href={'/eventos'} className={`${path.startsWith('/eventos') && 'font-medium text-blue-500'}`}>Eventos</Link>
                        <Link href={'/mural-oracoes'} className={`${path.startsWith('/mural-oracoes') && 'font-medium text-blue-500'}`}>Mural de orações</Link>
                    </div>
                    {user ?
                        <UserWrapper user={user} church={user.church} />
                        :
                        <div className="flex gap-4">
                            <Link href={'/entrar'} className="text-gray-800 flex items-center">Entrar</Link>
                            <ButtonPrimary title="Criar conta" />
                        </div>
                    }
                </nav>
            </header >
        </>
    )
}