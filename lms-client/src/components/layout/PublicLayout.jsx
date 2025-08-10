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
      {/* Footer can be added here if needed */}
      <Footer />
    </>
  );
};

export default PublicLayout;
