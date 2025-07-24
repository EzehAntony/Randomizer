import { Header } from '@/components/Header'
import React from 'react'

const page = (): React.ReactElement => {
    return (
        <div>
            <Header text={"Participant Selector"} />

            <div className='px-4 h-[683px] flex flex-col w-full gap-[24px]'>
                <h1>Select Someone For That Task</h1>

                <div>
                    <h3>How many participants?</h3>
                    <input
                        defaultValue={4}
                        type="number"
                        className="bg-gradient-to-r from-[#202020] to-[#292929] backdrop-blur-3xl outline-none h-[45px] px-6 rounded-[16px]"
                    />
                </div>

            </div>
        </div>
    )
}

export default page