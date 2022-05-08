import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from '../../../pages/Shared/Loading/Loading';
import Product from '../Product/Product';
import './products.scss'

const Products = () => {

    // getting data by hooks
    const [products, setProducts, spinner] = useProducts();

  

    if(spinner){ return <Loading></Loading> }


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
                                products.slice(0, 6).map( (product) => <Product
                                    key={product._id}
                                    product={product}
                                >
                                </Product>)
                            }
                        </Row>
                    </div>
                    {/* products main finish */}

        
                    {/* products footer btn */}
                    <div className="product__footer__btn d-flex justify-content-center mt-5">
                        <Link to='/inventory' className='btn btn-tarkish'>Manage Inventories</Link>
                    </div>
                    {/* products footer btn */}

                </div>
            </Container>
        </section>
    );
};

export default Products;