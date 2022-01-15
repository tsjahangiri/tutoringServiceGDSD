import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import Posts from "../pages/posts/Posts";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/registration";
import StudentList from "../pages/home/admin/studentList/StudentList";
import TutorList from "../pages/home/admin/tutorList/TutorList";

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
    </Switch>
  );
}

export default AppNavigator;
