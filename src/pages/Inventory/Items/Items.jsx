import React from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import Item from './Item';

const Items = ({ products, setProducts }) => {

    // delete single product with sweetaleart
    const deleteProduct = (productId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://rice-warehouse.herokuapp.com/product/${productId}`;

                    fetch(url, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(result => {
                            const remaining = products.filter(product => product._id !== productId);
                            setProducts(remaining);
                            swal("Product has been deleted!", {
                                icon: "success",
                            });
                        })

                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <Table responsive hover bordered>
            <thead>
                <tr className='text-center'>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Email</th>
                    <th>Supplier Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='align-middle'>
                {
                    products.map((product, index )=> <Item
                        key={product._id}
                        product={product}
                        index={index}
                        setProducts={setProducts}
                        deleteProduct={deleteProduct}
                    ></Item>)
                }

            </tbody>
        </Table>
    );
};

export default Items;