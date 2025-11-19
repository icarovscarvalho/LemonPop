'use client'

import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-amber-300 to-yellow-500 pb-[40px]">
      
      <div className="mt-[120px] w-full h-fit p-[20px] md:mt-[200px] lg:flex-row lg:justify-between lg:max-w-[1200px]">
        <Main />
      </div>
      
    </div>
  )
}