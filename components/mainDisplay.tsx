import { IoMusicalNotesSharp } from "react-icons/io5"

interface MainDisplayProps {
  handleChangePlayList: (playlist:string) => void
}

export function MainDisplay({handleChangePlayList}:MainDisplayProps) {

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
    // {
    //   img: 'PlayListImg4',
    //   title: 'Contemplativas — Para Pensar',
    //   text: 'Pensamentos profundos merecem música à altura. Deixe as ideias fluírem com cada batida — Onde o silêncio pensa com ritmo.',
    //   icon: <IoMusicalNotesSharp />,
    // },
  ]

  return(
    <div className="flex flex-col gap-2 p-2 w-full rounded-xl bg-white/70 shadow-md/20 xl:w-[500px]">
      <h2 className="text-xl">Outras Vibes</h2>
      <div className="flex flex-col justify-between gap-2 h-full w-full overflow-auto md:flex-row ">
        {playListData.map( item => 
          <div 
            key={item.text}
            onClick={() => {
              handleChangePlayList(item.title)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="group relative w-full  rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative overflow-hidden h-60 md:h-80">
              <img 
                src={`./assets/${item.img}.png`} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 text-gray-800 p-2 rounded-full shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {item.icon}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ">
                <button className="flex items-center justify-center gap-2 w-full bg-amber-400 text-white py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors duration-300 cursor-pointer">
                  <p 
                    // className="fas fa-shopping-cart "
                    // onClick={() => {
                    //   handleChangePlayList(item.title)
                    //   window.scrollTo({ top: 0, behavior: 'smooth' })
                    // }}
                  >
                    Ouça agora
                  </p>
                </button>
              </div>
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-slow">NEW</span>
            </div>
            <div className="h-full w-full p-5 bg-zinc-900">
              <div className="h-fit">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-amber-500 whitespace-normal break-firebase ">{item.title}</h3>
                  <p className="text-white text-sm whitespace-normal break-words">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}