import React from 'react'
import { Head as Head_ } from '../Svgs'

const HeadButton = ({ text }: { text: string }) => {
  return (
    <div className={`w-[125px] bg-gradient-to-r from-[#202020] to-[#292929] backdrop-blur-3xl  h-[45px] flex justify-center items-center gap-[14px] py-[4px] rounded-[16px] `}>
      <div className={`${text.toLowerCase() === "tail" ? "rotate-180  " : ""}`}><Head_ w={13.5} h={21.5} /></div>
      <h3 className='text-[16px] '>{text}</h3>
    </div>
  )
}

export default HeadButton 