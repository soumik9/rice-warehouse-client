import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GrView } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import axios from 'axios';
import auth from '../../../firebase.init';
import Items from '../Items/Items';
import './myItems.scss'



const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    let navigate = useNavigate();

    useEffect( () => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `https://rice-warehouse.herokuapp.com/my-products?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyItems(data);
            } catch (error) {
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                    toast.error('Forbidden/Unauthorized access!', { duration: 1000, position: 'top-right', });
                }
            }
        } 
        getMyItems();
    }, [user])

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

                            {/* table */}
                            <Items 
                                products={myItems}
                                setProducts={setMyItems}
                            ></Items>

                        </div>

                    </Col>
                </Row>
            </div>
        </Container>
    </section>
    );
};

export default MyItems;