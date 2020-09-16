import React from 'react';

const AdminNav = () => {

    return (
        <div className="admin-nav white pa-24">
            <ul className="admin-nav">
                <li className="admin-list mb-20">
                    <a href="/admin/blog" className="flex items-center white">
                        <span className="admin-nav-icon material-icons-outlined">article</span>
                        <span className="admin-nav-text ph-12">Blog</span>
                    </a>
                </li>
                <li className="admin-list mb-20">
                    <a href="/admin/comp" className="flex items-center white">
                        <span className="admin-nav-icon material-icons-outlined">article</span>
                        <span className="admin-nav-text ph-12">Component</span>
                    </a>
                </li>
                <li className="admin-list mb-20">
                    <a href="/admin/subscribe" className="flex items-center white">
                        <span className="admin-nav-icon material-icons-outlined">article</span>
                        <span className="admin-nav-text ph-12">News Latter</span>
                    </a>
                </li>
                <li className="admin-list mb-20">
                    <a href="/admin/users" className="flex items-center white">
                        <span className="admin-nav-icon material-icons-outlined">article</span>
                        <span className="admin-nav-text ph-12">Users</span>
                    </a>
                </li>

                <li className="admin-list mb-20">
                    <a href="/admin/contact" className="flex items-center white">
                        <span className="admin-nav-icon material-icons-outlined">article</span>
                        <span className="admin-nav-text ph-12">Contact us</span>
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default AdminNav;
