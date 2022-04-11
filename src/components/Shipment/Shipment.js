import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../fireBase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    // const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    // const navigate = useNavigate();


    const handelNameBlur = event => {
        setName(event.target.value);
    }
    const handelAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handelCreateUser = event => {
        event.preventDefault()
        const shipping = { name, email, address };
        console.log(shipping);

        //     if (password !== confirmPassword) {
        //         setError('Please Try With Same Password')
        //         return;
        //     }
        //     if (password.length < 8) {
        //         setError('Your Password Must be need to 8 characters')
        //         return;
        //     }

        //     createUserWithEmailAndPassword(email, password)

    }

    // if (user) {
    //     navigate('/shop')    
    // }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping InforMation</h2>
                <form onSubmit={handelCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Name</label>
                        <input onBlur={handelNameBlur} type="text" name="text" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Your Address</label>
                        <input onBlur={handelAddressBlur} type="text" name="text" id="" required />
                    </div>
                    <p className='error-show'>
                        {error}
                    </p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
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

export default Shipment;