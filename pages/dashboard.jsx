import Search from "../components/Search"
import Categories from "../components/Categories"
import ChantPopulaire from "../components/ChantPopulaire"
import ChantRecent from "../components/ChantRecent"

function dashboard() {
  return (
    <div>
      <Search />
      <Categories />
      <ChantPopulaire />
      <ChantRecent />
    </div>
  )
}

export default dashboard