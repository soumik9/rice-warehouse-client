import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../../assets/images/logo.png'
import auth from '../../../firebase.init';
import './header.scss'

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <Navbar expand="lg"  bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img alt="" src={logo} width="30" height="33" className="d-inline-block align-top" />{' '}
                    <span>Rice Ware<i>House</i></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {
                            user && (
                                <>
                                    <Nav.Link as={Link} to="/inventory">Manage Products</Nav.Link>
                                    <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
                                    <Nav.Link as={Link} to="/my-products">My Products</Nav.Link>
                                </>
                            )
                        }
                     
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;