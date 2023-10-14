import Link from "next/link"
export default function Button({ text,svg, type='button', onClick =() => {}}) {
    // onClick();
    return (
        <button type={type} onClick={onClick} className='text uppercase focus:ring-2 border-4 border-myYellow flex justify-around overflow-hidden items-center hover:bg-myYellow text-black font-bold py-2 px-4 rounded-full w-56 h-16'>
            {text}
            <div className="focus:ring-2 rounded-full bg-myYellow mr-[-25px] w-16 h-16 flex items-center justify-center">
                {svg}
            </div>
        </button>
    )
}
