'use client'

import { Header } from "../../components/header";
import { Main } from "../../components/main";

import { GoShareAndroid } from "react-icons/go";
import { FaLinkedin, FaGithub, FaUser } from "react-icons/fa";


export default function Home() {

  const caracthers = 0

  return (
    <div className="flex flex-col items-center justify-betwee relative h-fit select-none bg-gradient-to-b from-amber-300 to-yellow-500">
      <div className="fixed w-full md:max-w-[1500px] md:px-[10vw] z-1">
        <Header />
      </div>
      <div className="mt-[120px] w-full max-w-[1500px] px-[10vw] md:mt-[200px]">
        <Main />
      </div>
      <footer className="w-full bg-neutral-800">
        <div className="flex flex-col items-center gap-8 md:px-[10vw] px-[10vw] py-[20px] w-full md:max-w-[1500px] h-fit">
          <img src="./assets/LemonPopLogo.png" alt="LemonPop Logo" className="w-[10rem] filter brightness-0 invert" />
          <div className="rounded-[50%] overflow-hidden">
            <img src="./assets/LemonPopMascote.png" alt="LemonPop Logo" className="w-[10rem]" />
          </div>
          <div className="text-white">
            <p>“Programar é a minha vibe — e o lofi é o que acalma meus pensamentos. Juntos eles constroem um mundo onde tudo faz sentido.”</p>
            <br />
            <p>— Ícaro Carvalho</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Título..."
              className="py-1 px-2 rounded-xl w-full bg-stone-50"
            />
            <textarea
              name="msg"
              id="msg"
              maxLength={254}
              placeholder="Deixe uma mensagem para mim...."
              className="py-1 px-2 h-[200px] rounded-xl bg-stone-50"
            >
            </textarea>
            <div className="flex justify-end w-full text-white">
              <p>{caracthers}/254</p>
            </div>
            <div className="flex justify-center py-2 w-full text-white border-2 rounded-4xl cursor-pointer">
              <p>Manda no beat</p>
            </div>
          </div>
          <div className="flex gap-5 text-2xl text-white">
            <GoShareAndroid className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] active:scale-90" />
            <FaLinkedin className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] active:scale-90" />
            <FaGithub className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] active:scale-90" />
            <FaUser className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] active:scale-90" />
          </div>
        </div>
      </footer>
    </div>
  )
}