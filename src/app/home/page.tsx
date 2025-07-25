"use client";
import GameCard from '@/components/GameCard';
import { Coin, Giveaway, History, Logo, Participant, RandomNumbers } from '@/components/Svgs';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Games {
    image: React.JSX.Element;
    text: string;
    route: string;
}

const Page = (): React.ReactElement => {
    const router = useRouter();
    const games: Games[] = [
        {
            image: <RandomNumbers w={ 50 } h={ 50 } />,
            text: "Random Numbers",
            route: "/randomnumbers",
        },
        {
            image: <Giveaway w={ 50 } h={ 50 } />,
            text: "Giveaway Picker",
            route: "/giveawaypicker",

        },
        {
            image: <Participant w={ 50 } h={ 50 } />,
            text: "Participant Selection",
            route: "/participant",
        },
        {
            image: <Coin w={ 50 } h={ 50 } />,
            text: "Coin Toss",
            route: "/coin",
        }
    ];
    return (
        <div className="w-full h-screen  relative text-white p-4" >
            {/* Header */ }
            <div className='w-full h-[50px] flex items-center justify-between '>
                {/* Left */ }
                <div className='flex items-center gap-[12px] '>
                    {/* Logo */ }
                    <Logo w={ 50 } h={ 50 } />

                    {/* Text */ }
                    <div className="flex flex-col justify-between ">
                        <h3 className='font-normal text-[18px]'>Welcome, <span className='font-medium'>Randomee</span></h3>
                        <p className='font-normal text-[14px] '>31 August, 2024</p>
                    </div>
                </div>

                {/* Right */ }
                <div>
                    <div onClick={ () => router.push( "history" ) }>
                        <History w={ 26 } h={ 26 } />
                    </div>
                </div>
            </div>

            {/* Body */ }
            <div className='w-full space-y-[24px] pt-[50px]  '>
                <div className='flex items-center gap-[12px] '>
                    <h1 className='text-[24px] font-medium  '>Perform an operation</h1>
                    <p className='bg-[#0806EB33] px-[12px] pt-[4px] rounded-[100px] text-[14px] font-bold '>Help </p>
                </div>

                <div className='gap-[8px] grid grid-cols-2  '>
                    { games.map( ( game, i ) => <GameCard key={ i } image={ game.image } text={ game.text } route={ game.route } /> ) }
                </div>
            </div>
        </div >
    );
};

export default Page;