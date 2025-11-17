'use client'

import { AdSpace } from "../../components/adSpace";

type MusicItem = {
  channel: string;
  music: string;
  link: string;
};

export default function Discover() {

  return(
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-amber-300 to-yellow-500 pb-[40px]">
      
      <div className="mt-[120px] w-full h-fit mb-[50px] p-[20px] lg:mt-[200px] lg:flex-row lg:justify-between lg:max-w-[1200px] bg-red-300">
        <iframe
          src={'https://www.youtube.com/embed/z22tv0jjr94'}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-xl aspect-3/2 md:w-full md:h-[315px]"
        />
      </div>
      <div className="w-full h-fit mb-[50px] p-[20px] lg:flex-row lg:justify-between lg:max-w-[1200px] bg-blue-300">
            div2
      </div>
      <div className="w-full h-fit px-[20px] lg:flex-row lg:justify-between lg:max-w-[1200px] bg-green-300">
           <AdSpace />
      </div>


      
    </div>
  )
}