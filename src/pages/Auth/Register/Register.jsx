import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { RiLoginCircleLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import authBanner from '../../../assets/images/auth-banner.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import '../auth.scss'

const Register = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [ createUserWithEmailAndPassword, user, loading ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true});
    const [passError, setPassError] = useState(false);
    const [updateProfile] = useUpdateProfile(auth);
    let navigate = useNavigate();

    // if loading this will return
    if(loading){ return <Loading></Loading>}

    // if user then go to home
    if(user)( navigate('/') )

    // registration function
    const onRegisterSubmit = async (data) => {
        const {displayName, email, password, confirmPassword} = data;

        if(password !== confirmPassword){
            setPassError(true);
        }else{
            setPassError(false);
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName });

            await signOut(auth);
            navigate('/login');
    
            toast.success('Successfully User created! Login Now', {
                duration: 2000,
                position: 'top-right',
            });
        }
    };

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
                                            <Form.Control type="text" {...register('displayName', { required: "Name filed is required." })} />
                                        </FloatingLabel>
                                        {errors.displayName && <p className='text-danger'>{errors.displayName.message}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="eamil" label="Email address*"  >
                                            <Form.Control type="email" {...register('email', { required: "Email filed is required." })} />
                                        </FloatingLabel>
                                        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="password" label="Password*">
                                            <Form.Control type="password" {...register('password', { required: "Password field is required.", validate: { passLength: (value) => value.length > 5 } })} />
                                        </FloatingLabel>
                                        {errors.password && <p className='text-danger'>{errors.password.message} </p>}
                                        {errors.password && errors.password.type === "passLength" && <p className='text-danger'>Password length is less than six.</p>}
                                    </div>

                                    <div className="mb-4">
                                        <FloatingLabel controlId="confirmPassword" label="Confirm Password*">
                                            <Form.Control type="password" {...register('confirmPassword', { required: "Confirm Password field is required." })} />
                                        </FloatingLabel>
                                        {errors.confirmPassword && <p className='text-danger'>{errors.confirmPassword.message} </p>}
                                        {passError && <p className='text-danger'>Password Should be matched.</p>}
                                    </div>

                                    <div className='mb-4 text-center'>
                                        <Form.Check inline label="Accept all the terms & conditions" name="agree" type='checkbox' id='agree' />
                                    </div>

                                    <button type='submit' className='btn btn-tarkish'>
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