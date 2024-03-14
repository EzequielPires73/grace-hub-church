import { HeaderAdmin } from "@/components/headers/header-admin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const res = cookies().get('adcatalao.user');
    if(!res) {
        redirect('/login');
    }

    const user = JSON.parse(res.value);

    return (
        <div className="flex flex-col gap-6">
            <HeaderAdmin user={user}/>
            {children}
        </div>
    );
}
