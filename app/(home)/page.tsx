'use client'

import { Header } from "../../components/header";
import { Main } from "../../components/main";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-between h-[100dvh] select-none bg-gradient-to-b from-amber-300 to-yellow-500">
      <div className="w-full max-w-[1500px] px-[10vw]">
        <Header />
        <Main />
      </div>
      <footer className="border-2 w-full h-[200px]"><h1>aqui é o footer</h1></footer>
    </div>
  )
}