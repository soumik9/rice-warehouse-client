import React from 'react';
import { Container } from 'react-bootstrap';
import './banner.scss'

const Banner = () => {
    return (
        <section className='banner' id='banner'>
            <Container>
                <div className='banner__container d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start'>

                    <h1>What are you looking for ?</h1>
                    <h5>Search your favorite rice here to buy!</h5>
                    <button className='btn'>Show Products</button>

                </div>
            </Container>
        </section>
    );
};

export default Banner;