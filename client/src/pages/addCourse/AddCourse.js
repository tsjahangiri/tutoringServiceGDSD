import React from "react";
import { Form, Button } from "react-bootstrap";

function AddCourse(props) {
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
          <Form.Control type="text" placeholder="Subject" />
          <br />
          <Form.Control type="text" placeholder="Level" />
          <br />
          <Form.Control as="textarea" rows={3} placeholder="Description" />
          <br />
          <Button className="btn btn-success" variant="primary" type="submit">
            Add Course
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddCourse;
