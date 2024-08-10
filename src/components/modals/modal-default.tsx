'use client'

import { useEffect, useRef, useState } from "react";
import { ButtonSecondary } from "../buttons/button-secondary";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { ButtonPrimary } from "../buttons/button-primary";

interface Props {
    submit: () => void | Promise<void>;
    validate?: () => boolean | Promise<boolean>;
    title: string;
    buttonType?: 'primary' | 'secondary';
    buttonTitle?: string;
    children?: any;
    loading?: boolean;
}

export function ModalDefault({ submit, validate, title, buttonTitle, children, buttonType, loading }: Props) {
    const [showModal, setShowModal] = useState(false);
    const ref = useRef(null);

    const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            {buttonType && buttonType == 'secondary' ? <ButtonSecondary title={buttonTitle} onClick={() => setShowModal(true)} /> : <ButtonPrimary title={buttonTitle} onClick={() => setShowModal(true)} />}
            {
                showModal &&
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex items-center justify-center z-[9999]">
                    <div className="bg-white w-full max-w-md rounded-md flex flex-col max-lg:h-full max-lg:rounded-none" ref={ref}>
                        <header className="h-16 bg-blue-500 rounded-t-md flex items-center justify-between px-3 max-lg:rounded-none">
                            <div className="flex items-center gap-3">
                                <button onClick={() => setShowModal(false)} className="h-10 w-10 flex items-center justify-center bg-blue-600 rounded-md font-semibold text-white">
                                    <FiArrowLeft size={16} />
                                </button>
                                <span className="text-lg font-medium text-white">{title}</span>
                            </div>
                        </header>
                        <div className="p-3 flex-1 flex flex-col gap-4">
                            {children}
                        </div>
                        <footer className="p-3 flex items-center gap-3">
                            <ButtonSecondary title="Cancelar" full onClick={() => setShowModal(false)}/>
                            <ButtonPrimary title="Confirmar" loading={loading} full onClick={async () => {
                                if(validate && validate()) {
                                    await submit();
                                    //setShowModal(false);
                                }
                            }} />
                        </footer>
                    </div>
                </div>
            }
        </>
    )
}