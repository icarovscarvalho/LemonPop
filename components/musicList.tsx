import { useState } from "react";
import { bannerPlayListData } from "../utils/bannerPlayLists";

type Music = {
  channel: string;
  music: string;
  link: string;
}

type Info = {
  title: string;
  text: string;
}

interface MusicListProps{
  playListChoosed: Music[];
  getTitle: string;
  getText: string;
}

export function MusicList({playListChoosed, getTitle, getText}:MusicListProps) {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const item = bannerPlayListData[0]; // <--- apenas o primeiro elemento
  const songsList = playListChoosed
  const titleList = getTitle
  const textList = getText

  return (
    <div className="flex flex-col w-full max-w-[550px] h-fit px-3 py-3 rounded-md bg-white mb-5">

      {/* Título e texto */}
      <div className="pb-4 border-b">
        <h2 className="text-lg font-semibold">{titleList}</h2>
        <p className="text-gray-600 text-sm">{textList}</p>
      </div>
      
      <div className="mt-3 max-h-150 overflow-y-auto flex flex-col gap-2 pr-2">

        {songsList.map((music, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`p-3 rounded-md cursor-pointer transition-colors ${selectedIndex === index ? "bg-amber-200" : "bg-gray-100"}`}
          >
            <div className="flex gap-1">
              <p className="font-semibold">Canal:</p>
              <p className="truncate">{music.channel}</p>
            </div>

            <div className="flex gap-1">
              <p className="font-semibold">Música:</p>
              <p className="truncate">{music.music}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
