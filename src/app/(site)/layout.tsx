import { HeaderSite } from "@/components/headers/header-site";
import { cookies } from "next/headers";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const res = cookies().get('adcatalao.user');

    return (
        <div className="flex flex-col gap-6 min-h-screen pt-24 max-lg:pt-20">
            <HeaderSite user={res?.value && JSON.parse(res?.value)}/>
            {children}
            <footer className="bg-gray-900 py-4 px-3 gap-2 flex flex-col justify-center items-center">
                <Image src={'/assets/logo-white.png'} alt="" width={80} height={80} />
                <span className="text-sm text-white text-center">2024 © AD Catalão - Todos os direitos de uso do conteúdo desse site são reservados.</span>
            </footer>
        </div>
    );
}
