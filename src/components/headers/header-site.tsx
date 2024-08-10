'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { MenuHeader } from "../menus/menu-header";
import { IUser } from "@/models/users";
import { useState } from "react";

export function HeaderSite({ user }: { user?: IUser }) {
    const [showAside, setShowAside] = useState(false);
    const path = usePathname();

    return (
        <>
            <header className="min-lg:hidden h-20 bg-white border-b fixed w-full top-0 flex justify-between items-center px-3 z-[9999]">
                <Link href={'/'}>
                    <Image src="/assets/logo-icon.svg" alt="Logo" width={64} height={64} />
                </Link>
                <MenuHeader user={user} />
            </header>
            <header className="max-lg:hidden w-full bg-white fixed top-0 left-0 z-[9999] shadow">
                <nav className="w-full max-w-7xl h-24 mx-auto px-3 flex items-center justify-between">
                    <div className="col-span-2 flex items-center justify-start">
                        <MenuHeader user={user} />
                    </div>
                    <Link href={'/'} className="col-span-8 flex items-center justify-center">
                        <Image src="/assets/logo-icon.svg" alt="Logo" width={80} height={80} />
                    </Link>
                    <ul className="text-gray-800 flex items-center justify-end gap-6 max-lg:hidden col-span-2">
                        <li>
                            <Link href={'https://www.instagram.com/adcatalao/'} target="_blank">
                                <FaInstagram size={24} />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://www.facebook.com/ADCatalao/'} target="_blank">
                                <FaFacebook size={24} />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://www.youtube.com/channel/UCJFhfyUb7kh0PJINKHO3Prg'} target="_blank">
                                <FaYoutube size={24} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header >
        </>
    )
}