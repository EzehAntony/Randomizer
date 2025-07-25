"use client";
import ShareButton from '@/components/buttons/ShareButton';
import { Header } from '@/components/Header';
import { Copy, Generate, } from '@/components/Svgs';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = (): React.ReactElement => {
    const router = useRouter();
    const [ numbers, setNumbers ] = useState<number[]>( [] );

    useEffect( () => {
        const data = localStorage.getItem( "randomNumber" );
        setNumbers( data ? JSON.parse( data ) : [] );
    }, [] );

    return (
        <div className='h-screen w-full flex flex-col gap-[24px] '>
            <Header text="Result" />

            <div className='h-[683px] flex flex-col justify-between'>

                <div className=' flex flex-col w-full px-4 '>
                    <div className='flex flex-col gap-[24px] '>
                        <div className='flex gap-[16px]'>
                            <h1 className='text-[18px] '>Generated Reesults</h1>
                            <div className='flex gap-[8px]'>
                                <button className='bg-[#00C89633] flex justify-center items-center gap-[4px] w-[80px] h-[30px] rounded-[100px] py-[4px] px-[12px] text-[14px] font-bold '><Copy w={ 18 } h={ 18 } />Copy</button>
                                <ShareButton />
                            </div>
                        </div>

                        <div className='flex gap-[16px]'>
                            { numbers.map( ( number, index ) => <p key={ index } className='size-[75px] rounded-[37.5px] border-[1.5px] flex justify-center items-center py-[17px] px-[20px] gap-[10px] bg-linear-to-r from-[#222222] to-transparent text-[32px] border-[#FFFFFF66] '>{ number }</p> ) }
                        </div>
                    </div>


                </div>


                <button onClick={ () => router.back() } className='bg-[#FFD700] max-w-[350px] mx-auto w-full flex justify-center items-center gap-[8px] font-medium text-[16px] rounded-[16px] text-black h-[54px] py-[5px] px-[14px]'>
                    <Generate w={ 20 } h={ 20 } />
                    Generate Again
                </button>
            </div>

        </div>
    );
};

export default Page;