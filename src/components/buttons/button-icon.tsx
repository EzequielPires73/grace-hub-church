import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon?: React.FC;
}

export function ButtonIcon({ Icon, ...options }: Props) {
    return (
        <button
            className="bg-red-100 hover:bg-red-200 active:bg-red-300 transition-colors h-12 w-12 flex justify-center items-center text-red-500 rounded-md"
            {...options}
        >
            <Icon />
        </button>
    )
}

