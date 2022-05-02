import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './blog.scss'

const Blog = () => {
    return (
        <section className='blogs'>
            <Container>
                <Row>
                    <Col md={12}>
                        <h4>Q1: Difference between javascript and nodejs</h4>
                        <p className='mt-3'>JavaScript is a programming language which use to write scripts but NodeJS is a JavaScript runtime environment. JavaScript using for any client-side activity for a web application and NodeJS use for performing the non-blocking operations. JavaScript runs on any engine like V8, Spider monkey but NodeJS only runs on V8 engine. So, we can say JavaScript-only runs in the browser but help of NodeJS we can run JavaScript outside of the browser. Javascript implementation of ECMAScript and Nodejs wrote in C, C++ and Javascript.</p>
                    </Col>
                    <Col md={12} className='my-4'>
                        <h4>Q2: When should you use nodejs and when should you use mongodb</h4>
                        <p className='mt-3'>Node.js is an open source server environment and MongoDB is a NoSQL DBMS. So, they are different technologies but we can connect thoose technologies for our application. Like, MongoDB offers API library thats runs with a NodeJS application. Which acces us to create database and CRUD query. When we need real time, fast and good perfomance we can use NodeJS and if we choose no structured database we should us MongoDB.</p>
                    </Col>
                    <Col md={12} className='mb-4'>
                        <h4>Q3: Differences between sql and nosql databases.</h4>
                        <p className='mt-3'>SQL database is relational but NoSql database is non-relational. SQL database is vertically scalable but NoSQL database is horizontally scalable. SQL database structured query language but NoSql for unstructured data. So, SQL database has fixed or predefined schema but NoSql have dynamic schema. SQL is not suited for hierarchical data storage but is best for NoSQL.</p>
                    </Col>
                    <Col md={12}>
                        <h4>Q4: What is the purpose of jwt and how does it work</h4>
                        <p className='mt-3'>We use  JWT as to secure ways to authenticate users and share information. A JWT token verifies, how long it is valid for or what permissions the client has been granted. A JWT token separated by dots and serialized using base64 like aaaaa.bbbbbb.cccccc. JWT access tokens are usually set to expire quickly after being issued for five minutes. For that, a second token is issued which is called a refresh token. This token has a longer life and must be stored by the authorizing server.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blog;