import React from 'react';
import { Form, Button } from "react-bootstrap";
import "./registration.css";

import { useParams } from 'react-router-dom';


function Registration(props) {
    const params = useParams()

// yuo can find all params from here
console.log(params)

    return (
        <div className="registration-page">
            <div className="registration-content">
                <div className="title_container">
                    <h2>Registration</h2>
                </div>
                <div>
                    <div>
                        <Form>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                        <Form.Control type="text" name="name" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                        <Form.Control type="text" name="name" placeholder="Last Name" required />
                                    </div>
                                </div>
                            </div>

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                <Form.Control type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <Form.Control type="password" name="password" placeholder="Password" required />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <Form.Control type="password" name="password" placeholder="Confirm Password" required />
                            </div>

                            <div className="input_field radio_option">
                                <Form.Control type="radio" name="radiogroup1" id="rd1" />
                                <label for="rd1">Male</label>
                                <Form.Control type="radio" name="radiogroup1" id="rd2" />
                                <label for="rd2">Female</label>
                            </div>
                            <div className="input_field select_option">
                                <select>
                                    <option>Select User Type</option>
                                    <option>Student</option>
                                    <option>Tutor</option>
                                </select>
                                <div className="select_arrow"></div>
                            </div>
                            <div className="input_field checkbox_option">
                                <Form.Control type="checkbox" id="cb1" />
                                <label for="cb1">I agree with terms and conditions</label>
                            </div>

                            <input className="button" type="submit" value="Register" />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;