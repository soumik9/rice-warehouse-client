import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import './inventorySingle.scss'

const InventorySingle = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    useEffect(() => {
        const url = `https://rice-warehouse.herokuapp.com/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product])

    const { _id, name, price, supplierName, quantity, sold, description } = product;

    const handleDeliver = () => {
        console.log('ok');
    }

    const onStockSubmit = (data) => {
   

        reset();
    }

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
                                    <h6>Supplier: <span>{supplierName}</span></h6>
                                    <h6>Quantity: <span>{quantity}</span></h6>
                                </div>
                                <div className='info border-top-none mb-3 px-2 d-flex justify-content-between'>
                                    <h6>Price: <span>{price}</span></h6>
                                    <h6>Sold: <span>{sold}</span></h6>
                                </div>
                                <div className='px-2 my-4 des'>
                                    <p>{description}</p>
                                </div>

                                <div className='mt-4'>
                                    <Button type='submit' onClick={handleDeliver} className='btn-tarkish'>Delivered</Button>
                                </div>

                                <div className="stock__form mt-5">
                                    <form onSubmit={handleSubmit(onStockSubmit)}>
                                        <div className="mb-4">
                                            <FloatingLabel controlId="stock" label={`Stock ${name}*`}  >
                                                <Form.Control type="number" {...register('stock', { required: "Stock filed is required." })} />
                                            </FloatingLabel>
                                            {errors.stock && <p className='text-danger'>{ errors.stock.message }</p>}
                                        </div>

                                        <div className='mt-4'>
                                            <Button type='submit' className='btn-tarkish'>Stock</Button>
                                        </div>
                                    </form>
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