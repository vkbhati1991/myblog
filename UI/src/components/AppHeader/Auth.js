import React from 'react';

const Auth = (props) => {
    const { isLoggedIn, user } = props.userInfo;
    if (isLoggedIn) {
        return (
            <div className="userInfo">
                <span className="brand ff-medium f13">{user.firstName} {user.lastName}</span>
                <a href="/admin/blog" className="button button--outline-brand ttu mh-16 ff-bold f12">Admin</a>
                <a className="button button--outline-brand ttu ff-bold f12">Logout</a>
            </div>
        );
    }

    return (
        <div className="mid">
            <a href="/login" className="button button--outline-brand ttu ff-bold f12">login</a>
        </div>
    );
};

export default Auth;