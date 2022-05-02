import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './inventorySingle.scss'

const InventorySingle = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect( () => {
        const url = `https://rice-warehouse.herokuapp.com/product/${productId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])

    const {_id, name, price, supplierName, quantity, description} = product;

    return (
        <section className='product'>
            <Container>
                <div className="product__container">
                    <Row className='align-items-center'>
                    <Col md={6}>
                        <div className='product__img'>
                            <img className='img-fluid' src={product.img} alt="" />
                            <h4>Id: {_id}</h4>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="product__single__details px-5">
                            <h2>{name}</h2>
                            <div className='info mt-3 px-2 d-flex justify-content-between'>
                                <h6>Supplier: <span>{ supplierName }</span></h6>
                                <h6>Quantity: <span>{ quantity }</span></h6>
                            </div>
                            <div className='info border-top-none mb-3 px-2 d-flex justify-content-between'>
                                <h6>Price: <span>{ price }</span></h6>
                                <h6>Sold: <span>{ quantity }</span></h6>
                            </div>
                            <div className='px-2 my-4 des'>
                                <p>{ description }</p>
                            </div>

                            <div className='mt-4'>
                                <Button className='btn-tarkish'>Delivered</Button>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default InventorySingle;