// @flow
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./Header.css";
import { isAuthenticated, getCurrentUser } from "../../core/selectors/user";
import { logoutUser } from "../../core/actionCreators/user";
import { NavLink } from "react-router-dom";

type Props = {
  headerOptions: Array<Object>,
};

function renderNavOptions(headerOptions) {
  const currentUrl = `/${window.location.hash}`;
  return (
    <Nav activeKey={currentUrl} className="me-auto">
      {headerOptions?.map((option, i) => (
        <Nav.Link key={i} href={option.url}>
          {option.title}
        </Nav.Link>
      ))}
    </Nav>
  );
}

function renderUserOptions(currentUser, isAuth, onSignOut) {
  if (isAuth) {
    return (
      <Navbar.Collapse className="justify-content-end">
        <span style={{ color: "#FFFFFF" }}>Signed in as:</span>
        <Nav>
          <NavDropdown
            title={currentUser.user_name}
            drop="down"
            menuVariant="dark"
          >
            <NavDropdown.Item onClick={onSignOut}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    );
  } else {
    return (
      <NavLink to="/login">
        <i
          style={{ fontSize: "1.5rem", color: "#FFFFFF" }}
          className="bi bi-box-arrow-in-right"
        ></i>
      </NavLink>
    );
  }
}

function renderBrand() {
  return (
    <Navbar.Brand href="/#/home">
      <img
        alt=""
        src="book.jpg"
        width="32"
        height="32"
        className="d-inline-block align-top"
      />{" "}
      HelpMeLearn
    </Navbar.Brand>
  );
}

function Header(props: Props) {
  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthenticated);
  const currentUser = useSelector(getCurrentUser);

  const onSignOut = () => {
    dispatch(logoutUser());
  };

  return (
    <Navbar sticky="top" bg="primary" variant="dark">
      <Container fluid="lg">
        {renderBrand()}
        <Navbar.Toggle />
        {renderNavOptions(props.headerOptions)}
        {renderUserOptions(currentUser, isAuth, onSignOut)}
      </Container>
    </Navbar>
  );
}

export default Header;
