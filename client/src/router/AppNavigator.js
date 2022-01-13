import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import Posts from "../pages/posts/Posts";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/registration";

function AppNavigator() {
  return (
    <Switch>
      <Redirect from="/" exact to="/home" />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/home" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
    </Switch>
  );
}

export default AppNavigator;
