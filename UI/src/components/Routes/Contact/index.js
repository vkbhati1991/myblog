import React, { useContext } from 'react';
/* eslint-disable */

import { useForm } from "react-hook-form";
import notificationContext from "../../../Context/NotificationContext";
import axios from "axios";
import API from "../../../../api";
import ContactBanner from './ContactBanner';

const Contact = (props) => {

    const { showAlert } = useContext(notificationContext);
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = data => {
        axios.post(`${API.URL}/contact`, data).then((response) => {
            if (response.data.status === 200) {
                showAlert("success tp-20 tc", response.data.message);
            }
        });
    }

    return (
        <div className="blog-content">
            <ContactBanner {...props} />
            <div className="contact-form pa-50">
                <p className="lh-copy">If you have any questions and advices, please use Contact Us page to email us and we will get back to you within 24 hours</p>
                <form onSubmit={handleSubmit(onSubmit)} className="db mt-20">
                    
                    <div className="grd-row grd-row-pa-none">
                        <div className="grd-col-6 pa-12">
                            <div className="auth-form-row">
                                <label className="auth-form-label ff-bold primary f14 mb-8 db">Name
                                        <span className="form-mand red">*</span></label>
                                <div className="input-group input-group--lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        ref={register({
                                            required: "Name is Required"
                                        })}
                                    />
                                </div>
                                {errors.name && <div className="f12 red ff-medium pt-8">{errors.name.message}</div>}
                            </div>
                        </div>
                        <div className="grd-col-6 pa-12">
                            <div className="auth-form-row">
                                <label className="auth-form-label ff-bold primary f14 mb-8 db">Email
                                        <span className="form-mand red">*</span></label>
                                <div className="input-group input-group--lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        ref={register({
                                            required: "Email is Required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid Email"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.email && <div className="f12 red ff-medium pt-8">{errors.email.message}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="grd-row grd-row-pa-none">
                        <div className="grd-col-12 pa-12">
                            <div className="auth-form-row">
                                <label className="auth-form-label ff-bold primary f14 mb-8 db">Message
                                        <span className="form-mand red">*</span></label>
                                <div className="input-group input-group--lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                    <textarea
                                        type='text'
                                        className="form-control"
                                        rows="6"
                                        name="message"
                                        placeholder="Message"
                                        ref={register({
                                            required: "Message is Required"
                                        })}
                                    ></textarea>
                                </div>
                                {errors.message && <div className="f12 red ff-medium pt-8">{errors.message.message}</div>}
                            </div>
                        </div>

                    </div>
                    <div className="grd-row pa-12 grd-row-pa-none">
                        <button type="submit" className="button button--brand db wt--100 tc f16 ff-medium pv-10 h-auto">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;