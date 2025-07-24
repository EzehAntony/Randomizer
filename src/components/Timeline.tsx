import React from 'react'
import TimelineCard from './TimelineCard'

interface TimelineType {
    game: string;
    text: string;
    url: string;
}

const Timeline = () => {
    const TimelineData: TimelineType[] = [
        {
            game: "Coin",
            text: "Results",
            url: "ppsspp"
        },
        {
            game: "Participant",
            text: "Results",
            url: "ppsspp"
        },
        {
            game: "Giveaway",
            text: "Winners",
            url: "ppsspp"
        },
        {
            game: "Random Numbers",
            text: "Result",
            url: "ppsspp"
        },
        {
            game: "Giveaway",
            text: "Result",
            url: "ppsspp"
        },
    ]
    return (
        <div className='mt-4 '>
            <p className='font-normal text-[14px] bg-[#FFFFFF0D] px-4 py-[5px] '>Today</p>

            <div className='p-4 space-y-[24px]'>
                {TimelineData.map((d, i) => <TimelineCard title={d.game} url={d.url} key={i} />)}
            </div>
        </div>
    )
}

export default Timeline