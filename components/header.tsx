'use client'

import { useState } from "react";
import { NavBar } from "./navBar";
import { IoMdArrowDropdown } from "react-icons/io";
import { DropDown } from "./dropDown";

export function Header() {

  const [display, setDisplay] = useState<string>('hidden')
  const [dropDownMenuBtn, setDropDownMenuBtn] = useState<boolean>(false)

  function handleToggleButton() {
    setDropDownMenuBtn(prev => !prev)
    dropDownMenuBtn !== true
    ? setDisplay('flex')
    : setDisplay('hidden')
  }

  return(
    <header className="flex items-center place-content-between bg-white w-full h-fit my-[50px] py-[15px] px-[20px] rounded-4xl shadow-md/20">
      <img src="./assets/LemonPopLogo.png" alt="LemonPop Logo" className="w-[10rem]" />
      <NavBar />
      <div className="relative flex items-center h-fit border border-white hover:border-neutral-800 rounded-3xl">
        <p className="py-[5px] px-[10px] hover:bg-neutral-800 hover:text-white transition rounded-l-2xl hover:shadow-md/10 duration-300 ease-in-out cursor-pointer">Login</p>
        <div className="flex items-center py-[7px] px-[5px] hover:bg-neutral-800 hover:text-white transition rounded-r-2xl hover:shadow-md/10 duration-300 ease-in-out cursor-pointer">
          <IoMdArrowDropdown onClick={handleToggleButton} />
          <div>
            <img src="./assets/FlagBrazil.png" alt="Brazil Lang Selected" className="w-[20px]" />
          </div>
        </div>
        <DropDown actualDisplay={display} />
      </div>
    </header>
  )
}