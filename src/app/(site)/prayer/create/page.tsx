'use client'

import { ButtonPrimary } from "@/components/buttons/button-primary";
import { InputText } from "@/components/forms-components/input-text";
import Select from "@/components/forms-components/select";
import { SelectBoolean } from "@/components/forms-components/select-boolean";
import { Textarea } from "@/components/forms-components/textarea";
import { Title } from "@/components/typography/title";
import { useBoolean } from "@/hooks/useBoolean";
import { useSelect } from "@/hooks/useSelect";
import { motiveOptions } from "@/utils/data";

export default function CreatePrayer() {
    const reason = useSelect(motiveOptions)
    const teste = useBoolean();

    return (
        <div className="flex-1 w-full max-w-lg mx-auto px-3 flex flex-col gap-4">
            <Title text={'Fazer Pedido'} />
            <Select label="Qual o motivo do seu pedido?" {...reason} />
            <InputText label="Qual o seu nome?" placeholder="Insira seu nome" />
            <Textarea label="O que gostaria de pedir?" placeholder="Insira aqui a mensagem"/>
            <SelectBoolean label="Deseja receber a visita de algum membro?" {...teste} />
            <SelectBoolean label="Deseja receber uma ligação de algum membro?" {...teste} />
            <SelectBoolean label="Gostaria de deixar o seu pedido publicado no mural?" {...teste} />
            <ButtonPrimary title="Confirmar" full/>
        </div>
    )
}