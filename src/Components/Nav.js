import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Weekend Planner App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="mall">Mall</Nav.Link>
                        <Nav.Link href="food">Food|Bev</Nav.Link>
                        <Nav.Link href="trails">Trails</Nav.Link>
                        <Nav.Link href="bars">Clubs|Bars</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    );
}

export default Navigation;
