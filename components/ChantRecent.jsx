import React from 'react'
import Image from "next/image";

const chantRecents = [
  {
    name: "A Dieu soit la gloire",
    background: <Image src={ "/images/pixel2.jpg" } />,
    categorie : 'Louange'
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: <Image src={ "/images/pixel1.jpg" } />,
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: <Image src={ "/images/pixel2.jpg" } />,
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: <Image src={ "/images/pixel1.jpg" } />,
    categorie : 'Louange'
  },
];
const ChantRecent = () => {
    return (
        <div className='flex gap-4'>
             {
            chantRecents.map( ( el, ind ) => {
                return (
                    <div  
                    key={ind}
                    >
                        <div className='w-20 h-20 bg-[el.background] rounded-lg'>
                            
                        </div>
                        <span>{ el.name }</span>
                        <span>{el.categorie }</span>
                    </div>   
                )
        })}
        </div>
    )
}

export default ChantRecent