import {
  IoMusicalNotesOutline,
  IoMusicalNotesSharp,
  IoTimer,
  IoTimerOutline
} from "react-icons/io5";
import { FaRegCompass, FaCompass } from "react-icons/fa";
import { HiAdjustmentsHorizontal, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdChatBubbleOutline, MdChatBubble } from "react-icons/md";
import { useState } from "react";

export function MainButtons() {

  const iconsList = [
    {
      icon: <HiOutlineAdjustmentsHorizontal />,
      hover: <HiAdjustmentsHorizontal />,
      text: 'Presets'
    },
    {
      icon: <IoMusicalNotesOutline />,
      hover: <IoMusicalNotesSharp />,
      text: 'music'
    },
    {
      icon: <FaRegCompass />,
      hover: <FaCompass />,
      text: 'Explore'
    },
    {
      icon: <IoTimerOutline />,
      hover: <IoTimer />,
      text: 'Pomodore'
    },
    {
      icon: <MdChatBubbleOutline />,
      hover: <MdChatBubble />,
      text: 'Chat'
    },
  ]

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-between text-4xl gap-6">
      {iconsList.map((il, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer active:scale-[0.95]"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {hoverIndex === index ? il.hover : il.icon}
          <p className="text-sm">{il.text}</p>
        </div>
      ))}
    </div>
  )
}