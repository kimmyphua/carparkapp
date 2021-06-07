import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Weekend Planner App ♥ </Navbar.Brand>
                <Nav.Link href="/" className="clickable text-dark">CARPARK</Nav.Link>
                <Nav.Link href="/traffic" className=" clickable text-dark">TRAFFIC</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link href="mall" className="clickable">Mall</Nav.Link>
                        <Nav.Link href="food" className="clickable">Food|Bev</Nav.Link>
                        <Nav.Link href="bars" className="clickable">Clubs|Bars</Nav.Link>
                        <Nav.Link href="trails" className="clickable">Trails</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
                <Navbar.Brand className="clickable text-dark" href="https://www.instagram.com/kimmyphua/" >♡ by kimberly phua</Navbar.Brand>
            </Navbar>
            </Container>
        </div>
    );
}

export default Navigation;
