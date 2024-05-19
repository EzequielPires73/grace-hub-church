'use client'

import { useForm } from "@/hooks/useForm";
import { ModalDefault } from "./modal-default";
import { InputText } from "../forms-components/input-text";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "../forms-components/select";
import { useSelect } from "@/hooks/useSelect";
import { positionData } from "@/utils/data";
import { IChurch } from "@/models/church";
import { IEventSchedule } from "@/models/event-schedule";
import { api } from "@/services/api";

export function ModalCreatePresence({ churches, schedule }: { churches: IChurch[], schedule: IEventSchedule }) {
    const router = useRouter();
    const name = useForm();
    const congregation = useSelect(churches?.map(item => {
        return {
            name: item.name,
            enum: item.id,
            id: item.id
        }
    }));
    const position = useSelect(positionData);
    const cpf = useForm('cpf');
    const phone = useForm('phone');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (name.validate() && cpf.validate() && position.validate() && congregation.validate()) {
                const { data, message, success } = await api.post('event-schedule/mark-presence', {
                    name: name.value,
                    cpf: cpf.value,
                    phone: phone.value,
                    position: position.value.enum,
                    congregationId: congregation.value.id,
                    id: schedule.id
                }).then(res => res.data);
                console.log(data, message, success);
                alert(message);
                name.setValue();
                cpf.setValue();
                phone.setValue();
                congregation.clear();
                position.clear();
            }
        } catch (error) {
            alert(error?.response?.data?.error ?? error.message);
            name.setValue('');
            cpf.setValue('');
            phone.setValue('');
            congregation.clear();
            position.clear();
        } finally {
            setLoading(false);
        }
    }

    const validateForm = () => name.validate() && cpf.validate() && position.validate() && congregation.validate();

    return (
        <ModalDefault
            title={`Confirmar presença - ${schedule.description}`}
            validate={() => validateForm()}
            submit={() => handleSubmit()}
            buttonTitle="Confirmar presença"
            loading={loading}
        >
            <InputText
                id="name"
                label="Nome Completo"
                placeholder="Insira o seu nome completo"
                {...name}
                required
            />
            <div className="grid grid-cols-2 gap-4">
                <InputText
                    id="name"
                    label="CPF"
                    placeholder="000.000.000-00"
                    {...cpf}
                    required
                />
                <InputText
                    id="name"
                    label="Telefone"
                    placeholder="(00) 00000-0000"
                    {...phone}
                    error={null}
                />
            </div>
            <Select
                label="Congregação"
                placeholder="Selecione a sua congregação"
                {...congregation}
                required
            />
            <Select
                label="Cargo na Igreja"
                placeholder="Selecione o seu cargo na igreja"
                {...position}
                required
            />
        </ModalDefault>
    )
}