export function HamburgerMenu({ isOpen, setIsopen, lightmode }) {

  function toggleRightbar() {
    setIsopen(!isOpen);
  }
  return (
    <div className="flex flex-col items-center justify-center hover:cursor-pointer h-8 gap-1.5 rounded w-8" onClick={toggleRightbar}>
      <div className={`transition-all ease-in-out duration-300 w-6 h-0.5 ${lightmode ?  "bg-black": "bg-white"} origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
      <div className={`transition-all ease-in-out duration-200 w-6 h-0.5 ${lightmode ?  "bg-black": "bg-white"} ${isOpen ? "opacity-0" : ""}`} />
      <div className={`transition-all ease-in-out duration-300 w-6 h-0.5 ${lightmode ?  "bg-black": "bg-white"} origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </div>
  )
};