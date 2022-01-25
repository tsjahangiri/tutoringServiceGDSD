import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "./AddQualification.css";
import Page from "../../components/page/Page";
import { saveQualification } from "../../core/actionCreators/qualification";
import { getCurrentUser } from "../../core/selectors/user";

function AddQualification(props) {
  const dispatch = useDispatch();

  const subjectRef = useRef(null);
  const qualificationRef = useRef(null);
  const gradeRef = useRef(null);
  const descriptionRef = useRef(null);

  const user = useSelector(getCurrentUser);
  console.log("userid" + user );

  //function to save the qualification
  const submitQualification = () => {
    const qualification = {
      SubjectName: subjectRef.current.value,
      Grade: gradeRef.current.value,
      Description: descriptionRef.current.value,
      UserId: user.id
    };
    console.log(qualification);
    dispatch(saveQualification(qualification));
    //test
    // dispatch(fetchQualificationById(1));
  };

  return (
    <div>
    <Page></Page>
    <div className="qualification-page">
      <div className="qualification-content">
        <h1>Add Qualification</h1>
        <Form>
          <br />
          <Form.Control type="text" ref={subjectRef} placeholder="Subject" />
          <br />
          {/* <Form.Control type="text" ref={qualificationRef} placeholder="Qualification" />
          <br /> */}
          <Form.Control type="text" ref={gradeRef} placeholder="Grade" />
          <br />
          <Form.Control
            ref={descriptionRef}
            as="textarea"
            rows={3}
            placeholder="Description"
          />
          <Button className="btn btn-success" variant="primary" onClick={submitQualification} type="submit">
            Save
          </Button>
        </Form>
      </div>
    </div>
    </div>
  );
}

export default AddQualification;
