import React,{ useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getTutorReviewDataById } from "../../../core/selectors/tutor";
import { getTutorReviewById } from "../../../core/actionCreators/tutor";
import { ListGroup, Row, Col, Button, Form } from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { getCurrentUser } from "../../../core/selectors/user";

export default function ReviewList(props) {
  const dispatch = useDispatch();
  let { tutorId } = useParams();
  if (props.tutorId !== undefined && props.tutorId != "") {
    tutorId = props.tutorId;
  }
  const tutorReviewData = useSelector(getTutorReviewDataById);
  const [tutorReviews, setTutorReviews] = useState([]);

  useEffect(() => {
    dispatch(getTutorReviewById(tutorId));
  },[]);
  useEffect(() => {
    setTutorReviews(tutorReviewData);
  },[tutorReviewData]);

  if (tutorReviews === undefined || tutorReviews.length === undefined || tutorReviews.length === 0) {
    return null;
  }

  const dispatch = useDispatch();

  let starCountRef = useRef(null);
  const textReviewRef = useRef(null);

  const user = useSelector(getCurrentUser);
  console.log("userid" + user);

  const submitReview = () => {
    let review = {
      starCount: starCountRef.current.state.value,
      textReview: textReviewRef.current.value,
      UserId: user.id,
    };
    console.log(review);
    // dispatch(saveQualification(qualification));
  };

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


  return (
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
    </div>
  );
}

// onClick={filterTutors}
