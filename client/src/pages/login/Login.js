// @flow
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import { loginUser } from "../../core/actionCreators/user";
import { getLoginAlert } from "../../core/selectors/user";

export default function Login() {
  const dispatch = useDispatch();

  const loginAlert = useSelector(getLoginAlert);

  const handleSubmit = (e) => {
    e.preventDefault();
    var elements = e.target.elements;
    dispatch(loginUser(elements.username.value, elements.pd.value));
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img src="logo512.png" className="login-logo" alt="logo" />
        {loginAlert && (
          <Alert variant={loginAlert.type}>{loginAlert.message}</Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Control
            className="mt-3"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <Form.Control
            className="mt-2"
            type="password"
            name="pd"
            placeholder="Password"
            required
          />
          <Button className="mt-4 login-button" variant="primary" type="submit">
            Login
          </Button>
          <Button
            className="login-button"
            href="/#/registration"
            variant="link"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}
