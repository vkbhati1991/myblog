import React from "react";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
    return (
        <div className="registerContainer">
            <RegisterForm {...props}/>
        </div>
    );
};

export default Register;