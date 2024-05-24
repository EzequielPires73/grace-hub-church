'use client'

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
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);


const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        }
    },
};

export function LineDash({data, title}) {
    const data_line: ChartData<'line'> = {
        labels: data?.map(item => item.name) ?? [],
        datasets: [
            {
                label: 'Ofertas',
                data: data?.map(item => item.count) ?? [],
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
            },
        ],
    };

    return (
        <div className='relative flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg'>
            <h4 className="text-xl font-semibold text-zinc-900">{title}</h4>
            <Line options={options} data={data_line} />
        </div>
    )
}