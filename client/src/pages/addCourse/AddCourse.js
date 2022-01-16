import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "./AddCourse.css";
import { saveCourse } from "../../core/actionCreators/course";

function AddCourse(props) {
  const dispatch = useDispatch();

  const subjectRef = useRef(null);
  const levelRef = useRef(null);
  const descriptionRef = useRef(null);

  //function to save the course
  const submitCourse = () => {
    const course = {
      subject: subjectRef.current.value,
      level: levelRef.current.value,
      description: descriptionRef.current.value,
    };
   console.log(course);
    dispatch(saveCourse(course));
  };

  return (
    <div className="course-page">
      <div className="course-content">
        <h1>Add New Course</h1>
        <Form>
          <br />
          <Form.Control as="select">
            <option value="">Select Department...</option>
            <option value="CSE">CSE</option>
            <option value="BBA">BBA</option>
            <option value="EEE">EEE</option>
          </Form.Control>
          <br />
          <Form.Control ref={subjectRef} type="text" placeholder="Subject" />
          <br />
          <Form.Control ref={levelRef} type="text" placeholder="Level" />
          <br />
          <Form.Control
            ref={descriptionRef}
            as="textarea"
            rows={3}
            placeholder="Description"
          />
          <br />
          <Button
            className="btn btn-success"
            variant="primary"
            onClick={submitCourse}
            type="submit"
          >
            Add Course
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddCourse;
