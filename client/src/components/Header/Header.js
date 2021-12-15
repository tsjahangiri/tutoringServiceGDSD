// @flow
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header() {
    return (
        <div>
            <Navbar bg="primary" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#home">Rohat Sagar</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
  
export default Header;