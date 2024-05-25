'use client'

import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
    ChartData,

} from 'chart.js';
import { roundToDecimalPlace } from '@/helpers/functions';
import { ButtonPrimary } from '../buttons/button-primary';
import { useEffect, useRef, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        }
    },
};

export function BarDash({ results }) {
    const labels = results.map((item, index) => item.congregation.name.replace('AD Catalão - ', '').split(' ').slice(0, 3).join(' '));
    let expected = 0;
    let attended = 0;

    for (let i = 0; i < results.length; i++) {
        expected = expected + results[i].expected;
        attended = attended + results[i].attended;
    }

    const data_bar: ChartData<'bar'> = {
        labels: labels.slice(0, 15),
        datasets: [
            {
                label: 'Esperado',
                data: results.slice(0, 15).map((item, index) => item.expected),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132)',
            },
            {
                label: 'Presentes',
                data: results.slice(0, 15).map((item, index) => item.attended),
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
            },
        ],
    };
    const data_bar_2: ChartData<'bar'> = {
        labels: labels.slice(15, 30),
        datasets: [
            {
                label: 'Esperado',
                data: results.slice(15, 30).map((item, index) => item.expected),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132)',
            },
            {
                label: 'Presentes',
                data: results.slice(15, 30).map((item, index) => item.attended),
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
            },
        ],
    };

    return (
        <div className='flex flex-col gap-8'>
            <div className='relative flex flex-col gap-4 bg-white'>
                <h4 className="text-xl font-semibold text-zinc-900">Presença dos membros</h4>
                <div className='flex flex-col'>
                    <span>Esperado: <strong>{expected}</strong></span>
                    <span className='text-blue-500'>Presentes: <strong>{attended}</strong></span>
                </div>
                <Bar
                    options={options}
                    data={data_bar}
                />
                <Bar
                    options={options}
                    data={data_bar_2}
                />
            </div>
            {/* <div className='relative flex flex-col gap-4 bg-white'>
                <h4 className="text-xl font-semibold text-zinc-900">Pessoas dizimistas</h4>
                <Bar
                    options={options}
                    data={data_bar_1}
                />
            </div> */}
            <div className='grid lg:grid-cols-3 gap-6'>
                {results.filter(item => item.congregation.id != 659181).map((item, index) => <CustomPieChart item={item} index={index + 1} />)}
            </div>
        </div>
    )
}

export function CustomPieChart({ item, index }) {
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const getValue = (value) => {
        if (value < 0) {
            return 0;
        } else if (value > 100) {
            return 100;
        } else {
            return roundToDecimalPlace(value, 1);
        }
    }

    const data_bar_1: ChartData<'pie'> = {
        labels: ['Ausentes', 'Presentes'],
        datasets: [
            {
                data: [getValue(100 - item.percentage), getValue(item.percentage),],

                borderColor: ['#fff', '#fff'],
                backgroundColor: ['rgba(255, 99, 132)', '#2563eb'],
            },
        ],
    };

    const data_bar: ChartData<'bar'> = {
        labels: ['Esperado', 'Presentes'],
        datasets: [
            {
                label: 'Presentes',
                data: [item.attended],
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
            },
        ],
    };


    return (
        <div className='relative flex flex-col gap-4 bg-white border p-4'>
            <h4 className="text-xl font-semibold text-zinc-900">{index}º - {item.congregation.name}</h4>
            <div className='flex flex-col'>
                <span>Esperado: <strong>{item.expected}</strong></span>
                <span className='text-blue-500'>Presentes: <strong>{item.attended}</strong></span>
            </div>
            {/* <Bar
                options={options}
                data={data_bar}
            /> */}
            <div className='w-full max-w-[300px]'>
                <Pie
                    options={{
                        ...options, plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        const percentage = context.dataset.data[context.dataIndex];
                                        return `${getValue(percentage)}%`;
                                    }
                                }
                            }
                        }
                    }}
                    data={data_bar_1}
                />
            </div>
            <ButtonPrimary title='Ver membros presentes' onClick={() => setShow(true)} />
            {show &&
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex items-center justify-center z-[9999]">
                    <div className="bg-white w-full max-w-7xl rounded-md flex flex-col h-[80vh] max-lg:rounded-none" ref={ref}>
                        <header className="h-16 bg-blue-500 rounded-t-md flex items-center justify-between px-3 max-lg:rounded-none">
                            <div className="flex items-center gap-3">
                                <button onClick={() => setShow(false)} className="h-10 w-10 flex items-center justify-center bg-blue-600 rounded-md font-semibold text-white">
                                    <FiArrowLeft size={16} />
                                </button>
                                <span className="text-lg font-medium text-white">Membros Presentes {item.congregation.name}</span>
                            </div>
                        </header>
                        <div className="p-3 flex-1 flex flex-col gap-4 overflow-auto">
                            {item.data.map(item => (
                                <div className='flex flex-col gap-1 border-b py-2'>
                                    <span><strong>Nome:</strong> {item.name}</span>
                                    <span><strong>Cargo:</strong> {item.position}</span>
                                    <span><strong>CPF:</strong> {item.cpf}</span>
                                    <span><strong>Telefone:</strong> {item.phone}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}