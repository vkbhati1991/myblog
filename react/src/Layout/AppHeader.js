import React from "react";

const AppHeader = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Fixed navbar</a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Blog List <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/post/create_post">Create Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default AppHeader;