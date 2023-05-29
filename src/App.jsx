import { createContext, useState } from "react"
import "./App.css"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"

export const myContext = createContext("")

function App() {
  const [popup, setPopup] = useState(false)
  const [feedSearch, setFeedSearch] = useState(false)
  return (
    <div className="h-screen bg-black text-white">
      <myContext.Provider value={{ popup, setPopup }}>
        <Navbar />
        <Feed />
      </myContext.Provider>
    </div>
  )
}

export default App
