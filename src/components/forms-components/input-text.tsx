'use client'

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface Props {
    id?: string;
    label: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    onChange?: any;
    onBlur?: any;
    error?: string;
    required?: boolean;
}

export function InputText({ label, disabled, error, id, onBlur, onChange, placeholder, type, value, required }: Props) {
    const [currentType, setCurrentType] = useState(type ?? 'text');
    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="flex gap-1 justify-between items-center">
                <label className="text-sm font-medium text-zinc-800">{label}</label>
                {required ? <span className="font-medium text-xs text-red-500">(obrigatório)</span> : <span className="font-normal text-xs text-zinc-500">(opcional)</span>}
            </div>
            <div className="relative flex items-center">
                <input
                    className={`
                        w-full bg-white border border-gray-400 h-14 text-sm text-zinc-900 outline-none p-3 flex-1 text-ellipsis
                        placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal
                        ${error && required ? 'border-red-500' : 'focus:border-blue-600'} 
                        ${type == 'password' && 'pr-8'}
                    `}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    type={currentType}
                    placeholder={placeholder ?? ''}
                />
                {currentType == 'password' && <button className="absolute right-3" onClick={() => setCurrentType('text')}><FiEye /></button>}
                {type == 'password' && currentType != 'password' && <button className="absolute right-3" onClick={() => setCurrentType('password')}><FiEyeOff /></button>}
            </div>
            {error && required && <span className="text-xs font-medium text-red-500">{error}</span>}
        </div>
    )
}