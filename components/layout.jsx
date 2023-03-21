import Header from "./layouts/header";
import NavBar from "./layouts/navbar";

const Layout = ({ children }) => {
  return (
    <div className=" max-h-screen max-w-screen  ">
      <Header />
      <div className=" flex  gap-4">
        <NavBar />
        <main className=" mt-[7rem] ml-[7em] ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
