import { HeaderSite } from "@/components/headers/header-site";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col pt-24">
            <HeaderSite />
            {children}
            <footer className="bg-gray-900 py-4 px-3 gap-2 flex flex-col justify-center items-center">
                <Image src={'/assets/logo-white.png'} alt="" width={80} height={80} />
                <span className="text-sm text-white text-center">2024 © AD Catalão - Todos os direitos de uso do conteúdo desse site são reservados.</span>
            </footer>
        </div>
    );
}
