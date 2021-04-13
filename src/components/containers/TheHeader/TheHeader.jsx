import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

/**
 * Header Component
 * Header component contains Logo and navigations
 */


class TheHeader extends Component {
    render() {
        return (
            <header className="header header-fixed d-flex" >
                <Container>
                    <Navbar>
                        <Navbar.Brand href="/">JERE App</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="d-flex justify-content-end">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Listing</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        );
    }
}

export default TheHeader;
