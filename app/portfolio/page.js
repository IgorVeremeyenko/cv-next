import Tabs from '../components/portfolioComponents/tabs'
export default function Portfolio() {
    return (
        <>
            <div className="flex flex-col items-center p-2 content-between relative w-full">
                <div className="text-6xl font-black uppercase font-roboto p-10 flex flex-row gap-4 z-10"><p>my </p> <p className="text-myYellow">portfolio</p></div>
                <div className="text-8xl font-black uppercase font-roboto opacity-10 absolute top-6 z-0 tracking-wider"><p>works</p></div>
            </div>
            <div>
                <Tabs />
            </div>
        </>

    )
}