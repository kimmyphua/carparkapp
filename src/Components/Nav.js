import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Weekend Planner App ♥ </Navbar.Brand>
                <Nav.Link href="/" className="text-dark">CARPARK</Nav.Link>
                <Nav.Link href="/traffic" className="text-dark">TRAFFIC</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link href="mall" className="text-danger">Mall</Nav.Link>
                        <Nav.Link href="food" className="text-primary">Food|Bev</Nav.Link>
                        <Nav.Link href="bars" className="text-secondary">Clubs|Bars</Nav.Link>
                        <Nav.Link href="trails" className="text-success">Trails</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    );
}

export default Navigation;
