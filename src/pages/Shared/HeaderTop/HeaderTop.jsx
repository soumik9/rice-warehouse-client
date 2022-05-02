import React from 'react';
import { AiOutlineHeart, AiFillFolderOpen, AiOutlineGlobal, AiTwotoneUnlock } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import './headertop.scss'

const HeaderTop = () => {

    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        toast.error('User Logged Out!', {
            duration: 1000,
            position: 'top-right',
        });
      };

    return (
        <section className="nav__top" id='home'>
            <Container>
                <div className="nav__top__container py-2">
                    <Row className='justify-content-md-between justify-content-center align-items-center'>
                        <Col lg={4} md={5} sm={12}>
                            <ul className="breadcrumb__items d-flex justify-content-md-start justify-content-center align-items-center">
                                <li className='breadcrumb__item me-3'>
                                    <a href="#home"><AiOutlineHeart className='nav__top-icon' /> About</a>
                                </li>
                                <li className='breadcrumb__item me-3'>
                                    <a href="#home"><AiFillFolderOpen className='nav__top-icon' /> FAQS</a>
                                </li>
                                <li className='breadcrumb__item'>
                                    <a href="#home"><AiOutlineGlobal className='nav__top-icon' /> BN | EN</a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={5} md={6} sm={12}>
                            <ul className="breadcrumb__items d-flex justify-content-md-end justify-content-center mt-2 mt-md-0 align-items-center">
                                {
                                    user ?
                                    <li className='breadcrumb__item me-3'>
                                        <Button type='submit' onClick={ logOut }>
                                            <BiLogIn className='nav__top-icon me-1' /> 
                                            SignOut
                                        </Button>
                                    </li>
                                    : 
                                    <li className='breadcrumb__item me-3'>
                                        <Link to="/login"><BiLogIn className='nav__top-icon' /> Log In</Link>
                                    </li>
                                }

                                {
                                    !user &&    
                                    <li className='breadcrumb__item me-3'>
                                        <Link to="/register"><AiTwotoneUnlock className='nav__top-icon' /> Register</Link>
                                    </li>
                                }
                              
                                <li className='breadcrumb__item'>
                                    {/* user?.displayName */}
                                    <a href="#home"><FaUserCircle className='nav__top-icon' /> {user ? 'Logged' : 'Login Please'}</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default HeaderTop;