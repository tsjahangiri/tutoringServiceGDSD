import React from "react";
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./OfferCourse.css";

function OfferCourse(props) {
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
          <Form.Control as="select">
            <option value="">Select Subject...</option>
            <option value="CSE">Distributed Applications</option>
            <option value="BBA">Machine Learning</option>
            <option value="EEE">Parallel Programming</option>
          </Form.Control>
          <br /> 
          <p>Subject Not Available? <t /> 
          <Link className="btn btn-info" to={"/add-course"}>Request For Subject</Link></p>
        
          <Form.Control type="text" placeholder="Level" />
          <br />
          <Form.Control type="number" placeholder="Per Hour Fee" />
          <br />
          <Form.Control type="number" placeholder="Years of Experience" />
          <br />
          <Form.Control type="text" placeholder="Available Time" />
          <br />
          <Form.Control as="textarea" rows={3} placeholder="Description" />
          <br />
          <Button className="btn btn-success" variant="primary" type="submit">
            Request for Approval
          </Button>
          <br />
        </Form>
      </div>
    </div>
  );
}

export default OfferCourse;
