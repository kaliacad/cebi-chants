import React from 'react'
import Image from "next/image";

const categories = [
  {
    name: "Louange",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "Vert",
  },
  {
    name: "Adoration",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "Rouge",
  },
  {
    name: "Action de grâce",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "Bleu",
  },
  {
    name: "Sanctification",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "Violet",
  },
];
const Categories = () => {
  return (
    
    <div className="flex gap-4">
      { categories.map( ( el, ind ) => {
        return (
          <div className='w-20 h-20 bg-[{el.background}] rounded-lg'
          key={ind}
          >
            <span>{ el.icon}</span>
            <span>{ el.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Categories

