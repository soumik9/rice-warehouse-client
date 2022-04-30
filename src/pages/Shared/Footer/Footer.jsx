import React from 'react';
import './footer.scss'
import facebook from '../../../assets/images/Facebook.png'
import instagram from '../../../assets/images/instagram.png'
import linkedin from '../../../assets/images/linkedin.png'
import twitter from '../../../assets/images/twitter.png'
import logo from '../../../assets/images/logo.png'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer id='footer'>
            <Container>
                <div className="footer__container">
                    <Row className="align-items-center justify-content-center">
                        <Col lg={4} md={9}>
                            <div className="footer__container__first__section mb-4 mb-md-5 mb-lg-0">

                                <a className="navbar-brand d-flex justify-content-center justify-content-lg-start align-items-center" href="#home">
                                    <img alt="" src={logo} width="30" height="33" className="d-inline-block align-top me-1" />{' '}
                                    <span>Rice Ware<i>House</i></span>
                                </a>

                                <p className='text-center text-lg-start'>For businesses who need clarity, productive communication, prioritisation and accountability.</p>

                                <div className="socials d-flex align-items-center justify-content-center justify-content-lg-start">
                                    <div><img src={facebook} alt="" /></div>
                                    <div><img src={instagram} alt="" /></div>
                                    <div><img src={twitter} alt="" /></div>
                                    <div><img src={linkedin} alt="" /></div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={4} className="mt-4 mt-md-0">
                            <div className="footer__container__links__section">
                                <ul className='text-center text-lg-start'>
                                    <li><a href='#footer'>Usefull links</a></li>
                                    <li><a href="#footer">Abouts</a></li>
                                    <li><a href="#footer">Pricing plan</a> </li>
                                    <li><a href="#footer">Products</a> </li>
                                    <li><a href="#footer">Our Network</a></li>
                                    <li><a href="#footer">Contact Us</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={4} className="mt-4 mt-md-0">
                            <div className="footer__container__links__section">
                                <ul className='text-center text-lg-start'>
                                    <li><a href="#footer">Our product</a></li>
                                    <li><a href="#footer">Nazirshail Rice</a></li>
                                    <li><a href="#footer">Chinigura Rice</a> </li>
                                    <li><a href="#footer">Paijam Rice</a> </li>
                                    <li><a href="#footer">Miniket Rice</a></li>
                                    <li><a href="#footer">Basmati Rice</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={4} className="mt-4 mt-md-0">
                            <div className="footer__container__links__section">
                                <ul className='text-center text-lg-start'>
                                    <li><a href="#footer">About us</a></li>
                                    <li><a href="#footer">Excellent Services</a></li>
                                    <li><a href="#footer">Competitive Price</a> </li>
                                    <li><a href="#footer">Qulity Work</a> </li>
                                    <li><a href="#footer">Satisfied Customers</a></li>
                                    <li><a href="#footer">Work with us</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <div className="footer__foot__section text-center">
                        <p>Copyright © Soumik Ahammed, 2022</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;