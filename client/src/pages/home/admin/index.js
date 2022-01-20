// @flow

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Offcanvas,
  Form,
  Button,
} from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Fab, Action } from "react-tiny-fab";
import StudentList from "./studentList/StudentList.js";
import TutorList from "./tutorList/TutorList.js";
import FilterBar from "./filterBar/FilterBar";
import { fetchTutorList } from "../../../core/actionCreators/tutor";
import { fetchStudentShowList } from "../../../core/actionCreators/studentShow";

export default function Admin() {
  const navigate = useNavigate();

  const usersByStatus = [
    { name: "Active", value: 400, color: "#0088FE" },
    { name: "Inactive", value: 300, color: "#FF0000" },
  ];

  const postsByStatus = [
    { name: "Approved", value: 400, color: "#0088FE" },
    { name: "Rejected", value: 50, color: "#FF0000" },
    { name: "Pending", value: 150, color: "#FFBB28" },
  ];

  const usersByType = [
    { name: "Student", value: 100, color: "#FFBB28" },
    { name: "Tutor", value: 300, color: "#00C49F" },
  ];

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const onUsersByStatus = (index, data) => {
    navigate("/users");
  };

  const onUsersByType = (index, data) => {
    navigate("/users");
  };

  const onPostsByStatus = (index, data) => {
    navigate("/posts");
  };

  const [showSubject, toggleSubject] = useState(false);

  const subjectClosed = () => toggleSubject(false);
  const subjectOpened = () => toggleSubject(true);

  function renderFabOption() {
    return (
      <Fab alwaysShowTitle={true} icon={<i className="bi bi-plus"></i>}>
        <Action
          style={{ backgroundColor: "#0D6EFD" }}
          text="Subject"
          onClick={subjectOpened}
        >
          <i className="bi bi-journal-text" />
        </Action>
      </Fab>
    );
  }

  const renderPieChart = (title, data, onClick) => {
    return (
      <Card body>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={90}
            labelLine={false}
            label={renderLabel}
            onClick={onClick}
          >
            {data.map((item, index) => (
              <Cell
                style={{ cursor: "pointer" }}
                key={`cell-${index}`}
                fill={item.color}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Card>
    );
  };

  const renderOffcanvas = () => {
    return (
      <Offcanvas
        style={{ zIndex: 9999 /** to overlay fab button */ }}
        placement="end"
        show={showSubject}
        onHide={subjectClosed}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create a new subject</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Level</Form.Label>
              <Form.Select defaultValue="Undergraduate">
                <option>Undergraduate</option>
                <option>Graduate</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button style={{ float: "right" }} variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    );
  };

  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-start">
          {renderPieChart("Users by Status", usersByStatus, onUsersByStatus)}
        </Col>
        <Col className="d-flex justify-content-center">
          {renderPieChart("Users by Type", usersByType, onUsersByType)}
        </Col>
        <Col className="d-flex justify-content-end">
          {renderPieChart("Posts by Status", postsByStatus, onPostsByStatus)}
        </Col>
      </Row>
      {renderFabOption()}
      {renderOffcanvas()}
    </div>
  );
}
