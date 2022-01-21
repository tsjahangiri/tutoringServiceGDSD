// @flow
import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Header from "../header/Header";
import { getUserType } from "../../core/selectors/user";

type Props = {
  children: React.ReactNode,
};

function Page(props: Props) {
  const { children } = props;

  let userType = useSelector(getUserType);

  var headerOptions = [];

  if (userType === "admin") {
    headerOptions = [
      {
        title: "Student List",
        url: "/#/studentList",
      },
      {
        title: "Tutor List",
        url: "/#/tutorList",
      },
    ];
  }

  return (
    <div>
      <Header headerOptions={headerOptions} />
      <br />
      <Container fluid="lg">{children}</Container>
    </div>
  );
}

export default Page;
