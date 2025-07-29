import { countrysList } from "../utils/countrysList"

interface DropDownProps {
  actualDisplay: string
  handleToggleLang: (country:string, lang:string) => void
}

export function DropDown({actualDisplay, handleToggleLang}:DropDownProps) {

  return(
    <div className={`${actualDisplay} flex-col gap-1 absolute top-8 left-10 w-fit p-[10px] z-10 border border-gray-100 shadow-md/10 rounded-xl bg-white`}>
      {countrysList.map(cl => (
        <div key={cl.flag} className="flex gap-2 cursor-pointer" onClick={() => handleToggleLang(cl.flag, cl.lang)}>
          <p>{cl.lang}</p>
          <img src={`./assets/Flag${cl.flag}.png`} alt={`${cl.flag} Lang Selected`} className="w-[20px]" />
        </div>
      ))}
    </div>
  )
}