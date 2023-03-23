import Search from "../components/Search"
import Categories from "../components/Categories"
import ChantPopulaire from "../components/ChantPopulaire"
import ChantRecent from "../components/ChantRecent"

function dashboard() {
  return (
    <div className="border-r-[1px] pr-4 m-3 mt-0 overflow-scroll tailwind-scrollbar-hide
         scrollbar-hide noscroll">
      <div>
          <Search />
      </div>
      
      <div className="flex justify-between my-4">
        <span className="text-lg font-bold">Categories</span>
        <span className="text-md text-Jaune ">Voir plus</span>
      </div>
      <div className="w-[800px]">
        <Categories />
      </div>
      <div className="my-4">
        <span className="text-lg font-bold">Chants Populaires</span>
      </div>
      <div className="w-[800px]">
        <ChantPopulaire />
      </div>
      <div className="my-4">
        <span className="text-lg font-bold m">Chants Recents</span>
      </div>
      <div className="w-[800px]">
        <ChantRecent />
      </div>
    </div>
  )
}

export default dashboard