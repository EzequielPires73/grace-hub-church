'use client'

import { setCookies } from "@/app/login/actions";
import { ButtonDanger } from "@/components/buttons/button-danger";
import { ButtonPrimary } from "@/components/buttons/button-primary";
import { InputText } from "@/components/forms-components/input-text";
import { ModalAlert } from "@/components/modals/modal-alert";
import { useForm } from "@/hooks/useForm";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { useState } from "react";

export function MyAccountContent({ user }) {
    const router = useRouter();
    const [show, setShow] = useState(false);

    const name = useForm('text', user.name);
    const phone = useForm('phone', user.phone);
    const cpf = useForm('cpf', user.cpf);
    const email = useForm('email', user.email);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [loadingRemove, setLoadingRemove] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoadingSubmit(true);
            const { success, result } = await api.patch(`members/${user.id}`, {
                name: name.value,
                phone: phone.value,
                cpf: cpf.value,
                email: email.value
            }).then(res => res.data);

            if (success) {
                await setCookies('adcatalao.user', JSON.stringify(result));
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoadingSubmit(false);
        }
    }

    const handleRemove = async () => {
        try {
            setLoadingRemove(true);

            const { success } = await api.delete(`members/${user.id}`).then(res => res.data);
            if (success) {
                destroyCookie(null, 'adcatalao.user', { path: '/' });
                destroyCookie(null, 'adcatalao.access_token', { path: '/' });
                router.refresh();
            }
        } catch (error) {

        } finally {
            setLoadingRemove(false);
        }
    }

    return (
        <main className="w-full max-w-lg h-full mx-auto px-3 flex flex-col gap-6">
            <InputText label="Nome" {...name} />
            <InputText label="Telefone" {...phone} />
            <InputText label="CPF" {...cpf} />
            <InputText label="Email" {...email} />
            <div className="flex gap-4">
                <ButtonPrimary title="Salvar alterações" full onClick={handleSubmit} loading={loadingSubmit} />
                <ButtonDanger title="Deletar conta" full onClick={() => setShow(true)} disabled={loadingSubmit} />
            </div>
            <ModalAlert close={() => setShow(false)} onSubmit={handleRemove} show={show} subtitle="Deseja mesmo deletar essa conta?" title="Deletar conta" />
        </main>
    )
}