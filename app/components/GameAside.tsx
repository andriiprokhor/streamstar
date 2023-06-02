import React from "react"
import Avatar from "./Avatar"

interface IGameAside {
  title: string
  img: string
}

const GameAside = ({ title, img }: IGameAside) => {
  return (
    <div className="flex items-center justify-around 2xl:justify-between px-[10px] py-[12px]  hover:bg-[#212327] cursor-pointer">
      <div className="flex items-center gap-[8px]">
        <div className="flex items-center gap-2 ">
          <Avatar image={img} />
          <p className="truncate hidden 2xl:block">{title}</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 hidden lg:block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </div>
  )
}

export default GameAside