import { HomeSectionLive } from "@/components/home-sections/home-section-live";
import { HomeSectionLocations } from "@/components/home-sections/home-section-locations";
import { HomeSectionNotices } from "@/components/home-sections/home-section-notices";
import { HomeSectionPrayers } from "@/components/home-sections/home-section-prayers";
import { HomeSectionShepherd } from "@/components/home-sections/home-section-shepherd";
import { HomeSectionYoutube } from "@/components/home-sections/home-section-youtube";
import { fetchData } from "@/helpers/fetch";
import { notices } from "@/models/notice";
import Image from "next/image";

export default async function Home() {
  const { data: notices } = await fetchData('notices', 0);
  
  return (
    <main className="flex flex-col gap-6">
      <section className="flex flex-col w-full max-w-7xl px-3 mx-auto gap-6">
        <Image src={'/assets/banner-home.png'} alt="" width={1310} height={600} />
      </section>
      <section>
        <HomeSectionLive />
        <HomeSectionShepherd />
        <HomeSectionNotices notices={notices} />
        <HomeSectionYoutube />
        <HomeSectionPrayers />
      </section>
      <HomeSectionLocations />
    </main>
  );
}
