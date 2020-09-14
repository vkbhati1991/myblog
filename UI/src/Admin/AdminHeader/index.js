import React from 'react';

/* eslint-disable */

import axios from "axios";
import API from "../../../api";

const AdminHeader = () => {

    const onSubmit = () => {
        axios.get(`${API.URL}/login/logout`).then((response) => {

            if (response.data.status === 200) {
                location.replace(`${API.URL}${response.data.redirect}`);
            }
        });
    }

    return (
        <header className="admin-header ht-3 flex items-center bg-white ph-16 bb b--light-gray">
            <div className="admin-logo ff-bold f20 primary flex-1">The UI Solution Admin</div>
            <a href="/" className="pointer button button--brand mh-16">Home</a>
            <a onClick={onSubmit} className="pointer button button--brand">Logout</a>
        </header>
    );
};

export default AdminHeader;