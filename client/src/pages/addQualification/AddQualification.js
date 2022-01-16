import React from 'react';
import { Form, Button } from "react-bootstrap";
import "./AddQualification.css";

function AddQualification(props) {
    return (
        <div className="qualification-page">
        <div className="qualification-content">
          <h1>Add Qualification</h1>
          <Form>
            <br />
            
            <Form.Control type="text" placeholder="Subject" />
            <br />
            <Form.Control type="text" placeholder="Qualification" />
            <br />
            <Form.Control type="text" placeholder="Grade" />
            <br />
            <Button className="btn btn-success" variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    );
}

export default AddQualification;