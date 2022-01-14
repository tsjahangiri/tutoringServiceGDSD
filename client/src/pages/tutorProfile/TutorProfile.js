// @flow
import React from "react";
import AboutMe from "./aboutme/AboutMe";
// import FilterBar from "./filterBar/FilterBar";
// import { fetchTutorList } from "../../../core/actionCreators/tutor";

export default function TutorProfile() {
    return (
        <div>
          {/* <FilterBar fetchTutorList={fetchTutorList} /> */}
          <AboutMe/>
          <br />
          {/* <OfferedCoursesList/>
          <br />
          <QualificationList/>
          <br />
          <ReviewList/>
          <br /> */}
        </div>
      );
}
