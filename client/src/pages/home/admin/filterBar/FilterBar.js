// @flow
import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { fetchUsersList } from "../../../../core/actionCreators/manageUsers";

export default function FilterBar() {
  const urlSearchParams = new URLSearchParams(useLocation().search);
  var userType = urlSearchParams.get("userType");
  var status = urlSearchParams.get("status");

  const dispatch = useDispatch();

  var firstNameRef = useRef(null);
  var lastNameRef = useRef(null);
  var emailRef = useRef(null);
  var userTypeRef = useRef(null);
  var statusRef = useRef(null);

  const [filters, setFilters] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    userType: userType ? userType : "-1",
    status: status ? status : "-1",
  });

  React.useEffect(() => {
    dispatch(fetchUsersList({ filters }));
  }, [filters]);

  const handleSubmit = () => {
    var newFilters = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      userType: userTypeRef.current.value,
      status: statusRef.current.value,
    };
    setFilters(newFilters);
  };
  return (
    <div>
      <Container
        style={{ borderColor: "#808080" }}
        className="p-3 border border-1 rounded"
      >
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control size="sm" ref={firstNameRef} type="text" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control size="sm" ref={lastNameRef} type="text" />
          </Col>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control size="sm" ref={emailRef} type="email" />
          </Col>
          <Col>
            <Form.Label>User Type</Form.Label>
            <Form.Select
              size="sm"
              ref={userTypeRef}
              type="text"
              defaultValue={filters.userType}
            >
              <option value="-1">Any</option>
              <option value="102">Student</option>
              <option value="101">Tutor</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Status</Form.Label>
            <Form.Select
              size="sm"
              ref={statusRef}
              type="text"
              defaultValue={filters.status}
            >
              <option value="-1">Any</option>
              <option value="101">Approved</option>
              <option value="100">Pending</option>
              <option value="102">Rejected</option>
            </Form.Select>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button
              className="float-end"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
