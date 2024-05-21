import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon?: React.FC;
}

export function ButtonIcon({ Icon, ...options }: Props) {
    return (
        <button
            className="bg-blue-100 hover:bg-blue-200 active:bg-blue-300 transition-colors h-12 w-12 flex justify-center items-center text-blue-500 rounded-md"
            {...options}
        >
            <Icon />
        </button>
    )
}

