import Search from "../components/Search"
import Categories from "../components/Categories"
import ChantPopulaire from "../components/ChantPopulaire"
import ChantRecent from "../components/ChantRecent"

function dashboard() {
  return (
    <div className="w-[380px] border-r-[1px] pr-4 m-4 mt-0">
      <Search />
      <div className="flex justify-between my-4">
        <span className="text-lg font-bold">Categories</span>
        <span className="text-md text-Jaune mr-20">Voir plus</span>
      </div>
      <div >
        <Categories />
      </div>
      <div className="my-4">
        <span className="text-lg font-bold">Chants Populaires</span>
      </div>
      <ChantPopulaire />
      <div className="my-4">
        <span className="text-lg font-bold m">Chants Recents</span>
      </div>
      <ChantRecent />
    </div>
  )
}

export default dashboard