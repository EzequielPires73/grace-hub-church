import { cookies } from "next/headers";
import { MyAccountContent } from "./content";
import { redirect } from "next/navigation";

export default function MyAccountPage() {
    const res = cookies().get('adcatalao.user');
    if(!res) {
        redirect('/login');
    }

    const user = JSON.parse(res.value);

    return (
        <MyAccountContent user={user}/>
    )
}