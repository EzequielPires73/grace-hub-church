import { Title } from "@/components/typography/title";
import Image from "next/image";

export default async function ChurchPage() {
    return (
        <div className="flex-1 flex flex-col gap-6 w-full max-w-[800px] px-3 mx-auto lg:py-6 mb-6">
            <div className="w-full h-[248px] lg:h-[336px] relative overflow-hidden">
                <Image src={'/assets/about.jpg'} alt="" fill objectFit="cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg"></div>
                <Image src={'/assets/about.jpg'} alt="" fill objectFit="contain" />
            </div>
            <div className="flex flex-col gap-3">
                <Title text={'História'} />
                <p className="text-sm font-light">No dia 10 de maio de 1935, nasceu Eurípedes Pereira de Sousa na cidade de Goiandira, Goiás. Criado em um lar cristão evangélico, Eurípedes fez parte da primeira geração de crentes da Assembleia de Deus em Goiás, especificamente em Goiânia, juntamente com seus pais.</p>
                <p className="text-sm font-light">Em 1955, Eurípedes casou-se com Adelita Silveira. Dois anos depois, sentindo-se direcionado pela voz de Deus, deixou a agitação de Goiânia e mudou-se para Catalão, interior de Goiás, onde assumiu seu chamado para trabalhar na obra do Senhor.</p>
                <p className="text-sm font-light">Ao chegar em Catalão, Eurípedes, já consagrado diácono, uniu-se ao Pastor Geraldo Mariano, fundador da igreja Assembleia de Deus na cidade. Com a transferência do Pastor Geraldo em 1962, Eurípedes assumiu a liderança da igreja e foi consagrado Pastor em 1964, no Rio de Janeiro, pelo Pastor Paulo Leivas Macalão, fundador do Ministério Madureira.</p>
                <p className="text-sm font-light">Como Pastor Presidente, Eurípedes dedicou-se incansavelmente ao crescimento da obra em Catalão. Apesar das limitações financeiras, seu compromisso em espalhar a Palavra de Deus era inabalável. Sob sua liderança, a igreja cresceu, e um novo templo foi construído em 1986, sendo inaugurado em 1988. O evangelho também se expandiu pela cidade e região.</p>
                <p className="text-sm font-light">Após liderar a obra por 55 anos, Eurípedes teve a honra de passar o legado pastoral ao seu neto, Dr. Cornélio Dias Barbosa Neto, o atual Pastor Presidente do Campo de Catalão. Esse campo inclui 31 congregações em Anhanguera, Campo Alegre de Goiás, Cumari, Davinópolis, Goiandira, Nova Aurora, Ouvidor, Pires Belo, Santo Antônio do Rio Verde e Três Ranchos, abrangendo mais de 5 mil membros.</p>
            </div>
        </div>
    )
}