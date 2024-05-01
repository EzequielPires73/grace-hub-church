'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FiMail, FiMenu, FiPhone } from "react-icons/fi";
import { MenuHeader } from "../menus/menu-header";
import { ButtonPrimary } from "../buttons/button-primary";

export function HeaderSite() {
    const path = usePathname();

    return (
        <>
            <header className="min-lg:hidden h-20 bg-white border-b fixed w-full top-0 flex justify-between items-center px-3 z-[9999]">
                <Link href={'/'}>
                    <Image src="/assets/logo-icon.svg" alt="Logo" width={64} height={64} />
                </Link>
                <MenuHeader />
            </header>
            <header className="max-lg:hidden w-full h-28 bg-white fixed top-0 left-0 z-[9999] border-b">
                <nav className="h-8 bg-blue-700">
                    <div className="flex justify-between items-center h-full w-full max-w-7xl mx-auto px-3">
                        <div className="flex gap-6 text-sm text-white font-medium">
                            <div className="flex items-center gap-2">
                                <FiPhone size={16} />
                                <span>(64) 99626-8117</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiMail size={16} />
                                <span>contato@adcatalao.com.br</span>
                            </div>
                        </div>
                        <ul className="text-white flex gap-4 max-lg:hidden">
                            <li><FaTwitter size={16} /></li>
                            <li><FaInstagram size={16} /></li>
                            <li><FaFacebook size={16} /></li>
                            <li><FaYoutube size={16} /></li>
                        </ul>
                    </div>
                </nav>
                <nav className="w-full max-w-7xl h-20 mx-auto px-3 flex items-center justify-between max-md:justify-center relative">
                    <div className="flex gap-6 items-center text-gray-800">
                        <Link href={'/'}>
                            <Image src="/assets/logo-icon.svg" alt="Logo" width={64} height={64} />
                        </Link>
                        <Link href={'/'} className={`${path.startsWith('/') && path.endsWith('/') && 'font-medium text-blue-500'}`}>Início</Link>
                        <Link href={'/about'} className={`${path.startsWith('/about') && 'font-medium text-blue-500'}`}>Igreja</Link>
                        <Link href={'/'}>Doação</Link>
                        <Link href={'/news'} className={`${path.startsWith('/news') && 'font-medium text-blue-500'}`}>Notícias</Link>
                        <Link href={'/events'} className={`${path.startsWith('/events') && 'font-medium text-blue-500'}`}>Eventos</Link>
                        <Link href={'/prayer'} className={`${path.startsWith('/prayer') && 'font-medium text-blue-500'}`}>Mural de orações</Link>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-gray-800">Entrar</button>
                        <ButtonPrimary title="Criar conta" />
                    </div>
                </nav>
            </header>
        </>
    )
}