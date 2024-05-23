import Image from "next/image";
import Link from "next/link";

export function HomeSectionShepherd() {
    return (
        <section className="h-fit relative" style={{
            background: 'url(assets/bg-home.jpg)',
            backgroundSize: 'cover'
          }}>
            <section className="bg-gray-900/80 min-h-[400px] max-md:py-10 relative">
              <section className="h-full min-h-[400px] flex flex-wrap items-center gap-4 w-full max-w-7xl px-3 mx-auto">
                <div className="hidden min-h-[400px] flex-1 lg:flex items-end justify-center h-full max-md:absolute max-md:bottom-0 max-md:opacity-20 max-md:-z-0">
                  <Image src={"/assets/pastores.png"} alt="" width={348} height={200} />
                </div>
                <div className="flex flex-col min-w-72 flex-1 text-white z-50">
                  <h2 className="text-xl font-semibold text-white">PR. CORNÉLIO NETO</h2>
                  <h3 className="text-base font-medium mb-2 text-white/80">Pastor Presidente da AD Catalão</h3>
                  <p className="mb-4 text-sm text-white/70">O PR. CORNÉLIO NETO é um homem de Deus cuja fé inspira e desafia milhares de pessoas ao redor do mundo. É um avivalista que dedica a sua vida para ver todos aqueles que o ouvem serem cheios da mesma chama que há em seu coração: o Espírito Santo. Com ousadia, intrepidez e pioneirismo desenvolve projetos nas áreas de formação de liderança e evangelismos criativos. Seus livros sobre o poder da fé e os programas de televisão e rádio que apresenta são instrumentos pelos quais tem feito o evangelho chegar a incontáveis multidões.</p>
                  <Link href={'/about'} className="h-10 min-w-[168px] w-fit border border-white text-white px-8 flex items-center justify-center">Conheça mais</Link>
                </div>
              </section>
            </section>
          </section>
    )
}