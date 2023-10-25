import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home";
import WishList from "./components/wishlist/WishList";
import AuthProvider from "./components/provider/AuthProvider";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import AddCart from "./components/AddCart/AddCart";
import MenCategory from "./pages/Category/MenCategory";
import WomenCategory from "./pages/Category/womenCategory";
import Shop from "./pages/shop/Shop";
import Dashboard from "./Layout/Dashboard";
import AllUser from "./components/Dashboard/AllUser/AllUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./pages/AdminRoute/AdminRoute";
import ManageItems from "./components/Dashboard/ManageItems/ManageItems";
import AddItem from "./components/Dashboard/AddItem/AddItem";
// import ProceedCheckout from "./components/AddCart/ProceedCheckout";
import PaymentSuccess from "./pages/Paymentsuccess/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed/PaymentFailed";
import UserHome from "./components/Dashboard/UserHome/UserHome";
import AdminHome from "./components/Dashboard/AdminHome/AdminHome";
import OrderDetails from "./components/Dashboard/OrderDetails/OrderDetails";
import Blog from "./pages/Blog/Blog";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "wishList",
        element: <WishList></WishList>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "menCategory",
        element: <MenCategory></MenCategory>,
      },
      {
        path: "womenCategory",
        element: <WomenCategory></WomenCategory>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
     
      {
        path: "blog",
        element: <Blog></Blog>,
      },
     

    ],
  },
  {
    path: "addCart",
    element: <AddCart></AddCart>,
  },
  {
    path: "payment/success/:transId",
    element: <PaymentSuccess></PaymentSuccess>,
  },
  {
    path: "payment/fail/:transId",
    element: <PaymentFailed></PaymentFailed>,
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },

      // admin routes
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: "allUser",
        element: <AdminRoute><AllUser></AllUser></AdminRoute>,
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
      },
      {
        path: "addItem",
        element: <AdminRoute><AddItem></AddItem></AdminRoute>,
      },
      {
        path: "orderDetails",
        element: <AdminRoute><OrderDetails></OrderDetails></AdminRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
