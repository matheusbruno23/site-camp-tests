import { useState } from "react";

export default function Timer(){
    const electionDate = new Date("10-06-2024")
    const [now, setNow] = useState(new Date())
    const diff = electionDate.getTime() - now.getTime()

    const msInDay = 24 * 60 * 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInMinute = 60 * 1000;
    const msInSecond = 1000;

    const days = Math.floor(diff / msInDay);
    const hours = Math.floor((diff % msInDay) / msInHour)
    const minutes = Math.floor((diff % msInHour) / msInMinute)
    const seconds = Math.floor((diff % msInMinute) / msInSecond)
    function updateTime(){
        setNow(new Date())
    }
    setInterval(updateTime, 500);
    return (
        <div>
            <ol className="uppercase flex flex-wrap justify-center text-white text-xl">
                <li>
                    <div className="border-white absolute w-56 h-56 border rounded-full" />
                    <div className="border-green absolute w-56 h-56 border-t-4 rounded-full animate-spin-day" />
                    <p className="text-8xl text-white p-16 text-center">
                        {days}
                    </p>
                    <p>Dias</p>
                </li>
                <li>
                    <div className="border-white absolute w-56 h-56 border rounded-full" />
                    <div className="border-green absolute w-56 h-56 border-t-4 rounded-full animate-spin-hour " />
                    <p className="text-8xl text-white p-16 text-center">
                        {hours}
                    </p>
                    <p>Horas</p>
                </li>
                <li>
                    <div className="border-white absolute w-56 h-56 border rounded-full" />
                    <div className="border-green absolute w-56 h-56 border-t-4 rounded-full animate-spin-minute" />
                    <p className="text-8xl text-white p-16 text-center">
                        {minutes}
                    </p>
                    <p>Minutos</p>
                </li>
                <li>
                    <div className="border-white absolute w-56 h-56 border rounded-full" />
                    <div className="border-green absolute w-56 h-56 border-t-4 rounded-full animate-spin " />
                    <p className="text-8xl text-white p-16 text-center">
                        {seconds}
                    </p>
                    <p>Segundos</p>
                </li>
            </ol>
        </div>
    )
}
