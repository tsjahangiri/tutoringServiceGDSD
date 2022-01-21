import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "./AddCourse.css";
import { saveCourse } from "../../core/actionCreators/course";

function AddCourse(props) {
  const dispatch = useDispatch();

  const courseNameRef = useRef(null);
  const courseCodeRef = useRef(null);
  const levelRef = useRef(null);
  const descriptionRef = useRef(null);
  const departmentRef = useRef(null);
  //function to save the course
  const submitCourse = () => {
    const course = {
      courseName: courseNameRef.current.value,
      courseCode: courseCodeRef.current.value,
      level: levelRef.current.value,
      description: descriptionRef.current.value,
      departmentId: departmentRef.current.value
    };
   console.log(course);
    dispatch(saveCourse(course));
  };
  //test
  //  const getCourse = () => {
  //   dispatch(fetchCourseListByStatus(1));
  // };

  return (
    <div className="course-page">
      <div className="course-content">
        <h1>Add New Course</h1>
        <Form>
          <br />
          <Form.Control ref={departmentRef} as="select">
            <option value="0">Select Department...</option>
            <option value="1">CSE</option>
            <option value="2">BBA</option>
            <option value="3">EEE</option>
          </Form.Control>
          <br />
          <Form.Control ref={courseNameRef} type="text" placeholder="Course Name" />
          <br />
          <Form.Control ref={courseCodeRef} type="text" placeholder="Course Code" />
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
