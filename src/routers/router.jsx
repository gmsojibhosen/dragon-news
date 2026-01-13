import { createBrowserRouter } from "react-router";
import MainLayout from "../laytouts/MainLayout";
import About from "../components/About/About";
import Career from "../components/Career/Career";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        loader: () => fetch('/news.json'),
        Component: CategoryNews,
      },
    ],
    },
  
  {
    path: "/auth",
    element: <h1>Auth element page</h1>,
  },
  {
    path: "/news",
    element: <h1>News element page</h1>,
  },
  {
    path: "/about",
    Component: About ,
  },
  {
    path: "/career",
    Component: Career,
  },
  {
    path: "/*",
    element: "404 Error Page",
  },
]);

export default router;
