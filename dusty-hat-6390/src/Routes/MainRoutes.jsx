import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin_Login from "../Pages/Admin_Login";
import { Admin_Page } from "../Pages/Admin_Page";
import HomePage from "../Pages/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin_login" element={<Admin_Login />}/>
      <Route path="/admin_page" element={<Admin_Page/>}/>
    </Routes>
  );
};

export default MainRoutes;
