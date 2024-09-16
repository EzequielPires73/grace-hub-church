'use client'

import { ButtonPrimary } from "@/components/buttons/button-primary";
import { InputText } from "@/components/forms-components/input-text";
import { useForm } from "@/hooks/useForm";
import { api } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setCookies } from "./actions";

export default function Login() {
    const router = useRouter();
    const email = useForm('email');
    const password = useForm('password');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        try {
            setError(null);
            e.preventDefault();
            setLoading(true);
            if (email.validate() && password.validate()) {
                const res = await api.post('auth/login/members', {
                    email: email.value,
                    password: password.value
                }).then(res => res.data);

                if (res.success) {
                    await setCookies('adcatalao.access_token', res.access_token);
                    await setCookies('adcatalao.user', JSON.stringify(res.user));
                    router.push('/minha-conta');
                }
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex items-center justify-center w-full max-w-lg mx-auto px-3 h-full min-h-screen gap-6 flex-col">
            <Link href={'/'}>
                <img src="/assets/logo_v.png" alt="Logo" className="w-[120px] h-[151px]" width={120} height={151} />
            </Link>
            <div className="mt-6"></div>
            <InputText label="Email" placeholder="Insira seu email" required {...email} />
            <InputText label="Senha" placeholder="Insira sua senha" required type="password" {...password} />
            <div className="flex items-center justify-end w-full">
                <Link href={'/recuperar-conta'} className="text-sm font-medium">Esqueceu sua senha?</Link>
            </div>
            <ButtonPrimary title="Entrar" full loading={loading} onClick={handleSubmit} />
        </main>
    )
}