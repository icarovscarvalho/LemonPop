'use client'

import { Header } from "../../components/header";
import { Main } from "../../components/main";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-betwee relative h-fit select-none bg-gradient-to-b from-amber-300 to-yellow-500">
      <div className="fixed w-full md:max-w-[1500px] md:px-[10vw] z-1">
        <Header />
      </div>
      <div className="mt-[120px] w-full max-w-[1500px] px-[10vw] md:mt-[200px]">
        <Main />
      </div>
      <footer className="border-2 w-full h-[200px]"><h1>aqui é o footer</h1></footer>
    </div>
  )
}