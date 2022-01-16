import React from "react";
import { useSelector } from "react-redux";
import { Card, ListGroup, Row, Col, Container, Button, ListGroupItem } from "react-bootstrap";
import { div, img } from "bootstrap";
import "./AboutMe.css";

export default function AboutMe() {

  const photo = "/logo192.png";
  const name = "Amlan Chowdhury";
  const about = "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.";

  return (
    <Container>
      <Card>
        <Row>
          <Col xs={2}>
            <img className="photo" src={photo} />
          </Col>
          <Col xs={10}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{about}</Card.Text>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}





{/* <div className="login-content">
          <img src="logo512.png" className="login-logo" alt="logo" />
          <br />
          <Form>
            <Form.Control type="email" placeholder="Email" />
            <br />
            <Form.Control type="password" placeholder="Password" />
            <br />
            <Button className="login-button" variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </div> */}