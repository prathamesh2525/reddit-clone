import {
  AiOutlineHome,
  AiOutlineLineChart,
  AiOutlineDesktop,
  AiOutlineStar,
} from "react-icons/ai"
import { BsFillArrowUpRightCircleFill, BsCurrencyBitcoin } from "react-icons/bs"
import { GiConsoleController } from "react-icons/gi"
import { MdOutlineSportsBaseball, MdMoreHoriz } from "react-icons/md"

const Feed = () => {
  return (
    <div className="h-auto ">
      <div className="flex justify-center">
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
        <div className="flex justify-center w-5/6 text-zinc-200">
          <div className="max-w-3xl text-sm p-2 ">
            <span className="text-left ">Trending today</span>
            <div className="flex w-full space-x-2 mt-2">
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
