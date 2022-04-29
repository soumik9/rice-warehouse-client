import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import './navbar.scss'
import { AiOutlineHeart, AiFillFolderOpen, AiOutlineGlobal, AiTwotoneUnlock } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className=''>

            <section className="nav__top">
                <Container>
                    <div className="nav__top__container py-2">
                        <Row className='justify-content-md-between justify-content-center align-items-center'>
                            <Col lg={3} md={5} sm={12}>
                                <ul className="breadcrumb__items d-flex justify-content-md-start justify-content-center align-items-center">
                                    <li className='breadcrumb__item me-3'>
                                        <a href="#home"><AiOutlineHeart className='nav__top-icon' /> About</a>
                                    </li>
                                    <li className='breadcrumb__item me-3'>
                                        <a href="#home"><AiFillFolderOpen className='nav__top-icon' /> FAQS</a>
                                    </li>
                                    <li className='breadcrumb__item'>
                                        <a href="#home"><AiOutlineGlobal className='nav__top-icon' /> BN | EN</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <ul className="breadcrumb__items d-flex justify-content-md-start justify-content-center mt-2 mt-md-0 align-items-center">
                                    <li className='breadcrumb__item me-3'>
                                        <a href="#home"><BiLogIn className='nav__top-icon' /> Log In</a>
                                    </li>
                                    <li className='breadcrumb__item me-3'>
                                        <a href="#home"><AiTwotoneUnlock className='nav__top-icon' /> Register</a>
                                    </li>
                                    <li className='breadcrumb__item'>
                                        <a href="#home"><FaUserCircle className='nav__top-icon' /> Logged user name</a>
                                    </li>
                                </ul>
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