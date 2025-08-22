'use client'

import { useEffect, useState } from "react";
import { NavBar } from "./navBar";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { DropDown } from "./dropDown";

export function Header() {

  const [display, setDisplay] = useState<string>('hidden')
  const [dropDownMenuBtn, setDropDownMenuBtn] = useState<boolean>(false)
  const [lang, setLang ] = useState<string>('')
  const [country, setCountry ] = useState<string>('')

  useEffect(()=>{
    setLang('POR')
    setCountry('Brazil')
  },[])

  function handleToggleButton() {
    setDropDownMenuBtn(prev => !prev)
    dropDownMenuBtn !== true
    ? setDisplay('flex')
    : setDisplay('hidden')
  }

  function handleToggleLang(country:string, lang:string) {
    setLang(lang)
    setCountry(country)
    console.log(country)
  }

  return(
    <header className="flex items-center place-content-between bg-white w-full h-fit my-[50px] py-[15px] px-[20px] rounded-4xl shadow-md/20">
      <img src="./assets/LemonPopLogo.png" alt="LemonPop Logo" className="w-[7rem] md:w-[10rem]" />
        <NavBar
          display={display}
          country={country}
          handleToggleLang={handleToggleLang}
          handleToggleButton={handleToggleButton}
        />
    </header>
  )
}