
export function PlusSideBar() {
  return (
    <>
      <div className={`w-32 z-50 hidden sm:block absolute left-0`}>
        <div className="w-full h-full flex justify-center items-center">
          <p className="h-fit mr-0.5 p-0 m-0 w-fit text-white text-3xl">+</p>
        </div>
      </div>
    </>
  );
}