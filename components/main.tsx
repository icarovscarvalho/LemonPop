import {
  IoIosHeartEmpty,
  IoIosHeart,
  IoIosSkipBackward,
  IoIosSkipForward
} from "react-icons/io";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { LiaRandomSolid } from "react-icons/lia";

import { MainButtons } from "./mainButtons";
import { MainDisplay } from "./mainDisplay";

export function Main() {

  const lofiYBLink = 'https://www.youtube.com/embed/kSl3VG-mzU4?si=fWjufTFzlz3nep1y'
  const channelYBLink = 'https://www.youtube.com/@DreamhopMusic'

  return(
    <main className="flex itens-center justify-between gap-10 w-full h-full">
      <div>
        <div>
          <iframe width="560" height="315" src={lofiYBLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-xl" />
          {/* <div className="flex items-center gap-3 py-[7px] px-[20px] w-fit bg-white rounded-2xl">
            <IoIosHeartEmpty />
            <IoIosSkipBackward />
            <FaPlay />
            <IoIosSkipForward />
            <LiaRandomSolid />
            <FaVolumeUp />
          </div> */}
        </div>
        <div className="flex items-center justify-start gap-5 px-[10px] py-[3px] mt-2 rounded-md bg-white">
          <div className="flex gap-1 max-w-[250px]">
            <p><strong>canal:</strong></p>
            <p className="truncate"><a href={channelYBLink} target="_Blank">Dreamhop Music</a></p>
          </div>
          <div className="flex gap-1  max-w-[270px]">
            <p><strong>Música:</strong></p>
            <p>A Dreamy Lofi Mix</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 w-full">
        <MainButtons />
        <MainDisplay />
        <div className="flex flex-col justify-center items-center w-full mb-10">
          <p>Está curtindo seu momento aqui?</p>
          <a href="#">
            <button className="flex items-center justify-center gap-4 py-[5px] px-[20px] min-w-[300px] text-white rounded-4xl cursor-pointer bg-neutral-800 hover:text-yellow-500 active:scale-[0.95]">
              <p>Me pague uma limonada</p>
              <img src="./assets/LemonPopIcon.png" className="w-[30px] h-[30px]" />
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}