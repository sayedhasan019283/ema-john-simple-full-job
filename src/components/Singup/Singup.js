import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Singup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../fireBase.init';

const Singup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handelConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handelCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Please Try With Same Password')
            return;
        }
        if (password.length < 8) {
            setError('Your Password Must be need to 8 characters')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    }

    if (user) {
        navigate('/shop')
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sing Up</h2>
                <form onSubmit={handelCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handelConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p className='error-show'>
                        {error}
                    </p>
                    <input className='form-submit' type="submit" value="Sing up" />
                </form>
                <p>
                    Already Have An Account? <Link className='form-link' to="/login">Log in</Link>
                </p>
                <div className='or-fix'>
                    <div className='hr-1'>
                        <hr />
                    </div>

                    <p>or</p>

                    <div className='hr-2'>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;