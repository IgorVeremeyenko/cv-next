import Divider from "../Divider"
export default function Card({years, description}){
    return (
        <div className="
        bg-myColour border-white border-opacity-10 border-2 rounded-md lg:w-48 md:w-[9rem] h-36 hover:drop-shadow-md hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex flex-row pl-5 pt-2">
                <p className="text-5xl font-black text-opposite">{years}</p>
                <b className="text-lg text-opposite">+</b>
              </div>
              <div className="flex w-3/4 p-4 drop-shadow-2xl">
                <Divider isActive={false} />
                <p className="whitespace-normal uppercase text-sm">{description}</p>
              </div>
            </div>
    )
}