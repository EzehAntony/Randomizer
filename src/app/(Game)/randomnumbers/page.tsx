"use client"

import GenerateButton from '@/components/buttons/GenerateButton'
import { Header } from '@/components/Header'
import { Generate } from '@/components/Svgs'
import React, { useState, useRef, useEffect } from 'react'

const Page = (): React.ReactElement => {
    const numbers = Array.from({ length: 99 }, (_, index) => index + 1)
    const [minValue, setMinValue] = useState(10)
    const [maxValue, setMaxValue] = useState(90)
    const minScrollRef = useRef<HTMLDivElement>(null)
    const maxScrollRef = useRef<HTMLDivElement>(null)
    const itemHeight = 42.33

    const scrollToNumber = (container: HTMLDivElement | null, number: number) => {
        if (!container) return
        const scrollTop = number * itemHeight - container.clientHeight / 2 + itemHeight / 2
        container.scrollTop = scrollTop
    }

    const handleScroll = (container: HTMLDivElement | null, setValue: React.Dispatch<React.SetStateAction<number>>) => {
        if (!container) return
        const centerY = container.scrollTop + container.clientHeight / 2
        const index = Math.round(centerY / itemHeight) - 1
        const number = Math.max(1, Math.min(99, index + 1))
        setValue(number)
    }

    useEffect(() => {
        scrollToNumber(minScrollRef.current, minValue)
        scrollToNumber(maxScrollRef.current, maxValue)
    }, [])

    return (
        <div className="h-screen flex flex-col gap-[24px] ">
            <Header text="Random Numbers" />

            <div className='h-[683px] flex flex-col justify-between px-4'>
                <div className='  '>
                    <div className="space-y-6">
                        <h1 className="text-lg">Generate Random Numbers</h1>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">How many results do you want?</p>
                            <input
                                defaultValue={4}
                                type="number"
                                className="bg-gradient-to-r from-[#202020] to-[#292929] backdrop-blur-3xl outline-none h-[45px] px-6 rounded-[16px]"
                            />
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm">Select Number Range (Min - Max)</p>

                            <div className=" flex flex-col gap-[24px]">
                                {/* === Min Scroller === */}
                                <div className="relative">
                                    <div className="absolute top-1/2 left-0 right-0 h-[45px] -translate-y-1/2 z-10 pointer-events-none">
                                        <div className="h-full bg-white/10 border border-white/20 rounded-[16px] mx-auto w-full max-w-[250px]" />
                                    </div>

                                    <div
                                        ref={minScrollRef}
                                        onScroll={() => handleScroll(minScrollRef.current, setMinValue)}
                                        className="h-[184px] overflow-y-scroll scrollbar-hide flex flex-col items-center gap-[9.33px]"
                                    >
                                        {numbers.map((number) => (
                                            <p
                                                key={`min-${number}`}
                                                className={`text-[24px] leading-[33px] transition-all duration-200 w-full max-w-[250px] flex justify-center items-center 
                                            ${minValue === number ? 'text-white font-semibold scale-110' : 'text-gray-500'}`}
                                                style={{ height: `${itemHeight}px` }}
                                            >
                                                {number}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className='w-[23px] border-[5px] border-[#FFFFFF4D] mx-auto '></div>

                                {/* === Max Scroller === */}
                                <div className="relative">
                                    <div className="absolute top-1/2 left-0 right-0 h-[45px] -translate-y-1/2 z-10 pointer-events-none">
                                        <div className="h-full bg-white/10 border border-white/20 rounded-[16px] mx-auto w-full max-w-[250px]" />
                                    </div>

                                    <div
                                        ref={maxScrollRef}
                                        onScroll={() => handleScroll(maxScrollRef.current, setMaxValue)}
                                        className="h-[184px] overflow-y-scroll scrollbar-hide flex flex-col items-center gap-[9.33px]"
                                    >
                                        {numbers.map((number) => (
                                            <p
                                                key={`max-${number}`}
                                                className={`text-[24px] leading-[33px] transition-all duration-200 w-full max-w-[250px] flex justify-center items-center 
                                            ${maxValue === number ? 'text-white font-semibold scale-110' : 'text-gray-500'}`}
                                                style={{ height: `${itemHeight}px` }}
                                            >
                                                {number}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <GenerateButton text="Generate Number(s)" />

            </div>


        </div>
    )
}

export default Page
