
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
    ]
    
  return (
    <div className="mx-auto">
    
        <aside className="flex flex-col  justify-between gap-4 sm:w-96">
            <h3 className="text-base pl-3 font-light sm:text-xl sm:pl-7 sm:font-semibold sm:w-96 
            md:max-xl:text-2xl md:font-semibold md:pl-4 max-xl:font-bold">
                Tous les chants</h3>
            <div className="flex flex-col justify-center items-center gap-4 mx-auto w-80 md:max-xl:w-full">
            {
                chants?.map((item, id) => (
                <div key={id} className="bg-gray-200 flex justify-between py-2 px-2 font-light rounded-md w-72 text-xs  sm:text-xs sm:w-80 md:py-3 md:px-3 md:text-sm md:w-11/12">
                    <div className="flex justify-center items-center gap-2 md:gap-4">
                        <span className="sm:text-sm md:text-base">{item.order}</span>
                        <div className="rounded-full bg-white h-5 w-5 md:h-12 md:w-12
                        sm:h-10 sm:w-10 md:max-xl:h-12 
                        md:max-xl:w-12">
                            {/* <img src="" alt="s" /> */}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-normal leading-none">{item.title}</span>
                            <span className="text-slate-400">{item.type}</span>
                        </div>
                    </div>
                    <p className="text-slate-400">{item.category}</p>
                </div>
                ))
            }
                
            </div>
        </aside>

    </div>
  )
}

export default SongList;