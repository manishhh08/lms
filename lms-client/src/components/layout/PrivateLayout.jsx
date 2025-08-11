import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const PrivateLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        {/* Content goes here */}
        <Outlet />
      </main>
      {/* Footer can be added here if needed */}
    </>
  );
};

export default PrivateLayout;
