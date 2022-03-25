import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getFeedbackData } from "../../../core/selectors/feedback";
import { ListGroup, Row, Col, Button, Form } from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";

export default function FeedbackList(props) {
  const dispatch = useDispatch();


  if (props.tutorId !== undefined && props.tutorId != "") {
    tutorId = props.tutorId;
  }
  const FeedbackData = useSelector(getFeedbackData);
  const state = useState([]);

  const renderFeedback = () => {
    if (
        FeedbackData === undefined ||
        FeedbackData.length === undefined ||
        FeedbackData.length === 0
    ) {
      return null;
    }

    return (

<div>
    <Table className='striped bordered hover'>
        <thead>
            <tr>
            <th>Subject</th>
            <th>Feedback</th>
            </tr>
        </thead>
        <tbody>
            {tutorReviewData?.map((item, i) => {
            <tr>
                <td>{item.subject}</td>
                <td>{item.feedback}</td>
            </tr>
            })}
        </tbody>
    </Table>    
</div>
    );
  };
}
