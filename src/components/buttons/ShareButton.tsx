import React from 'react'
import { Share } from '../Svgs'

const ShareButton = () => {
    return (
        <button className='bg-[#F9F87133] flex justify-center items-center gap-[4px] w-[80px] h-[30px] rounded-[100px] py-[4px] px-[12px] text-[14px] font-bold'><Share w={18} h={18} />Share</button>
    )
}

export default ShareButton