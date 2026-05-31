import './App.css'
import { useState } from "react"
import Lenis from "lenis"
import { useEffect } from "react"
import { CursorFollower } from "./utils/CursorFollower"
import { Navbar } from "./components/Navbar"
import landingPicSm from "./assets/landing-sm.png"
import landingPicMd from "./assets/landing.png"
import IMG2 from "./assets/IMG2.png"
import IMG3 from "./assets/IMG3.png"
import IMG4 from "./assets/IMG4.png"
import FadeInImage from "./assets/fadeIn.png"
import { ScrollBlurText } from "./utils/ScrollBlurText"
import FadeIn from "./utils/FadeIn"
import { InfiniteScroll } from './utils/InfiniteScroll'
import { Topbar } from "./components/Topbar"
import { Footer } from "./components/Footer"


function App() {
  const [lightmode, setLightmode] = useState(true);

  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <link rel="icon" href="HBWhite.png" />
      <Navbar isOpen={isOpen} setIsopen={setIsopen} className="z-50" />
      <CursorFollower lightmode={lightmode} />

      <div className="w-screen">
        <div className="absolute top-55 md:top-70 flex flex-col items-center w-screen px-5 md:px-20 z-10  font-[dancing]">
          <p className="font-semibold md:font-bold text-5xl md:text-7xl text-white stroke">Growing <span className="font-[poppins]">Minds</span>, Guiding <span className="text-[#ffffff]">Hearts.</span></p>
          <span className="text-white pt-5 font-[poppins] text-sm md:text-base" >
            Helping children and parents find the knowledge to build bridges that connect.
          </span>
        </div>
        <div className="flex justify-center w-screen mb-5">
          <img src={landingPicSm} className="w-[98vw] rounded-3xl md:hidden" />
          <img src={landingPicMd} className="hidden w-[98vw] rounded-3xl md:flex" />
        </div>
        <span className="text-[#4C1711] font-light text-sm px-5">Partner with parents & teachers all over the world creating awareness on

        </span>

        <InfiniteScroll lightmode={lightmode} />


        <ScrollBlurText>
          <p className="text-[#4C1711] font-[playfair] text-9xl mt-20 mb-50">
            NO
          </p>
        </ScrollBlurText>



        <ScrollBlurText>
          <p className="text-[#4C1711] font-[playfair] text-9xl mb-50">
            CHILD
          </p>
        </ScrollBlurText>


        <ScrollBlurText>
          <p className="text-[#4C1711] font-[playfair] text-9xl mb-50">
            IS
          </p>
        </ScrollBlurText>


        <ScrollBlurText >
          <p className="text-[#4C1711] font-[playfair] text-9xl mb-50">
            DUMB
          </p>
        </ScrollBlurText>



        <FadeIn className="flex mx-5 mt-5 rounded-2xl overflow-hidden ring-[#4C1711]/20 ring-3">
          <img src={IMG4} className="transition-all duration-500 ease-in-out rounded-2xl hover:scale-105" />
        </FadeIn>
        <FadeIn className="flex mx-5 mt-5 overflow-hidden rounded-2xl ring-[#4C1711]/20  ring-3">
          <img src={IMG2} className="transition-all duration-500 ease-in-out rounded-2xl hover:scale-105" />
        </FadeIn>
        <FadeIn className="flex mx-5 mt-5 overflow-hidden rounded-2xl ring-[#4C1711]/20 ring-3">
          <img src={IMG3} className="transition-all duration-500 ease-in-out rounded-2xl hover:scale-105" />
        </FadeIn>

      </div>

      <div className="flex mt-20 h-auto w-screen overflow-hidden justify-start">
        <img src={FadeInImage} className="opacity-3 min-w-500 nowrap shrink-0" />
      </div>
      <div className="flex mt-20 h-auto w-screen overflow-hidden justify-end">
        <img src={FadeInImage} className="opacity-3 min-w-500 nowrap shrink-0" />
      </div>



      <Footer />
    </>
  )
}

export default App