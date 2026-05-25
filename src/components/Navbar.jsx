import { useState } from "react";
import { HamburgerMenu } from "../utils/HamburgerMenu";
import HBWhite from "../assets/heartsbetween.png";

export function Navbar({ lightmode, setLightmode }) {

  const [isOpen, setIsopen] = useState(false);


  return (
    <div className="flex w-full items-center justify-center">
      <nav className="fixed top-5 flex justify-between items-center px-2 pl-5 rounded-full bg-black/10 backdrop-blur w-150 ring ring-white/40">
        <div className="cursor-pointer">
          <img className="h-13" src={HBWhite} />
        </div>

        <div className="flex justify-between gap-7">
          <span className="text-white  cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out">
            About
          </span>
          <span className="text-white cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out">
           Products
          </span>
          <span className="text-white cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out">
            Collaborate
          </span>
        </div>

        <div className="flex items-center justify-center pt-1.5 pb-2 px-5 rounded-full hover:ring hover:bg-white/0 hover:text-white text-black bg-white cursor-pointer transition-all duration-200 ease-in-out">
          <button>
            Donate
          </button>
        </div>
      </nav>
    </div>
  )
};