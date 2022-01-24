import React,{ useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

import { ListGroup, Badge, Button, Row, Col } from "react-bootstrap";
import { getTutorCourseDataById } from "../../../core/selectors/tutor";
import { getTutorOfferedCourseById } from "../../../core/actionCreators/tutor";

export default function CourseList(props) {

  const dispatch = useDispatch();
  let { tutorId } = useParams();
  if (props.tutorId !== undefined && props.tutorId != "") {
    tutorId = props.tutorId;
  }
  const tutorCourseData = useSelector(getTutorCourseDataById);
  const [tutorCourses, setTutorCourses] = useState([]);
  useEffect(() => {
    dispatch(getTutorOfferedCourseById(tutorId));
  },[]);
  useEffect(() => {
    setTutorCourses(tutorCourseData);
  },[tutorCourseData]);

  if (tutorCourses === undefined || tutorCourses.length === undefined || tutorCourses.length === 0) {
    return null;
  }

  return (
    <div>
      <Row class="row no-gutters" >
        <Col xs={10}>MY COURSES</Col>
        <Col xs={2}> <Link className="btn btn-info" to={"/offer-course"}> Request For Subject</Link>
        </Col>
      </Row>
      <ListGroup style={{ padding: "1.0rem 0 0 0" }}>
        {tutorCourses.map((item, i) => {
          return (
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              key={i}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.courseName}</div>
              </div>
              <Badge variant="primary" pill>
                {`$${item.ratePerHour}/hr`}
              </Badge>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
