import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GrView } from 'react-icons/gr'
import auth from '../../../../firebase.init';
import useProducts from '../../../../hooks/useProducts';
import './myItems.scss'

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://rice-warehouse.herokuapp.com/my-products?email=${email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setMyItems(data))
        } 
        getMyItems();
    }, [myItems, user])




    return (
        <section className='myItems'>
            <Container>
                <div className="myItems__container">
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12}>

                            <div className="myItems-header card shadow-sm">
                                <Row className='justify-content-center'>
                                    <Col md={12}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h2 className='text-center py-3 me-3'><GrView className='me-2' />My Products </h2>
                                            <span><h6>({user?.email})</h6></span>
                                        </div>

                                    </Col>
                                </Row>
                            </div>

                            <div className="myItems__main mt-5 card p-4">
                                <Table responsive hover bordered>
                                    <thead>
                                        <tr className='text-center'>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Email</th>
                                            <th>Supplier Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className='align-middle'>
                                        {
                                            myItems.map(product => (
                                                <tr key={product._id} className='text-center'>
                                                    <td>{product._id}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.email}</td>
                                                    <td>{product.supplierName}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.price} BDT</td>
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

export default MyItems;