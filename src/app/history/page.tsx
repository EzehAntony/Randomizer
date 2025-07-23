"use client"
import { Header } from "@/components/Header"
import { LeftArrow } from "@/components/Svgs"
import Timeline from "@/components/Timeline"
import { useRouter } from "next/navigation"


const Page = (): React.ReactElement => {
    const router = useRouter();
    return (
        <div className="w-full h-screen text-white py-4">
            {/* Header */}
            <Header text="History" />
            <div>
                <Timeline />
            </div>
        </div>
    )
}

export default Page