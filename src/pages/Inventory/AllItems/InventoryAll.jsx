import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { GrView } from 'react-icons/gr'
import swal from 'sweetalert';
import useProducts from '../../../hooks/useProducts';
import './inventoryAll.scss'

const InventoryAll = () => {

    // getting data by hooks
    const [products, setProducts] = useProducts();

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

                //console.log(productId);
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
                                                    <td><Button type='button' onClick={ () => deleteProduct(product._id)} variant='danger'>Delete</Button></td>
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