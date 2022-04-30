import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './reviews.scss'
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

import personOne from '../../../assets/images/p-1.jpg'
import personTwo from '../../../assets/images/p-2.jpg'
import personThree from '../../../assets/images/p-3.jpg'
import personFour from '../../../assets/images/p-4.jpg'

const Reviews = () => {
    return (
        <section className='reviews'>
            <Container>
                <div className="reviews__container">

                    {/* reviews header start */}
                    <div className="creviews__header">
                        <Row className='justify-content-center'>
                            <Col lg={6} md={10} sm={10}>
                                <div className='text-center'>
                                    <h1>Reviews!</h1>
                                    <hr />
                                    <small>We are spent years collecting of amazing business reviews. Find helpful customer reviews here. </small>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* reviews header end */}

                    {/* reviews main contents */}
                    <div className="reviews__main mt-4 mt-md-5">
                        <Row>
                            <Col md={12}>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper" >

                                    <Row>
                                        <Col lg={4} md={6}>
                                            <SwiperSlide>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="card__header d-flex align-items-center mb-4">
                                                            <div className='img__container'><img src={personOne} alt="" /></div>
                                                            <div>
                                                                <h3>Sahida Alom</h3>
                                                                <small>Bussiness man</small>
                                                            </div>
                                                        </div>
                                                        <div className="card__details">
                                                            <p>Good to cook for pulav, biryani etc. Very long grains after cooking. Taste is also good. Try rice from here you will buy.</p>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        </Col>
                                        <Col lg={4} md={6}>
                                            <SwiperSlide>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="card__header d-flex align-items-center mb-4">
                                                            <div className='img__container'><img src={personTwo} alt="" /></div>
                                                            <div>
                                                                <h3>Tanvir Malik</h3>
                                                                <small>Bussiness man</small>
                                                            </div>
                                                        </div>
                                                        <div className="card__details">
                                                            <p>Long grains. Has a flavour. After cooking resulted in fine long grained rice and my biriyani turned out very nice. Satisfied.</p>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        </Col>
                                        <Col lg={4} md={6}>
                                            <SwiperSlide>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="card__header d-flex align-items-center mb-4">
                                                            <div className='img__container'><img src={personThree} alt="" /></div>
                                                            <div>
                                                                <h3>Radit Ahamed</h3>
                                                                <small>CEO, GO Travel</small>
                                                            </div>
                                                        </div>
                                                        <div className="card__details">
                                                            <p>I bought this rice before and quality was good but a couple weeks ago I bought more and this time quality also good.</p>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        </Col>
                                        <Col lg={4} md={6}>
                                            <SwiperSlide>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="card__header d-flex align-items-center mb-4">
                                                            <div className='img__container'><img src={personFour} alt="" /></div>
                                                            <div>
                                                                <h3>Tamim Hasan</h3>
                                                                <small>CEO, Tamim Enterpirse</small>
                                                            </div>
                                                        </div>
                                                        <div className="card__details">
                                                            <p>Rice grains are long and cook fluffy. It lacks any basmati fragrance. Quite good rice for ordinary pulav.</p>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        </Col>
                                    </Row>


                                </Swiper>
                            </Col>
                        </Row>
                    </div>
                    {/* reviews main contents */}

                </div>
            </Container>



        </section>
    );
};

export default Reviews;