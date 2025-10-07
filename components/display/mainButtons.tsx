import {
  IoMusicalNotesOutline,
  IoMusicalNotesSharp,
  IoTimer,
  IoTimerOutline
} from "react-icons/io5";
import { FaRegCompass, FaCompass } from "react-icons/fa";
import { HiAdjustmentsHorizontal, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// import { MdChatBubbleOutline, MdChatBubble } from "react-icons/md";
import { useState } from "react";

export function MainButtons() {

  const iconsList = [
    {
      icon: <HiOutlineAdjustmentsHorizontal />,
      hover: <HiAdjustmentsHorizontal />,
      text: 'predefinir'
    },
    {
      icon: <IoMusicalNotesOutline />,
      hover: <IoMusicalNotesSharp />,
      text: 'musicas'
    },
    {
      icon: <FaRegCompass />,
      hover: <FaCompass />,
      text: 'explore'
    },
    {
      icon: <IoTimerOutline />,
      hover: <IoTimer />,
      text: 'pomo'
    },
    // {
    //   icon: <MdChatBubbleOutline />,
    //   hover: <MdChatBubble />,
    //   text: 'chat'
    // },
  ]

  const [pathName, setPathName] = useState<string>('')
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  function pathHandleChange(path:string) {
    setPathName(path)
    window.history.pushState({}, '', path)
  }

  

  return (
    <div className="flex justify-between flex-wrap-reverse text-4xl gap-6">
      {iconsList.map((il, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-[5px] w-[70px] cursor-pointer rounded-md hover:bg-amber-400 hover:inset-shadow-sm active:scale-[0.95] transition duration-150"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => pathHandleChange(il.text)}
        >
          {hoverIndex === index ? il.hover : il.icon}
          <p className="text-sm">{il.text}</p>
        </div>
      ))}
    </div>
  )
}