// @flow

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Admin() {
  const navigate = useNavigate();

  const usersByStatus = [
    { name: "Approved", value: 400, color: "#0088FE" },
    { name: "Rejected", value: 50, color: "#FF0000" },
    { name: "Pending", value: 150, color: "#FFBB28" },
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

  const onUsersByStatus = (data, index) => {
    var status;
    if (data.name == "Approved") {
      status = "101";
    } else if (data.name == "Rejected") {
      status = "102";
    } else {
      status = "100";
    }
    navigate(`/users?status=${status}`);
  };

  const onUsersByType = (data, index) => {
    var userType;
    if (data.name == "Student") {
      userType = "102";
    } else {
      userType = "101";
    }
    navigate(`/users?userType=${userType}`);
  };

  const onPostsByStatus = (index, data) => {
    navigate("/posts");
  };

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
    </div>
  );
}
