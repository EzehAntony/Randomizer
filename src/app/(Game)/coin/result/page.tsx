"use client";
import GenerateButton from "@/components/buttons/GenerateButton";
import HeadButton from "@/components/buttons/HeadButton";

import ShareButton from "@/components/buttons/ShareButton";
import TailButton from "@/components/buttons/TailButton";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const Page = (): React.ReactElement => {
    const router = useRouter();
    const [ outcome, setOutcome ] = useState<string | null>( null );

    useEffect( () => {
        const stored = localStorage.getItem( "coin" );
        setOutcome( stored ? JSON.parse( stored ) : null );
    }, [] );

    return (
        <div className="h-screen w-full flex flex-col gap-[24px] ">
            <Header text="Result" />
            <div className="h-[683px] flex flex-col justify-between  px-4  ">
                <div className="flex flex-col gap-[24px]">
                    <div className="flex  gap-[16px]">
                        <h1 className="font-normal text-[18px] ">Outcome</h1>
                        <ShareButton />
                    </div>
                    <div className="gap-[4px] flex">
                        { outcome === "Heads" ? <HeadButton text="Heads" /> : outcome === "Tails" ? <TailButton /> : null }
                    </div>
                </div>
                <div onClick={ () => router.back() }>
                    <GenerateButton text={ "Toss Again" } />
                </div>
            </div>
        </div>
    );
};

export default Page;