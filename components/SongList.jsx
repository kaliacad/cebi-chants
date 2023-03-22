
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

    console.log(chants);
  return (
    <div>
        <aside>
            <h3>Tous les chants</h3>
            <div>
                <div>
                    <span>Order</span>
                    <div><img src="" alt="song-img" /></div>
                    <h4>Title</h4>
                    <p>Type</p>
                </div>
                <p>Category</p>
            </div>
        </aside>

    </div>
  )
}

export default SongList;