import reddit from "../assets/reddit.svg"
import {
  BsFillArrowUpRightCircleFill,
  BsSearch,
  BsQrCodeScan,
} from "react-icons/bs"
import { VscAccount } from "react-icons/vsc"
import { BiChevronDown, BiHelpCircle } from "react-icons/bi"
import { CgMoreVerticalO } from "react-icons/cg"
import { RiTodoLine, RiLoginBoxLine } from "react-icons/ri"
import { TbSpeakerphone } from "react-icons/tb"
import { useState } from "react"

const Navbar = () => {
  const [profileInfo, setProfileInfo] = useState(false)
  const [popup, setPopup] = useState(false)
  return (
    <div className="w-full">
      <div className="flex items-center justify-between space-x-5 bg-zinc-900 px-4 py-1 h-14 border-b border-zinc-700">
        <div className="cursor-pointer flex items-center ">
          <img className="h-10" src={reddit} alt="reddit logo" />
          <p className="hidden lg:block text-xl font-bold">reddit</p>
        </div>
        <div className="cursor-pointer hidden xl:flex 2xl:hidden justify-between space-x-3 items-center rounded hover:border hover:border-zinc-500 p-2 text-sm gap-20 ">
          <div className="flex justify-start space-x-2 items-center">
            <BsFillArrowUpRightCircleFill size={22} />
            <div className="hidden xl:block 2xl:hidden ">Popular</div>
          </div>
          <BiChevronDown size={24} />
        </div>
        <div className="flex items-center bg-zinc-800 space-x-2 rounded-full border border-zinc-800">
          <div className="px-4 py-2 bg-zinc-800 rounded-full flex items-center space-x-4 pr-20 md:pr-52 lg:pr-96  text-zinc-500 border border-zinc-700 hover:border-zinc-400">
            <BsSearch />
            <div>Search Reddit</div>
          </div>
        </div>
        <div className="flex justify-end items-center space-x-5 mr-2">
          <div className="hidden sm:flex items-center space-x-2 bg-white text-black px-4 rounded-full font-bold py-1 hover:opacity-80 cursor-pointer">
            <BsQrCodeScan size={20} />
            <p>Get App</p>
          </div>
          <div
            onClick={() => setPopup(true)}
            className="hidden sm:flex bg-orange-600 px-8 py-1 font-bold rounded-full cursor-pointer hover:opacity-80"
          >
            Log In
          </div>
          <div
            onClick={() => setProfileInfo(!profileInfo)}
            className="relative flex items-center text-zinc-500 cursor-pointer hover:border hover:border-zinc-500 rounded "
          >
            <VscAccount size={20} />
            <BiChevronDown size={24} />
            {profileInfo && (
              <div className="absolute top-8 right-0 flex flex-col  bg-zinc-900 rounded text-zinc-200 w-56 text-sm">
                <div className="hover:bg-white hover:text-black p-2 py-3 flex items-center space-x-4">
                  <BiHelpCircle size={22} />
                  <p>Help Center</p>
                </div>
                <div className="hover:bg-white hover:text-black p-2 py-3 flex items-center space-x-4">
                  <CgMoreVerticalO size={20} />
                  <p>More</p>
                </div>
                <div className="hover:bg-white hover:text-black p-2 py-3 flex items-center space-x-4">
                  <RiTodoLine size={20} />
                  <p>Terms & Policies</p>
                </div>
                <div className="hover:bg-white hover:text-black p-2 py-3 flex items-center space-x-4">
                  <TbSpeakerphone size={20} />
                  <p>Advertise on Reddit</p>
                </div>
                <div className="hover:bg-white hover:text-black p-2 py-3 flex items-center space-x-4">
                  <RiLoginBoxLine size={20} />
                  <p>Log In / Sign Up</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
