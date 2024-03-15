import { ButtonPrimary } from "@/components/buttons/button-primary";
import { Title } from "@/components/typography/title";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiCalendar, FiClock } from "react-icons/fi";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <section className="flex flex-col w-full max-w-7xl px-3 mx-auto gap-6">
        <Image src={'/assets/banner-home.png'} alt="" width={1310} height={600} />
      </section>
      <section>
        <section className="bg-gray-100 min-h-[400px] py-10">
          <section className="h-full flex items-center flex-wrap gap-6 w-full max-w-7xl px-3 mx-auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vyDMGdJjANY?si=FRA3UZ0aSR9xZyLT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div className="flex flex-col items-center flex-1 gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-gray-800 text-center">ASSISTA AO VIVO NA ADCATALÃO</h2>
                <span className="text-sm text-gray-600 text-center">PRÓXIMA REUNIÃO: DOMINGO ÀS 18:30H</span>
              </div>
              <div className="flex gap-4">
                <Link href={'/'} className="h-10 min-w-[168px] border border-gray-700 text-gray-700 px-8 flex items-center justify-center">Contribua</Link>
                <Link href={'/'} className="h-10 min-w-[168px] border border-gray-700 text-gray-700 px-8 flex items-center justify-center">Testemunhos</Link>
              </div>
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-[.5px] bg-gray-800"></div>
                <span className="text-sm font-medium">Compartilhe</span>
                <div className="flex-1 h-[.5px] bg-gray-800"></div>
              </div>
              <ul className="text-gray-700 flex gap-4">
                <li><FaTwitter size={18} /></li>
                <li><FaEnvelope size={18} /></li>
                <li><FaFacebook size={18} /></li>
                <li><FaWhatsapp size={18} /></li>
              </ul>
            </div>
          </section>
        </section>

        <section className="bg-gray-900 min-h-[400px] max-md:py-10 relative">
          <section className="h-full flex flex-wrap items-center gap-4 w-full max-w-7xl px-3 mx-auto">
            <div className="flex-1 flex items-end justify-center h-full max-md:absolute max-md:bottom-0 max-md:opacity-20 max-md:-z-0">
              <Image src={"/assets/pastores.png"} alt="" width={348} height={200} />
            </div>
            <div className="flex flex-col min-w-72 flex-1 text-white z-50">
              <h2 className="text-xl font-semibold text-white">PR. CORNÉLIO NETO</h2>
              <h3 className="text-base font-medium mb-2 text-white/80">Pastor Presidente da AD Catalão</h3>
              <p className="mb-4 text-sm text-white/70">O PR. CORNÉLIO NETO é um homem de Deus cuja fé inspira e desafia milhares de pessoas ao redor do mundo. É um avivalista que dedica a sua vida para ver todos aqueles que o ouvem serem cheios da mesma chama que há em seu coração: o Espírito Santo. Com ousadia, intrepidez e pioneirismo desenvolve projetos nas áreas de formação de liderança e evangelismos criativos. Seus livros sobre o poder da fé e os programas de televisão e rádio que apresenta são instrumentos pelos quais tem feito o evangelho chegar a incontáveis multidões.</p>
              <Link href={'/'} className="h-10 min-w-[168px] w-fit border border-white text-white px-8 flex items-center justify-center">Conheça mais</Link>
            </div>
          </section>
        </section>

        <section className="bg-white min-min-h-[400px] py-10">
          <section className="h-full flex flex-col justify-center items-center gap-6 w-full max-w-7xl px-3 mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 text-center uppercase">Últimas notícias</h2>
            <div className="w-full grid lg:grid-cols-4 gap-4">
              <div className="p-2 border border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
                <div className="max-lg:w-20">
                  <Image src={'/assets/image-01.png'} alt="" width={300} height={300} />
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">Um Título para a notícia</h4>
                  <p className="text-sm text-gray-800">Uma pequena descrição para a notícia aqui.</p>
                  <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center">
                      <FiCalendar />
                      8 de mar de 2024
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock />
                      18:20
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 border border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
                <div className="max-lg:w-20">
                  <Image src={'/assets/image-02.png'} alt="" width={300} height={300} />
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">Um Título para a notícia</h4>
                  <p className="text-sm text-gray-800">Uma pequena descrição para a notícia aqui.</p>
                  <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center">
                      <FiCalendar />
                      8 de mar de 2024
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock />
                      18:20
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 border border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
                <div className="max-lg:w-20">
                  <Image src={'/assets/image-03.png'} alt="" width={300} height={300} />
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">Um Título para a notícia</h4>
                  <p className="text-sm text-gray-800">Uma pequena descrição para a notícia aqui.</p>
                  <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center">
                      <FiCalendar />
                      8 de mar de 2024
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock />
                      18:20
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 border border-gray-300 flex flex-col max-lg:flex-row max-lg:gap-3">
                <div className="max-lg:w-20">
                  <Image src={'/assets/image-04.png'} alt="" width={300} height={300} />
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-lg max-lg:text-base font-semibold text-gray-800 mt-2">Um Título para a notícia</h4>
                  <p className="text-sm text-gray-800">Uma pequena descrição para a notícia aqui.</p>
                  <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
                    <div className="flex gap-2 items-center">
                      <FiCalendar />
                      8 de mar de 2024
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock />
                      18:20
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href={'/'} className="h-10 min-w-[168px] border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Veja mais</Link>
          </section>
        </section>

        <section className="bg-gray-900">
          <section className="h-full min-h-[400px] py-10 flex flex-col justify-center items-center gap-6 w-full max-w-7xl px-3 mx-auto">
            <h2 className="text-xl font-semibold text-white text-center">CONHEÇA O CANAL DO YOUTUBE</h2>
            <div className="flex max-md:flex-wrap gap-6">
              <iframe width="100%" height="180px" src="https://www.youtube.com/embed/x22TixS8enE?si=fuFzgUmFVgoBlD0N" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              <iframe width="100%" height="180px" src="https://www.youtube.com/embed/hrjD804Auok?si=az4uHKD4V6Xn8hCt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              <iframe width="100%" height="180px" src="https://www.youtube.com/embed/TcdnSo8GeSo?si=d9zyxn9ecAcaxbn0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <Link href={'/'} className="h-10 min-w-[168px] border border-white text-white px-8 flex items-center justify-center">Assista mais</Link>
          </section>
        </section>

        <section className="bg-white">
          <section className="h-full min-h-[400px] py-10 flex flex-col justify-center items-center gap-6 w-full max-w-7xl px-3 mx-auto">
            <div className="w-10">
              <svg data-v-cbd729b4="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 58 51" aria-labelledby="Mural-de Orações-element" role="presentation"><title id="Mural-de Orações-element">Mural de Orações</title><g fill="currentColor"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" stroke="currentColor" d="M56.784 34.781 47.29 4.478c-.796-2.536-3.705-4.032-6.344-3.273L28.915 4.662C28.516 2.582 26.617 1 24.333 1c-2.572 0-4.666 2.004-4.666 4.469h-14C3.094 5.469 1 7.473 1 9.937v33.514c0 2.464 2.094 4.468 4.667 4.468h10.319c.918 1.37 2.496 2.235 4.27 2.235.498 0 .99-.07 1.464-.205l31.648-9.092c2.171-.623 3.632-2.5 3.632-4.674 0-.48-.073-.953-.216-1.402zM24.349 3.234c1.24 0 2.231.925 2.318 2.083l-.532.152H22c0-1.232 1.053-2.235 2.35-2.235zm2.318 4.469v5.596c0 .61-.524 1.107-1.167 1.107s-1.167-.497-1.167-1.107V8.367l2.334-.664zM5.633 45.685c-1.269 0-2.3-1.002-2.3-2.234V9.937c0-1.232 1.031-2.234 2.3-2.234H18.11l-8.899 2.594c-2.14.623-3.58 2.5-3.58 4.674 0 .48.073.953.214 1.401l9.049 29.313H5.633zm47.065-6.966L21.05 47.81c-1.436.414-3.008-.4-3.44-1.774l-9.494-30.31A2.478 2.478 0 0 1 8 14.972c0-1.178.79-2.196 1.969-2.533L22 8.981v4.308c0 1.848 1.57 3.352 3.5 3.352s3.5-1.504 3.5-3.352V6.97l12.617-3.624a2.83 2.83 0 0 1 .793-.112c1.23 0 2.292.759 2.648 1.886l9.492 30.31c.078.242.117.496.117.755 0 1.179-.791 2.197-1.97 2.534z"></path><path fill-rule="nonzero" d="M33.756 21.622c2.098-.722 4.062-.024 4.979 2.64.502 1.459-.243 3.606-1.893 6.088a28.03 28.03 0 0 1-1.965 2.597 28.164 28.164 0 0 1-.929 1.042l.722-.249-.09-.013a28.164 28.164 0 0 1-1.283-.236 28.275 28.275 0 0 1-3.148-.836c-2.828-.94-4.737-2.174-5.239-3.633-.917-2.663.2-4.423 2.298-5.145 1.142-.393 2.562 0 3.18.895.41.592 1.455.232 1.413-.486-.064-1.087.814-2.27 1.955-2.664zm-2.064 2.35c-.982-1.422-3.126-2.014-4.931-1.393-2.867.988-4.482 3.53-3.306 6.944.67 1.948 2.883 3.378 6.087 4.443 1.086.36 2.213.653 3.32.883a29.732 29.732 0 0 0 1.363.25l.08.012a.867.867 0 0 0 .753-.244 29.732 29.732 0 0 0 .998-1.118 29.787 29.787 0 0 0 2.073-2.74c1.868-2.811 2.732-5.3 2.061-7.248-1.176-3.414-4.013-4.424-6.88-3.437-1.806.622-3.13 2.408-3.03 4.133l1.412-.486z"></path><path d="M24.745 24.42c2.286-.787 4.242-1.218 5.867-1.293.837-.039 1.465-1.096 2.494-1.586.645-.308 1.8-.705 3.462-1.192l2.932 4.026-.624 4.754c-1.84 2.744-3.25 4.374-4.233 4.89-1.14.6-2.47.114-3.61-.028-2.612-.326-4.925-1.823-6.94-4.49l.652-5.081z"></path></g></g></svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 text-center uppercase">Mural de oração</h2>
            <span className="max-w-lg text-center">A oração sincera é o caminho mais puro para conversar com Deus. Abra seu coração, compartilhe seu pedido de oração e ore pelos outros no nosso mural virtual.</span>
            <Link href={'/'} className="h-10 min-w-[168px] border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Fazer um pedido</Link>
          </section>
        </section>
      </section>
    </main>
  );
}
