import React from 'react'
import { Head as HeadSVG } from './Svgs'

const Participant = ({ name }: { name: string }): React.ReactElement => {
    return (
        <div className='min-w-[125px] w-fit bg-gradient-to-r from-[#202020] to-[#292929] backdrop-blur-3xl  h-[45px] flex justify-center items-center gap-[14px] py-[4px] px-[24px] rounded-[16px] text-[16px] '>
            <HeadSVG w={24} h={24} />
            {name}
        </div>
    )
}

export default Participant