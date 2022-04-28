import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import './navbar.scss'

const Navbar = () => {
    return (
        <nav className=''>

            <section className="nav__top">
                <Container>
                    <div className="nav__top__container py-2">
                        <Row className='align-items-center'>
                            <Col md={6}>
                                <ul className="breadcrumb__items d-flex align-items-center" style={{ height: '100%' }}>
                                    <li className='breadcrumb__item'>HOME</li>
                                    <li className='breadcrumb__item'>SERVICE</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                hi
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className='nav__container'>

            </section>
        </nav>
    );
};

export default Navbar;