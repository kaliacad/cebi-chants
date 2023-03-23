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
      <div className='flex gap-4 overflow-hidden w-screen overflow-x-scroll tailwind-scrollbar-hide
         scrollbar-hide noscroll'>
             {
            chantRecents.map( ( el, ind ) => {
                return (
                  <div key={ ind } className='text-center'>
                    <div className='w-20 h-20 rounded-lg bg-cover'
                      style={ { backgroundImage: `url(${ el.background })` } }>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-[8px] font-semi-bold'>{ el.name }</span>
                      <span className='text-[6px]'>{ el.categorie }</span>
                    </div>
                </div>   
                )})}
        </div>
    )
}

export default ChantRecent