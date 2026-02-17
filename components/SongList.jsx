
const SongList = () => {
    const chants = [
        {
            "order": 1,
            "image": '',
            "title": 'A Dieu soit la gloire',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 2,
            "image": '',
            "title": 'Dieu d’amour, Dieu de toute ...',
            "type": 'chant',
            "category": 'Adoration',
        },
        {
            "order": 3,
            "image": '',
            "title": 'O Dieu dont l’amour',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 4,
            "image": '',
            "title": 'Ensemble',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 5,
            "image": '',
            "title": 'A Dieu soit la gloire',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 6,
            "image": '',
            "title": 'A Dieu soit la gloire',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 7,
            "image": '',
            "title": 'A Dieu soit la gloire',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 8,
            "image": '',
            "title": 'Dieu d’amour, Dieu de toute ...',
            "type": 'chant',
            "category": 'Adoration',
        },
        {
            "order": 9,
            "image": '',
            "title": 'O Dieu dont l’amour',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 10,
            "image": '',
            "title": 'Ensemble',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 11,
            "image": '',
            "title": 'A Dieu soit la gloire',
            "type": 'chant',
            "category": 'Louange',
        },
        {
            "order": 12,
            "image": '',
            "title": 'A Dieu soit la gloire',
            "type": 'chant',
            "category": 'Louange',
        },
    ]
    
  return (
    <div className="fixed mx-auto w-min tablette:w-[29.5vw] ">
        <div className="px-0 w-96 pl-4">
            <h3 className="text-lg mt-16 mb-6 pl-0 pt-1 font-semibold sm:pl-7 sm:font-semibold w-96 
            md:pl-4 lg:text-2xl lg:pl-0 lg:font-bold">
                Tous les chants
            </h3>
        </div>
        <aside className="flex flex-col w-96 justify-between gap-4 overflow-hidden
         overflow-y-scroll h-screen tailwind-scrollbar-hide scrollbar-hide noscroll"
         >
            <div className="flex flex-col justify-center items-center gap-4 mx-auto pl-4 w-full md:lg:w-full">
            {
                chants?.map((item, id) => (
                <div key={id} className="mx-4 bg-gray-200 flex justify-between py-3 px-5 font-light rounded-md w-full text-xs  
                sm:text-xs sm:w-80 md:py-3 md:px-3 md:text-sm md:w-11/12 lg:w-96">
                    <div className="flex justify-center text-md items-center gap-4 md:gap-4">
                        <span className="font-medium">{item.order}</span>
                        <div className="rounded-full bg-Vert h-12 w-12 sm:h-10 sm:w-10 md:h-12 md:w-12
                        md:lg:h-12 
                        md:lg:w-12">
                            
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium">{item.title}</span>
                            <span className="text-slate-400">{item.type}</span>
                        </div>
                    </div>
                    <p className="text-slate-400 mt-2">{item.category}</p>
                </div>
                ))
            }
                
            </div>
        </aside>
    </div>
  )
}

export default SongList;