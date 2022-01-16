// @flow
import React from "react";
import { Container } from "react-bootstrap";
import AboutMe from "./aboutme/AboutMe";
import CourseList from "./courselist/CourseList";
import ReviewList from "./reviewlist/ReviewList";
import QualificationList from "./qualificationlist/QualificationList";
import Page from "../../components/page/Page";
import {useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchTutorProfileList } from "../../core/actionCreators/tutorprofile";

export default function TutorProfile() {
  // const params = useParams();
  // console.log(params);

  // const dispatch = useDispatch();
  //   React.useEffect(() => {
  //   dispatch(fetchTutorProfileList({ params }));
  // });

 
  // const dispatch = useDispatch();


  // React.useEffect(() => 
  // {
  //   const id = URLSearchParams.get();
  //   console.log(id);
  //   dispatch(fetchTutorProfileList({id}));
  // });

  return (
    <div>
      <Page></Page>
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