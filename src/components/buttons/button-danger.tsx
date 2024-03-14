'use client'

import React from "react";
import { LoadingSvg } from "../loading-svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    Icon?: React.FC;
    full?: boolean;
    loading?: boolean;
}

export function ButtonDanger({title, full, Icon, loading, ...options}: Props) {
    return (
        <button className={`
            ${full ? 'w-full' : 'w-fit'}
            h-12 transition-colors rounded-md px-6 text-white font-medium text-base
            bg-red-500 hover:bg-red-600 active:bg-red-600/90
            flex items-center justify-center gap-2
        `} {...options}>
            {loading && <LoadingSvg color={'#fff'} show={loading} />}
            {!loading && Icon && <span className="text-xl text-white"><Icon /></span>}
            {!loading && title}
        </button>
    )
}