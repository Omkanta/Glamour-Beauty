import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route  path="/signup" element={<SignUp/>}></Route>
      <Route  path="/login" element={<Login/>}></Route>
    </Routes>
  );
};

export default MainRoutes;
