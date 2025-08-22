import { IoMdArrowDropdown } from "react-icons/io";
import { DropDown } from "./dropDown";

interface NavBarProps {
  display: string
  country: string
  handleToggleLang: (country: string, lang: string) => void
  handleToggleButton: () => void
  menuMobileButton: string
}


export function NavBar({display, country, handleToggleLang, handleToggleButton, menuMobileButton}:NavBarProps) {

  const menus = ['Escute', 'Descubra', 'Contato']

  return(
    <nav className={`flex gap-2 justify-items-center ${menuMobileButton} md:flex`}>
      <div className="flex flex-col md:flex-row">
        {menus.map( menu =>
          <a href="#" key={menu} className="py-[5px] px-[10px] hover:bg-yellow-500 transition rounded-2xl hover:shadow-md/10 hover:-translate-y-0.5 duration-300 ease-in-out">{menu}</a>
        )}
        <div className="relative flex items-center h-fit border border-white hover:border-neutral-800 rounded-3xl"
        >
          <p className="py-[5px] px-[10px] hover:bg-neutral-800 hover:text-white transition rounded-l-2xl hover:shadow-md/10 duration-300 ease-in-out cursor-pointer">Login</p>
          <div className="flex items-center py-[7px] px-[5px] hover:bg-neutral-800 hover:text-white transition rounded-r-2xl hover:shadow-md/10 duration-300 ease-in-out cursor-pointer">
            <IoMdArrowDropdown onClick={handleToggleButton} />
            <div>
              <img src={`./assets/Flag${country}.png`} alt={`${country} Lang Selected`} className="w-[20px]" />
            </div>
          </div>
          <DropDown display={display} handleToggleLang={handleToggleLang} />
        </div>
      </div>
    </nav>
  )
}