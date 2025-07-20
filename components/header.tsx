
import { NavBar } from "./navBar";
import { IoMdArrowDropdown } from "react-icons/io";

export function Header() {
  return(
    <div className="flex items-center flex-col bg-gradient-to-b from-amber-300 to-yellow-500 h-[100dvh] px-[10vw]">
      <header className="flex items-center place-content-between bg-white w-full h-fit my-[20px] py-[15px] px-[20px] rounded-4xl shadow-md/20">
        <img src="./assets/LemonPopLogo.png" alt="LemonPop Logo" className="w-[10rem]" />
        <NavBar />
        <div className="relative flex items-center h-fit border border-white hover:border-neutral-800 rounded-3xl">
          <p className="py-[5px] px-[10px] hover:bg-neutral-800 hover:text-white transition rounded-l-2xl hover:shadow-md/10 duration-300 ease-in-out cursor-pointer">Login</p>
          <div className="flex items-center py-[7px] px-[5px] hover:bg-neutral-800 hover:text-white transition rounded-r-2xl hover:shadow-md/10 duration-300 ease-in-out cursor-pointer">
            <IoMdArrowDropdown />
            <div>
              <img src="./assets/FlagBrazil.png" alt="Brazil Lang Selected" className="w-[20px]" />
            </div>
          </div>
          <div className="bg-white absolute top-8 left-10 flex flex-col gap-1 w-fit p-[10px] z-10 border border-gray-100 shadow-md/10 rounded-xl">
            <div className="flex gap-2">
              <p>POR</p>
              <img src="./assets/FlagBrazil.png" alt="Brazil Lang Selected" className="w-[20px]" />
            </div>
            <div className="flex gap-2">
              <p>SPA</p>
              <img src="./assets/FlagSpain.png" alt="Spanish Lang Selected" className="w-[20px]" />
            </div>
            <div className="flex gap-2">
              <p>EUA</p>
              <img src="./assets/FlagEUA.png" alt="English Lang Selected" className="w-[20px]" />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}