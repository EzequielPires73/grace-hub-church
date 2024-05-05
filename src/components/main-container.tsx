'use client'

import { Airplay, ArrowDownWideNarrow, ArrowUpWideNarrow, Banknote, Bell, CalendarCheck, ChevronDown, ChevronUp, Church, Cog, DollarSign, Images, LayoutDashboard, LucideIcon, Menu, Newspaper, PieChart, School2, User, UserCog, Video, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { UserWrapper } from "./user-wrapper-2";
import { usePathname } from "next/navigation";

interface MenuProps {
    name: string, path: string, icon?: LucideIcon, items?: Array<MenuProps>, active?: string,
}

const list: Array<MenuProps> = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Cultos', path: '/cultos', icon: Video },
    { name: 'Usuários', path: '/usuarios', icon: User },
    { name: 'Ministérios', path: '/ministerios', icon: UserCog },
    { name: 'Mural de oração', path: '/mural-oracao', icon: Airplay },
    { name: 'Notícias', path: '/noticias', icon: Newspaper },
    { name: 'Notificações', path: '/notificacoes', icon: Bell },
    { name: 'Congregações', path: '/congregacoes', icon: School2 },
    { name: 'Eventos', path: '/eventos', icon: CalendarCheck },
    { name: 'Mídias', path: '/midias', icon: Images },
    { name: 'Contribuições', path: '/contribuicoes', icon: Banknote },
    {
        name: 'Financeiro', path: '/financeiro', icon: DollarSign, items: [
            {
                name: 'Relatórios', path: '/financeiro/relatorios', icon: PieChart
            },
            {
                name: 'Configurações', path: '/financeiro/configuracoes', icon: Cog, items: [
                    {name: 'Categorias', path: '/financeiro/configuracoes/categorias',},
                    {name: 'Centro de Custo', path: '/financeiro/configuracoes/centro-custo',},
                    {name: 'Contas', path: '/financeiro/configuracoes/contas',},
                    {name: 'Fornecedores', path: '/financeiro/configuracoes/fornecedores',},
                ]
            },
            {
                name: 'Despesas', path: '/financeiro/despesas', icon: ArrowDownWideNarrow
            },
            {
                name: 'Receitas', path: '/financeiro/receitas', icon: ArrowUpWideNarrow
            }
        ]
    },
];

export function MainContainerLayout({ children }: { children?: any }) {
    const path = usePathname();
    const [show, setShow] = useState(true);
    return (
        <main className="h-screen flex flex-col">
            <aside className={`fixed w-72 h-aside overflow-y-auto top-20 left-4 bg-white shadow-md p-4 rounded-xl ${show ? 'animate-aside-show' : 'animate-aside-hidden'}`}>
                <ul className="flex flex-col gap-1">
                    {
                        list.map((item, index) => (
                            <li key={index}>
                                {item.items ?
                                    <AsideMenu
                                        active={path}
                                        {...item}
                                    /> :
                                    <AsideButton
                                        active={path}
                                        {...item}
                                    />
                                }
                            </li>
                        ))
                    }
                </ul>
            </aside>
            <header className="fixed top-0 left-0 w-screen h-16 bg-white shadow-md z-[9999] flex items-center justify-between">
                <div className="flex flex-row gap-4 items-center w-80 px-4 h-10 border-r text-zinc-800">
                    <button onClick={() => setShow(!show)} className="cursor-pointer">
                        {show ? <Menu size={20} /> : <X size={20} />}
                    </button>
                    <h1 className="font-semibold">GraceHub</h1>
                </div>
                <div className="px-4 h-full flex items-center">
                    <UserWrapper />
                </div>
            </header>
            <div className={`${show ? 'animate-expanded-show' : 'animate-expanded-hidden'} flex-1 pt-20 pb-4 px-4`}>
                {children}
            </div>
        </main>
    )
}

function AsideButton({ name, icon: Icon, path, active }: MenuProps) {
    return (
        <Link href={path} className={`link ${path == active || (active.startsWith(path) && path != '/') ? 'link-active' : ''}`}>
            {Icon && <Icon size={18} />}
            {name}
        </Link>
    )
}
function AsideMenu({ name, icon: Icon, path, active, items }: MenuProps) {
    const [show, setShow] = useState(false);
    return (
        <div className={`flex flex-col gap-1 ${show && 'bg-blue-100 rounded-lg'}`}>
            <button onClick={() => setShow(!show)} className={`link ${path == active || (active.startsWith(path) && path != '/') ? 'link-active' : ''} w-full justify-between`}>
                <div className="flex items-center gap-3">
                    <Icon size={18} />
                    {name}
                </div>
                {show ? <ChevronUp size={18} className="mt-1" /> : <ChevronDown size={18} className="mt-1" />}
            </button>
            {show &&
            <div className="p-2">
                <ul className="p-2 bg-blue-950/5 rounded-lg flex flex-col gap-1">
                    {
                        items.map((item, index) => (
                            <li key={index}>
                                {item.items ?
                                    <AsideMenu
                                        active={active}
                                        {...item}
                                    /> :
                                    <AsideButton
                                        active={active}
                                        {...item}
                                    />
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
            }
        </div>
    )
}


