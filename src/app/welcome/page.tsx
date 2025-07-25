"use client";

import { Welcome_One, Welcome_One_Paginition, Welcome_Three, Welcome_Three_paginition, Welcome_Two, Welcome_Two_paginition } from '@/components/Svgs';
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation'; // 

interface Welcome {
    image: React.JSX.Element;
    title: string;
    description: string;
    pagnition: React.JSX.Element;
    button: string;
}

const Page = (): React.ReactElement => {
    const router = useRouter();

    const welcome: Welcome[] = useMemo( () => [
        {
            image: <Welcome_One />,
            title: "Welcome to Randomizer!",
            description: "Make decisions easier with our fun, simple-to-use app",
            pagnition: <Welcome_One_Paginition />,
            button: "Get Started"
        },
        {
            image: <Welcome_Two />,
            title: "Generate Random Numbers",
            description: "Effortlessly generate random numbers for games, decisions, or fun with a tap.",
            pagnition: <Welcome_Two_paginition />,
            button: "Next"
        },
        {
            image: <Welcome_Three />,
            title: "Pick Winners & Assign Tasks",
            description: "Easily pick giveaway winners or assign tasks with our intuitive tools.",
            pagnition: <Welcome_Three_paginition />,
            button: "Let's Go"
        }
    ], [] );

    const [ current, setCurrent ] = useState( 0 );

    const handleNext = (): void => {
        const isLastScreen = current === welcome.length - 1;

        if ( isLastScreen ) {
            router.push( '/home' ); // ✅ Change to your desired route
            return;
        }

        setCurrent( current + 1 );
    };

    return (
        <div className='h-screen w-full text-white flex justify-center items-center text-center p-4'>
            <div className='flex flex-col items-center justify-center gap-[53px]'>
                { welcome[ current ].image }
                <div className='gap-[32px] flex flex-col justify-center items-center'>
                    <div className='gap-[24px] flex flex-col justify-center items-center'>
                        <h1 className='text-[28px] font-bold'>{ welcome[ current ].title }</h1>
                        <p className='text-[18px] font-normal px-6'>{ welcome[ current ].description }</p>
                        { welcome[ current ].pagnition }
                    </div>
                    <button
                        className='mt-4 px-4 py-2 bg-[#FFD700] w-full h-[54px] text-[16px] font-bold text-black rounded-[16px]'
                        onClick={ handleNext }
                    >
                        { welcome[ current ].button }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
