import React from "react";
import { useSelector } from "react-redux";
import { Card, ListGroup, Row, Col, Container, Button, ListGroupItem, Badge, Pagination } from "react-bootstrap";
import { div, img } from "bootstrap";
import "./CourseList.css";
import Paging from "../../../components/paging/Paging";

export default function CourseList() {

    // var data = useSelector(getCourseList); //TODO: Change var to const

    let active = 2;
    let items = [];

    const photo = "/logo192.png";
    const name = "Amlan Chowdhury";
    const about = "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.";

    const viewDetails = () => {
        var newFilters = {};
    };

    var data = [
        {
            id: 1,
            SubjectName: "Distributed Applications",
            rate: 36
        },
        {
            id: 2,
            SubjectName: "Cloud Computing",
            rate: 30
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
            <ListGroup as="ol" numbered>
                {data.map((item, i) => {
                    return <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.SubjectName}</div>
                            <Button variant="primary" type="submit" onClick={viewDetails}> Details </Button>
                        </div>
                        <Badge variant="primary" pill>
                            {`$${item.rate}/hr`}
                        </Badge>
                    </ListGroup.Item>;
                })}
            </ListGroup>
            <br />
            <Pagination size="sm">{items}</Pagination>
        </Card>
    );
}
