// @flow
import React from "react";
import TutorList from "./tutorList/TutorList";
import FilterBar from "./filterBar/FilterBar";
import Page from "../../../components/page/Page";
import { fetchTutorList } from "../../../core/actionCreators/tutor";

export default function Student() {
  return (
    <div>
      <FilterBar fetchTutorList={fetchTutorList} />
      <TutorList />
      <br />
    </div>
  );
}
