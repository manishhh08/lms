import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        {/* Content goes here */}
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
