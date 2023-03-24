import Search from "../components/Search"
import Categories from "../components/Categories"
import ChantPopulaire from "../components/ChantPopulaire"
import ChantRecent from "../components/ChantRecent"
import SongList from "../components/SongList"

function dashboard() {
  return (
    <div className="flex flex-col w-screen tablette:flex-row">
        <div className="border-r-[1px] pr-4 m-3 mt-0 overflow-scroll tailwind-scrollbar-hide
              scrollbar-hide noscroll">
          <div>
              <Search />
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-lg font-bold">Categories</span>
            <span className="text-md text-Jaune ">Voir plus</span>
          </div>
          <div className="w-[800px] mb-10">
            <Categories />
          </div>
          <div className="my-4 pt-4 border-t-2">
            <span className="text-lg font-bold">Chants Populaires</span>
          </div>
          <div className="w-[800px] mb-10">
            <ChantPopulaire />
          </div>
          <div className="my-4 pt-4 border-t-2">
            <span className="text-lg font-bold mt-2">Chants Recents</span>
          </div>
          <div className="w-[800px]">
            <ChantRecent />
          </div>
        </div>
        <div className=" max-h-screen max-w-full ">
          <SongList />
        </div>
  </div>
  )
}

export default dashboard