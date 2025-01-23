// import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex">
      <LeftSidebar className="flex-1"/>
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
