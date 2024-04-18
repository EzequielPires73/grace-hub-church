'use client'

import Link from "next/link";
import React from "react";
import { LoadingSvg } from "../loading-svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    Icon?: React.FC;
    full?: boolean;
    path?: string;
    loading?: boolean;
}

export function ButtonPrimary({ title, full, Icon, path, loading, ...options }: Props) {
    if (path) {
        return (
            <Link href={path} className={`
                ${full ? 'w-full' : 'w-fit'}
                h-12 transition-colors px-6 text-white font-medium text-base
                bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700
                flex items-center justify-center gap-2
            `}>
                 {loading && <LoadingSvg color={'#fff'} show={loading} />}
                {!loading && Icon && <span className="text-xl text-white"><Icon /></span>}
                {!loading && title}
            </Link>
        )
    } else {
        return (
            <button className={`
                ${full ? 'w-full' : 'w-fit'}
                h-12 transition-colors px-6 text-white font-medium text-base
                bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700
                flex items-center justify-center gap-2
            `} {...options}>
                 {loading && <LoadingSvg color={'#fff'} show={loading} />}
                {!loading && Icon && <span className="text-xl text-white"><Icon /></span>}
                {!loading && title}
            </button>
        )
    }
}