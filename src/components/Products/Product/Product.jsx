import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { MdUpdate } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import '../Products/products.scss'

const Product = ({ product }) => {

    let navigate = useNavigate();
    
    const { _id, img, name, price, quantity, supplierName, description } = product;

    const singleItemIdSend = () => {
        navigate(`/inventory/${_id}`);
    }  

    return (
        <Col lg={4} md={6}>
            <Card>
                <div className="product__img__container">
                    <Card.Img variant="top" src={img} />
                </div>

                <div className="price">
                    <h6>BDT { price }</h6>
                </div>
           
                <Card.Body>
                    <div className="product__details">
                        <Card.Title className='text-center'>{ name }</Card.Title>

                        <div className='info my-3 d-flex justify-content-around'>
                            <h6>Supplier: <span>{ supplierName }</span></h6>
                            <h6>Quantity: <span>{ quantity }</span></h6>
                        </div>
                   

                        <Card.Text className='mt-3'> { description }</Card.Text>
                        <Button className='btn btn-tarkish' onClick={singleItemIdSend}>Update <MdUpdate className='product__btn-icon' /></Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;