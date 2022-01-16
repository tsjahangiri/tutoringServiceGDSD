import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import Posts from "../pages/posts/Posts";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/registration";
import StudentList from "../pages/home/admin/studentList/StudentList";
import TutorList from "../pages/home/admin/tutorList/TutorList";
import AddCourse from "../pages/addCourse/AddCourse";
import AddQualification from "../pages/addQualification/AddQualification";
import OfferCourse from "../pages/offerCourse/OfferCourse";
import { Anonymous } from "./Anonymous";
import TutorProfile from "../pages/tutorProfile/TutorProfile";

function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Anonymous component={Login} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/studentList" element={<StudentList />} />
      <Route path="/tutorList" element={<TutorList />} />
      <Route path="/tutorProfile" element={<TutorProfile />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/add-qualification" element={<AddQualification />} />
      <Route path="/offer-course" element={<OfferCourse />} />
    </Routes>

  );
}

export default AppNavigator;
