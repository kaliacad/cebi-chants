import Link from "next/link";

const menus = [
  {
    name: "Home",
    icon: "",
    path: "/",
  },
  {
    name: "Recherche",
    icon: "",
    path: "/",
  },
  {
    name: "Bibliotheque",
    icon: "",
    path: "/",
  },
  {
    name: "Apropos",
    icon: "",
    path: "/",
  },
];

const NavBar = () => {
  return (
    <div className="flex h-[90vh] w-[10vw] flex-col justify-start gap-10 border-r-[1px] border-gray-300">
      {menus.map((elt, index) => {
        return (
          <div
            className="flex justify-center items-center text-sm "
            key={index}
          >
            <Link href={elt.path}>
              {elt.icon}
              {elt.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
