import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

/**
 * Footer Component
 * Footer component contains copyright text
 */

class TheFooter extends Component {
    render() {
        return (
            <footer className="footer footer-fixed">
                <Container>
                    <div className="mfs-auto">
                        <span className="mr-1">Copyright </span>
                        <a href="#" target="_blank" rel="noopener noreferrer">The Jere App</a>
                    </div>
                </Container>
            </footer>
        );
    }
}

export default TheFooter;
