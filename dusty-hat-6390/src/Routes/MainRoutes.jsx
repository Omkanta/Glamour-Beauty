import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "../Component/ProductList";
import HomePage from "../Pages/HomePage";
import Pro from "../Pages/Pro";
import { ProductDetail } from "../Pages/ProductDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<Pro/>}/>
      <Route path="/products" element={<ProductList/>}/>
    </Routes>
  );
};

export default MainRoutes;
