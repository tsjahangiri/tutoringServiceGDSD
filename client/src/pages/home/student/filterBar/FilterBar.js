// @flow
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {
  fetchTutorList: Function,
};

export default function FilterBar(props: Props) {
  const dispatch = useDispatch();

  var subjectControl = useRef(null);

  const [filters, setFilters] = useState({
    subjectName: "",
  });

  React.useEffect(() => {
    dispatch(props.fetchTutorList({ filters }));
  });

  const filterTutors = () => {
    var newFilters = {
      ...filters,
      subjectName: subjectControl.current.value,
    };
    setFilters(newFilters);
  };

  return (
    <div style={{ padding: 10 }}>
      <Container
        style={{ borderColor: "#808080" }}
        className="p-4 border border-1 rounded"
      >
        <Row>
          <Col>
            <Form.Label>Subject</Form.Label>
            <Form.Control size="sm" ref={subjectControl} type="text" />
          </Col>
          <Col>
            <Form.Label>Level</Form.Label>
            <Form.Select size="sm" defaultValue="Any">
              <option>Any</option>
              <option>Undergraduate</option>
              <option>Graduate</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Price</Form.Label>
            <Form.Control size="sm" type="number" />
          </Col>
          <Col>
            <Form.Label>Gender</Form.Label>
            <Form.Select size="sm" defaultValue="Any">
              <option>Any</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
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
              onClick={filterTutors}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
