import { useBooleanProps } from "../../hooks/useBoolean";

interface Props extends useBooleanProps{
    label?: string;
    description?: string;
}

export function SelectBoolean({description, label, onChange, state, error}: Props) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className='text-sm font-medium mb-1 text-zinc-800'>{label}</label>}
            {description && <span className="text-xs font-medium text-zinc-600 max-w-lg">{description}</span>}
            <div className="flex gap-3">
                <button className={`h-10 px-4 border border-gray-300 text-sm font-medium ${state && 'bg-gray-800 text-white border-none'}`} onClick={() => onChange(true)}>Sim</button>
                <button className={`h-10 px-4 border border-gray-300 text-sm font-medium ${!state && 'bg-gray-800 text-white border-none'}`} onClick={() => onChange(false)}>Não</button>
            </div>
            {error && <span>{error}</span>}
        </div>
    );
}