'use client'

import React, { useState } from "react";

import { AdSpace } from "../../components/adSpace";

import { IoMusicalNotesSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type MusicItem = {
  channel: string;
  music: string;
  link: string;
};

export default function Discover() {

  let [active, setActive] = useState<number>(2);
  const playListData = [
    {
      img: 'PlayListImg1',
      title: 'Dia de Sol — Para Aproveitar',
      text: 'A vibe certa pro seu dia brilhar. Leve, doce e com energia de verão o ano todo — Música boa com gosto de liberdade.',
      icon: <IoMusicalNotesSharp />,
    },
    {
      img: 'PlayListImg2',
      title: 'Imersivas — Para Imaginar',
      text: 'Mergulhe em atmosferas sonoras que despertam mundos dentro de você. Solte a mente, flutue nas notas — Imaginação tem trilha sonora.',
      icon: <IoMusicalNotesSharp />,
    },
    {
      img: 'PlayListImg3',
      title: 'Calmas — Para Estudar',
      text: 'Foco sem esforço. Loops suaves para manter a mente leve e produtiva — O som do seu melhor momento de concentração.',
      icon: <IoMusicalNotesSharp />,
    },
    {
      img: 'PlayListImg4',
      title: 'Contemplativas — Para Pensar',
      text: 'Pensamentos profundos merecem música à altura. Deixe as ideias fluírem com cada batida — Onde o silêncio pensa com ritmo.',
      icon: <IoMusicalNotesSharp />,
    },
  ]

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

  console.log(active)
  console.log(playListData.length)

  function nextBtn() {
    if(active <= (playListData.length - 2)){
      setActive( active += 1 )
    }
  }

  function previousBtn() {
    if(active >= 1){
      setActive( active -= 1 )
    }
  }

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
      <div className="flex flex-col gap-4 w-full h-fit p-4 mb-[50px] px-[20px] lg:flex-row lg:justify-between lg:max-w-[1200px]">
        <div className="w-full">
          <div>
            <p className="text-xl">Você está scutando agora</p>
            <p className="opacity-75">lofi hip hop verão sei lá</p>
          </div>
          <div className="h-fit mt-4">
            {/* carrousel */}
            <div className="w-full min-h-[385px] flex flex-col items-center">

              {/* CARDS */}
              <div className="relative flex items-center justify-center min-h-[575px] w-full overflow-hidden perspective-[500px]">
                {playListData.map((item, i) => (
                  <div
                    key={item.title}
                    onClick={() => setActive(i)}
                    className="absolute bg-zinc-900 border-2 border-amber-500 rounded-2xl shadow-xl w-[450px] max-w-[20rem] transition-transform cursor-pointer overflow-hidden"
                    style={getTransform(i)}
                  >
                    {/* CARD IMAGEM */}
                    <div className="relative overflow-hidden h-60 md:h-80">
                      <img
                        src={`/assets/${item.img}.png`}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 text-gray-800 p-2 rounded-full shadow-md opacity-0 hover:opacity-100 transition-all duration-300">
                          {item.icon}
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

                      <button className="mt-4 flex items-center justify-center w-full bg-amber-400 text-white py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors">
                        Ouça agora
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* DOTS */}
              <div className="flex justify-center items-center gap-4 mt-10">
                {/* Botão Esquerda */}
                <button
                onClick={previousBtn}
                  className="bg-black/70 hover:bg-black/60 text-white px-3 py-2 rounded-full cursor-pointer"
                >
                  <IoIosArrowBack />
                </button>
              
                <div>
                  {playListData.map((_, i) => (
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
        </div>
        <div  className="bg-white w-full">
          lista de músicas
        </div>
      </div>
      <div className="w-full h-fit px-[20px] lg:flex-row lg:justify-between lg:max-w-[1200px] bg-green-300">
           <AdSpace />
      </div>


      
    </div>
  )
}