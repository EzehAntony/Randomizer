"use client"
import { Coin, Giveaway, Participant, RandomNumbers, Share } from './Svgs'
import { useRouter } from 'next/navigation'

const TimelineCard = ({ title, url }: { title: string, url: string }) => {
    const router = useRouter();

    return (
        <div className='border-[#FFFFFF1A] rounded-[16px] h-[114px] w-full  border-[0.5px] p-4 flex items-center justify-between '>
            <div className='flex flex-col justify-between gap-[24px] '>
                <div className='flex gap-1'>
                    <h1 className='font-medium text-[16px]'>{title}</h1>
                    {title.toLowerCase() == "coin" ? <Coin w={25} h={25} /> : ""}
                    {title.toLowerCase() == "randomnumbers" ? <RandomNumbers w={25} h={25} /> : ""}
                    {title.toLowerCase() == "giveaway" ? <Giveaway w={25} h={25} /> : ""}
                    {title.toLowerCase() == "participant" ? <Participant w={25} h={25} /> : ""}
                </div>

                <div className='flex items-center space-x-[16px]'>
                    <p className='text-[16px] font-normal '>{title == "Giveaway" ? "Winners" : "Results"}</p>
                    <button onClick={() => router.push(url)} className='bg-[#F9F87133] font-bold text-[14px] rounded-full px-[12px] py-[4px] flex justify-center items-center gap-[8px] '>
                        <Share w={18} h={18} />
                        Share
                    </button>
                </div>
            </div>

            <div>
                <p className='font-light text-[14px]'>2:50</p>
            </div>
        </div>
    )
}

export default TimelineCard