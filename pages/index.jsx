import Image from "next/image";
import Link from "next/link";
import bg from "/public/images/Bg.png";
export default function Home() {
  return (
    <section id="LandingpageSection" className="flex flex-col justify-center h-screen" style={{backgroundImage: `url(${bg})`}}>
      <div className="flex flex-col items-center">
        <h1 className=" font-normal text-3xl ">Il est digne de louange.</h1>
        <h2 className=" font-normal text-xl ">Recueil de chants chretiens</h2>
      </div>
      <div className=" flex justify-evenly items-center flex-wrap ">
        <p className="hidden tablette:block tablette:w-[30vw] text-sm ">
          « Entretenez-vous par des psaumes, par des hymnes, et par des
          cantiques spirituels, chantant et célébrant de tout votre cœur les
          louanges du Seigneur » <span className=" font-Playfair " >Ephésiens 5.19</span>
        </p>
        <Image src="/images/image 3LandingImage.png" width={250} height={200} />
      </div>
      <div className=" flex justify-center items-center " >
      <Link href={'/dashboard'}>
        <button className=" bg-[#23A840] w-40 h-10 text-white font-medium rounded-lg " >Démarrer</button>
      </Link>
      </div>
    </section>
  );
}
