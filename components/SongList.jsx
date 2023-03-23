
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
    <div>
    
        <aside className="flex flex-col content-end justify-between gap-4">
            <h3 className="side-title text-2xl font-semibold">Tous les chants</h3>
            <div className="flex flex-col gap-6">
            {
                chants?.map((item, id) => (
                <div key={id} className="bg-gray-400 flex justify-between gap-4 pt-3 pr-5 pb-3 pl-5 rounded-md">
                    <div className="flex justify-center items-center gap-4">
                        <span>{item.order}</span>
                        <div className="rounded-full bg-white h-12 w-12">
                            {/* <img src="" alt="s" /> */}
                        </div>
                        <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span>{item.type}</span>
                        </div>
                    </div>
                <p>{item.category}</p>
                </div>
                ))
            }
                
            </div>
        </aside>

    </div>
  )
}

export default SongList;