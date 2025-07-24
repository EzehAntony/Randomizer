import React from 'react'
import { Generate } from '../Svgs'

const GenerateButton = ({ text }: { text: string }) => {
    return (
        <button className='bg-[#FFD700] w-full flex justify-center items-center gap-[8px] font-medium text-[16px] rounded-[16px] text-black h-[54px] py-[5px] px-[14px]'>
            <Generate w={20} h={20} />
            {text}
        </button>
    )
}

export default GenerateButton