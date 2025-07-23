import React from 'react'

const GameCard = ({ image, text }: { image: React.JSX.Element, text: string }) => {
    return (
        <div className='bg-[#232323] w-full h-[122px] rounded-[16px] p-[12px] gap-[16px] flex flex-col justify-center items-center '>
            {image}

            <p className='text-[16px] font-medium '>{text}</p>
        </div>
    )
}

export default GameCard