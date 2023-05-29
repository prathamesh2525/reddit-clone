import { useContext } from "react"
import {
  AiOutlineHome,
  AiOutlineLineChart,
  AiOutlineDesktop,
  AiOutlineStar,
} from "react-icons/ai"
import { BsFillArrowUpRightCircleFill, BsCurrencyBitcoin } from "react-icons/bs"
import { GiConsoleController } from "react-icons/gi"
import { MdOutlineSportsBaseball, MdMoreHoriz } from "react-icons/md"
import { myContext } from "../App"

const Feed = () => {
  const { popup, setPopup } = useContext(myContext)
  return (
    <div className="h-auto ">
      <div className="flex justify-center relative">
        <div className="hidden w-1/6 bg-zinc-900 h-[94vh] xl:flex xl:flex-col justify-between text-zinc-300 text-sm">
          <div className="flex flex-col max-w-[300px]">
            <p className="text-xs text-zinc-400 px-6 pt-4">FEEDS</p>
            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2 mt-2 cursor-pointer">
              <AiOutlineHome size={24} />
              <p>Home</p>
            </div>

            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2  cursor-pointer">
              <BsFillArrowUpRightCircleFill size={24} />
              <p>Popular</p>
            </div>

            <p className="text-xs text-zinc-400 px-6 py-4">Topics</p>

            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2  cursor-pointer">
              <GiConsoleController size={24} />
              <p>Gaming</p>
            </div>

            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2  cursor-pointer">
              <MdOutlineSportsBaseball size={24} />
              <p>Sports</p>
            </div>

            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2  cursor-pointer">
              <AiOutlineLineChart size={24} />
              <p>Business, Economics, and finance</p>
            </div>

            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2  cursor-pointer">
              <BsCurrencyBitcoin size={24} />
              <p>Crypto</p>
            </div>

            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2  cursor-pointer">
              <AiOutlineDesktop size={24} />
              <p>Television</p>
            </div>

            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2  cursor-pointer">
              <AiOutlineStar size={24} />
              <p>Celebrity</p>
            </div>

            <div className="flex items-center space-x-2 hover:bg-zinc-800 px-6 py-2  cursor-pointer">
              <MdMoreHoriz size={24} />
              <p>More</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 p-4 mb-4">
            <p className="pr-20 text-sm text-zinc-300">
              Create an account to follow your favorite communities and start
              taking part in conversations.
            </p>
            <button className="bg-orange-600 py-2 rounded-full font-bold hover:opacity-80 ">
              Join Reddit
            </button>
          </div>
        </div>

        {/* Pop up */}
        {popup && (
          <div className="absolute top-40 h-auto w-80 lg:h-[600px] lg:w-96 bg-white mx-auto z-10 text-black rounded-xl">
            <div className="relative flex flex-col p-12">
              <div className="mb-4">
                <h1 className="font-bold mb-2">Log In</h1>
                <p className="text-xs pr-8">
                  By continuing, you are setting up a Reddit account and agree
                  to our{" "}
                  <span className="text-blue-500 cursor-pointer">
                    User Agreement
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-500 cursor-pointer">
                    Privacy Policy.
                  </span>{" "}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <button className="py-2 px-14 border-2 rounded-full">
                  Continue with Google
                </button>
                <button className="py-2 px-16 border-2 rounded-full">
                  Continue with Apple
                </button>
              </div>
              <div className="flex my-5 relative">
                <div className="absolute left-0 top-2 border-t w-28 border-gray-300"></div>
                <span className="mx-auto font-bold text-gray-500">OR</span>
                <div className="absolute right-0 top-2 border-t w-28 border-gray-300"></div>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  className="bg-zinc-100 px-4 py-3 rounded-full font-bold"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="bg-zinc-100 px-4 py-3 rounded-full font-bold"
                  type="password"
                  placeholder="Password"
                />
                <p className="text-sm text-zinc-600">
                  Forgot your{" "}
                  <span className="text-cyan-700 underline cursor-pointer">
                    username
                  </span>{" "}
                  or{" "}
                  <span className="text-cyan-700 underline cursor-pointer">
                    password
                  </span>
                  ?
                </p>

                <button className="bg-orange-700 px-16 py-2 text-white font-bold rounded-full hover:opacity-80">
                  Log In
                </button>

                <p className="text-sm text-zinc-600">
                  New to Reddit?{" "}
                  <span className="text-cyan-700 underline cursor-pointer">
                    Sign Up
                  </span>
                </p>
              </div>

              <button
                onClick={() => setPopup(false)}
                className="absolute top-2 right-3 text-xl font-bold"
              >
                X
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center w-5/6 text-zinc-200">
          <div className="max-w-3xl text-sm p-2 ">
            <span className="text-left ">Trending today</span>
            <div className="hidden md:flex w-full space-x-2 mt-2">
              <div className="w-auto h-36 bg-zinc-900 rounded-xl p-2">
                <p>
                  Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sequi, vero.
                </p>
              </div>

              <div className="w-auto  h-36 bg-zinc-900 rounded-xl p-2">
                <p>
                  Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, perferendis.
                </p>
              </div>

              <div className="w-auto  h-36 bg-zinc-900 rounded-xl p-2">
                <p>
                  Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Accusantium, magni.
                </p>
              </div>

              <div className="w-auto  h-36 bg-zinc-900 rounded-xl p-2">
                <p>
                  Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Hic, optio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
