import { Label } from "@/components/typography/label";
import { Span } from "@/components/typography/span";
import { Title } from "@/components/typography/title";
import Image from "next/image";
import { FiCalendar, FiClock, FiShare } from "react-icons/fi";

export default function NewsPage() {
    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-[800px] mx-auto py-6 mb-6">
            <div className="w-full h-[336px] relative rounded-lg overflow-hidden">
                <Image src={'/assets/image-02.png'} alt="" fill objectFit="cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                <Image src={'/assets/image-02.png'} alt="" fill objectFit="contain" />
            </div>
            <div className="w-full flex items-center justify-between gap-6">
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
            </div>
            <div className="flex flex-col gap-3">
                <Title text={'Conferência Lagoinha Global já tem data marcada'} />
                <Label text={'De 15 a 17 de agosto de 2024'} />
                <p className="text-sm font-light">Vem aí a segunda edição da Lagoinha Global Conference, um evento que engloba todas as nações para um tempo de busca intensa pelo Senhor, por avivamento e por revelação da Sua vontade. Um tempo de adoração, crescimento e comunhão.

                    Como Lagoinha Global já estamos em contagem regressiva para a abertura das inscrições. Somos fruto da missão designada por Jesus de espalhar a mensagem da Cruz por todo o mundo. São mais de 600 igrejas em praticamente todos os continentes da terra. A segunda edição da Lagoinha Global Conference vem para marcar mais uma vez a história da Lagoinha. É tempo de celebrar e viver o extraordinário!

                    A novidade é que neste ano, o evento será realizado na Lagoinha Alphaville, em São Paulo, nos dias 15, 16 e 17 de agosto. Então, já separe estes dias na sua agenda para viver o melhor de Deus!

                    O evento está sendo preparado com muito carinho e conta com uma plataforma própria para informações e inscrições.

                    Acesse lagoinhaglobalconf.com e fique atento para não perder a abertura das inscrições.

                    :: Comunicação Lagoinha Global</p>
            </div>
        </div>
    )
}