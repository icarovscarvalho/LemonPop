'use client'

import { MainButtons } from "./display/mainButtons";
import { MainDisplay } from "./display/mainDisplay";

import { toStudy } from "../utils/toStudy";
import { toSunnyDays } from "../utils/toSunnyDays";
import { toStopOverThink } from "../utils/toStopOverThink";

import { useEffect, useState } from "react";
import { AdSpace } from "./adSpace";
import path from "path";

type MusicItem = {
  channel: string;
  music: string;
  link: string;
};

export function Main() {

  const [currentPlayList, setCurrentPlayList] = useState<string>('toStudy')
  const [currentList, setCurrentList] = useState<MusicItem[]>(toStudy)

  const [currentMusic, setCurrentMusic] = useState<string>(toStudy[0].music)
  const [currentChannel, setCurrentChannel] = useState<string>(toStudy[0].channel)
  const [currentLink, setCurrentLink] = useState<string>(toStudy[0].link)

  const playListsData = [
    {title: 'Calmas — Para Estudar', value: toStudy},
    {title: 'Imersivas — Para Imaginar', value: toStopOverThink},
    {title: 'Dia de Sol — Para Aproveitar', value: toSunnyDays},
  ]


  function handleChangePlayList(playList: string) {
    setCurrentPlayList(playList)

    const found = playListsData.find(item => item.title === playList)
    if (!found?.value) return null

    playListsData.find( item => item.title === currentPlayList)?.value ?? null

    setCurrentList(found.value)

    // também já atualiza a música inicial
    setCurrentMusic(found.value[0].music)
    setCurrentChannel(found.value[0].channel)
    setCurrentLink(found.value[0].link)

    return found.value
  }

  function getVisibleMusics(list: MusicItem[], currentMusic: string): MusicItem[] {
    const currentIndex = list.findIndex(item => item.music === currentMusic);

    if (currentIndex === -1) return []; // caso não ache a música

    const start = Math.max(0, currentIndex - 1); // pega 1 antes, se existir
    const end = currentIndex + 2; // pega até 2 depois
    return list.slice(start, end + 1); // slice não inclui o último índice
  }

  const visibleMusics = getVisibleMusics(currentList, currentMusic)

  function changeMusic(music: string, channel: string, link: string) {
    if (currentMusic !== music) {
      setCurrentMusic(music)
      setCurrentChannel(channel)
      setCurrentLink(link)
    }
  }

  useEffect(() => {
    console.log(currentPlayList)
  }, [currentPlayList])

  return (
    <main className="flex flex-col itens-center justify-between gap-10 h-fit xl:flex-row">
      <div className="flex flex-col gap-2 h-fit md:min-w-160">
        <div>
          <iframe
            src={currentLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-xl aspect-3/2 md:w-full md:h-[315px]"
          />
        </div>

        {/* Música atual */}
        <div className="flex flex-col px-[10px] py-3 h-fit rounded-md bg-white">
          <div className="flex flex-col pb-2 px-5">
            <div className="flex gap-1 max-w-[250px]">
              <p><strong>canal:</strong></p>
              <p className="truncate">{currentChannel}</p>
            </div>
            <div className="flex gap-1  w-full">
              <p><strong>Música:</strong></p>
              <p className="truncate">{currentMusic}</p>
            </div>
          </div>

          {/* Lista de próximas músicas */}
          <details className="group py-4 px-5 border-1 rounded-md hover:bg-amber-100">
            <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
              <span>Ver as próximas músicas</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  className="dark:stroke-gray-400"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>

            <div className="mt-3 text-gray-600 group-open:animate-fadeIn dark:text-gray-300">
              {visibleMusics.map((item, index) => (
                <div
                  key={index}
                  onClick={() => changeMusic(item.music, item.channel, item.link)}
                  className={`flex flex-col justify-between px-5 rounded-md md:gap-5 md:flex-row cursor-pointer
                    ${currentMusic === item.music ? "bg-amber-400 text-white" : "hover:bg-amber-200"}`}
                >
                  <div className="flex gap-1 max-w-[250px]">
                    <p className="truncate"><strong>canal:</strong>{item.channel}</p>
                  </div>
                  <div className="flex gap-1 max-w-[270px]">
                    <p><strong>Música:</strong></p>
                    <p className="truncate">{item.music}</p>
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
              
        <AdSpace />
        
      </div>

      {/* Display */}
      <div className="flex flex-col justify-between gap-4 pt-4 h-fit">
        <MainButtons />
        <MainDisplay handleChangePlayList={handleChangePlayList} />
        <div className="flex flex-col justify-center items-center gap-4 w-full mb-10">
          <p>Está curtindo seu momento aqui?</p>
          <a href="#">
            <button className="flex items-center justify-center gap-4 py-[5px] px-[20px] min-w-[200px] text-white rounded-4xl cursor-pointer bg-neutral-800 hover:text-yellow-500 active:scale-[0.95] hover:scale-102 transition">
              <p className="text-wrap">Me pague uma limonada</p>
              <img src="./assets/LemonPopIcon.png" className="w-[30px] h-[30px]" />
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}
