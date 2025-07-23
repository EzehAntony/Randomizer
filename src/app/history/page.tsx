import { LeftArrow } from "@/components/Svgs"
import Timeline from "@/components/Timeline"


const page = (): React.ReactNode => {
    return (
        <div className="w-full h-screen bg-black text-white p-4">
            {/* Header */}
            <div className="h-[50px] w-full grid grid-cols-3 justify-between items-center   ">
                <LeftArrow />
                <h1 className="font-medium text-[18px] text-center ">History</h1>

            </div>

            <div>
                <Timeline />
            </div>
        </div>
    )
}

export default page