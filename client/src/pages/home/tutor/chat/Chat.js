// @flow
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Offcanvas,
  ListGroup,
  Form,
} from "react-bootstrap";
import "./Chat.css";

type Props = {
  showChat: Boolean,
  chatClosed: Function,
};

export default function Chat(props: Props) {
  const { showChat, chatClosed } = props;

  const [chat, toggleChat] = useState(undefined); //TODO: Rename chat

  // TODO: Remove
  const pictureUrl = "logo512.png";

  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.";
  let date = "12-01-2022";
  let texts = [
    {
      name: "Rohat Sagar",
      lastContact: date,
      lastText: text,
      texts: [
        {
          text: "Hi. Sam",
          date: date,
          inbox: true,
        },
        {
          text: "Michael. Good to meet you!",
          date: date,
          inbox: false,
        },
        {
          text: "Did you just arrive here?",
          date: date,
          inbox: true,
        },
        {
          text: "Yeah, We arrived last week.",
          date: date,
          inbox: false,
        },
        {
          text: "How do you like it?",
          date: date,
          inbox: true,
        },
        {
          text: "It’s exciting! It’s much busier than the last city we lived in. I was working in Seattle for the last 3 years.",
          date: date,
          inbox: false,
        },
        {
          text: "It really is very busy. I moved here from Tokyo 5 years ago and I still have trouble sometimes. Did you move here with your wife?",
          date: date,
          inbox: true,
        },
      ],
    },
    {
      name: "Ammar",
      lastContact: date,
      lastText: text,
      texts: [
        {
          text: text,
          date: date,
          inbox: true,
        },
      ],
    },
    {
      name: "Vishal",
      lastContact: date,
      lastText: text,
      texts: [],
    },
  ];

  function renderChat(item, i) {
    const renderBorder = texts.length === i + 1;
    return (
      <Container
        xs={1}
        onClick={
          () => toggleChat(item) /** very important to use () => func() */
        }
        key={i}
        style={{ borderColor: "#808080", cursor: "pointer" }}
        className={`p-2 ${renderBorder ? "" : "border-bottom border-1"}`}
      >
        <Row>
          <Col xs={2}>
            <img src={pictureUrl} style={{ marginTop: "5px", width: "38px" }} />
          </Col>
          <Col xs={10}>
            <Row>
              <Col>
                {" "}
                <span
                  style={{ float: "left", fontSize: 16, fontWeight: "500" }}
                >
                  {item.name}
                </span>
              </Col>
              <Col>
                {" "}
                <span style={{ float: "right", fontSize: 12 }}>
                  {item.lastContact}
                </span>
              </Col>
            </Row>
            <Row className="pt-2">
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontSize: 14,
                }}
              >
                {item.lastText}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  function renderText(item) {
    // Outbound
    let float = "right";
    let bgColor = "#D1E7DD";

    // Inbox
    if (item.inbox) {
      bgColor = "#FFF3CD";
      float = "left";
    }

    return (
      <Container>
        <div
          style={{
            borderColor: "#808080",
            width: "70%",
            float: float,
            backgroundColor: bgColor,
          }}
          className="mb-4 p-2 border border-1 rounded"
        >
          <span style={{ fontSize: "0.8rem", opacity: ".5" }}>{item.date}</span>
          <br />
          <span>{item.text}</span>
        </div>
      </Container>
    );
  }

  if (chat === undefined) {
    return (
      <Offcanvas
        style={{ zIndex: 9999 /** to overlay fab button */ }}
        placement="end"
        show={showChat}
        onHide={chatClosed}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chats</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {texts.map((item, i) => {
              return renderChat(item, i);
            })}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    );
  } else {
    return (
      <Offcanvas
        style={{ zIndex: 9999 /** to overlay fab button */ }}
        placement="end"
        show={showChat}
        onHide={chatClosed}
      >
        <Offcanvas.Header closeButton>
          <i
            onClick={() => toggleChat(undefined)}
            className="bi bi-arrow-left-short"
            style={{ fontSize: "2rem", cursor: "pointer", opacity: ".5" }}
          ></i>
          <Offcanvas.Title>{chat.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup
            style={{
              overflow: "scroll",
              marginBottom: 10,
              maxHeight: "80%",
              height: "80%",
            }}
          >
            {chat?.texts.map((item, i) => {
              return renderText(item);
            })}
          </ListGroup>
          <Form.Control as="textarea" rows={3} />
        </Offcanvas.Body>
      </Offcanvas>
    );
  }
}
