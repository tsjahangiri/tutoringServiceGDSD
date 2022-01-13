import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import Posts from "../pages/posts/Posts";
import Login from "../pages/login/Login";
import AddCourse from "../pages/addCourse/AddCourse";
import AddQualification from "../pages/addQualification/AddQualification";

function AppNavigator() {
  return (
    <Switch>
      <Redirect from="/" exact to="/home" />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
      <Route path="/add-course" component={AddCourse} />
      <Route path="/add-qualification" component={AddQualification} />
    </Switch>
  );
}

export default AppNavigator;
