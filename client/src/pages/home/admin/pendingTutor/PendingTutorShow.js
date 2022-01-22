import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function PendingTutorShow(props) {
  const { id, courseCode, courseName, level } = props.item;
    return (
    <div
      style={{ borderColor: "#808080" }}
      className="border-top border-start border-end border-1 rounded"
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
                <span style={{ float: "right" }}><button>View Details</button></span>
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