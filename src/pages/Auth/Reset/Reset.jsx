import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import '../auth.scss'
import { useForm } from 'react-hook-form';
import authBanner from '../../../assets/images/auth-banner.png'
import { RiLoginCircleLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const Reset = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    let navigate = useNavigate();

    // if sending this will return
    if(sending){ return <Loading></Loading>}

    const onResetSubmit = (data) => {
        const { email } = data;
        sendPasswordResetEmail(email)
        navigate('/login');

        toast.success('Successfully send reset email!', {
            duration: 1000,
            position: 'top-right',
        });
    }

    return (
        <section className='form reset'>
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

                                <form onSubmit={handleSubmit(onResetSubmit)}>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="eamil" label="Email address*"  >
                                            <Form.Control type="email" {...register('email', { required: "Email filed is required." })} placeholder="name@example.com" />
                                        </FloatingLabel>
                                        {errors.email && <p className='text-danger'>{ errors.email.message }</p>}
                                    </div>

                                    <button type='submit' className='btn btn-tarkish'>
                                        Reset Password <RiLoginCircleLine className='form__btn-icon' /></button>

                                </form>

                                <div className="form__detail mt-3 d-flex justify-content-center">
                                    <div>
                                        <p>Know your password <Link to="/login">Login here</Link></p>
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

export default Reset;