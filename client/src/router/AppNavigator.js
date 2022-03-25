import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import ManageUsers from "../pages/home/admin/manageUsers/ManageUsers";
import ManageTutorsProfile from "../pages/home/admin/manageTutorsProfile/ManageTutorsProfile";
import AddCourse from "../pages/addCourse/AddCourse";
import AddQualification from "../pages/addQualification/AddQualification";
import OfferCourse from "../pages/offerCourse/OfferCourse";
import { Anonymous } from "./Anonymous";
import { Authorized } from "./Authorized";
import TutorProfile from "../pages/tutorProfile/TutorProfile";
import FileUpload from "../pages/tutorProfile/fileUpload/FileUpload";
import VotingPoll from "../pages/tutorProfile/votingPoll/VotingPoll";
import showPoll from "../pages/tutorProfile/votingPoll/showPoll";

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
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/add-qualification" element={<AddQualification />} />
      <Route path="/offer-course" element={<OfferCourse />} />
      <Route path="/tutor/:tutorId" element={<TutorProfile />} />
      <Route path="/file" element={<FileUpload />} />
      <Route path="/poll" element={<VotingPoll />} />
      <Route path="/showPoll" element={<showPoll />} />
    </Routes>
  );
}

export default AppNavigator;
