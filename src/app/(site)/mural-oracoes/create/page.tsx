import { CreatePrayerProvider } from "@/contexts/create-prayer-context";
import CreatePrayerContent from "./content";
import { cookies } from "next/headers";

export default function CreatePrayerPage() {
    const res = cookies().get('adcatalao.user');

    return (
        <CreatePrayerProvider userId={res?.value && JSON.parse(res?.value).id}>
            <CreatePrayerContent />
        </CreatePrayerProvider>
    )
}