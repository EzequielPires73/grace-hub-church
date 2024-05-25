import { BarDash } from "@/components/dashboard-components/bar-dash";
import { fetchData } from "@/helpers/fetch";
import { roundToDecimalPlace } from "@/helpers/functions";

export default async function ReportScheduleEventPage({params}) {
    const {data} = await fetchData(`event-schedule/${params.schedule_id}/report`, 0);

    const getValue = (value) => {
        if(value < 0) {
            return 0;
        } else if(value > 100) {
            return 100;
        } else {
            return value;
        }
    }

    return (
        <div className="flex flex-col">
            <div className="min-lg:h-screen flex flex-wrap gap-4 p-4">
                <div className="bg-orange-500 flex-1 p-6 flex flex-col justify-center gap-6 min-h-fit">
                    <div className="flex gap-3 items-center">
                        <span className="w-12 h-12 bg-white/20 flex items-center justify-center text-2xl font-medium text-white">1°</span>
                        <h4 className="text-2xl font-medium text-white"></h4>
                    </div>
                    <h2 className="text-3xl lg:text-6xl font-bold text-white lg:h-[180px]">{data[0].congregation.name}</h2>
                    <span className="px-3 py-8 bg-white/20 text-2xl font-medium text-white flex items-center justify-center">{getValue(roundToDecimalPlace(data[0].percentage, 1))}% de presença dos membros.</span>
                </div>
                <div className="bg-zinc-900 flex-1 p-6 flex flex-col gap-6 justify-center min-h-fit">
                    <div className="flex gap-3 items-center">
                        <span className="w-12 h-12 bg-white/20 flex items-center justify-center text-2xl font-medium text-white">2°</span>
                        <h4 className="text-2xl font-medium text-white"></h4>
                    </div>
                    <h2 className="text-3xl lg:text-6xl font-bold text-white lg:h-[180px]">{data[1].congregation.name}</h2>
                    <span className="px-3 py-8 bg-white/20 text-2xl font-medium text-white flex items-center justify-center">{getValue(roundToDecimalPlace(data[1].percentage, 1))}% de presença dos membros.</span>
                </div>
                <div className="bg-red-500 flex-1 p-6 flex flex-col gap-6 justify-center min-h-fit">
                    <div className="flex gap-3 items-center">
                        <span className="w-12 h-12 bg-white/20 flex items-center justify-center text-2xl font-medium text-white">3°</span>
                        <h4 className="text-2xl font-medium text-white"></h4>
                    </div>
                    <h2 className="text-3xl lg:text-6xl font-bold text-white lg:h-[180px]">{data[2].congregation.name}</h2>
                    <span className="px-3 py-8 bg-white/20 text-2xl font-medium text-white flex items-center justify-center">{getValue(roundToDecimalPlace(data[2].percentage, 1))}% de presença dos membros.</span>
                </div>
            </div>
            <div className="w-full max-w-7xl px-3 mx-auto py-6">
                <BarDash results={data}/>
            </div>
        </div>
    )
}