import { ButtonIcon } from "@/components/buttons/button-icon";
import { CardCult } from "@/components/cards/card-cult";
import { Label } from "@/components/typography/label";
import { Span } from "@/components/typography/span";
import { SpanMedium } from "@/components/typography/span-medium";
import { Title } from "@/components/typography/title";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FiCalendar, FiClock, FiGlobe, FiMail, FiMapPin, FiPhone, FiShare } from "react-icons/fi";

export default function NewsPage() {
    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-[800px] px-3 mx-auto lg:py-6 mb-6">
            <div className="w-full h-[248px] lg:h-[336px] relative rounded-lg overflow-hidden">
                <Image src={'/assets/church.jpg'} alt="" fill objectFit="cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                <Image src={'/assets/church.jpg'} alt="" fill objectFit="contain" />
            </div>
            {/* <div className="w-full flex items-center justify-between gap-6">
                <div className="flex gap-6 items-center text-sm text-gray-800">
                    <div className="flex gap-2 items-center">
                        <FiCalendar size={20} />
                        8 de mar de 2024
                    </div>
                    <div className="flex items-center gap-2">
                        <FiClock size={20} />
                        18:20
                    </div>
                </div>
                <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <FiShare />
                </button>
            </div> */}
            <div className="flex flex-col gap-6">
                <Title text={'AD Catalão - Campo Alegre de Goiás'} />
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
                <div className="flex flex-col gap-2">
                    <Title text={'Programação da igreja'} />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <Label text={'Segunda'} />
                            <div className="flex flex-col gap-4">
                                <CardCult />
                                <CardCult />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label text={'Quinta'} />
                            <div className="flex flex-col gap-4">
                                <CardCult />
                                <CardCult />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label text={'Sábado'} />
                            <div className="flex flex-col gap-4">
                                <CardCult />
                                <CardCult />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label text={'Domingo'} />
                            <div className="flex flex-col gap-4">
                                <CardCult />
                                <CardCult />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}