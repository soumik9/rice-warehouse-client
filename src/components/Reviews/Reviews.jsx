import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './reviews.scss'
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import axios from 'axios';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('https://rice-warehouse.herokuapp.com/reviews');
            setReviews(data);
        }
        getProducts();
    }, [])

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
                                    {
                                        reviews.map(review => (
                                            <Col lg={4} md={6}>
                                                <SwiperSlide>
                                                    <Card>
                                                        <Card.Body>
                                                            <div className="card__header d-flex align-items-center mb-4">
                                                                <div className='img__container'><img src={review.img} alt="" /></div>
                                                                <div>
                                                                    <h3>{review.name}</h3>
                                                                    <small>{review.rank}</small>
                                                                </div>
                                                            </div>
                                                            <div className="card__details">
                                                                <p>{review.description}</p>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            </Col>
                                        ))
                                    }
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