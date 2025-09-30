'use client'

import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-betwee relative h-fit select-none bg-gradient-to-b from-amber-300 to-yellow-500">
      <div className="fixed w-full lg:max-w-[1500px] lg:px-[10vw] z-1">
        <Header />
      </div>
      <div className="mt-[120px] w-full max-w-[1500px] px-[10vw] md:mt-[200px]">
        <Main />
      </div>
      <Footer />
    </div>
  )
}