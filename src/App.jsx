import './App.css'
import { useState } from "react"
import { CursorFollower } from "./utils/CursorFollower"
import { Navbar } from "./components/Navbar"

function App() {
  const [lightmode, setLightmode] = useState(true);

  return (
    <>
      <link rel="icon" href="HeartsbetweenFavicon.png" />
      <Navbar />
      
      <div>
        <CursorFollower lightmode={lightmode} />
        <p>
          Hello world I am back from the most testing period of my life, so i cherish the old rugged cross, till my trophies at last I lay down
        </p>
      </div>
    </>
  )
}

export default App