'use client'

import { Explore } from "./components/explore"
import { usePathname } from "next/navigation"
import { PomodoroTimer } from "./components/pomodoro"

interface MainDisplayProps {
  handleChangePlayList: (playlist: string) => void
}

export function MainDisplay({ handleChangePlayList }: MainDisplayProps) {
  const pathname = usePathname()
  const cutPathLink = pathname.slice(1)

  const paths = [
    {
      path: 'presets',
      title: 'Configurações de ruído branco',
      component: <div>Vai vir um componente aqui</div>
    },
    {
      path: 'music',
      title: 'As melhores da Semana',
      component: <div>Vai vir um componente aqui</div>
    },
    {
      path: 'explore',
      title: 'Outras Vibes',
      component: <Explore handleChangePlayList={handleChangePlayList} />
    },
    {
      path: 'pomo',
      title: 'Crie seu próprio tempo - Pomodoro',
      component: <PomodoroTimer />
    },
    // {
    //   path: 'chat',
    //   title: 'Interação ao vivo',
    //   component: <div>Vai vir um componente aqui</div>
    // },
  ]

  return (
    <div className="flex flex-col gap-2 p-2 w-full rounded-xl bg-white/70 shadow-md/20 xl:w-[500px]">
      {paths.map( item =>
        cutPathLink !== item.path
        ? ('')
        : <div key={item.path}>
            <h2 className="text-xl">{item.title}</h2>
            <div className="flex flex-col justify-between gap-2 h-full w-full overflow-auto md:flex-row ">
              {item.component}
            </div>
          </div>
      )}
    </div>
  )
}
