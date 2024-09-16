import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { UserWrapper } from "../user-wrapper";
import { ButtonPrimary } from "../buttons/button-primary";
import Image from "next/image";

export function MenuHeader({ user }) {
    const path = usePathname();
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}><FiMenu size={32} /></button>
            {show &&
                <div className="fixed top-0 left-0 max-lg:right-0 bottom-0 bg-background-aux/50 w-full">
                    <aside className="w-full h-full lg:max-w-lg bg-white p-6 flex flex-col gap-6">
                        <button onClick={() => setShow(!show)}><FiX size={24} /></button>
                        <Link href={'/'} className="mx-auto">
                            <img src="/assets/logo-v.svg" alt="Logo" className="w-[120px] h-[120px]" />
                        </Link>
                        <Link
                            href={'/'}
                            onClick={() => setShow(!show)}
                            className={`${path == '/' && 'font-medium text-blue-500'}`}>
                            Início
                        </Link>
                        <Link
                            href={'/igreja'}
                            onClick={() => setShow(!show)}
                            className={`${path.startsWith('/igreja') && 'font-medium text-blue-500'}`}>
                            Igreja
                        </Link>
                        {/* <Link href={'/'}>Doação</Link>  */}
                        <Link
                            href={'/noticias'}
                            onClick={() => setShow(!show)}
                            className={`${path.startsWith('/noticias') && 'font-medium text-blue-500'}`}>
                            Notícias
                        </Link>
                        <Link
                            href={'/eventos'}
                            onClick={() => setShow(!show)}
                            className={`${path.startsWith('/eventos') && 'font-medium text-blue-500'}`}>
                            Eventos
                        </Link>
                        <Link
                            href={'/mural-oracoes'}
                            onClick={() => setShow(!show)}
                            className={`${path.startsWith('/mural-oracoes') && 'font-medium text-blue-500'}`}>
                            Mural de orações
                        </Link>
                        <div className="border-b"></div>
                        <div className="flex-1"></div>
                        {user ?
                            <UserWrapper user={user} church={user.church} />
                            :
                            <div className="flex flex-col items-center gap-4">
                                <Link href={'/entrar'} className="text-gray-800 flex items-center">Entrar</Link>
                                <ButtonPrimary title="Criar conta" full />
                            </div>
                        }
                    </aside>
                </div>
            }
        </>
    )
}