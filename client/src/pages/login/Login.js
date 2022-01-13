// @flow
import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-content">
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
      </div>
    </div>
  );
}
