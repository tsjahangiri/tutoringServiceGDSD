import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./OfferCourse.css";
import { saveOfferCourse } from "../../core/actionCreators/offerCourse";

function OfferCourse(props) {
  const dispatch = useDispatch();

  const subjectRef = useRef(null);
  const levelRef = useRef(null);
  const descriptionRef = useRef(null);
  const perHourFeeRef = useRef(null);
  const yearsOfExperienceRef = useRef(null);
  const availableTimeRef = useRef(null);

  //function to save the offer course
  const submitOfferCourse = () => {
    const offerCourse = {
      subject: subjectRef.current.value,
      level: levelRef.current.value,
      description: descriptionRef.current.value,
      perHourFee: perHourFeeRef.current.value,
      yearsOfExperience: yearsOfExperienceRef.current.value,
      availableTime: availableTimeRef.current.value,
    };
    console.log(offerCourse);
    dispatch(saveOfferCourse(offerCourse));
  };


  return (
    <div className="course-page">
      <div className="course-content">
        <h1>Offer Course</h1>
        <Form>
          <br />
          <Form.Control as="select">
            <option value="">Select Department...</option>
            <option value="CSE">CSE</option>
            <option value="BBA">BBA</option>
            <option value="EEE">EEE</option>
          </Form.Control>
          <br />
          <Form.Control ref={subjectRef} as="select">
            <option value="">Select Subject...</option>
            <option value="CSE">Distributed Applications</option>
            <option value="BBA">Machine Learning</option>
            <option value="EEE">Parallel Programming</option>
          </Form.Control>
          <br /> 
          <p>Subject Not Available ?
          <Link className="btn btn-info" to={"/add-course"}> Request For Subject</Link></p>
        
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
          <Button className="btn btn-success" variant="primary" onClick={submitOfferCourse} type="submit">
            Request for Approval
          </Button>
          <br />
        </Form>
      </div>
    </div>
  );
}

export default OfferCourse;
