import React from 'react';
import './notFound.scss'
import notFoundImg from '../../assets/images/404.png'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai'

const NotFound = () => {
    return (
        <section className='pb-5 not__found'>
            <Container>
                <div className="not__found__container">
                    <Row className='justify-content-center'>
                        <Col md={5}>
                            <img className='img-fluid' src={notFoundImg} alt="" />
                            <div className="text-center mt-4">
                                <Link to='/' className='btn'>GO HOME <AiOutlineHome className='not__found-icon' /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </Container>
        </section>
    );
};

export default NotFound;