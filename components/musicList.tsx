import { bannerPlayListData } from "../utils/bannerPlayLists";

export function MusicList() {

  const item = bannerPlayListData[0]; // <--- apenas o primeiro elemento

  return (
    <div className="flex flex-col w-full max-w-[550px] h-fit px-3 py-3 rounded-md bg-white mb-5">

      {/* Título e texto */}
      <div className="pb-4 border-b">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600 text-sm">{item.text}</p>
      </div>

      {/* Lista de músicas do primeiro item */}
      {item.musics && (
        <div className="mt-3 max-h-150 overflow-y-auto flex flex-col gap-2 pr-2">

          {item.musics.map((music, index) => (
            <div
              key={index}
              className="flex flex-col bg-amber-100 text-gray-800 rounded-md p-3 hover:bg-amber-200 transition cursor-pointer"
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
      )}

    </div>
  );
}
