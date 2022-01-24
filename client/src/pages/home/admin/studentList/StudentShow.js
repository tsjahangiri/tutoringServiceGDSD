import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function StudentShow(props) {
  const { id, firstName, lastName, email, pictureUrl = "logo512.png" } = props.item;
  const navigate = useNavigate();

  return (
    <div
      style={{ borderColor: "#808080" }}
      className="container-lg p-3 border-top border-start border-end border-1 rounded"
    >              
        <Row>  
          <Col xs={2}>
            <img src={pictureUrl} style={{ width: "80px", height: "80px" }} />
          </Col>        
          <Col>
            <Row>
              <Col>
                {" "}
                <span style={{ float: "left" }}>{firstName} {lastName}</span>
              </Col>
              <Col>
                {" "}
                <span style={{ float: "right" }}>
                  <button onClick={() => navigate(`/tutor/${id}`)} style={{ marginRight: "10px" }}>View Details</button>
                  <button onClick={() => navigate(`/tutor/${id}`)} style={{ marginRight: "10px" }}>Delete</button>
                </span>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {" "}
                <span className="text-muted" style={{ float: "left" }}>
                  {email}
                </span>
              </Col>
            </Row>
            <br />
          </Col>
        </Row>
    </div>
  );
}

export default StudentShow;