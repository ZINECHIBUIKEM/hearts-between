import { Newsletter } from "./Newsletter"
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Tiktok from "../assets/tiktok.svg";
import HBWhite from "../assets/HBWhite.png";
import FadeIn2 from "../assets/FadeIn2.png";

export function Footer() {

  return (

    <div className="h-[200vh] w-screen md:h-[250vh] mt-20 flex flex-col items-center justify-between px-5 py-10 bg-[#4C1711] text-white">


      <div className="flex flex-col items-center md:flex-row justify-between w-screen">
        <div className="w-screen flex justify-center py-10">
          <div className="flex flex-col items-center gap-7 px-5">
            <img src={HBWhite} className="w-20" />
            <p className="text-4xl font-bold">Be <span className="opacity-40">part</span> of <span className="opacity-40">a</span> child's story.</p>

            <button className="flex items-center justify-center pt-1.5 pb-2 px-5 rounded-full hover:ring hover:bg-white/0 hover:text-white text-black bg-white cursor-pointer transition-all duration-200 ease-in-out">
              Donate
            </button>
          </div>


        </div>


        <div className="h-px opacity-10 bg-white w-[95vw] md:w-px md:h-120" />


        <div className="flex justify-center w-screen px-5 mt-15 md:mt-0">
          <Newsletter />
        </div>
      </div>



      <div className="h-px opacity-10 bg-white w-[95vw]" />


      <div className="flex flex-row items-start w-screen px-5">
        <div className="flex flex-col items-start gap-5">
          <div className="font-bold text-xl cursor-default">
            Explore
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="cursor-pointer opacity-60 hover:opacity-100 transition-all duration-200 ease-in-out">
              About
            </span>
            <span className="cursor-pointer opacity-60 hover:opacity-100 transition-all duration-200 ease-in-out">
              Products
            </span>
            <span className="cursor-pointer opacity-60 hover:opacity-100 transition-all duration-200 ease-in-out">
              Collaborate
            </span>

          </div>

          <div>
            <span className="font-bold text-md cursor-default ">
              Follow us
            </span>
          </div>

          <div className="flex justify-between items-center gap-4">
            <a href="https://web.facebook.com/praise.confidence" target="_blank">
              <img src={Facebook} className="h-5 cursor-pointer transition-all duration-200 ease-in-out opacity-60 hover:opacity-100" />
            </a>

            <a href="https://www.instagram.com/praise_confii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
              <img src={Instagram} className="h-5 cursor-pointer transition-all duration-200 ease-in-out opacity-60 hover:opacity-100" />
            </a>

            <a href="https://www.tiktok.com/@praise.confidence?is_from_webapp=1&sender_device=pc" target="_blank">
              <img src={Tiktok} className="h-6 cursor-pointer transition-all duration-200 ease-in-out opacity-60 hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>


      <div className="h-px opacity-10 bg-white w-[95vw]" />

      <span className="text-xs text-white/50">
        2026 HeartsBetween. All right reserved.
      </span>

      <div className="hidden mt-10 h-auto w-screen overflow-hidden justify-end md:flex">
        <img src={FadeIn2} className="opacity-2 min-w-1000 nowrap shrink-0" />
      </div>

    </div>

  )
}