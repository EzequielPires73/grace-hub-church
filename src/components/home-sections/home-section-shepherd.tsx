import Image from "next/image";
import Link from "next/link";

export function HomeSectionShepherd() {
  return (
    <section className="h-fit relative bg-white">
      <section className="min-h-[400px] max-md:py-10 relative">
        <section className="h-full min-h-[400px] flex flex-wrap items-center gap-4 w-full max-w-7xl px-3 mx-auto">
          <img src={"/assets/pastores.png"} alt="" className="w-full lg:w-[348px] lg:h-[348px]" />
          <div className="flex flex-col min-w-72 lg:max-w-[50%] text-background-aux z-50">
            <h2 className="text-xl font-semibold text-background-aux">PR. CORNÉLIO NETO</h2>
            <h3 className="text-base font-medium mb-2 text-background-aux/90">Pastor Presidente da AD Catalão</h3>
            <p className="mb-4 text-sm text-background-aux/80">O Pastor Cornélio Neto está à frente do campo de Catalão há sete anos e, desde então, tem sido um canal de bênção em nossas vidas. Além de pastor, ele é médico, esposo da Pastora Camila Lacerda e pai de João Pedro, Isabelle e Nathalia. Dedica sua vida ao reino de Deus, inspirando e crescendo na graça e no conhecimento, tendo como tema central Jesus Cristo, que salva, cura e liberta através do Espírito Santo. Com ousadia e intrepidez, tem sempre sido uma referência em sua vida e ministério.</p>
            <Link href={'/igreja'} className="h-10 min-w-[168px] w-fit border border-background-aux text-background-aux px-8 flex items-center justify-center">Conheça mais sobre a Igreja</Link>
          </div>
        </section>
      </section>
    </section>
  )
}