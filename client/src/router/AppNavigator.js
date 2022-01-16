import React from "react";
import { Redirect, Route, Switch } from "react-router";
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

function AppNavigator() {
  return (
    <Switch>
      <Redirect from="/" exact to="/home" />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/home" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
      <Route path="/studentList" component={StudentList} />
      <Route path="/tutorList" component={TutorList} />
      <Route path="/add-course" component={AddCourse} />
      <Route path="/add-qualification" component={AddQualification} />
      <Route path="/offer-course" component={OfferCourse} />
    </Switch>
  );
}

export default AppNavigator;
