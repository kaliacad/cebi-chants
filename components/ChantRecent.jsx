import React from 'react'

const chantRecents = [
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "Dieu d'amour",
    background:  "/images/pexels2.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "Dieu d'amour",
    background: "/images/pexels2.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "Dieu d'amour",
    background:  "/images/pexels2.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "Dieu d'amour",
    background:  "/images/pexels2.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "Dieu d'amour",
    background:  "/images/pexels2.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "Dieu d'amour",
    background:  "/images/pexels2.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "Dieu d'amour",
    background:  "/images/pexels2.jpg" ,
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
    categorie : 'Louange'
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexel1.jpg",
    categorie : 'Louange'
  }
];
const ChantRecent = () => {
    return (
      <div className='flex gap-4 overflow-hidden overflow-x-scroll tailwind-scrollbar-hide
         scrollbar-hide noscroll'>
             {
            chantRecents.map( ( el, ind ) => {
                return (
                  <div key={ ind } className='text-center'>
                    <div className='w-24 h-24 sm:w-36 sm:h-36 rounded-lg bg-cover cursor-pointer'
                      style={ { backgroundImage: `url(${ el.background })` } }>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-[8px] sm:text-sm font-semi-bold'>{ el.name }</span>
                      <span className='text-[6px] sm:text-[10px]'>{ el.categorie }</span>
                    </div>
                </div>   
                )})}
        </div>
    )
}

export default ChantRecent