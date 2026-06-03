import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useState } from "react"

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  function submitClick() {
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
    }, 2000)
  }
  return (
    <form className="flex flex-col items-center gap-5 w-80 h-auto bg-white backdrop-blur-lg ring ring-[#4C1711]/20 rounded-lg py-15 px-10">

      <span className="z-20 text-black/80 text-lg pb-5 nowrap ">
        Newsletter signup
      </span>

      <div className="relative flex w-auto items-center justify-center">
        <input className="bg-transparent peer text-black text-sm px-6.5 py-2 ring ring-black/30 rounded-sm outline-none z-20 focus:ring-black/60" placeholder=" " />
        <label className="absolute
          left-6.5
          transition-all 
          duration-300
          ease-in-out 
          peer-focus:bottom-7.5 
          peer-focus:text-xs
        peer-focus:text-black/60
        peer-focus:bg-white
          peer-focus:z-20
          text-sm
        text-black/40
          peer-placeholder-shown:bottom-2 
          peer-placeholder-shown:text-sm 
          peer-placeholder-shown:z-10
          peer-not-placeholder-shown:bottom-7.5
          peer-not-placeholder-shown:text-xs
        peer-not-placeholder-shown:text-black/60
          peer-not-placeholder-shown:z-20
        peer-not-placeholder-shown:bg-white">
          first name
        </label>
      </div>

      <div className="relative flex w-auto items-center justify-center">
        <input className="bg-transparent peer text-sm text-black px-6.5 py-2.5 ring ring-black/30 rounded-sm outline-none z-20 focus:ring-black/60" placeholder=" " />
        <label className="absolute
          left-6.5
          transition-all 
          duration-300
          ease-in-out 
          peer-focus:bottom-7.5 
          peer-focus:text-xs
        peer-focus:text-black/60
        peer-focus:bg-white
          peer-focus:z-20
          text-sm
        text-black/40
          peer-placeholder-shown:bottom-2 
          peer-placeholder-shown:text-sm 
          peer-placeholder-shown:z-10
          peer-not-placeholder-shown:bottom-7.5
          peer-not-placeholder-shown:text-xs
        peer-not-placeholder-shown:text-black/60
          peer-not-placeholder-shown:z-20
        peer-not-placeholder-shown:bg-white">
          last name
        </label>
      </div>

      <div className="relative flex w-auto items-center justify-center">
        <input className="bg-transparent peer text-sm text-black px-6.5 py-2 ring ring-black/30 rounded-sm outline-none z-20 focus:ring-black/60" type="email" required placeholder=" " />
        <label className="absolute
          left-6.5
          transition-all 
          duration-300
          ease-in-out 
          peer-focus:bottom-7.5 
          peer-focus:text-xs
        peer-focus:text-black/60
        peer-focus:bg-white
          peer-focus:z-20
          text-sm
        text-black/40
          peer-placeholder-shown:bottom-2 
          peer-placeholder-shown:text-sm 
          peer-placeholder-shown:z-10
          peer-not-placeholder-shown:bottom-7.5
          peer-not-placeholder-shown:text-xs
        peer-not-placeholder-shown:text-black/60
          peer-not-placeholder-shown:z-20
        peer-not-placeholder-shown:bg-white">
          email
        </label>
      </div>

      <div className="h-auto flex items-center justify-center z-30 overflow-visible w-auto ring ring-black/30 rounded" data-lenis-prevent>
        <PhoneInput
          defaultCountry="US"
          id="tel"
          value=""
          onChange={(phone) => console.log(phone)}
          placeholder="Phone number"

          className="focus:ring-black"
        />
      </div>

      <button className="transiton-all duration-200 ease-in-out ring ring-black text-black rounded-4xl p-x w-29 h-9 item-center active:ring-black/20 active:text-black/20 hover:text-black/65 hover:ring-black/65" onClick={submitClick}>Submit</button>

      <span className={`${subscribed ? "flex" : "hidden"} absolute bottom-5 text-black text-xs`}>You are now subscribed!</span>

    </form>
  )
}