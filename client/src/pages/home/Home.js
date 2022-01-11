// @flow
import React from "react";
import { useSelector } from "react-redux";
import Page from "../../components/page/Page";
import Admin from "./admin/index";
import Student from "./student/index";
import { getUserType } from "../../core/selectors/user";

// 1. dispatch -> actionCreator (getTutorList) -> reducer (GET_TUTOR_LIST)    -> saga (GET_TUTOR_LIST)
// 2. reducer (GET_TUTOR_LIST_SUCCESS) <- actionCreator (getTutorListSuccess)  <- saga (getTutorListSuccess)

function Home() {
  let userType = useSelector(getUserType);

  let home;

  if (userType === "admin") {
    home = <Admin />;
  } else if (userType === "student") {
    home = <Student />;
  }

  return <Page>{home}</Page>;
}

export default Home;
