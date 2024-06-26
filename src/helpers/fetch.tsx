import { cookies } from "next/headers";

export const fetchData = async (path: string, ttl?: number) => {
    const token = cookies().get('mobilar.token');
    const res = await fetch(process.env.NEXT_PUBLIC_URL_DEFAULT + path, {
        headers: {
            'authorization': token?.value ? `bearer ${token.value}` : `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        },
        next: {
            revalidate: ttl ?? 60 * 60 * 4
        }
    });
    const data = await res.json();

    return data;
}