import { ButtonShare } from "@/components/buttons/button-shared";
import { Title } from "@/components/typography/title";
import { fetchData } from "@/helpers/fetch";
import { getImagePath } from "@/helpers/functions";
import { INotice } from "@/models/notice";
import Image from "next/image";
import { FiCalendar, FiClock, FiShare } from "react-icons/fi";

export default async function NewsPage({ params }) {
    const { data: notice }: { data: INotice } = await fetchData(`notices/${params.id}`, 0);
    const date = new Date(notice.createdAt).toLocaleDateString();
    const time = new Date(notice.createdAt).toLocaleTimeString();

    function createMarkup(content: string) {
        return { __html: content.replaceAll('pt;', 'px;') };
    }

    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-[800px] px-3 mx-auto lg:py-6 mb-6">
            {notice?.image &&
                <div className="w-full h-[248px] lg:h-[336px] relative rounded-lg overflow-hidden">
                    <img src={getImagePath(notice.image)} alt="" className="object-cover w-full h-full absolute" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                    <img src={getImagePath(notice.image)} alt="" className="object-contain w-full h-full absolute" />
                </div>
            }
            <div className="w-full flex items-center justify-between gap-6">
                <div className="flex gap-6 items-center text-sm text-gray-800">
                    <div className="flex gap-2 items-center">
                        <FiCalendar size={20} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiClock size={20} />
                        <span>{time.split(':')[0]}:{time.split(':')[1]}</span>
                    </div>
                </div>
                <ButtonShare title={notice.title} url={`https://adcatalao.vercel.app/noticias/${notice.id}`} />
            </div>
            <div className="flex flex-col gap-3">
                <Title text={notice.title} />
                <p className="text-sm font-normal flex flex-col gap-2">{notice.introduction}</p>
                {/* <p className="text-sm font-normal flex flex-col gap-2" dangerouslySetInnerHTML={createMarkup(notice.content)} /> */}
            </div>
        </div>
    )
}