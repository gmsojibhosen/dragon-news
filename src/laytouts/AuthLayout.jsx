import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen py-2">
      <header className=" max-w-6xl mx-auto ">
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
