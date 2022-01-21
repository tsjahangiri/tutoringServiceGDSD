import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { ListGroup } from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";

export default function ReviewList() {
  // var data = useSelector(); //TODO: Change var to const

  var data = [
    {
      id: 1,
      name: "Hasib Iqbal",
      rating: 3,
      date: moment().format("MMMM D, YYYY"),
      text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      id: 2,
      name: "Amlan Chowdhury",
      rating: 4,
      date: moment().format("MMMM D, YYYY"),
      text: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content",
    },
  ];

  if (data === undefined || data.length === undefined || data.length === 0) {
    return null;
  }

  return (
    <div>
      <span>REVIEWS</span>
      <ListGroup style={{ padding: "1.0rem 0 0 0" }}>
        {data.map((item, i) => {
          return (
            <ListGroup.Item
              key={i}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="me-auto">
                <div className="fw-bold">{item.name}</div>
                <div>
                  <Rate defaultValue={item.rating} disabled />
                  <span className="text-muted">{item.date}</span>
                </div>
                <div className="fw-light">{item.text}</div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
