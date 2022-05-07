import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsPatchCheckFill } from 'react-icons/bs'
import chooseImg from '../../assets/images/choose.jpg'
import './chooseus.scss'

const ChooseUs = () => {
    return (
        <section className='chooseus'>
            <Container>
                <div className="chooseus__container">

                    {/* choose us header start */}
                    <div className="chooseus__header">
                        <Row className='justify-content-center'>
                            <Col lg={6} md={10} sm={10}>
                                <div className='text-center'>
                                    <h1>Why Choose Us!</h1>
                                    <hr />
                                    <small>We are engaged in milling of best authentic Bangladeshi rice with best in class infrastructural setup comprising of state of the art machineries, advanced processing, quality control, packaging & warehousing units, we cater to the rising needs of our clients across the globe. </small>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* choose us header finish */}

                    {/* choose us main start */}
                    <div className="chooseus__main mt-4 mt-md-5">
                        <Row className='justify-content-md-center justify-content-lg-between align-items-lg-center'>
                            <Col lg={6} className='order-2 order-lg-1'>
                                <img className='img-fluid' src={chooseImg} alt="" />
                            </Col>
                            <Col lg={5} className='order-1 mb-5 mb-lg-0'>
                                <ul className='text-center text-lg-start'>
                                    <li><BsPatchCheckFill className='chooseus__main-icon' /> Commited to quality & on time delivery.</li>
                                    <li><BsPatchCheckFill className='chooseus__main-icon' /> Exceptional quality standards and quality assurance.</li>
                                    <li><BsPatchCheckFill className='chooseus__main-icon' /> Complete solutions due to advanced Rice milling machines.</li>
                                    <li><BsPatchCheckFill className='chooseus__main-icon' /> Skillfull workforce with 24x7 monitoring of the production.</li>
                                    <li><BsPatchCheckFill className='chooseus__main-icon' /> Export experience to worldwide & reliable..</li>
                                    <li><BsPatchCheckFill className='chooseus__main-icon' /> 24x7 helpline & feel free to contact.</li>
                                </ul>     
                            </Col>
                        </Row>
                    </div>
                    {/* choose us main finish */}

                </div>
            </Container>
        </section>
    );
};

export default ChooseUs;