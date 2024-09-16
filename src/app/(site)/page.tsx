import { HomeSectionLive } from "@/components/home-sections/home-section-live";
import { HomeSectionLocations } from "@/components/home-sections/home-section-locations";
import { HomeSectionNotices } from "@/components/home-sections/home-section-notices";
import { HomeSectionPrayers } from "@/components/home-sections/home-section-prayers";
import HomeSectionRadio from "@/components/home-sections/home-section-radio";
import { HomeSectionSchedule } from "@/components/home-sections/home-section-schedule";
import { HomeSectionShepherd } from "@/components/home-sections/home-section-shepherd";
import { HomeSectionYoutube } from "@/components/home-sections/home-section-youtube";
import { fetchData } from "@/helpers/fetch";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

export default async function Home() {
  const { data: notices } = await fetchData('notices', 0);

  return (
    <main className="flex flex-col gap-6 ">
      <section>
        <div className="bg-background-aux flex flex-col">
          <div className="relative w-full max-md:h-[calc(100vh-80px)] h-[calc(100vh-96px)] flex justify-center">
            <img src={'/assets/bg-home-4.png'} alt="" className="object-cover w-full h-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-linear flex flex-col items-center justify-center text-center">
              <h1 className="text-white text-4xl lg:text-6xl font-semibold">Bem-vindo à Família AD Catalão!</h1>
              <h2 className="text-white text-xl lg:text-3xl font-light lg:mt-4">Junte-se a nós em uma jornada de fé, amor e comunidade.</h2>
              <Link href={'/igreja'} className="h-14 min-w-[168px] border bg-white hover:bg-gray-100 active::bg-gray-200 transition-colors text-gray-800 px-12 flex items-center justify-center gap-4 mt-4">
                Saiba mais
              </Link>
            </div>
            <Link href={'#section-live'} className="absolute bottom-4 border border-white text-white p-2">
              <FaArrowDown />
            </Link>
          </div>
          <HomeSectionRadio />
          <HomeSectionLive />
        </div>
        <HomeSectionSchedule />
        <HomeSectionShepherd />
        <HomeSectionNotices notices={notices} />
        <HomeSectionPrayers />
        <HomeSectionYoutube />
      </section>
      <HomeSectionLocations />
    </main>
  );
}
