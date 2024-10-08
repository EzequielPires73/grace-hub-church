import { ButtonIcon } from "@/components/buttons/button-icon";
import { CardCult, WeekDay } from "@/components/cards/card-cult";
import { Label } from "@/components/typography/label";
import { SpanMedium } from "@/components/typography/span-medium";
import { Title } from "@/components/typography/title";
import { fetchData } from "@/helpers/fetch";
import { getImagePath } from "@/helpers/functions";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default async function NewsPage({ params }) {
    const { data } = await fetchData(`churches/${params.id}`, 0);
    const { data: cults } = await fetchData(`cults/weekly-schedule/${params.id}`, 0);

    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-[800px] px-3 mx-auto lg:py-6 mb-6">
            {data?.logo &&
                <div className="w-full h-[248px] lg:h-[336px] relative overflow-hidden">
                    <img src={getImagePath(data.logo)} alt="" className="object-cover w-full h-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                    <img src={getImagePath(data.logo)} alt="" className="object-contain w-full h-full absolute" />
                </div>
            }
            <div className="flex flex-col gap-6">
                <Title text={data.name} />
                <div className="flex flex-col gap-4">
                    <Link href='/' className="flex gap-2 items-center">
                        <FiPhone />
                        <SpanMedium text={"(64) 99626-8117"} />
                    </Link>
                    <Link href='/' className="flex gap-2 items-center">
                        <FiGlobe />
                        <SpanMedium text={"adcatalao.com.br"} />
                    </Link>
                    <Link href='/' className="flex gap-2 items-center">
                        <FiMapPin />
                        <SpanMedium text={"Av. José Marcelinoo, 140 - Centro, Campo Alegre - GO"} />
                    </Link>
                    <Link href='/' className="flex gap-2 items-center">
                        <FiMail />
                        <SpanMedium text={"contato@adcatalao.com.br"} />
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Title text={'Redes sociais'} />
                    <div className="flex gap-4">
                        <ButtonIcon Icon={FaFacebook} />
                        <ButtonIcon Icon={FaInstagram} />
                        <ButtonIcon Icon={FaYoutube} />
                        <ButtonIcon Icon={FaTwitter} />
                        <ButtonIcon Icon={FaEnvelope} />
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.73245791005!2d-47.9494642139159!3d-18.176234538636475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a6667404dc8d1f%3A0xe39f03729b22f5d!2sAssembleia%20de%20Deus%20Minist%C3%A9rio%20Madureira%20-%20Templo%20Central!5e0!3m2!1spt-BR!2sbr!4v1713394144579!5m2!1spt-BR!2sbr" width="full" height="300" loading="lazy"></iframe>
                {
                cults?.segunda.length > 0 ||
                cults?.terca.length > 0 ||
                cults?.quarta.length > 0 ||
                cults?.quinta.length > 0 ||
                cults?.sexta.length > 0 ||
                cults?.sabado.length > 0 ||
                cults?.domingo.length > 0 ?
                    <div className="flex flex-col gap-2">
                        <Title text={'Programação da igreja'} />
                        <div className="grid lg:grid-cols-2 gap-4">
                            {
                                cults?.segunda && cults?.segunda.length > 0 &&
                                <div className="flex flex-col gap-2">
                                    <Label text={'Segunda-Feira'} />
                                    <div className="flex flex-col gap-4">
                                        {cults?.segunda.map(item => <CardCult key={item.id} cult={item} weekDay={WeekDay.monday} />)}
                                    </div>
                                </div>
                            }
                            {
                                cults?.terca && cults?.terca.length > 0 &&
                                <div className="flex flex-col gap-2">
                                    <Label text={'Terça-Feira'} />
                                    <div className="flex flex-col gap-4">
                                        {cults?.terca.map(item => <CardCult key={item.id} cult={item} weekDay={WeekDay.tuesday} />)}
                                    </div>
                                </div>
                            }
                            {
                                cults?.quarta && cults?.quarta.length > 0 &&
                                <div className="flex flex-col gap-2">
                                    <Label text={'Quarta-Feira'} />
                                    <div className="flex flex-col gap-4">
                                        {cults?.quarta.map(item => <CardCult key={item.id} cult={item} weekDay={WeekDay.wednesday} />)}
                                    </div>
                                </div>
                            }
                            {
                                cults?.quinta && cults?.quinta.length > 0 &&
                                <div className="flex flex-col gap-2">
                                    <Label text={'Quinta-Feira'} />
                                    <div className="flex flex-col gap-4">
                                        {cults?.quinta.map(item => <CardCult key={item.id} cult={item} weekDay={WeekDay.thursday} />)}
                                    </div>
                                </div>
                            }
                            {
                                cults?.sexta && cults?.sexta.length > 0 &&
                                <div className="flex flex-col gap-2">
                                    <Label text={'Sexta-Feira'} />
                                    <div className="flex flex-col gap-4">
                                        {cults?.sexta.map(item => <CardCult key={item.id} cult={item} weekDay={WeekDay.friday} />)}
                                    </div>
                                </div>
                            }
                            {
                                cults?.sabado && cults?.sabado.length > 0 &&
                                <div className="flex flex-col gap-2">
                                    <Label text={'Sábado'} />
                                    <div className="flex flex-col gap-4">
                                        {cults?.sabado.map(item => <CardCult key={item.id} cult={item} weekDay={WeekDay.saturday} />)}
                                    </div>
                                </div>
                            }
                            {
                                cults?.domingo && cults?.domingo.length > 0 &&
                                <div className="flex flex-col gap-2">
                                    <Label text={'Domingo'} />
                                    <div className="flex flex-col gap-4">
                                        {cults?.domingo.map(item => <CardCult key={item.id} cult={item} weekDay={WeekDay.sunday} />)}
                                    </div>
                                </div>
                            }
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}