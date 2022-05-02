import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { GrAddCircle } from 'react-icons/gr'
import { RiLoginCircleLine } from 'react-icons/ri';
import './addItem.scss'

const AddItem = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const addProduct= () => console.log('oko')

    return (
        <section className='add__item'>
            <Container>
                <div className="add__item__container">

                    <Row className='justify-content-center'>
                        <Col lg={8} md={10}>

                            <div className="add__item-header card shadow-sm">
                                <Row>
                                    <Col md={12}>
                                        <h2 className='text-center py-3'><GrAddCircle className='me-1' /> Add New Product</h2>
                                    </Col>
                                </Row>
                            </div>

                            <form className="add__item-main card p-4 mt-4" onSubmit={handleSubmit(addProduct)}>
                                <Row>

                                    <Col md={6}>
                                        <div className="mb-4">
                                            <FloatingLabel controlId="name" label="Product Name*"  >
                                                <Form.Control type="text" {...register('name', { required: "Product name is required." })} placeholder="Katari (10KG)" />
                                            </FloatingLabel>
                                            {errors.name && <p className='text-danger'>{ errors.name.message }</p>}
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className="mb-4">
                                            <FloatingLabel controlId="supplierName" label="Supplier Name*"  >
                                                <Form.Control type="text" {...register('supplierName', { required: "Supplier Name is required." })} placeholder="Jhon Doe" />
                                            </FloatingLabel>
                                            {errors.supplierName && <p className='text-danger'>{ errors.supplierName.message }</p>}
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className="mb-4">
                                            <FloatingLabel controlId="quantity" label="Quantity*"  >
                                                <Form.Control type="text" {...register('quantity', { required: "Quantityis required." })} placeholder="500" />
                                            </FloatingLabel>
                                            {errors.quantity && <p className='text-danger'>{ errors.quantity.message }</p>}
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className="mb-4">
                                            <FloatingLabel controlId="price" label="Price*"  >
                                                <Form.Control type="text" {...register('price', { required: "Price is required." })} placeholder="1500" />
                                            </FloatingLabel>
                                            {errors.price && <p className='text-danger'>{ errors.price.message }</p>}
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <div className="mb-4">
                                            <FloatingLabel controlId="img" label="Image*"  >
                                                <Form.Control type="text" {...register('img', { required: "Image is required." })} placeholder="link" />
                                            </FloatingLabel>
                                            {errors.img && <p className='text-danger'>{ errors.img.message }</p>}
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <div className="mb-4">
                                            <FloatingLabel controlId="description" label="Description*"  >
                                                <Form.Control as="textarea" type="text" {...register('description', { required: "Description is required." })} style={{ height: '100px' }} placeholder="Description" />
                                            </FloatingLabel>
                                            {errors.description && <p className='text-danger'>{ errors.description.message }</p>}
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <div className='d-flex justify-content-center'>
                                            <button type='submit' className='btn btn-tarkish'>
                                                ADD PRODUCT 
                                                <RiLoginCircleLine className='form__btn-icon ms-2' />
                                            </button>
                                        </div>
                                    </Col>

                                </Row>
                            </form>

                        </Col>
                    </Row>


                </div>
            </Container>
        </section>
    );
};

export default AddItem;