import React from "react";
import { useSelector } from "react-redux";
import { Card, ListGroup, Row, Col, Container, Button, ListGroupItem, Badge, Pagination, Table } from "react-bootstrap";
import { div, img } from "bootstrap";
import "./QualificationList.css";

export default function QualificationList() {

    // var data = useSelector(getQualificationList); //TODO: Change var to const

    let active = 2;
    let items = [];
    const viewDetails = () => {
        var newFilters = {};
    };

    var data = [
        {
            id: 1,
            SL: 1,
            Subject: "Hasib Iqbal",
            University: "Some quick example text",
            Qualification: "Some quick example text",
            Topics: "Some quick example "
        },
        {
            id: 2,
            SL: 2,
            Subject: "Hasib Iqbal",
            University: "Some quick example text",
            Qualification: "Some quick example text",
            Topics: "Some quick example "
        }
    ];

    for (let number = 1; number <= data.length; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    if (data === undefined) {
        return <div></div>;
    }

    return (
        <Card>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Qualification</th>
                        <th>University</th>
                        <th>Topics</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return <tr>
                            <td>{item.SL}</td>
                            <td>{item.Subject}</td>
                            <td>{item.Qualification}</td>
                            <td>{item.University}</td>
                            <td>{item.Topics}</td>
                        </tr>;
                    })}
                </tbody>
            </Table>
        </Card>
    );
}