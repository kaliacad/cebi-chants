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
    <div className='flex gap-4 overflow-hidden w-screen overflow-x-scroll tailwind-scrollbar-hide
         scrollbar-hide noscroll'>
          { chantpopulaires.map( ( el, ind ) => {
            return (
              <div key={ind}>
                <div className='w-56 h-48 rounded-xl bg-cover px-2 pt-20 text-center'
                  style={ { backgroundImage: `url(${ el.background })` } } 
                  >
                  <span className='text-lg font-bold text-white m-auto'>
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