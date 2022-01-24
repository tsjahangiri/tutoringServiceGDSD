// @flow
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApprovedCourseList } from "../../../../core/selectors/course";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

type Props = {
  fetchOfferCourse: Function,
};

export default function FilterBar(props: Props) {
  const dispatch = useDispatch();

  const approvedCourses = useSelector(getApprovedCourseList);

  var subjectIdControl = useRef(null);
  var levelControl = useRef(null);
  var minRateControl = useRef(null);
  var genderControl = useRef(null);

  const [filters, setFilters] = useState({
    subjectId: undefined,
    level: undefined,
    minRate: 0,
    gender: undefined,
  });

  React.useEffect(() => {
    dispatch(props.fetchOfferCourse({ filters }));
  });

  const filterTutors = () => {
    var newFilters = {
      ...filters,
      subjectId:
        subjectIdControl.current.value === "Any"
          ? undefined
          : subjectIdControl.current.value,
      level:
        levelControl.current.value === "Any"
          ? undefined
          : levelControl.current.value,
      minRate: minRateControl.current.value,
      gender:
        genderControl.current.value === "Any"
          ? undefined
          : genderControl.current.value,
    };

    setFilters(newFilters);
  };

  return (
    <Container
      style={{ borderColor: "#808080" }}
      className="p-3 border border-1 rounded"
    >
      <Row>
        <Col>
          <Form.Label>Subject</Form.Label>
          <Form.Select size="sm" ref={subjectIdControl} defaultValue="Any">
            <option>Any</option>
            {approvedCourses?.map((item, i) => {
              return (
                <option key={i} value={item.id}>
                  {item.courseName}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Level</Form.Label>
          <Form.Select size="sm" ref={levelControl} defaultValue="Any">
            <option>Any</option>
            <option value="Bachelors">Undergraduate</option>
            <option value="Masters">Graduate</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Min Rate</Form.Label>
          <Form.Control
            defaultValue={0}
            size="sm"
            ref={minRateControl}
            type="number"
          />
        </Col>
        <Col>
          <Form.Label>Gender</Form.Label>
          <Form.Select size="sm" ref={genderControl} defaultValue="Any">
            <option>Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
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
  );
}
