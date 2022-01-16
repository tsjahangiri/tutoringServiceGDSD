import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import Posts from "../pages/posts/Posts";
import Login from "../pages/login/Login";
import AddCourse from "../pages/addCourse/AddCourse";
import AddQualification from "../pages/addQualification/AddQualification";
import OfferCourse from "../pages/offerCourse/OfferCourse";

function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default AppNavigator;
