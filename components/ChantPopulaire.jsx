import React from 'react'
import Image from "next/image";

const chantpopulaires = [
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: <Image src={"/images/pixel1.jpg"} />,
  },
  {
    name: "A Dieu soit la gloire",
    background: <Image src={"/images/pixel2.jpg"} />,
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: <Image src={"/images/pixel1.jpg"} />,
  },
  {
    name: "A Dieu soit la gloire",
    background: <Image src={"/images/pixel2.jpg"} />,
  },
];

const ChantPopulaire = () => {
  return (
      <div className='flex gap-4'> 
          { chantpopulaires.map( ( el, ind ) => {
              return (
                  <div className='w-[276px] h-[188px] rounded-xl bg-[{el.background}]'
                  key={ind}
                  >
                      <span>{ el.name}</span> 
                </div>
            )
        })
              
      }    
    </div>
  )
}

export default ChantPopulaire