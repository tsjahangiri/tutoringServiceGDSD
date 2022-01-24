import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function PendingTutorShow(props) {
  const { id, courseCode, courseName, level } = props.item;
  const navigate = useNavigate();

    return (
    <div
      style={{ borderColor: "#808080" }}
      className="container-lg p-3 border-top border-start border-end border-1 rounded"
    >
      <Link className="nav-link" to={`tutor/${id}`}>
              
        <Row>          
          <Col>
            <Row>
              <Col>
                {" "}
                <span style={{ float: "left" }}>{courseName} {courseCode}</span>
              </Col>
              <Col>
                {" "}
                <span style={{ float: "right" }}>
                  <button onClick={() => navigate(`/tutor/${id}`)} style={{ marginRight: "10px" }}>View Details</button>
                  <button onClick={() => navigate(`/tutor/${id}`)} style={{ marginRight: "10px" }}>Accept</button>
                  <button onClick={() => navigate(`/tutor/${id}`)} style={{ marginRight: "10px" }}>Reject</button>
                </span>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {" "}
                <span className="text-muted" style={{ float: "left" }}>
                  {level}
                </span>
              </Col>
            </Row>
            <br />
          </Col>
        </Row>
      </Link>
    </div>
  );
}

export default PendingTutorShow;