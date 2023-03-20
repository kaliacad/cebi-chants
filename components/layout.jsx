import Header from "./layouts/header";
import NavBar from "./layouts/navbar";

const Layout = ({ children }) => {
  return (
    <div className=" max-h-screen max-w-screen overflow-hidden ">
      <Header />
      <div className=" flex  gap-4">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
