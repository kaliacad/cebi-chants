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
    <div className="flex fixed z-10 bottom-0 md:top-[6rem] md:pt-10 md:h-[90vh] h-[4rem] w-screen md:w-[6rem] md:flex-col bg-white md:justify-start justify-evenly  md:gap-10 border-t-[1px] md:border-r-[1px] border-gray-300">
      {menus.map((elt, index) => {
        return (
          <div
            className="flex justify-center items-center text-[10px] hover:text-Jaune text-gray-800 "
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
