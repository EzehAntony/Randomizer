"use client"
import { LeftArrow } from './Svgs'
import { useRouter } from 'next/navigation'

export const Header = ({ text }: { text: string }): React.ReactElement => {
    const router = useRouter();
    return (
        <div className="h-[60px] w-full flex justify-center items-center relative px-4 border-b-[1px] border-[#FFFFFF0D] ">
            <div onClick={() => router.back()} className='absolute left-4'>
                <LeftArrow />
            </div>
            <h1 className="font-medium text-[18px] text-start  ">{text}</h1>
        </div>
    )
}
