import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import '../auth.scss'
import { useForm } from 'react-hook-form';
import authBanner from '../../../assets/images/auth-banner.png'
import { RiLoginCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onRegisterSubmit = (data) => console.log(data);

    return (
        <section className='form register'>
            <Container>
                <div className="form__container">
                    <Row className='justify-content-between align-items-center'>
                        
                        <Col md={6} className='mb-5 mb-md-0'>
                            <div>
                                <img className='img-fluid' src={authBanner} alt="" />
                            </div>
                        </Col>

                        <Col md={5}>
                            <div className="main__form">

                                <div className="main__form-header text-center mb-5">
                                    <h3>Welcome Rice WareHouse</h3>
                                </div>

                                <form onSubmit={handleSubmit(onRegisterSubmit)}>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="name" label="Your Name*"  >
                                            <Form.Control type="text" {...register('name', { required: true })} placeholder="Soumik Ahammed" />
                                        </FloatingLabel>
                                        {errors.email && <p className='text-danger'>Name filed is required.</p>}
                                    </div>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="eamil" label="Email address*"  >
                                            <Form.Control type="email" {...register('email', { required: true })} placeholder="name@example.com" />
                                        </FloatingLabel>
                                        {errors.email && <p className='text-danger'>Email filed is required.</p>}
                                    </div>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="password" label="Password*">
                                            <Form.Control type="password" {...register('password', { required: true })} placeholder="Password" />
                                        </FloatingLabel>
                                        {errors.password && <p className='text-danger'>Password field is required.</p>}
                                    </div>

                                    <div className='mb-4 text-center'>
                                        <Form.Check
                                            inline
                                            label="Accept all the terms & conditions"
                                            name="agree"
                                            type='checkbox'
                                            id='agree'
                                        />
                                    </div>

                                    <button type='submit' className='btn'>
                                        Register <RiLoginCircleLine className='form__btn-icon' /></button>

                                </form>

                                <div className="form__detail mt-3 d-flex justify-content-center">
                                    <div>
                                        <p>Already have account <Link to="/login">Login here</Link></p>
                                        <p className='text-center'>Forgot Password <Link to="/reset-password">Reset here</Link></p>
                                    </div>
                                </div>

                                <div className="form__or d-flex">
                                    <div className='w-100 form__or-hr'><hr /></div>
                                    <div className='mx-2 mt-1 or'>OR</div>
                                    <div className='w-100 form__or-hr'><hr /></div>
                                </div>

                                {/* social login */}
                                <SocialLogin></SocialLogin>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Register;