import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Badge } from "react-bootstrap";

export default function CourseList() {
  // var data = useSelector(); //TODO: Change var to const

  var data = [
    {
      id: 1,
      subjectName: "Distributed Applications",
      rate: 36,
    },
    {
      id: 2,
      subjectName: "Cloud Computing",
      rate: 30,
    },
  ];

  if (data === undefined || data.length === undefined || data.length === 0) {
    return null;
  }

  return (
    <div>
      <span>MY COURSES</span>
      <ListGroup style={{ padding: "1.0rem 0 0 0" }}>
        {data.map((item, i) => {
          return (
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              key={i}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.subjectName}</div>
              </div>
              <Badge variant="primary" pill>
                {`$${item.rate}/hr`}
              </Badge>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
