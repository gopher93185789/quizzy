export function Navbar() {
    return (
        <>
            <div className="w-4/5 h-20 flex flex-row items-center">
                <img src="/rcok.png" className="h-full aspect-square grayscale hover:grayscale-0 duration-300 ease-in-out hover:animate-spin"></img>
                <button className="px-5 ml-auto rounded-md text-center h-fit py-1 bg-[#FF4000] text-white font-bold">Dashboard</button>
            </div>
        </>
    )
}