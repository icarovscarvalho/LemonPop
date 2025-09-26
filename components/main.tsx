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

import { toStudyList } from "../utils/toStudy";

export function Main() {

  const lofiYBLink = 'https://www.youtube.com/embed/kSl3VG-mzU4?si=fWjufTFzlz3nep1y'
  const channelYBLink = 'https://www.youtube.com/@DreamhopMusic'

  return(
    <main className="flex flex-col itens-center justify-between gap-10 h-fit xl:flex-row">
      <div className="flex flex-col gap-2 h-fit">
        <div>
          <iframe src={toStudyList[0].link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-xl aspect-3/2 md:w-[560px] md:h-[315px]" />

          {/* Mini Player */}
          {/* <div className="flex items-center gap-3 py-[7px] px-[20px] w-fit bg-white rounded-2xl">
            <IoIosHeartEmpty />
            <IoIosSkipBackward />
            <FaPlay />
            <IoIosSkipForward />
            <LiaRandomSolid />
            <FaVolumeUp />
          </div> */}

        </div>
        <div className="flex flex-col px-[10px] py-3 h-fit rounded-md bg-white">
          <div className="flex flex-col justify-between pb-2 px-5 md:gap-5 md:flex-row">
            <div className="flex gap-1 max-w-[250px]">
              <p><strong>canal:</strong></p>
              <p className="truncate"><a href={toStudyList[0].channel} target="_Blank">Dreamhop Music</a></p>
            </div>
            <div className="flex gap-1  max-w-[270px]">
              <p><strong>Música:</strong></p>
              <p>A Dreamy Lofi Mix</p>
            </div>
          </div>
          <details className="group py-4 px-5 border-1 rounded-md hover:bg-amber-100">
            <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
              <span>Ver as próximas músicas</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                    width="24" className="dark:stroke-gray-400">
                    <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-gray-600 group-open:animate-fadeIn dark:text-gray-300">
              {toStudyList.map( (item, index) => 
                <div key={index} className="pb-2 px-5 rounded-md md:gap-5 hover:bg-amber-400">
                  <a href={item.link} target="_Blank" className="flex flex-col justify-between md:flex-row">
                    <div className="flex gap-1 max-w-[250px]">
                      <p><strong>canal:</strong>{item.channel}</p>
                      <p className="truncate"></p>
                    </div>
                    <div className="flex gap-1 max-w-[270px]">
                      <p><strong>Música:</strong></p>
                      <p className="truncate">{item.music}</p>
                    </div>
                  </a>
                </div>
              )}
            </p>
          </details>
        </div>
        <div className="flex mt-5 h-[150px] w-full rounded-xl bg-gray-200 shadow-md/20">
          Aqui vai uma propagando do google add
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 pt-4 h-fit">
        <MainButtons />
        <MainDisplay />
        <div className="flex flex-col justify-center items-center gap-4 w-full mb-10">
          <p>Está curtindo seu momento aqui?</p>
          <a href="#">
            <button className="flex items-center justify-center gap-4 py-[5px] px-[20px] min-w-[200px] text-white rounded-4xl cursor-pointer bg-neutral-800 hover:text-yellow-500 active:scale-[0.95]">
              <p className="text-wrap">Me pague uma limonada</p>
              <img src="./assets/LemonPopIcon.png" className="w-[30px] h-[30px]" />
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}