// @flow
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fab } from "react-tiny-fab";
import Chat from "./chat/Chat";

export default function Tutor() {
  const pictureUrl = "logo512.png";
  const name = "Rohat Sagar";
  const about =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.";

  function renderProfile() {
    return (
      <Container className="border border-1 rounded">
        <Row style={{ padding: 5 }}>
          <Col xs={2}>
            <img src={pictureUrl} style={{ width: "148px" }} />
          </Col>
          <Col>
            <Row>
              <Col>
                {" "}
                <span style={{ float: "left", fontSize: 20 }}>{name}</span>
              </Col>
              <Col>
                {" "}
                <i
                  className="bi bi-pencil-square text-info"
                  style={{ float: "right", fontSize: 20 }}
                ></i>
              </Col>
            </Row>
            <br />
            <Row>
              <span className="text-muted" style={{ float: "left" }}>
                {about}
              </span>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  // TODO: Add UI
  function renderOfferedCourses() {
    return null;
  }

  // TODO: Add UI
  function renderQualifications() {
    return null;
  }

  function renderChatOption() {
    return (
      <Fab
        onClick={chatOpened}
        icon={<i className="bi bi-chat-square-text"></i>}
      />
    );
  }

  const [showChat, toggleChat] = useState(false);

  const chatClosed = () => toggleChat(false);
  const chatOpened = () => toggleChat(true);

  return (
    <div style={{ padding: 0 }}>
      {renderProfile()}
      <br />
      {renderOfferedCourses()}
      <br />
      {renderQualifications()}
      {renderChatOption()}
      <Chat showChat={showChat} chatClosed={chatClosed} />
    </div>
  );
}
