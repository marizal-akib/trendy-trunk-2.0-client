import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Elements/Login";
import SingUp from "../Components/Elements/SingUp";
import AddProduct from "../Components/Pages/AddProduct";
import MyCart from "../Components/Pages/MyCart/MyCart";
import About from "../Components/Pages/About";
import BrandProduct from "../Components/Pages/BrandShop/BrandProduct";
import PageError from "../Components/Pages/PageError";
import Update from "../Components/Elements/Update";
import ProductDetails from "../Components/Pages/BrandShop/ProductDetails";
import PrivateRout from "./PrivateRout";
import Users from "../Components/Pages/Users";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageError></PageError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://trendy-trunk-server-kl0lqxjhy-mariz-al-akibs-projects.vercel.app /products"),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRout>
            <AddProduct></AddProduct>
          </PrivateRout>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SingUp></SingUp>,
      },
      {
        path: "/my-cart",

        element: (
          <PrivateRout>
            <MyCart></MyCart>
          </PrivateRout>
        ),
        loader: () => fetch("https://trendy-trunk-server-kl0lqxjhy-mariz-al-akibs-projects.vercel.app /user"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRout>
            <Update></Update>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`https://trendy-trunk-server-kl0lqxjhy-mariz-al-akibs-projects.vercel.app /products/${params.id}`),
      },
      {
        path: "/brand/:id",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) => fetch("https://trendy-trunk-server-kl0lqxjhy-mariz-al-akibs-projects.vercel.app /products"),
      },
      {
        path: "/users",
        element: <Users></Users>,
        
      },
      {
        path: "/product/:id",

        element: (
          <PrivateRout>
            <ProductDetails></ProductDetails>
          </PrivateRout>
        ),
        loader: ({ params }) => fetch("https://trendy-trunk-server-kl0lqxjhy-mariz-al-akibs-projects.vercel.app /products"),
      },
    ],
  },
]);

export default router;
