'use client'

import React, { useState, useEffect } from 'react';
import { OptionSelectProps } from '../../hooks/useSelect';
import { FiChevronDown, FiX } from 'react-icons/fi';

interface Props {
    title?: string;
    placeholder?: string;
    value?: OptionSelectProps;
    onChange?: any;
    options?: OptionSelectProps[];
    onBlur?: (str: string) => void;
    error?: string;
    required?: boolean;
}

const Select = ({ onChange, title, value, onBlur, options, required, error, placeholder }: Props) => {
    const inputRef = React.useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
        setIsOpen(true);
    };

    const handleOptionClick = (option: OptionSelectProps) => {
        if (option) {
            onChange(option);
            setInputValue(option.name);
            setIsOpen(false);
        } else {
            console.log(value);
            { value && alert(option); }
            { value?.name && setInputValue(value.name) }
            setIsOpen(false);
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (highlightedIndex > 0) {
                setHighlightedIndex(highlightedIndex - 1);
            }
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (highlightedIndex < options.length - 1) {
                setHighlightedIndex(highlightedIndex + 1);
            }
        } else if (event.key === 'Enter') {
            event.preventDefault();
            if (highlightedIndex !== -1) {
                setInputValue(options[highlightedIndex].name);
                onChange(options[highlightedIndex]);
                setIsOpen(false);
            }
        }
    };

    const handleOutsideClick = (event: any) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setIsOpen(false);
            { value?.name ? setInputValue(value.name) : setInputValue('') }
        }
    };

    useEffect(() => {
        if (value?.name) {
            setInputValue(value.name);
        } else {
            setInputValue('');
        }
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [value]);

    return (
        <div className="relative flex flex-col w-full flex-1 gap-1">
            <div className="flex gap-1">
                {title && <label className='text-sm font-medium text-zinc-800'>{title}</label>}
                {required && <span className="font-bold text-sm text-red-500">*</span>}
            </div>
            <div className="relative flex flex-col w-full" ref={inputRef}>
                <span
                    className={`flex items-center cursor-pointer w-full px-4 py-2 rounded border bg-white focus:outline-none focus:border-blue-500 ${isOpen && 'border-blue-600'}`}
                    onClick={() => setIsOpen(true)}
                >
                    {value?.name ?
                        <span
                            className="w-full focus:outline-none text-sm font-medium h-8 flex items-center"
                        >
                            {value?.name}
                        </span> :
                        <span className="w-full focus:outline-none h-8 flex items-center text-gray-400 text-sm font-normal">{placeholder ?? 'Escolha um valor'}</span>
                    }
                    {value?.name && <button className='mr-2' onClick={() => {
                        onChange(null)
                        setInputValue('');
                    }}><FiX /></button>}
                    <button onClick={() => setIsOpen(!isOpen)}><FiChevronDown /></button>
                </span>
                {isOpen && (
                    <div className="absolute top-[44px] z-[999] w-full mt-2 bg-white rounded border max-h-72 overflow-auto shadow-md">
                        <ul className="py-1">
                            {options == null || options.length == 0 &&
                                <span className='flex w-full text-sm px-3 py-2 text-red-700 bg-red-50'>Nenhuma opção pra mostrar</span>
                            }
                            {options
                                ?.map((option, index) => (
                                    <li
                                        key={index}
                                        className={`text-sm px-4 py-2 cursor-pointer hover:bg-gray-200 ${value?.id === option.id && 'bg-blue-100 text-blue-900 font-medium'} ${highlightedIndex === index && 'bg-gray-100'}`}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option.name}
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </div>
            {error && required && <span className="text-xs font-medium text-red-500">{error}</span>}
        </div>
    );
};

export default Select;