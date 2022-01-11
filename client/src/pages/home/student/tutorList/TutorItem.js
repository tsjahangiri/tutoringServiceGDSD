// @flow
import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function TutorItem(props) {
  const { id, pictureUrl, name, rate, about, teaches } = props.item;

  return (
    <div
      style={{ borderColor: "#808080" }}
      className="border-top border-start border-end border-1 rounded"
    >
      <Link className="nav-link" to={`tutor/${id}`}>
        <Row style={{ padding: 10 }}>
          <Col xs={2}>
            <img src={pictureUrl} style={{ width: "148px" }} />
          </Col>
          <Col>
            <Row>
              <Col>
                {" "}
                <span style={{ float: "left" }}>{name}</span>
              </Col>
              <Col>
                {" "}
                <span style={{ float: "right" }}>{`$${rate}/hr`}</span>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {" "}
                <span className="text-muted" style={{ float: "left" }}>
                  {about}
                </span>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {" "}
                <span className="text-muted" style={{ float: "left" }}>
                  {`Teaches: ${teaches.join(", ")}`}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Link>
    </div>
  );
}
