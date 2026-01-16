import { createBrowserRouter } from "react-router";
import MainLayout from "../laytouts/MainLayout";
import About from "../components/About/About";
import Career from "../components/Career/Career";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../laytouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News element page</h1>,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/career",
    Component: Career,
  },
  {
    path: "/*",
    element: <h1>404 Error Page</h1>,
  },
]);

export default router;
