import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ product, index, setProducts, deleteProduct }) => {

    let navigate = useNavigate();
    const {_id, name, email, supplierName, quantity, price} = product;

    const singleItemIdSend = () => {
        navigate(`/inventory/${_id}`);
    } 

    return (
        <tr className='text-center'>
            <td>{ index+1 }</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{supplierName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td className='d-flex'>
                <Button type='button' onClick={singleItemIdSend} variant='info text-white' className='me-1'>Edit</Button>
                <Button type='button' onClick={() => deleteProduct(_id)} variant='danger'>Delete</Button>
            </td>
        </tr>
    );
};

export default Item;