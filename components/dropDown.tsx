interface DropDownProps {
  actualDisplay: string
}

export function DropDown({actualDisplay}:DropDownProps) {

  const  countrysList = [
    {
      flag: 'Brazil',
      lang: 'POR'
    },
    {
      flag: 'EUA',
      lang: 'EUA'
    },
    {
      flag: 'Spain',
      lang: 'SPA'
    },
  ]

  return(
    <div className={`${actualDisplay} flex-col gap-1 absolute top-8 left-10 w-fit p-[10px] z-10 border border-gray-100 shadow-md/10 rounded-xl bg-white`}>
      {countrysList.map(cl => (
        <div key={cl.flag} className="flex gap-2">
          <p>{cl.lang}</p>
          <img src={`./assets/Flag${cl.flag}.png`} alt={`${cl.flag} Lang Selected`} className="w-[20px]" />
        </div>
      ))}
    </div>
  )
}