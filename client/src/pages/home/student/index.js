// @flow
import React from "react";
import TutorList from "./tutorList/TutorList";
import FilterBar from "./filterBar/FilterBar";
import { fetchTutorList } from "../../../core/actionCreators/tutor";

export default function Student() {
  return (
    <div>
      <FilterBar fetchTutorList={fetchTutorList} />
      <br />
      <TutorList />
      <br />
    </div>
  );
}
