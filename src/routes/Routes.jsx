import { createBrowserRouter } from "react-router-dom";
import CardDetails from "../components/CardDetails";
import GadgetCard from "../components/GadgetCard";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import FAQPage from "../pages/FAQPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/category.json"),
        children: [
          {
            path: "/",
            element: <GadgetCard />,
            loader: () => fetch("../gadget.json"),
          },
          {
            path: "category/:category",
            element: <GadgetCard />,
            loader: () => fetch("../gadget.json"),
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "faq",
        element: <FAQPage></FAQPage>,
      },
      {
        path: "/gadget/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("/gadget.json"),
      },
    ],
  },
]);

export default routes;
