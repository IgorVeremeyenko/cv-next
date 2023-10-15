export default function Divider({isActive}){
    return (
        <>
            {!isActive ? <div className="w-4 h-px border-2 rounded-md border-borders mt-2.5 mr-2"></div> : <div className="w-10 h-px rounded-md border-2 border-opposite mt-7"></div>}
        </>
    )
}