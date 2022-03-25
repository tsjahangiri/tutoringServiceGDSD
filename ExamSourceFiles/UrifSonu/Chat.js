// @flow
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Offcanvas,
  ListGroup,
  Form,
} from "react-bootstrap";
import { io } from "socket.io-client";
import { getCurrentUser } from "../../core/selectors/user";
import "./Chat.css";
import { socketIOUrl } from "../../core/endpoints";

type Props = {
  showChat: Boolean,
  chatClosed: Function,
  selectedUserId?: number,
};

/**
 * texts = Array of Conversations
 * [
 *  {
 *    userID: int
 *    userName: string
 *    lastContactDate: date --not required
 *    lastText: string --not required
 *    unread: boolean --not required
 *    texts: [
 *      {
 *        id: int
 *        text: string
 *        date: date
 *        inbox: boolean
 *      }
 *    ]
 *  }, ...
 * ]
 */

export default function Chat(props: Props) {

  const { showChat, chatClosed, selectedUserId } = props;

  const socket = useRef();
  const textControl = useRef();
  const [texts, setTexts] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const currentUser = useSelector(getCurrentUser);

  const getDefaultSelectedChat = () => {
    let defaultSelectedChat = undefined;
    if (selectedUserId != undefined) {
      defaultSelectedChat = texts?.find(
        (element) => element.userID == selectedUserId
      );

      if (defaultSelectedChat === undefined) {
        defaultSelectedChat = {
          userID: selectedUserId,
          texts: [], //TODO: Remove this
        };
      }
    }
    return defaultSelectedChat;
  };

  const [selectedChat, setSelectedChat] = useState(getDefaultSelectedChat());

  useEffect(() => {
    if (arrivalMessage) {
      const { userID, userName, id, date, text, inbox } = arrivalMessage;

      let recipientIndex = texts.findIndex((text) => text.userID == userID);

      if (recipientIndex === -1) {
        let newItem = {
          userID: userID,
          userName: userName,
          texts: [],
        };
        newItem.texts.push({ id, text, date, inbox });
        setTexts([...texts, newItem]);
      } else {
        let recipientUser = texts[recipientIndex];
        recipientUser.texts.push({ id, text, date, inbox }); // Add new text

        setTexts([
          ...texts.slice(0, recipientIndex),
          recipientUser,
          ...texts.slice(recipientIndex + 1),
        ]);
      }
    }
  }, [arrivalMessage]);

  // Only runs once.
  useEffect(() => {
    if (currentUser !== undefined) {
      socket.current = io(socketIOUrl);
      socket.current.emit("connectUser", { userId: currentUser.id });
      socket.current.on("userTextsFetched", (data) => {
        setTexts(data);
      });

      socket.current.on("textReceived", (data) => {
        handleNewReceivedText(data);
      });

      socket.current.on("textSent", (data) => {
        handleNewSentText(data);
      });
    }
  }, []);

  if (currentUser === undefined) return null;

  /**
   * userID: int,
   * userName: string,
   * id: int
   * date: date,
   * text: string,
   */
  const handleNewReceivedText = (data) => {
    const { userID, userName, id, date, text } = data;
    setArrivalMessage({ userID, userName, id, date, text, inbox: true });
  };

  const handleNewSentText = (data) => {
    const { userID, userName, id, date, text } = data;
    setArrivalMessage({ userID, userName, id, date, text, inbox: false });
    textControl.current.value = "";
  };

  const handleSubmit = (event) => {
    if (event.keyCode == 13) {
      let text = event.target.value;
      let data = {
        from: currentUser.id,
        to: selectedChat.userID,
        text,
      };
      socket.current.emit("sendText", data);
    } else {
      return false;
    }
  };

  function renderChat(item, i) {
    const renderBorder = texts.length === i + 1;
    return (
      <Container
        xs={1}
        onClick={
          () => setSelectedChat(item) /** very important to use () => func() */
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
                  {item.userName}
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

  function renderText(item, i) {
    // Outbound
    let float = "right";
    let bgColor = "#D1E7DD";

    // Inbox
    if (item.inbox) {
      bgColor = "#FFF3CD";
      float = "left";
    }

    return (
      <Container key={i}>
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

  function renderHeader(selectedChat) {
    if (selectedChat === undefined) {
      return (
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chats</Offcanvas.Title>
        </Offcanvas.Header>
      );
    } else {
      return (
        <Offcanvas.Header closeButton>
          <i
            onClick={() => setSelectedChat(undefined)}
            className="bi bi-arrow-left-short"
            style={{ fontSize: "2rem", cursor: "pointer", opacity: ".5" }}
          ></i>
          <Offcanvas.Title>
            {selectedChat?.userName ?? "New Chat"}
          </Offcanvas.Title>
        </Offcanvas.Header>
      );
    }
  }

  function renderBody(selectedChat) {
    if (selectedChat === undefined) {
      return (
        <Offcanvas.Body>
          <ListGroup>
            {texts?.map((item, i) => {
              return renderChat(item, i);
            })}
          </ListGroup>
        </Offcanvas.Body>
      );
    } else {
      return (
        <Offcanvas.Body>
          <ListGroup
            style={{
              overflow: "scroll",
              marginBottom: 10,
              maxHeight: "80%",
              height: "80%",
            }}
          >
            {selectedChat?.texts?.map((item, i) => {
              return renderText(item, i);
            })}
          </ListGroup>
          <Form.Control
            ref={textControl}
            onKeyDown={handleSubmit}
            as="textarea"
            rows={3}
          />
        </Offcanvas.Body>
      );
    }
  }

  return (
    <Offcanvas
      style={{ zIndex: 9999 /** to overlay fab button */ }}
      placement="end"
      show={showChat}
      onHide={chatClosed}
    >
      {renderHeader(selectedChat)}
      {renderBody(selectedChat)}
    </Offcanvas>
  );
}
