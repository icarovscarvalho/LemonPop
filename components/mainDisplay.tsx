

export function MainDisplay() {

  const playListData = [
    {
      img: 'PlayListImg1',
      title: 'Dia de Sol — Para Aproveitar',
      text: 'A vibe certa pro seu dia brilhar. Leve, doce e com energia de verão o ano todo — Música boa com gosto de liberdade.'
    },
    {
      img: 'PlayListImg2',
      title: 'Imersivas — Para Imaginar',
      text: 'Mergulhe em atmosferas sonoras que despertam mundos dentro de você. Solte a mente, flutue nas notas — Imaginação tem trilha sonora.'
    },
    {
      img: 'PlayListImg3',
      title: 'Calmas — Para Estudar',
      text: 'Foco sem esforço. Loops suaves para manter a mente leve e produtiva — O som do seu melhor momento de concentração.'
    },
    // {
    //   img: 'PlayListImg4',
    //   title: 'Contemplativas — Para Pensar',
    //   text: 'Pensamentos profundos merecem música à altura. Deixe as ideias fluírem com cada batida — Onde o silêncio pensa com ritmo.'
    // },
  ]

  return(
    <div className="flex flex-col gap-2 p-2 w-full rounded-xl bg-white/70 shadow-md/20">
      <h2 className="text-xl">Outras Vibes</h2>
      <div className="flex justify-between gap-2 h-full w-full overflow-auto">
        {playListData.map( item => 
          <div key={item.img} className="flex flex-col w-full h-full rounded-xl bg-amber-300 overflow-hidden cursor-pointer">
            <img className=" h-full hover:scale-115 duration-700 ease-in-out" src={`./assets/${item.img}.png `} alt={`playlist para ${item.title}`} />
            {/* <div className="flex h-full p-4 overflow-hidden">
              <p className="text-center">{item.text}</p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  )
}