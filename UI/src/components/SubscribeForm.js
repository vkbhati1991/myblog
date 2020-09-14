import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import API from '../../api';

const SubscribeForm = () => {

    const { handleSubmit, register, errors } = useForm();
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = (data) => {
        axios.post(`${API.URL}/subscribe`, data).then((response) => {
            if (response.status === 200) {
                setShowAlert(true);

                setTimeout(() => { setShowAlert(false); }, 4000);
            }
        });
    };

    return (
        <div className="subscribe-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                {showAlert && <div className="ff-bold green f16 pv-12">Thanks for the subscribe us!</div>}
                <label className="db mt-20 mb-12 ff-bold f14">Write your email</label>
                <div className="subscribe-form-control relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail fea icon-sm icons"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <input
                        type="text"
                        className="subscribe-control br6 f14 trans-3"
                        placeholder="Your Email:"
                        name="email"
                        ref={register({
                            required: 'Email is Required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid Email'
                            }
                        })}
                    />
                    {errors.email && <div className="f12 white ff-medium pt-8">{errors.email.message}</div>}
                </div>
                <button className="button button--brand mt-20 wt--100 tc footersubscribeBtn mid ff-medium f16 pv-10 h-auto">Subscribe</button>
            </form>
        </div>
    );
};

export default SubscribeForm;