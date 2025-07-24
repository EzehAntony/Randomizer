"use client"
import { Header } from "@/components/Header"

import Timeline from "@/components/Timeline"


const Page = (): React.ReactElement => {

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