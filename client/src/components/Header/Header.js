// @flow
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";

type Props = {
  headerOptions: Array<Object>,
};

function renderNavOptions(headerOptions) {
  const currentUrl = `/${window.location.hash}`;
  return (
    <Nav activeKey={currentUrl} className="me-auto">
      {headerOptions.map((option, i) => (
        <Nav.Link href={option.url}>{option.title}</Nav.Link>
      ))}
    </Nav>
  );
}

function renderUserOptions(onSignOut) {
  return (
    <Navbar.Collapse className="justify-content-end">
      <span style={{ color: "#FFFFFF" }}>Signed in as:</span>
      <Nav>
        <NavDropdown title="Rohat Sagar" drop="down" menuVariant="dark">
          <NavDropdown.Item onClick={onSignOut}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  );
}

function renderBrand() {
  return (
    <Navbar.Brand href="/#/home">
      <img
        alt=""
        src="logo512.png"
        width="32"
        height="32"
        className="d-inline-block align-top"
      />{" "}
      React Bootstrap
    </Navbar.Brand>
  );
}

function Header(props: Props) {
  const onSignOut = () => {};

  return (
    <Navbar sticky="top" bg="primary" variant="dark">
      <Container fluid="lg">
        {renderBrand()}
        <Navbar.Toggle />
        {renderNavOptions(props.headerOptions)}
        {renderUserOptions(onSignOut)}
      </Container>
    </Navbar>
  );
}

export default Header;
