
import { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMusicalNotesSharp } from "react-icons/io5";

import { bannerPlayListData } from "../../../utils/bannerPlayLists"

interface Music {
  channel: string;
  music: string;
  link: string;
}

interface CarouselProps{
  handleChangePlayList: (music: Music[], title: string, text: string) => void
}


export function Carousel({handleChangePlayList}:CarouselProps) {

  let [active, setActive] = useState<number>(2);

   function getTransform (index: number) {
    const offset = index - active;

    // Fórmula para simular a lógica CSS original:
    const x = offset * 300;
    const z = Math.abs(offset) * -90;
    const y = Math.abs(offset) * -15;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) translateY(${y}px)`,
      zIndex: 10 - Math.abs(offset),
    };
  };

  function nextBtn() {
    if(active <= (bannerPlayListData.length - 2)){
      setActive( active += 1 )
    }
  }

  function previousBtn() {
    if(active >= 1){
      setActive( active -= 1 )
    }
  }

  return(
    <div className="h-fit mt-4">
      {/* carrousel */}
      <div className="w-full h-fit flex flex-col items-center">

        {/* CARDS */}
        <div className="relative flex items-start justify-center min-h-[480px] md:h-[575px] w-full overflow-hidden perspective-[500px]">
          {bannerPlayListData.map((item, i) => (
            <div
              key={item.title}
              onClick={() => setActive(i)}
              className="absolute bg-zinc-900 border-2 border-amber-500 rounded-2xl shadow-xl w-[450px] max-w-[20rem] transition-transform overflow-hidden"
              style={getTransform(i)}
            >
              {/* CARD IMAGEM */}
              <div className="relative overflow-hidden h-60 md:h-80">
                <img
                  src={`/assets/${item.img}.webp`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 text-gray-800 p-2 rounded-full shadow-md opacity-0 hover:opacity-100 transition-all duration-300">
                    <IoMusicalNotesSharp />
                  </div>
                </div>

                <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-slow">
                  NEW
                </span>
              </div>

              {/* CARD TEXTO */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-amber-500">{item.title}</h3>
                <p className="text-white text-sm">{item.text}</p>

                <button 
                  className="mt-4 flex items-center justify-center w-full bg-amber-400 text-white py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors cursor-pointer"
                  onClick={() => handleChangePlayList(item?.musics ?? [], item.title, item.text)}
                >
                  Ouça agora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center items-center gap-4 lg:mt-10">
          {/* Botão Esquerda */}
          <button
          onClick={previousBtn}
            className="bg-black/70 hover:bg-black/60 text-white px-3 py-2 rounded-full cursor-pointer"
          >
            <IoIosArrowBack />
          </button>
        
          <div>
            {bannerPlayListData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[6px] w-[6px] rounded-full mx-2 transition-transform
                  ${active === i ? "scale-150 bg-white" : "scale-100 bg-gray-600 cursor-pointer"}
                `}
              />
            ))}
          </div>

          {/* Botão Direita */}
          <button
            onClick={nextBtn}
            className="bg-black/70 hover:bg-black/60 text-white px-3 py-2 rounded-full cursor-pointer"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}