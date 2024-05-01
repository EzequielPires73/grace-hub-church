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

export function Textarea({label, disabled, error, id, onBlur, onChange, placeholder, type, value, required}: Props) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-800">{label}</label>
            <textarea 
                className={`h-28 border text-sm text-zinc-900 focus:border-primary-600 outline-none p-3 ${error && required ? 'border-red-500' : 'focus:border-blue-600'}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder ?? ''}
            />
            {error && required && <span className="text-xs font-medium text-red-500">{error}</span>}
        </div>
    )
}