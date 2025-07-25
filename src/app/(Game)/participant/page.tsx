"use client"
import { Header } from '@/components/Header'
import { People, RightArrow } from '@/components/Svgs'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = (): React.ReactElement => {
    const router = useRouter();
    return (
        <div className='flex flex-col w-full gap-[24px]'>
            <Header text={"Participant Selector"} />

            <div className='px-4 h-[683px] flex flex-col justify-between '>
                <div className='flex flex-col w-full gap-[24px] '>
                    <h1>Select Someone For That Task</h1>

                    <div className='w-full flex flex-col gap-[8px]'>
                        <h3 className='text-[14px]'>How many participants?</h3>
                        <form action="#" className=" relative flex justify-center items-center">
                            <div className='absolute left-4 z-10'><People w={24} h={24} /> </div>
                            <input
                                defaultValue={4}
                                type="number"
                                className="w-full bg-gradient-to-r from-[#202020] to-[#292929] backdrop-blur-3xl outline-none h-[45px] px-14 rounded-[16px]"
                            />
                        </form>
                    </div>

                    <div className='w-full flex flex-col gap-[8px]'>
                        <h3 className='text-[14px]'>How many results do you want?</h3>

                        <input
                            defaultValue={2}
                            type="number"
                            className="w-full bg-gradient-to-r from-[#202020] to-[#292929] backdrop-blur-3xl outline-none h-[45px] px-4 rounded-[16px]"
                        />
                    </div>

                    <div className='w-full flex flex-col gap-[8px]'>
                        <h3 className='text-[14px]'>What is the task (Optional)</h3>

                        <input
                            defaultValue={"Organize an end of the year X’s Design party"}
                            type="text"
                            className="w-full bg-gradient-to-r from-[#202020] to-[#292929] backdrop-blur-3xl outline-none h-[45px] px-4 rounded-[16px]"
                        />
                    </div>

                </div>
                <button onClick={() => router.push("")} className='bg-[#FFD700] w-full flex justify-center items-center gap-[8px] font-medium text-[16px] rounded-[16px] text-black h-[54px] py-[5px] px-[14px]'>
                    Proceed
                    <RightArrow w={10.5} h={7.51} />
                </button>

            </div>


        </div>
    )
}

export default Page