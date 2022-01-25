import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Offcanvas, Row, Col, Button, Form } from "react-bootstrap";
import { Fab, Action } from "react-tiny-fab";
import Avatar from "react-avatar-edit";
import Chat from "../../../components/chat/Chat";
import { uploadProfilePicture } from "../../../core/actionCreators/profilePicture";
import { getCurrentUser } from "../../../core/selectors/user";

export default function Tutor() {
  const navigate = useNavigate();
  const [showChat, toggleChat] = useState(false);
  const [showEditor, toggleEditor] = useState(false);
  const [src, setSrc] = useState(undefined);
  const [preview, setPreview] = useState(null);

  const currentUser = useSelector(getCurrentUser);

  const editorClosed = () => {
    toggleEditor(false);
    setPreview(null);
  };

  const ageRef = useRef(null);
  const aboutRef = useRef(null);

  const editorOpened = () => toggleEditor(true);

  const chatClosed = () => toggleChat(false);
  const chatOpened = () => toggleChat(true);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    /*if(elem.target.files[0].size > 71680){
      alert("File is too big!");
      elem.target.value = "";
    };*/
  };

  const onFileLoad = (file) => {
    setSrc(file);
  };

  const dispatch = useDispatch();
  const onProfileEdit = () => {
    dispatch(
      uploadProfilePicture({
        profilePicture: src,
        UserId: currentUser.id,
        About: aboutRef.current.value,
        Age: ageRef.current.value,
      })
    );
  };

  function renderChatOption() {
    return (
      <Fab alwaysShowTitle={true} icon={<i className="bi bi-plus"></i>}>
        <Action
          onClick={() => navigate(`/add-qualification`)}
          style={{ backgroundColor: "#0D6EFD" }}
          text="Add Qualification"
        >
          <i className="bi bi-journal-medical" />
        </Action>
        <Action
          onClick={() => navigate(`/offer-course`)}
          style={{ backgroundColor: "#0D6EFD" }}
          text="Offer Course"
        >
          <i className="bi bi-person-workspace" />
        </Action>
        <Action
          onClick={chatOpened}
          style={{ backgroundColor: "#0D6EFD" }}
          text="Chat"
        >
          <i className="bi bi-chat-dots" />
        </Action>
        <Action
          onClick={editorOpened}
          style={{ backgroundColor: "#0D6EFD" }}
          text="Edit Profile"
        >
          <i className="bi bi-person-circle" />
        </Action>
      </Fab>
    );
  }

  function renderEditor() {
    return (
      <Offcanvas
        style={{ width: "35%", zIndex: 9999 /** to overlay fab button */ }}
        placement="end"
        show={showEditor}
        onHide={editorClosed}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Row>
              <Col>
                <Avatar
                  width={192}
                  height={192}
                  imageHeight={192}
                  onCrop={onCrop}
                  onClose={onClose}
                  onBeforeFileLoad={onBeforeFileLoad}
                  onFileLoad={onFileLoad}
                />
              </Col>
              <Col>
                <img src={preview} alt="Preview" />
              </Col>
            </Row>
            <br />
            <Form.Control ref={ageRef} placeholder="Age" type="number" />
            <br />
            <Form.Control
              ref={aboutRef}
              placeholder="About"
              as="textarea"
              rows={3}
            />
            <br />
            <div>
              <Button
                style={{ float: "right" }}
                onClick={onProfileEdit}
                type="submit"
              >
                {" "}
                Update
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  return (
    <div>
      {renderChatOption()}
      <Chat showChat={showChat} chatClosed={chatClosed} />
      {renderEditor()}
    </div>
  );
}
