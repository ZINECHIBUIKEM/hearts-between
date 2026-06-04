import './App.css'
import { useState } from "react"
import Lenis from "lenis"
import { useEffect } from "react"
import { CursorFollower } from "./utils/CursorFollower"
import { Navbar } from "./components/Navbar"
import landingPicSm from "./assets/landing-sm-jpg.jpg"
import landingPicMd from "./assets/landing-jpg.jpg"
import IMG2 from "./assets/IMG2-jpg.jpg"
import IMG3 from "./assets/IMG3-jpg.jpg"
import IMG4 from "./assets/IMG4-jpg.jpg"
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
        <div className="absolute top-70 md:top-70 flex flex-col items-center w-screen px-5 md:px-20 z-10  font-[dancing]">
          <h className="font-bold text-5xl md:text-7xl text-white stroke">Growing <span className="text-5xl font-bold md:text-7xl">Minds</span>, Guiding <span className="text-[#ffffff] font-bold text-5xl md:text-7xl">Hearts.</span></h>
          <h3 className="text-white pt-5 font-[poppins] text-sm md:text-base" >
            Helping children and parents find the knowledge to build bridges that connect.
          </h3>
        </div>
        <div className="flex justify-center w-screen mb-5">
          <img src={landingPicSm} className="w-[98vw] rounded-3xl md:hidden" />
          <img src={landingPicMd} className="hidden w-[98vw] rounded-3xl md:flex" />
        </div>
        <span className="text-[#4C1711] font-light text-sm px-5">Partner with parents & teachers all over the world creating awareness on

        </span>

        <InfiniteScroll lightmode={lightmode} />


        <ScrollBlurText>
          <p className="text-[#4C1711] font-[playfair] text-9xl mt-50 mb-50 px-5">
            NO
          </p>
        </ScrollBlurText>



        <ScrollBlurText>
          <p className="text-[#4C1711] font-[playfair] text-9xl mb-50 px-5">
            CHILD
          </p>
        </ScrollBlurText>


        <ScrollBlurText>
          <p className="text-[#4C1711] font-[playfair] text-9xl mb-50 px-5">
            IS
          </p>
        </ScrollBlurText>


        <ScrollBlurText >
          <p className="text-[#4C1711] font-[playfair] text-9xl mb-50 px-5">
            DUMB
          </p>
        </ScrollBlurText>



        <FadeIn className="flex mx-5 mt-5 rounded-2xl overflow-hidden md:mx-26">
          <div className="flex items-center">
            <p className="absolute bottom-5 px-10 p-5 text-white font-semibold text-shadow-2xl [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] text-md z-20 text-start">
              HeartsBetween was born from a simple but life-changing question
            </p>
            <img src={IMG4} className="transition-all duration-500 ease-in-out rounded-2xl hover:scale-105" />
          </div>
        </FadeIn>

        <p className="px-5 mt-5 text-[#4C1711] font-light text-md">
          What if the child struggling in the classroom is not lacking intelligence, but simply expressing it differently?
          The idea began with a young student who repeatedly struggled academically despite possessing an extraordinary gift for drawing. While many saw poor grades, we saw creativity, imagination, and untapped potential. His story sparked a realization that would become the foundation of HeartsBetween: no child should be defined by a report card alone.
        </p>

        <div className="flex flex-col md:flex-row md:mx-25">
          <FadeIn className="flex mx-5 mt-5 overflow-hidden rounded-2xl md:mx-1 ">
            <div className="flex items-center">
              <p className="absolute bottom-5 px-10 text-white font-semibold text-shadow-2xl [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] text-md z-20 text-start">
                At HeartsBetween, we believe every child is intelligent, valuable, and capable of greatness.
              </p>
              <img src={IMG2} className="transition-all duration-500 ease-in-out rounded-2xl hover:scale-105" />
            </div>
          </FadeIn>

          <FadeIn className="flex mx-5 mt-5 overflow-hidden rounded-2xl md:mx-1">
            <div className="flex items-center">
              <p className="absolute bottom-5 px-10 text-white font-semibold text-shadow-2xl [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] text-md z-20 text-start">
                We are passionate about holistic development.
              </p>
              <img src={IMG3} className="transition-all duration-500 ease-in-out rounded-2xl hover:scale-105" />
            </div>
          </FadeIn>

        </div>

        <p className="px-5 mt-5 text-[#4C1711] font-light text-md">

          We recognize that intelligence manifests in different ways, and that many young people go through life carrying labels that do not reflect who they truly are.

          Our mission is to create awareness about the diverse ways children learn, think, and express intelligence. Through school outreaches, educational content, advocacy, and empathy-driven engagement, we help students discover their strengths, build confidence, and develop a healthier understanding of themselves.

          Beyond academics, we champion character, emotional wellbeing, self-awareness, and the belief that every child deserves to be seen for who they are—not just for how they perform in examinations.

          At HeartsBetween, we are rewriting the narrative that says some children are “dull” or “less intelligent.” We are helping young people recognize their unique abilities, empowering parents and educators to see children differently, and building a future where every child has the opportunity to thrive.

          Because intelligence is not one-dimensional.

          And every mind matters.
        </p>

      </div>

      <div className="hidden mt-20 h-auto w-screen overflow-hidden justify-start md:flex">
        <img src={FadeInImage} className="opacity-3 min-w-1000 nowrap shrink-0" />
      </div>

      <div>


        

      </div>

      <Footer />
    </>
  )
}

export default App