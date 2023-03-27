import React from 'react'

const chantpopulaires = [
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
   {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
  {
    name: "Dieu d'amour Dieu de toutes grâces",
    background: "/images/pexel1.jpg",
  },
  {
    name: "A Dieu soit la gloire",
    background: "/images/pexels2.jpg",
  },
];

const ChantPopulaire = () => {
  return (
    <div className='flex gap-4 boder-b-2 overflow-hidden overflow-x-scroll tailwind-scrollbar-hide
         scrollbar-hide noscroll'>
          { chantpopulaires.map( ( el, ind ) => {
            return (
              <div key={ind}>
                <div className='w-80 h-64 lg:w-96 lg:h-80 rounded-lg bg-cover px-2 py-48 text-center cursor-pointer'
                  style={ { backgroundImage: `url(${ el.background })` } } 
                  >
                  <span className='text-lg lg:text-2lg font-bold text-white text-center my-auto'>
                    { el.name }
                  </span> 
                </div>
              </div>
            )
        })       
      }    
    </div>
  )
}

export default ChantPopulaire