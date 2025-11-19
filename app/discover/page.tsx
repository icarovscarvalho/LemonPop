'use client'

import { useState } from "react";

import { FaHeadphonesAlt } from "react-icons/fa";

import { AdSpace } from "../../components/adSpace";
import { Carousel } from "../../components/carousel/components/carousel";
import { MusicList } from "../../components/musicList";

import { bannerPlayListData } from "../../utils/bannerPlayLists"

interface Music {
  channel: string;
  music: string;
  link: string;
}

export default function Discover() { 

  const [playListChoosed, setPlayListChoosed] = useState<Music[]>(bannerPlayListData[2]!.musics!)
  const [getTitle, setGetTitle] = useState<string>(bannerPlayListData[2].title)
  const [getText, setGetText] = useState<string>(bannerPlayListData[2].text)
  const [getLink, setGetLink] = useState<string>(bannerPlayListData[2]!.musics![0]!.link!)
  const [clickedMusic, setClickedMusic] = useState<string>('')

  function handleChangePlayList(music?: Music[], title?: string, text?: string, link?: string) {
    setPlayListChoosed(music ?? [])
    setGetTitle(title ?? '')
    setGetText(text ?? '')
    setGetLink(link ?? '')
    setClickedMusic('')
    windowScroll()
  }

  function handleChangeMusicOnPlayList(music: string) {
    setClickedMusic(music)
    windowScroll()
  }

  function windowScroll() {
    window.innerWidth <= 1000
    ? window.scrollTo({ top: 0, behavior: 'smooth' })
    : window.scrollTo({ top: 70, behavior: 'smooth' })
  }

  return(
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-amber-300 to-yellow-500 pb-[40px]">
      
      <div className="mt-[120px] w-full h-fit p-[20px] md:mt-[200px] lg:flex-row lg:justify-between lg:max-w-[1200px]">
        <iframe
          src={clickedMusic === '' ? getLink : clickedMusic}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-xl aspect-3/2 md:w-full"
        />
      </div>
      <div className="flex flex-col items-center gap-4 w-full h-fit p-4 mb-[50px] px-[20px] lg:flex-row lg:justify-between lg:max-w-[1200px]">
        <div className="w-full">
          <div>
            <span className="flex items-center justify-between">
              <p className="text-xl">Você está scutando agora</p>
              <FaHeadphonesAlt className="text-lg" />
            </span>
            <p className="opacity-75">{getTitle}</p>
          </div>
          <Carousel handleChangePlayList={handleChangePlayList} />
        </div>
        <MusicList 
          handleChangeMusicOnPlayList={handleChangeMusicOnPlayList}
          playListChoosed={playListChoosed}
          getTitle={getTitle}
          getText={getText}
        />
      </div>
      <div className="w-full h-fit px-[20px] lg:flex-row lg:justify-between lg:max-w-[1200px]">
           <AdSpace />
      </div>
      
    </div>
  )
}