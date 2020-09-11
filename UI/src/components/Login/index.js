import React from "react";
import { LoginForm } from "./LoginForm";
import { removeSessionStorage } from "../../Authentication/index";

const Login = (props) => {
    removeSessionStorage();

    return (
        <div className="login-form bg-white">
            <div className="login-content wt-20">
                <h2 className="tc ff-bold mb-30">Login</h2>
                <LoginForm {...props} />
            </div>
        </div>
    );
};

export default Login;