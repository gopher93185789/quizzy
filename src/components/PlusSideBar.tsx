interface PlusSideBarProps {
    top?:string
    left?:string
}

export function PlusSideBar({top="0", left="0"}: PlusSideBarProps) {
  return (
    <>
      <div className={`w-32 z-50 absolute left-${left} top-${top}`}>
        <div className="w-full h-full flex justify-center items-center">
          <p className="h-fit mr-0.5 p-0 m-0 w-fit text-white text-3xl">+</p>
        </div>
      </div>
    </>
  );
}