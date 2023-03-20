import Image from "next/image";

const Header = () => {
  return (
    <div className="flex sm:pl-10 sm:pr-10 p-4 h-[5rem] sm:h-[6rem]  justify-between items-center bg-gradient-to-r from-yellow-500 to-white  ">
      <div className=" text-white ">
        <h1 className=" font-bold text-3xl ">Bienvenu !</h1>
        <p className=" font-light " >Colossiens 6</p>
      </div>
      <div className=" flex  justify-center items-center ">
        <Image src={"/images/image 3Logo Image.png"} width={70} height={100} />
        <h1 className=" w-28 font-bold text-xl hidden sm:block">
          Assemblé <span className=" text-red-500 ">Chretienne</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
