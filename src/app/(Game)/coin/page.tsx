import { Header } from "@/components/Header"
import { Coin } from "@/components/Svgs"


const page = (): React.ReactElement => {
    return (
        <div className="h-screen w-full space-y-[24px]">
            <Header text="Coin Toss" />
            <div className="h-[683px] px-4 w-full ">
                <h1 className="text-[18px] font-normal ">Tap the coin to flip</h1>
                <div className="flex justify-center items-center my-auto  h-full">
                    <Coin w={300} h={300} />
                </div>
            </div>
        </div>
    )
}

export default page