'use client'

import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    Icon?: React.FC;
    full?: boolean;
}

export function ButtonSecondary({title, full, Icon, ...options}: Props) {
    return (
        <button className={`
            ${full ? 'w-full' : 'w-fit'}
            h-16 transition-colors rounded-md px-6 font-medium text-base
            bg-secondary text-secondary-dark hover:bg-secondary-hover active:bg-secondary-active
            flex items-center justify-center gap-2
        `} {...options}>
            {Icon && <span className="text-xl text-white"><Icon /></span>}
            {title}
        </button>
    )
}