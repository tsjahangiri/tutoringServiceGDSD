// @flow
import React from "react";
import { Container } from "react-bootstrap";
import AboutMe from "./aboutme/AboutMe";
import TutorProfileBody from "./tutorprofilebody/TutorProfileBody";
import CourseList from "./courselist/CourseList";
// import FilterBar from "./filterBar/FilterBar";
// import { fetchTutorList } from "../../../core/actionCreators/tutor";

export default function TutorProfile() {
  return (
    <div>
      {/* <FilterBar fetchTutorList={fetchTutorList} /> */}
      <AboutMe />
      <br />
      <Container>
        <CourseList />
        <br />
        {/* <QualificationList/>
          <br />
          <ReviewList/>
          <br /> */}
      </Container>
    </div>
  );
}
