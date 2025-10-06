import { Explore } from "./components/explore"

interface MainDisplayProps {
  handleChangePlayList: (playlist:string) => void
}

export function MainDisplay({handleChangePlayList}:MainDisplayProps) {

  return(
    <div className="flex flex-col gap-2 p-2 w-full rounded-xl bg-white/70 shadow-md/20 xl:w-[500px]">
      <h2 className="text-xl">Outras Vibes</h2>
      <div className="flex flex-col justify-between gap-2 h-full w-full overflow-auto md:flex-row ">
        <Explore handleChangePlayList={handleChangePlayList} />
      </div>
    </div>
  )
}