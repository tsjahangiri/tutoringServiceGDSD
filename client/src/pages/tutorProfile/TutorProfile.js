// @flow
import React from "react";
import { Container } from "react-bootstrap";
import AboutMe from "./aboutme/AboutMe";
import CourseList from "./courselist/CourseList";
import ReviewList from "./reviewlist/ReviewList";
import QualificationList from "./qualificationlist/QualificationList";
import Page from "../../components/page/Page";
// import FilterBar from "./filterBar/FilterBar";
// import { fetchTutorList } from "../../../core/actionCreators/tutor";

export default function TutorProfile() {
  return (
    <div>
      <Page></Page>
      {/* <FilterBar fetchTutorList={fetchTutorList} /> */}
      <AboutMe />
      <br />
      <Container>
        <CourseList />
        <br />
        <QualificationList/>
        <br />
        <ReviewList />
        <br />
        {/* <QualificationList/>
          <br />
          <ReviewList/>
          <br /> */}
      </Container>
    </div>
  );
}