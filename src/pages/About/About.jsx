import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../assets/images/about.png'
import './about.scss'

const About = () => {
    return (
        <section className='about'>
            <Container>
                <div className="about__container">
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <img className='w-100' src={aboutImg} alt="" />
                        </Col>
                        <Col md={6}>
                            <div className="about__main text-center">
                                <h2 className='text-uppercase'>About Us</h2>
                                <p>We are engaged in milling of best authentic Bangladeshi rice with best in class infrastructural setup comprising of state of the art machineries, advanced processing, quality control, packaging & warehousing units, we cater to the rising needs of our clients across the globe.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default About;