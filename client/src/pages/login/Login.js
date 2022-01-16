// @flow
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import { loginUser } from "../../core/actionCreators/user";
import { getLoginError } from "../../core/selectors/user";

export default function Login() {
  const dispatch = useDispatch();

  const usernameRef = useRef(null);
  const pdRef = useRef(null);

  const loginError = useSelector(getLoginError);

  const onLogin = () => {
    dispatch(loginUser(usernameRef.current.value, pdRef.current.value));
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img src="logo512.png" className="login-logo" alt="logo" />
        <br />
        {loginError && <Alert variant="danger">{loginError}</Alert>}
        <Form>
          <Form.Control ref={usernameRef} type="text" placeholder="Username" />
          <br />
          <Form.Control ref={pdRef} type="password" placeholder="Password" />
          <br />
          <Button
            className="login-button"
            onClick={onLogin}
            variant="primary"
            type="submit"
          >
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}
