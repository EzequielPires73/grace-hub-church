import { useState } from "react"

export function TabsDefault({current, setCurrent, tabs}) {
    
    return (
        <nav className="w-full isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
            {tabs.map((tab, tabIdx) => (
                <button
                    key={tab.name}
                    onClick={() => setCurrent(tabIdx)}
                    className={classNames(
                        current == tabIdx ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                        tabIdx === 0 ? 'rounded-l-lg' : '',
                        tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                        'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
                    )}
                    aria-current={current == tabIdx ? 'page' : undefined}
                >
                    <span>{tab.name}</span>
                    <span
                        aria-hidden="true"
                        className={classNames(
                            current == tabIdx ? 'bg-indigo-500' : 'bg-transparent',
                            'absolute inset-x-0 bottom-0 h-0.5'
                        )}
                    />
                </button>
            ))}
        </nav>
    )
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}