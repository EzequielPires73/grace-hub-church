'use client'

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface Props {
    id?: string;
    title: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    onChange?: any;
    onBlur?: any;
    error?: string;
    required?: boolean;
}

export function InputText({ title, disabled, error, id, onBlur, onChange, placeholder, type, value, required }: Props) {
    const [currentType, setCurrentType] = useState(type ?? 'text');
    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="flex gap-1">
                <label className="text-sm font-medium text-zinc-800">{title}</label>
                {required && <span className="font-bold text-sm text-red-500">*</span>}
            </div>
            <div className="relative flex items-center">
                <input
                    className={`
                        w-full bg-white h-12 border text-sm text-zinc-900 rounded-md outline-none p-3 flex-1 text-ellipsis
                        placeholder:text-gray-400 placeholder:text-sm placeholder:font-normal
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