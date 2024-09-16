import Image from "next/image";
import Link from "next/link";

export function HomeSectionSchedule() {
    return (
        <section className="py-10 bg-gray-100">
            <div className="w-full max-w-5xl mx-auto flex min-h-[500px]">
                <div className="flex-1 bg-white">
                    <div className="p-6 flex flex-col gap-4">
                        <h3 className="text-3xl w-fit font-semibold">Programação</h3>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium">Domingo</h4>
                            <span>09h30 - Escola Bíblica</span>
                            <span>18h30 - Culto de celebração</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium">Segunda-feira</h4>
                            <span>07h30 - Oração</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium">Terça-feira</h4>
                            <span>07h30 - Oração</span>
                            <span>19h30 - Culto de ensino</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium">Quarta-feira</h4>
                            <span>07h30 - Oração</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium">Quinta-feira</h4>
                            <span>07h30 - Oração</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium">Sexta-feira</h4>
                            <span>07h30 - Oração</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium">Sábado</h4>
                            <span>07h30 - Oração</span>
                        </div>
                        <div className="flex flex-col">
                            <p>Para mais informações entre em contato</p>
                            <Link href={'/'} className="h-10 w-fit mt-2 border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Saiba mais</Link>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex flex-1 relative">
                    <img src={'/assets/bg-home-5.jpg'} alt="" className="object-cover w-full h-full" />
                </div>
            </div>
        </section>
    )
}