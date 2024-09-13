import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SmoothScroll from "./components/SmoothScroll.jsx";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./components/AllProducts.jsx";
import Layout from "./Layout.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Register from "./components/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <Register />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll />
    <RouterProvider router={router} />
  </StrictMode>
);
