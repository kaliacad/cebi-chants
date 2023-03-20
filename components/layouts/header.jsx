import Image from "next/image";

const Header = () => {
  return (
    <div className="flex pl-10 pr-10 pt-8 justify-between h-[5vw]  ">
      <div className=" ">
        <h1 className=" font-bold text-3xl ">Bienvenu !</h1>
        <p>Colossiens 6</p>
      </div>
      <div className=" flex  ">
        <Image src={"/images/image 3Logo Image.png"} width={100} height={100} />
        <h1 className=" w-28 font-bold text-xl  ">
          Assemblé <span className=" text-red-500 ">Chretienne</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
