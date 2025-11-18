'use client'

import { AdSpace } from "../../components/adSpace";
import { Carousel } from "../../components/carousel/components/carousel";
import { MusicList } from "../../components/musicList";

import { bannerPlayListData } from "../../utils/bannerPlayLists"

export default function Discover() { 

  return(
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-amber-300 to-yellow-500 pb-[40px]">
      
      <div className="mt-[120px] w-full h-fit p-[20px] md:mt-[200px] lg:flex-row lg:justify-between lg:max-w-[1200px]">
        <iframe
          src={'https://www.youtube.com/embed/z22tv0jjr94'}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-xl aspect-3/2 md:w-full"
        />
      </div>
      <div className="flex flex-col items-center gap-4 w-full h-fit p-4 mb-[50px] px-[20px] lg:flex-row lg:justify-between lg:max-w-[1200px]">
        <div className="w-full">
          <div>
            <p className="text-xl">Você está scutando agora</p>
            <p className="opacity-75">lofi hip hop verão sei lá</p>
          </div>
          <Carousel />
        </div>
        <MusicList />
      </div>
      <div className="w-full h-fit px-[20px] lg:flex-row lg:justify-between lg:max-w-[1200px] bg-green-300">
           <AdSpace />
      </div>


      
    </div>
  )
}