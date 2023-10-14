import Divider from "../Divider"
export default function Card({years, description}){
    return (
        <div className="
        bg-slate-200 border-2 rounded-md lg:w-48 md:w-[9rem] h-36 hover:drop-shadow-md hover:scale-105 transition duration-300 ease-in-out ">
              <div className="flex flex-row pl-5 pt-2">
                <p className="text-5xl font-black">{years}</p>
                <b className="text-lg">+</b>
              </div>
              <div className="flex w-3/4 p-4 drop-shadow-2xl">
                <Divider isActive={true} />
                <p className="whitespace-normal uppercase text-sm">{description}</p>
              </div>
            </div>
    )
}