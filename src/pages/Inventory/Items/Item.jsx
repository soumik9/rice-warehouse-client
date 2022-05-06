import React from 'react';
import { Button } from 'react-bootstrap';

const Item = ({ product, setProducts, deleteProduct }) => {

    const {_id, name, email, supplierName, quantity, price} = product;

    return (
        <tr key={_id} className='text-center'>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{supplierName}</td>
            <td>{quantity}</td>
            <td>{price} BDT</td>
            <td><Button type='button' onClick={() => deleteProduct(_id)} variant='danger'>Delete</Button></td>
        </tr>
    );
};

export default Item;