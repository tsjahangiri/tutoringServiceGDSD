import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ListGroup, Button, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserType } from "../../../core/selectors/user";
import { getPollById } from "../../../core/selectors/votingPoll";
import { fetchPollById } from "../../../core/actionCreators/votingPoll";

export default function ShowPoll(props) {
  const dispatch = useDispatch();
  let { tutorId } = useParams();
  if (props.tutorId !== undefined && props.tutorId != "") {
    tutorId = props.tutorId;
  }
  const userType = useSelector(getUserType);
  const tutorQualificationData = useSelector(getPollById);
  const [tutorQualifications, setTutorQualifications] = useState([]);
  useEffect(() => {
    dispatch(fetchPollById(tutorId));
  }, []);
  useEffect(() => {
    setTutorQualifications(tutorQualificationData);
  }, [tutorQualificationData]);

  console.log(tutorQualificationData);
  //   if (
  //     tutorQualifications === undefined ||
  //     tutorQualifications.length === undefined ||
  //     tutorQualifications.length === 0
  //   ) {
  //     return null;
  //   }

  //   return (
  //     <div>
  //       <span>MY QUALIFICATION</span>
  //       <ListGroup style={{ padding: "1.0rem 0 0 0" }}>
  //         {tutorQualifications.map((item, i) => {
  //           return (
  //             <ListGroup.Item key={i}>
  //               <div>
  //                 <div>
  //                   <span className="fw-bold">{item.subjectName}</span>
  //                 </div>
  //                 <div className="mb-2">
  //                   <span className="text-muted">{`Grade: ${item.grade}`}</span>
  //                 </div>
  //                 <div className="fw-light">{item.description}</div>
  //               </div>
  //             </ListGroup.Item>
  //           );
  //         })}
  //       </ListGroup>
  //     </div>
  //   );
}
