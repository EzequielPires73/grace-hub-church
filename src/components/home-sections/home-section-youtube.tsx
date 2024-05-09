import Link from "next/link";

export function HomeSectionYoutube() {
    return (
        <section className="min-h-[400px] relative" style={{
            background: 'url(assets/bg-home.jpg)',
            backgroundSize: 'cover'
          }}>
            <section className="bg-gray-900/80">
              <section className="h-full min-h-[400px] py-10 flex flex-col justify-center items-center gap-6 w-full max-w-7xl px-3 mx-auto">
                <h2 className="text-xl font-semibold text-white text-center">CONHEÇA O CANAL DO YOUTUBE</h2>
                <div className="flex flex-wrap justify-center max-md:flex-wrap gap-6">
                  <iframe width="360px" height="202px" src="https://www.youtube.com/embed/x22TixS8enE?si=fuFzgUmFVgoBlD0N" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  <iframe width="360px" height="202px" src="https://www.youtube.com/embed/hrjD804Auok?si=az4uHKD4V6Xn8hCt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  <iframe width="360px" height="202px" src="https://www.youtube.com/embed/TcdnSo8GeSo?si=d9zyxn9ecAcaxbn0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <Link href={'/'} className="h-10 min-w-[168px] border border-white text-white px-8 flex items-center justify-center">Assista mais</Link>
              </section>
            </section>
          </section>
    )
}