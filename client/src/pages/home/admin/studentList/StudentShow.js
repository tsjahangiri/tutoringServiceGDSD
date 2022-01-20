import React from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function StudentShow(props) {
  //const { id, pictureUrl, name, rate, about, teaches } = props.item;
  /*
          <Col xs={2}>
            <img src={pictureUrl} style={{ width: "100px", height: "100px" }} />
          </Col>

  */

  const { id, firstName, lastName, gender } = props.item;


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
                <span style={{ float: "left" }}>{firstName} {lastName}</span>
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
                  {gender}
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

export default StudentShow;