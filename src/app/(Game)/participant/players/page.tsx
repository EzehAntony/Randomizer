"use client"
import GenerateButton from '@/components/buttons/GenerateButton'
import { Header } from '@/components/Header'
import { Head } from '@/components/Svgs'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = (): React.ReactElement => {
    const participants: number = 4;
    const [names, setNames] = useState<string[]>(Array(participants).fill(''))
    const router = useRouter()

    const handleChange = (index: number, value: string) => {
        const updatedNames = [...names]
        updatedNames[index] = value
        setNames(updatedNames)
    }

    return (
        <div className='h-screen w-full flex flex-col gap-[24px]'>
            <Header text={"Participant Selector"} />

            <div className='px-4 h-[683px] flex flex-col justify-between '>
                <div className='flex flex-col w-full gap-[24px] '>
                    <h1>Enter Participants</h1>

                    {Array.from({ length: participants }).map((_, index) => (
                        <div key={index} className='w-full flex flex-col gap-[8px]'>
                            <h3 className='text-[14px]'>Character {index + 1}</h3>
                            <form action="#" className="relative flex justify-center items-center">
                                <div className='absolute left-4 z-10'><Head w={24} h={24} /></div>
                                <input
                                    type="text"
                                    value={names[index]}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    placeholder={`Enter name for character ${index + 1}`}
                                    className="w-full bg-gradient-to-r from-[#202020] to-[#292929] backdrop-blur-3xl outline-none h-[45px] px-14 rounded-[16px]"
                                />
                            </form>
                        </div>
                    ))}
                </div>

                <div onClick={() => router.push("/participant/result")}>
                    <GenerateButton text='Select Participant' />
                </div>
            </div>
        </div>
    )
}

export default Page
