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
    const labels = results.slice(0,5).map((item, index) => index < 10 ? item.congregation.name.replace('AD Catalão - ', '').split(' ').slice(0, 2).join(' ') : null);

    const data_bar: ChartData<'bar'> = {
        labels,
        datasets: [
            {
                label: 'Ausentes',
                data: results.map((item, index) => index < 10 ? item.expected : null),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132)',
            },
            {
                label: 'Presentes',
                data: results.map((item, index) => index < 10 ? item.attended : null),
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
            },
        ],
    };
    const data_bar_1: ChartData<'bar'> = {
        labels,
        datasets: [
            {
                label: 'Presença dos membros',
                data: results.map(item => item.percentage),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132)',
            },
        ],
    };

    return (
        <div className='flex flex-col gap-8'>
            <div className='relative flex flex-col gap-4 bg-white'>
                <h4 className="text-xl font-semibold text-zinc-900">Presença dos membros</h4>
                <Bar
                    options={options}
                    data={data_bar}
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
                {results.map((item, index) => <CustomPieChart item={item} index={index+1} />)}
            </div>
        </div>
    )
}

export function CustomPieChart({ item, index }) {
    const data_bar_1: ChartData<'pie'> = {
        labels: ['Ausentes', 'Presentes'],
        datasets: [
            {
                data: [roundToDecimalPlace(100 - item.percentage, 1), item.percentage,],

                borderColor: ['#fff', '#fff'],
                backgroundColor: ['rgba(255, 99, 132)', '#2563eb'],
            },
        ],
    };

    return (
        <div className='relative flex flex-col gap-4 bg-white border p-4'>
            <h4 className="text-xl font-semibold text-zinc-900">{index}º - {item.congregation.name}</h4>
            <Pie
                options={{...options, plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const percentage = context.dataset.data[context.dataIndex];
                                return `${percentage}%`;
                            }
                        }
                    }
                }}}
                data={data_bar_1}
            />
        </div>
    )
}