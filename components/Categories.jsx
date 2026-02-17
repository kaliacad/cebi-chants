import React from 'react'
import Image from "next/image";
import styles from '../styles/Home.module.css'

const categories = [
  {
    name: "Louange",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "vert",
  },
  {
    name: "Adoration",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "rouge",
  },
  {
    name: "Action de grâce",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "blue",
  },
  {
    name: "Sanctification",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "violet",
  },
  {
    name: "Louange",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "vert",
  },
  {
    name: "Adoration",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "rouge",
  },
  {
    name: "Action de grâce",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "blue",
  },
  {
    name: "Sanctification",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "violet",
  },
  {
    name: "Louange",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "vert",
  },
  {
    name: "Adoration",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "rouge",
  },
  {
    name: "Action de grâce",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "blue",
  },
  {
    name: "Sanctification",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "violet",
  },
   {
    name: "Louange",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "vert",
  },
  {
    name: "Adoration",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "rouge",
  },
  {
    name: "Action de grâce",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "blue",
  },
  {
    name: "Sanctification",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "violet",
  },
  {
    name: "Louange",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "vert",
  },
  {
    name: "Adoration",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "rouge",
  },
  {
    name: "Action de grâce",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "blue",
  },
  {
    name: "Sanctification",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "violet",
  },
];
const Categories = () => {
  return (
    <div className='flex gap-4 overflow-hidden overflow-x-scroll 
    tailwind-scrollbar-hide scrollbar-hide noscroll'>
      { categories.map( ( el, ind ) => {
        return (
          <div key={ind} className=''>
            <div className={ styles[ el.background ] + ' rounded-lg w-24 h-24 tablette:w-36 tablette:h-36 flex flex-col justify-center items-center gap-2'}>
            <span>{ el.icon}</span>
            <span className='text-[10px]'>{ el.name}</span>
          </div>
          </div>
        )
      })}
    </div>
  )
}

export default Categories

