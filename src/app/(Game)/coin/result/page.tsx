"use client";
import GenerateButton from "@/components/buttons/GenerateButton";
import HeadButton from "@/components/buttons/HeadButton";

import ShareButton from "@/components/buttons/ShareButton";
import TailButton from "@/components/buttons/TailButton";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";


const Page = (): React.ReactElement => {
    const router = useRouter();
    const outcome = JSON.parse( localStorage.getItem( "coin" ) ?? "null" );
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
                        { outcome == "Heads" ? <HeadButton text="Heads" /> : <TailButton /> }
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