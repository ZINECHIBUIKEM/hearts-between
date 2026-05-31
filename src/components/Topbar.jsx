export function Topbar({ isOpen, setIsopen }) {

  function toggleRightbar () {
    setIsopen(
      !isOpen
    )
  }
  return (
    <>
      <div className={`h-screen w-screen transition-all ease-in-out duration-500 fixed flex flex-col gap-[5vh] items-center justify-center bg-black/40 backdrop-blur z-40 top-0 rounded-xl ring ring-white/40 ${isOpen ? "" : "translate-y-[-100vh]" }`}>
        <span onClick={toggleRightbar} className="text-white p-5 cursor-pointer">
          About
        </span>

        <div className="h-px bg-white w-[70vw]" />
        <span onClick={toggleRightbar} className="text-white cursor-pointer p-5">
          Products
        </span>
        <div className="h-px bg-white w-[70vw]" />
        <span onClick={toggleRightbar} className="text-white cursor-pointer p-5">
          Collaborate
        </span>
        <div className="h-px bg-white w-[70vw]" />
        <div className="flex items-center justify-center pt-1.5 pb-2 px-5 rounded-full hover:ring hover:bg-white/0 hover:text-white text-black bg-white cursor-pointer transition-all duration-200 ease-in-out">
          <button onClick={toggleRightbar}>
            Donate
          </button>
        </div>
      </div>
    </>
  )
}