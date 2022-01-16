import React from "react";
import { useSelector } from "react-redux";
import { Card, ListGroup, Row, Col, Container, Button, ListGroupItem, Badge, Pagination } from "react-bootstrap";
import { div, img } from "bootstrap";
import "./ReviewList.css";
import Paging from "../../../components/paging/Paging";

export default function ReviewList() {

    // var data = useSelector(getCourseList); //TODO: Change var to const

    let active = 2;
    let items = [];
    const viewDetails = () => {
        var newFilters = {};
    };

    var data = [
        {
            id: 1,
            name: "Hasib Iqbal",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content"
        },
        {
            id: 2,
            name: "Amlan Chowdhury",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content"
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
                            <div className="fw-bold">{item.name}</div>
                            <div className="fw-light">{item.text}</div>
                        </div>
                    </ListGroup.Item>;
                })}
            </ListGroup>
            <br />
            <Pagination size="sm">{items}</Pagination>
        </Card>
    );
}