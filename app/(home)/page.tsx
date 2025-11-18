'use client'

import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";


export default function Home() {

  return (
    <div className="flex justify-center w-full bg-gradient-to-b from-amber-300 to-yellow-500">
      
      <div className="mt-[120px] w-full max-w-[1500px] px-[10vw] md:mt-[200px]">
        <Main />
      </div>
      
    </div>
  )
}