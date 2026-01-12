import React from "react";

import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews/LatestNews";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

const MainLayout = () => {
  return (
    <div className="py-12.5 max-w-6xl mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
         <Navbar></Navbar>
        </nav>
      </header>
          <main className="grid grid-cols-12 mt-15">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
