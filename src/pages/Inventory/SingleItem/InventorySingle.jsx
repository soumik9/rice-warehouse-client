import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import './inventorySingle.scss'

const InventorySingle = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // fetching requested data by id
    useEffect( () => {  
        const getProduct = async () => {
            const { data } = await axios.get(`https://rice-warehouse.herokuapp.com/product/${productId}`);
            setProduct(data)
        }
        getProduct();
    }, [product, productId])
 

    const { _id, name, price, supplierName, quantity, sold, description } = product;

    // to update data fetching
    const fetchUpdateData = async (updatedProduct, message, callReset) => {
        const { data } = await axios.put(`https://rice-warehouse.herokuapp.com/product/${productId}`, updatedProduct)
        setProduct(data)
        toast.success(message, { duration: 1000, position: 'top-right', });
        if (callReset) { reset() }
    }

    // to deliver decrease quantity and increase sold
    const handleDeliver = () => {
        if(quantity > 0){
            const newQuantity = parseInt(quantity) - 1;
            const newSold = parseInt(sold) + 1;
            console.log(newQuantity, newSold)
            const updatedProduct = { newQuantity, newSold };
            const message = 'Product Delivered!';
    
            fetchUpdateData(updatedProduct, message, false);
        }else{
            toast.success('Please stock item', { duration: 1000, position: 'top-right', });
        }
    }

    // to stock increase quantity
    const onStockSubmit = (data) => {
        const { stock } = data;
        const newQuantity = parseInt(stock) + parseInt(quantity);
        const updatedProduct = { newQuantity }
        const message = 'Stock update!';

        fetchUpdateData(updatedProduct, message, true);
    }

    return (
        <section className='product'>
            <Container>
                <div className="product__container">

                    <Toaster />

                    <Row className='align-items-start align-items-md-center'>
                        <Col lg={6}>
                            <div className='product__img'>
                                <img className='img-fluid' src={product.img} alt="" />
                                <h4>Id: {_id}</h4>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="product__single__details px-lg-5 px-0 mt-5 mt-lg-0">
                                <h2 className='text-center'>{name}</h2>
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
                                    <Button type='submit' 
                                        onClick={handleDeliver} 
                                        className='btn-tarkish'
                                    >Delivered</Button>
                                </div>

                                <div className="stock__form my-5">
                                    <form onSubmit={handleSubmit(onStockSubmit)}>
                                        <div className="mb-4">
                                            <FloatingLabel controlId="stock" label={`Stock ${name}*`}  >
                                                <Form.Control type="number" {...register('stock', { required: "Stock filed is required & Must be a number." })} />
                                            </FloatingLabel>
                                            {errors.stock && <p className='text-danger'>{errors.stock.message}</p>}
                                        </div>

                                        <div className='mt-4'>
                                            <Button type='submit' className='btn-tarkish'>Stock</Button>
                                        </div>
                                    </form>
                                </div>

                                <hr />

                                {/* manage inventories link */}
                                <div className="product__footer__btn d-flex justify-content-center mt-5">
                                    <Link to='/inventory' className='btn btn-tarkish w-100'>Manage Inventories</Link>
                                </div>
                                {/* manage inventories link */}

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default InventorySingle;