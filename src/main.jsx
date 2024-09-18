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
import Coffee from "./components/Coffee.jsx";
import Equipments from "./components/Equipments.jsx";
import Bundles from "./components/Bundles.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import Account from "./components/Account.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { CartProvider } from "./CartContext.jsx";

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
        path: "/category/coffee",
        element: <Coffee />,
      },
      {
        path: "/category/equipment",
        element: <Equipments />,
      },
      {
        path: "/category/bundles",
        element: <Bundles />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <SmoothScroll />
        <RouterProvider router={router} />
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);
