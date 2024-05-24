'use client'

import { ButtonPrimary } from "@/components/buttons/button-primary";
import Select from "@/components/forms-components/select";
import { Textarea } from "@/components/forms-components/textarea";
import { Title } from "@/components/typography/title";
import { useCreatePrayer } from "@/contexts/create-prayer-context";

export default function CreatePrayerContent() {
    const { prayer, create } = useCreatePrayer();

    return (
        <div className="flex-1 w-full max-w-lg mx-auto px-3 flex flex-col gap-4">
            <Title text={'Fazer Pedido'} />
            <Select
                label="Qual o motivo do seu pedido?"
                placeholder="Selecione um motivo"
                {...prayer.reason}
            />
            <Textarea label="O que gostaria de pedir?" placeholder="Insira aqui a mensagem" {...prayer.description} />
            <Select label="Deseja receber a visita de algum membro?" {...prayer.receiveVisit} />
            <Select label="Deseja receber uma ligação de algum membro?" {...prayer.receiveCall} />
            <Select label="Gostaria de deixar o seu pedido publicado no mural?" {...prayer.postOnWall} />
            <ButtonPrimary title="Confirmar" full onClick={create} />
        </div>
    )
}