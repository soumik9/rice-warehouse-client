import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { RiLoginCircleLine } from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import authBanner from '../../../assets/images/auth-banner.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import '../auth.scss'
import axios from 'axios';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ signInWithEmailAndPassword, user, loading, error, ] = useSignInWithEmailAndPassword(auth);


    // for re back to previous location
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    if(user){ 
        let email = user?.email;
        axios.post(`https://rice-warehouse.herokuapp.com/login`, { email })
        .then(response => {
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate(from, { replace: true }) 
            toast.success('User Successfully Logged!', { duration: 2000, position: 'top-right', });
        });
    }

    // if loading this will return
    if(loading){ return <Loading></Loading>}

    // Login function
    const onLoginSubmit = async (data) => {
        const {email, password} = data;
        await signInWithEmailAndPassword(email, password); 
    }

    return (
        <section className='form login'>
            <Container>
                <div className="form__container">

                    <Toaster />
                
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
                                    {error?.code === 'auth/user-not-found' && <small className='text-danger'>Your email is wrong!</small>}
                                    {error?.code === 'auth/wrong-password' && <small className='text-danger'>Your password is wrong!</small>}
                                </div>

                                <form onSubmit={handleSubmit(onLoginSubmit)}>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="eamil" label="Email address*"  >
                                            <Form.Control type="email" {...register('email', { required: "Email filed is required." })} placeholder="name@example.com" />
                                        </FloatingLabel>
                                        {errors.email && <p className='text-danger'>{ errors.email.message }</p>}
                                    </div>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="password" label="Password*">
                                            <Form.Control type="password" {...register('password', { required: "Password field is required." })} placeholder="Password" />
                                        </FloatingLabel>
                                        {errors.password && <p className='text-danger'>{ errors.password.message }</p>}
                                    </div>

                                    <div className='mb-4 text-center'>
                                        <Form.Check inline label="Remember Me" name="remember" type='checkbox' id='remember' />
                                    </div>

                                    <button type='submit' className='btn btn-tarkish'>
                                        Login 
                                        <RiLoginCircleLine className='form__btn-icon' />
                                    </button>

                                </form>

                                <div className="form__detail mt-3 d-flex justify-content-center">
                                    <div>
                                        <p>If you haven't account <Link to="/register">Create account here</Link></p>
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

export default Login;