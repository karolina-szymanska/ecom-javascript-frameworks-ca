import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Header/Navigation/index.jsx";
import Footer from "./Footer";

// Layout wraps Header, Footer and Outlet
const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
