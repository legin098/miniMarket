import Aside from "../components/Aside";
import ListProducts from "../components/ListProducts";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "./styles/Layout.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="layout__container">
        <ListProducts />
        <Aside>
          <Outlet />
        </Aside>
      </section>
    </>
  );
};

export default Layout;
