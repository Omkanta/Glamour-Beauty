import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin_Login from "../Pages/Admin_Login";
import { Admin_Page } from "../Pages/Admin_Page";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Cart from "../Pages/Cart";
import PrivateRoute from "../Component/PrivateRoute";
import UserProfile from "../Pages/UserProfile";
import Pro from "../Pages/Pro";
import { ProductList } from "../Component/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={
        <PrivateRoute>
      <Cart />
      </PrivateRoute>
      }></Route>
      <Route path="userdarshboard" element={<UserProfile/>}></Route>
      <Route path="/admin_login" element={<Admin_Login />} />
      <Route path="/admin_page" element={<Admin_Page />} />
      <Route path="/products/:id" element={<Pro/>}/>
      <Route path="/products" element={<ProductList/>}/>
    </Routes>
  );
};

export default MainRoutes;
