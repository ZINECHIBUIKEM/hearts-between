import { HamburgerMenu } from "../utils/HamburgerMenu";
import { Topbar } from "../components/Topbar";
import HBWhite from "../assets/heartsbetween.png";

export function Navbar({ lightmode, setLightmode, isOpen, setIsopen }) {
  function toggleRightbar() {
    setIsopen(!isOpen);
  }

  return (
    <div className="flex w-screen items-center justify-center z-50">
      <div className="fixed top-6 left-5 flex items-center justify-center px-5 backdrop-blur rounded-full p-1 bg-black/20 md-hidden ring ring-white/40 md:hidden z-50">
        <img src={HBWhite} className="h-10" />
      </div>
      {/* RIGHT BAR PLACEMENT */}
      <Topbar isOpen={isOpen} setIsopen={setIsopen} />


      <nav className="fixed top-5 hidden justify-between items-center px-2 pl-5 rounded-full bg-black/20 backdrop-blur w-150 ring ring-white/40 md:flex z-50">
        <div className="cursor-pointer">
          <img className="h-13" src={HBWhite} />
        </div>

        <div className="flex justify-between gap-7">
          <span className="text-white  cursor-pointer hover:opacity-70 transition-all duration-100 ease-in-out">
            About
          </span>
          <span className="text-white cursor-pointer hover:opacity-70 transition-all duration-100 ease-in-out">
            Products
          </span>
          <span className="text-white cursor-pointer hover:opacity-70 transition-all duration-100 ease-in-out">
            Collaborate
          </span>
        </div>

        <div className="flex items-center justify-center pt-1.5 pb-2 px-5 rounded-full hover:ring hover:bg-white/0 hover:text-white text-black bg-white cursor-pointer transition-all duration-200 ease-in-out">
          <button>
            Donate
          </button>
        </div>
      </nav>

      <div className="fixed right-5 top-6 backdrop-blur rounded-full p-2 bg-black/20 md:hidden ring ring-white/40 z-50" onClick={toggleRightbar}>
        <HamburgerMenu isOpen={isOpen} />
      </div>

    </div>
  )
};