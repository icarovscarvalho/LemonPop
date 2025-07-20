

export function NavBar() {

  const menus = ['Escute', 'Descubra', 'Contato']

  return(
    <nav className="flex gap-2 justify-items-center items-center">
      {menus.map( menu => 
        <a href="#" key={menu} className="py-[5px] px-[10px] hover:bg-yellow-500 transition rounded-2xl hover:shadow-md/10 hover:-translate-y-0.5 duration-300 ease-in-out">{menu}</a>
      )}
    </nav>
  )
}