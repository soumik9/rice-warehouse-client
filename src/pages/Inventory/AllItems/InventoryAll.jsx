import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { GrView } from 'react-icons/gr'
import useProducts from '../../../hooks/useProducts';
import './inventoryAll.scss'

const InventoryAll = () => {

    // getting data by hooks
    const [products] = useProducts();

    return (
        <section className='allProducts'>
            <Container>
                <div className="allProducts__container">
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12}>

                            <div className="allProducts-header card shadow-sm">
                                <Row>
                                    <Col md={12}>
                                        <h2 className='text-center py-3'><GrView className='me-1' /> All Products</h2>
                                    </Col>
                                </Row>
                            </div>

                            <div className="allProducts__main mt-5 card p-4">
                                <Table responsive hover bordered>
                                    <thead>
                                        <tr className='text-center'>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Supplier Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='align-middle'>
                                        {
                                            products.map(product => (
                                                <tr key={product._id}  className='text-center'>
                                                    <td>{product._id}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.supplierName}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.price} BDT</td>
                                                    <td><Button variant='danger'>Delete</Button></td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </Table>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default InventoryAll;