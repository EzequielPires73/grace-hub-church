'use client'

import { ButtonPrimary } from "@/components/buttons/button-primary";
import { Span } from "@/components/typography/span";
import { Title } from "@/components/typography/title";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreateEventSuccess() {
    const router = useRouter();

    return (
        <div className="h-[calc(100vh-96px)] px-3 flex flex-col items-center justify-center text-center">
            <Image src={'/assets/success.svg'} alt="Sucesso" width={300} height={300} />
            <Title text={'Obrigado por Participar!'} />
            <Span text={'Sua presença fez toda a diferença. Esperamos vê-lo novamente em nossos próximos eventos!'}/>
            <div className="mt-4"></div>
            <ButtonPrimary title="Continuar" onClick={() => router.back()} />
        </div>
    )
}