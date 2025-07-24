import GenerateButton from "@/components/buttons/GenerateButton"
import HeadButton from "@/components/buttons/HeadButton"

import ShareButton from "@/components/buttons/ShareButton"
import TailButton from "@/components/buttons/TailButton"
import { Header } from "@/components/Header"


const page = (): React.ReactElement => {
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
                        <HeadButton text={"Head"} /><TailButton />
                    </div>

                </div>
                <GenerateButton text={"Toss Again"} />
            </div>
        </div>
    )
}

export default page