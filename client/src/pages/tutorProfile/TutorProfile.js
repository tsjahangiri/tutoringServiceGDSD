// @flow
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CourseList from "./courseList/CourseList";
import ReviewList from "./reviewList/ReviewList";
import QualificationList from "./qualificationList/QualificationList";
import Page from "../../components/page/Page";
import Student from "./privilegedFeatures/Student";
import Tutor from "./privilegedFeatures/Tutor";
import { getUserType } from "../../core/selectors/user";

export default function TutorProfile(props) {
  let { tutorId } = useParams();
  if (props.tutorId !== undefined && props.tutorId != "") {
    tutorId = props.tutorId;
  }

  // TODO: Remove
  const photo = "/logo192.png";
  const age = 22;
  const name = "Amlan Chowdhury";
  const about =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.";

  const userType = useSelector(getUserType);

  function renderProfile() {
    return (
      <Container className="border border-1 rounded">
        <Row style={{ padding: 5 }}>
          <Col xs={2}>
            <img src={photo} style={{ width: "148px" }} />
          </Col>
          <Col>
            <Row>
              <Col>
                {" "}
                <span style={{ float: "left", fontSize: 20 }}>{name}</span>
              </Col>
            </Row>
            <br />
            <Row>
              <span className="text-muted" style={{ float: "left" }}>
                {`Age: ${age}`}
              </span>
              <span className="mt-2 text-muted" style={{ float: "left" }}>
                {about}
              </span>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  function renderPrivilegedFeatures() {
    if (userType === "student") {
      return <Student tutorId={tutorId} />;
    }

    if (userType === "tutor") {
      return <Tutor />;
    }

    return null;
  }

  return (
    <Page>
      {renderProfile()}
      <br />
      <CourseList />
      <br />
      <br />
      <QualificationList />
      <br />
      <br />
      <ReviewList />
      <br />
      {(userType === "student" || userType === "tutor") &&
        renderPrivilegedFeatures()}
    </Page>
  );
}
