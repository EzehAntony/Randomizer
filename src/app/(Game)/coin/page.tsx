'use client';

import { Header } from "@/components/Header";
import { Coin } from "@/components/Svgs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = (): React.ReactElement => {
    const router = useRouter();
    const [ isFlipping, setIsFlipping ] = useState( false );
    const [ result, setResult ] = useState<'Heads' | 'Tails' | null>( null );

    const handleFlip = () => {
        if ( isFlipping ) return;

        setIsFlipping( true );
        setResult( null );

        setTimeout( () => {
            const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
            setResult( outcome );
            localStorage.setItem( "coin", JSON.stringify( result ) );
            setIsFlipping( false );
            router.push( "/coin/result" );
        }, 1000 );
    };

    return (
        <div className="h-screen w-full space-y-[24px]">
            <Header text="Coin Toss" />
            <div className="h-[683px] px-4 w-full">
                <h1 className="text-[18px] font-normal">Tap the coin to flip</h1>

                <div className="flex justify-center items-center my-auto h-full">
                    <div
                        onClick={ handleFlip }
                        className={ `transition-transform duration-[1000ms] ease-in-out ${ isFlipping ? "animate-flip" : ""
                            }` }
                    >
                        <Coin w={ 300 } h={ 300 } />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Page;
