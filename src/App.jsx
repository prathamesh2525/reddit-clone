import "./App.css"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Feed />
    </div>
  )
}

export default App
