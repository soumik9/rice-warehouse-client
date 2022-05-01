import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './products.scss'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://rice-warehouse.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    })

    return (
        <section className='products'>
            <Container>
                <div className="products__container">

                    {/* products header start */}
                    <div className="products__header">
                        <Row className='justify-content-center'>
                            <Col lg={6} md={10} sm={10}>
                                <div className='text-center'>
                                    <h1>Our Products!</h1>
                                    <hr />
                                    <small>We are engaged in milling of best authentic Bangladeshi rice with best in class infrastructural setup comprising of state of the art machineries, advanced processing, quality control, packaging & warehousing units, we cater to the rising needs of our clients across the globe. </small>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* products header finish */}


                    {/* products main start */}
                    <div className="products__main mt-5">
                        <Row className='gy-5'>
                            {
                                products.map(product => <Product
                                    key={product._id}
                                    product={product}
                                >
                                </Product>)
                            }
                        </Row>
                    </div>
                    {/* products main finish */}

                </div>
            </Container>
        </section>
    );
};

export default Products;