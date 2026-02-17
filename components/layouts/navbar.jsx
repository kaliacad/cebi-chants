import Link from "next/link";
import { GoHome } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import {CiSearch} from "react-icons/ci"
import {MdOutlineLibraryBooks} from "react-icons/md"
import {VscInfo} from 'react-icons/vsc'

const menus = [
  {
    name: "Home",
    icon: <GoHome size={30} color="#3030303" />,
    path: "/",
  },
  {
    name: "Recherche",
    icon: <BiSearchAlt size={30} color="#3030303" />,
    path: "/",
  },
  {
    name: "Bibliotheque",
    icon: <MdOutlineLibraryBooks size={30}  color="#3030303"/>,
    path: "/",
  },
  {
    name: "Apropos",
    icon: <VscInfo size={30} color="#3030303"/>,
    path: "/",
  },
];

const NavBar = () => {
  return (
    <div className="flex fixed top-[6rem] pt-10 h-[90vh] w-[6rem] flex-col justify-start gap-10 border-r-[1px] border-gray-300">
      {menus.map((elt, index) => {
        return (
          <div
            className="flex justify-center items-center text-[10px] hover:text-Jaune "
            key={index}
          > 
            <Link
              href={elt.path}
              className="flex flex-col justify-center items-center"
            >
              {elt.icon}
              <p>{elt.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
