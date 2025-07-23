import { Logo } from "./Svgs"


const Splash = (): React.ReactNode => {
    return (
        <div className="flex justify-center items-center gap-[8px]">
            <Logo w={60} h={60} />
            <h1 className="text-[32px] text-white font-600">Randomizer</h1>
        </div>
    )
}

export default Splash