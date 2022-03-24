import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { updateUser } from "../../../../core/actionCreators/manageUsers";

function pollList(props) {
  const dispatch = useDispatch();
  const { id, firstName, lastName, gender, status, email, usertype } =
    props.item;
  const navigate = useNavigate();

  const handleSubmit = (updatedStatus) => {
    var updatedItem = {
      Id: id,
      FirstName: firstName,
      LastName: lastName,
      UserType: usertype,
      Email: email,
      Status: updatedStatus,
      Gender: gender,
    };
    dispatch(updateUser(updatedItem));
  };

  return (
    <div
      style={{ borderColor: "#808080" }}
      className="container-lg p-3 border-top border-start border-end border-1 rounded"
    >
      <Row>
        <Col>
          <span style={{ fontWeight: "bold" }}>
            {firstName} {lastName}
          </span>
        </Col>
        <Col>
          <span className="text-muted">{email}</span>
        </Col>
        <Col>
          <span>{gender}</span>
        </Col>
        <Col>
          <text>{renderUserType(usertype)}</text>
        </Col>
        <Col>
          <text style={{ fontSize: "32px" }}>
            {renderActions(usertype, status)}
          </text>
        </Col>
      </Row>
    </div>
  );
}

export default pollList;
