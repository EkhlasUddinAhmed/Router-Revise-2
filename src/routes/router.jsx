import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import Products from "../components/Products/Products";
import UserDetails from "../components/UserDetails/UserDetails";
import LogIn from "../components/LogIn/LogIn";
import Registration from "../components/Registration/Registration";
import Protected from "../components/Protected/Protected";
import Appointment from "../components/Appointment/Appointment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
       {
        path:"/",
        element:<Home></Home>
       },
       {
        path:"/home",
        element:<Home></Home>
       },
       {
        path:"/aboutus",
        element:<Protected><AboutUs></AboutUs></Protected>
       },
       {
        path:"/product",
        element:<Protected><Products></Products></Protected>
       },
       {
        path:"/user/:userID",
        element:<Protected><UserDetails></UserDetails></Protected>
       },
       {
        path:"/login",
        element:<LogIn></LogIn>
       },
       {
        path:"/register",
        element:<Registration></Registration>
       },
       {
        path:"/appointment/:id",
        element:<Appointment></Appointment>
       },
       
      ],
    },
  ]);

export default router;
