import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getTutorReviewDataById } from "../../../core/selectors/tutor";
import { getTutorReviewById } from "../../../core/actionCreators/tutor";
import { setTutorReview } from "../../../core/actionCreators/tutor";
import { saveReview } from "../../../core/actionCreators/tutor";
import { ListGroup, Row, Col, Button, Form } from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { getCurrentUser } from "../../../core/selectors/user";

export default function ReviewList(props) {
  const dispatch = useDispatch();

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

  let starCountRef = useRef(null);
  const textReviewRef = useRef(null);
  const user = useSelector(getCurrentUser);
  console.log(user);

  let { tutorId } = useParams();
  if (props.tutorId !== undefined && props.tutorId != "") {
    tutorId = props.tutorId;
  }
  const tutorReviewData = useSelector(getTutorReviewDataById);
  const [tutorReviews, setTutorReview] = useState([]);

  useEffect(() => {
    dispatch(getTutorReviewById(tutorId));
  }, []);
  useEffect(() => {
    setTutorReview(tutorReviewData);
  }, [tutorReviewData]);

  const submitReview = () => {
    let review = {
      Rating: starCountRef.current.state.value,
      Text: textReviewRef.current.value,
      UserId: user.id,
      TutorProfileId: Number(tutorId),
    };
    console.log(review);
    dispatch(saveReview(review));
  };
  let ReviewsData =
    tutorReviews === undefined ||
    tutorReviews.length === undefined ||
    tutorReviews.length === 0
      ? false
      : true;
  console.log(ReviewsData);

  if (
    tutorReviews === undefined ||
    tutorReviews.length === undefined ||
    tutorReviews.length === 0
  ) {
    // return null;
  }

  return (
    <div>
      {ReviewsData == true ? (
        <div>
          <span>REVIEWS</span>
          <ListGroup style={{ padding: "1.0rem 0 0 0" }}>
            {tutorReviews.map((item, i) => {
              return (
                <ListGroup.Item
                  key={i}
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="me-auto">
                    <div className="fw-bold">{item.firstName}</div>
                    <div>
                      <Rate defaultValue={item.rating} disabled />
                      <span className="text-muted">{item.createdDateTime}</span>
                    </div>
                    <div className="fw-light">{item.text}</div>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <br />
        </div>
      ) : null}
      {user != undefined ? (
        <Row>
          <span>ADD A REVIEW</span>
          <Rate
            defaultValue={2.5}
            // onChange={onChange}
            style={{ fontSize: 40 }}
            ref={starCountRef}
            allowHalf
            allowClear={false}
          />
          <Col sm={11}>
            <Form.Control size="md" ref={textReviewRef} type="text" />
          </Col>
          <Col sm={1}>
            <Button
              className="float-end"
              variant="primary"
              size="md"
              onClick={submitReview}
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      ) : null}
    </div>
  );
}

// onClick={filterTutors}

/* <ListGroup style={{ padding: "1.0rem 0 0 0" }}>
  {tutorReviews.map((item, i) => {
    return (
      <ListGroup.Item
        key={i}
        className="d-flex justify-content-between align-items-start"
      >
        <div className="me-auto">
          <div className="fw-bold">{item.firstName}</div>
          <div>
            <Rate defaultValue={item.rating} disabled />
            <span className="text-muted">{item.createdDateTime}</span>
          </div>
          <div className="fw-light">{item.text}</div>
        </div>
      </ListGroup.Item>
    );
  })}
</ListGroup>; */
