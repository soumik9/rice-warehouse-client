import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './header.scss'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt="" src={logo} width="30" height="33" className="d-inline-block align-top" />{' '}
                    <span>Rice Ware<i>House</i></span> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;