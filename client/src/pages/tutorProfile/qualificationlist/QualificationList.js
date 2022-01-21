import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function QualificationList() {
  // var data = useSelector(); //TODO: Change var to const

  var data = [
    {
      id: 1,
      subject: "Math 101",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
      grade: "A+",
    },
    {
      id: 2,
      subject: "Math 102",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content",
      grade: "B",
    },
  ];

  if (data === undefined || data.length === undefined || data.length === 0) {
    return null;
  }

  return (
    <div>
      <span>MY QUALIFICATIONS</span>
      <ListGroup style={{ padding: "1.0rem 0 0 0" }}>
        {data.map((item, i) => {
          return (
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              key={i}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="me-auto">
                <div>
                  <span className="fw-bold">{item.subject}</span>
                </div>
                <div className="mb-2">
                  <span className="text-muted">{`Grade: ${item.grade}`}</span>
                </div>
                <div className="fw-light">{item.description}</div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
