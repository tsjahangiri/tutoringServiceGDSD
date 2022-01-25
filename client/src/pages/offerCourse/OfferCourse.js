import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import "./OfferCourse.css";
import Page from "../../components/page/Page";
import { saveOfferCourse } from "../../core/actionCreators/offerCourse";
import { getCurrentUser } from "../../core/selectors/user";

function OfferCourse(props) {
  const dispatch = useDispatch();

  const subjectRef = useRef(null);
  const languageRef = useRef(null);
  const levelRef = useRef(null);
  const descriptionRef = useRef(null);
  const perHourFeeRef = useRef(null);
  const yearsOfExperienceRef = useRef(null);
  const availableTimeRef = useRef(null);

  const user = useSelector(getCurrentUser);
  console.log(user);

  //function to save the offer course
  const submitOfferCourse = () => {
    const offerCourse = {
      SubjectName: subjectRef.current.value,
      Language: languageRef.current.value,
      Level: levelRef.current.value,
      Description: descriptionRef.current.value,
      RatePerHour: perHourFeeRef.current.value,
      ExperinceYears: yearsOfExperienceRef.current.value,
      AvailableTime: availableTimeRef.current.value,
      UserId: user.id,
      Status: 101 //Approved
    };
    console.log(offerCourse);
    dispatch(saveOfferCourse(offerCourse));
  };


  return (
    <Page>
    <div className="course-page">
      <div className="course-content">
        <h1>Offer Course</h1>
        <Form onSubmit={submitOfferCourse}>
          <Form.Control type="text" ref={subjectRef} placeholder="Subject" />
          <br />
          <Form.Control type="text" ref={languageRef} placeholder="Language of Instruction" />
          <br />
          <Form.Control type="text" ref={levelRef} placeholder="Level" />
          <br />
          <Form.Control type="number" ref={perHourFeeRef} placeholder="Per Hour Fee" />
          <br />
          <Form.Control type="number" ref={yearsOfExperienceRef} placeholder="Years of Experience" />
          <br />
          <Form.Control type="text" ref={availableTimeRef} placeholder="Available Time" />
          <br />
          <Form.Control as="textarea" ref={descriptionRef} rows={3} placeholder="Description" />
          <br />
          <Button className="btn btn-success" variant="primary" type="submit">
            Request for Approval
          </Button>
          <br />
        </Form>
      </div>
    </div>
    </Page>
  );
}

export default OfferCourse;
