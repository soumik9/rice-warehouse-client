import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { GrView } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import './inventoryAll.scss'

const InventoryAll = () => {

    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);


    useEffect(() => {
        fetch(`https://rice-warehouse.herokuapp.com/products?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [page, size]);


    useEffect( () => {
        fetch('http://localhost:5000/products-count')
        .then(res => res.json())
        .then(result => setPages(Math.ceil(result.count/5)));
    }, [])

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
        <section className='allProducts'>
            <Container>
                <div className="allProducts__container">
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12}>

                            <div className="allProducts-header card shadow-sm">
                                <Row className='justify-content-md-between justify-content-center align-items-center'>
                                    <Col lg={4} md={5} sm={10}>
                                        <h2 className='text-center py-3'><GrView className='me-1' /> All Products</h2>
                                    </Col>
                                    <Col lg={4} md={5} sm={10} className='ps-5 pe-4 mb-3 py-md-0 mb-md-0'>
                                        <Link to='/add-product' className='btn btn-tarkish'>Add New Product</Link>
                                    </Col>
                                </Row>
                            </div>

                            <div className="allProducts__main mt-5 card p-4">

                                <div className='mb-4 d-flex justify-content-end'>
                                    <span className='me-2'>Per Page</span>
                                    <select onChange={ e => setSize(e.target.value)}>
                                        <option value="5" selected>5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                    </select>
                                </div>

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

                                <div className='mt-4 d-flex justify-content-end'>
                                    {
                                        [...Array(pages).keys()].map(number => <Button 
                                            className={page === number ? 'btn-page-selected btn-page mx-2 ' : 'btn-page mx-2 '}
                                            onClick={ () => setPage(number) }>
                                                {number + 1}
                                            </Button>)
                                    }
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default InventoryAll;