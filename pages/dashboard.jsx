import Search from "../components/Search"
import Categories from "../components/Categories"
import ChantPopulaire from "../components/ChantPopulaire"
import ChantRecent from "../components/ChantRecent"
import Image from "next/image";

const chantpopulaires = [
  {
    name: "Home",
    background: "",
  },
  {
    name: "Recherche",
    background: "",
  },
  {
    name: "Bibliotheque",
    background: "",
  },
  {
    name: "Apropos",
    background: "",
  },
];
const chantRecents = [
  {
    name: "Home",
    background: "",
  },
  {
    name: "Recherche",
    background: "",
  },
  {
    name: "Bibliotheque",
    background: "",
  },
  {
    name: "Apropos",
    background: "",
  },
];
const categories = [
  {
    name: "Louange",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "Vert",
  },
  {
    name: "Adoration",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "Rouge",
  },
  {
    name: "Action de grâce",
    icon: <Image src={"/images/ph_hands-clapping-thin.png"} width={25} height={30} />,
    background: "Bleu",
  },
  {
    name: "Sanctification",
    icon: <Image src={"/images/ph_hands-praying-thin.png"} width={25} height={30} />,
    background: "Violet",
  },
];

function dashboard() {
  return (
    <div className="w-[380px] border-r-[1px] pr-4 m-4 mt-0">
      <Search />
      <div className="flex justify-between my-4">
        <span className="text-lg font-bold">Categories</span>
        <span className="text-md text-Jaune mr-20">Voir plus</span>
      </div>
      <div className="flex gap-4">
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