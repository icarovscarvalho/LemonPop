'use client'

import { useEffect, useState } from "react";
import { NavBar } from "./navBar";

import { BsArrowRightSquare, BsArrowRightSquareFill } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";

export function Header() {

  const [display, setDisplay] = useState<string>('hidden')
  const [dropDownLangBtn, setDropDownLangBtn] = useState<boolean>(false)
  const [menu, setMenu] = useState<string>('hidden')
  const [toggleMenuBtn, setToggleMenuBtn] = useState<boolean>(false)
  const [lang, setLang ] = useState<string>('')
  const [country, setCountry ] = useState<string>('')

  useEffect(()=>{
    setLang('POR')
    setCountry('Brazil')
  },[])

  function handleToggleButton() {
    setDropDownLangBtn(prev => !prev)
    dropDownLangBtn !== true
    ? setDisplay('flex')
    : setDisplay('hidden')
  }

  function handleToggleLang(country:string, lang:string) {
    setLang(lang)
    setCountry(country)
    console.log(country)
  }

  function handleToggleMenuButton() {
    setToggleMenuBtn(prev => !prev)
    toggleMenuBtn !== true
    ? setMenu('flex')
    : setMenu('hidden')
  }

  return(
    <header className="flex flex-col items-center justify-center gap-5 w-full h-fit mb-[50px] p-[20px] shadow-md/20 bg-white/80 backdrop-blur-md lg:flex-row lg:justify-between lg:rounded-4xl lg:mt-[50px]">
      <div className="flex items-center justify-between w-[100%] md:w-fit">
        <img src="./assets/LemonPopLogo.png" alt="LemonPop Logo" className="w-[10rem]" />
        <IoIosMenu
        onClick={handleToggleMenuButton}
          className="text-3xl hover:scale-105 cursor-pointer md:hidden"
        />
      </div>
      <NavBar
        display={display}
        country={country}
        handleToggleLang={handleToggleLang}
        handleToggleButton={handleToggleButton}
        menuMobileButton={menu}
      />
    </header>
  )
}