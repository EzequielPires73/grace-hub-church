import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function MenuHeader() {
    const path = usePathname();
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}><FiMenu size={32} /></button>
            {show &&
                <aside className="fixed top-0 left-0 right-0 bottom-0 bg-white p-6 flex flex-col gap-6">
                    <button onClick={() => setShow(!show)}><FiX size={24} /></button>
                    <Link href={'/'} onClick={() => setShow(!show)} className={`${path == '/' && 'font-medium text-blue-500'}`}>Início</Link>
                    <Link href={'/about'} onClick={() => setShow(!show)} className={`${path == '/about' && 'font-medium text-blue-500'}`}>Igreja</Link>
                    <Link href={'/'} onClick={() => setShow(!show)}>Doação</Link>
                    <Link href={'/'} onClick={() => setShow(!show)}>Ao vivo</Link>
                    <Link href={'/prayer'} onClick={() => setShow(!show)} className={`${path == '/prayer' && 'font-medium text-blue-500'}`}>Mural de orações</Link>
                    <Link href={'/'} onClick={() => setShow(!show)}>Eventos</Link>
                    <div className="border-b"></div>
                    <div className="flex flex-col gap-4">
                        <button className="text-gray-800">Entrar</button>
                        <button className="h-10 min-w-[168px] border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Criar conta</button>
                    </div>
                </aside>
            }
        </>
    )
}