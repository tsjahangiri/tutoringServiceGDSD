import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import ManageUsers from "../pages/home/admin/manageUsers/ManageUsers";
import ManageTutorsProfile from "../pages/home/admin/manageTutorsProfile/ManageTutorsProfile";
import { Anonymous } from "./Anonymous";
import { Authorized } from "./Authorized";
import TutorProfile from "../pages/tutorProfile/TutorProfile";

function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Anonymous component={Login} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Authorized component={ManageUsers} />} />
      <Route
        path="/posts"
        element={<Authorized component={ManageTutorsProfile} />}
      />
      <Route
        path="/registration"
        element={<Anonymous component={Registration} />}
      />
      <Route path="/tutor/:tutorId" element={<TutorProfile />} />
    </Routes>
  );
}

export default AppNavigator;
