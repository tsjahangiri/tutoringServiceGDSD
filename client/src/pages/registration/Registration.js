import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { registerUser } from "../../core/actionCreators/user";
import { getRegistrationAlert } from "../../core/selectors/user";
import "./Registration.css";

function Registration(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = {};
    [...e.target.elements].forEach((element) => {
      let name = element.name;
      if (name !== undefined && name !== "") {
        let value = element.value;
        data[name] = value;
      }
    });
    data['status'] = 1;
    dispatch(registerUser({data, navigate}));
  };

  const registrationAlert = useSelector(getRegistrationAlert);

  return (
    <div className="registration-page">
      <div className="registration-content">
        <img src="logo512.png" className="login-logo" alt="logo" />
        {registrationAlert && (
          <Alert variant={registrationAlert.type}>
            {registrationAlert.message}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Control
            className="mt-2"
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <Form.Control
            className="mt-2"
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
          />
          <Form.Control
            className="mt-2"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <Form.Control
            className="mt-2"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <Form.Control
            className="mt-2"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Control
            className="mt-2 mb-2"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required
          />
          <Form.Select name="gender" className="mt-2">
            <option value="-1">Select Gender</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Other</option>
          </Form.Select>
          <Form.Select name="usertype" className="mt-2">
            <option value="-1">Select User Type</option>
            <option value="101">Tutor</option>
            <option value="102">Student</option>
          </Form.Select>
          <Button
            className="mt-4 registration-button"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
          <Button
            className="registration-button"
            href="/#/login"
            variant="link"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Registration;
