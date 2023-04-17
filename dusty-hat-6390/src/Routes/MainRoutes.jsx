import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Admin_Login from "../Pages/Admin_Login";
import { Admin_Page } from "../Pages/Admin_Page";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Cart from "../Pages/Cart";
import PrivateRoute from "../Component/PrivateRoute";
import Pro from "../Pages/Pro";
import { ProductList } from "../Component/ProductList";

import NotFound from "../Pages/NotFound";
import Payment from "../Pages/Payment";
import PaymentSuccess from "../Pages/PaymentSuccess";

import { Kjallist } from "../Component/Kjallist";
import { Lipbam } from "../Component/Lipbam";
import { Foundation } from "../Component/Foundation";
import { Facewash } from "../Component/Facewash";
import AddProduct from "../Pages/AddProduct";
import { UserProfile } from "../Pages/UserProfile";
import EditProduct from "../Pages/EditProduct";
import {UsersDetail} from "../Pages/UsersDetail"
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/admin_login" element={<Admin_Login />} />
      <Route path="/admin_page" element={<Admin_Page />} />
      <Route path="/userprofile" element={<UserProfile />}></Route>

      <Route path="/products/:id" element={<Pro />} />
      <Route path="/products" element={<ProductList />} />

      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>

      <Route path="*" element={<NotFound />}></Route>

      <Route path="/kajal" element={<Kjallist />} />
      <Route path="/lipstick" element={<Lipbam />} />
      <Route path="/facewash" element={<Facewash />} />
      <Route path="/foundation" element={<Foundation />} />
      <Route path="/add_product" element={<AddProduct />} />
      <Route path="/users" element={<UsersDetail/>} />
      
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/edit/:id" element={<EditProduct />}/>
      
    </Routes>
  );
};

export default MainRoutes;
