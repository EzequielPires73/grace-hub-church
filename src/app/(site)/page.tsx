import { HomeSectionLive } from "@/components/home-sections/home-section-live";
import { HomeSectionLocations } from "@/components/home-sections/home-section-locations";
import { HomeSectionNotices } from "@/components/home-sections/home-section-notices";
import { HomeSectionPrayers } from "@/components/home-sections/home-section-prayers";
import HomeSectionRadio from "@/components/home-sections/home-section-radio";
import { HomeSectionShepherd } from "@/components/home-sections/home-section-shepherd";
import { HomeSectionYoutube } from "@/components/home-sections/home-section-youtube";
import { fetchData } from "@/helpers/fetch";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";

export default async function Home() {
  const { data: notices } = await fetchData('notices', 0);

  return (
    <main className="flex flex-col gap-6">
      <section>
        <div className="relative w-full h-[calc(100vh-96px)] flex justify-center">
          <Image src={'/assets/bg-home-4.jpg'} alt="" fill objectFit="cover" />
          <button className="absolute bottom-4 border border-white text-white p-2">
            <FaArrowDown />
          </button>
        </div>
        <HomeSectionRadio />
        <HomeSectionLive />
        <HomeSectionShepherd />
        <HomeSectionNotices notices={notices} />
        <HomeSectionPrayers />
        <HomeSectionYoutube />
      </section>
      <HomeSectionLocations />
    </main>
  );
}
