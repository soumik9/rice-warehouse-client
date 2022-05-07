import React from 'react';
import {SiFacebook} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import axios from 'axios';
import auth from '../../../firebase.init';
import './sociallogin.scss'


const SocialLogin = () => {

    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

    // for re back to previous location
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //if(user){ navigate(from, { replace: true }) }

    // if loading this will return
    if(loading){ 
         return (
                <div className='text-center mt-4'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
        )
    }

    if(user){
        const email = user?.user.email;
        const fetchLogin = async () => {
            const {data} = await axios.post('https://rice-warehouse.herokuapp.com/login', {email});
            localStorage.setItem('accessToken', data.accessToken);
        }
        fetchLogin();
        navigate(from, { replace: true });
        toast.success('User Successfully Social Logged!', { duration: 2000, position: 'top-right', });
    }

    const handleGoogleLogin = async () => {
       await signInWithGoogle();
    }

    return (
        <div className="form__socials mt-4 d-flex justify-content-center">
            <div className='mx-3'>
                <button>
                    <SiFacebook className='form__socials-icon facebook__icon' />
                </button>
            </div>
            <div className='mx-3'>
                <button>
                    <AiFillTwitterCircle className='form__socials-icon twitter__icon' />
                </button>
            </div>
            <div className='mx-3'>
                <button onClick={handleGoogleLogin}>
                    <FcGoogle className='form__socials-icon google__icon' />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;