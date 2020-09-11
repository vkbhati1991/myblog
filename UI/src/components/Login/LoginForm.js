import React, { useContext, useState } from "react";
import notificationContext from "../../Context/NotificationContext";
import { setSessionStorage } from "../../Authentication/index";
import axios from "axios";
import loggingContext from "../../Context/LoggingContext";

const isNullOrEmpty = (value) => {
    if (!value || value === "") {
        return true;
    }

    return false;
};

const IsModelValid = (errorObject) => {

    const value = Object.keys(errorObject).find(key => errorObject[key] === true);

    if (value) return false;

    return true;

};

export const LoginForm = (props) => {

    const { showAlert } = useContext(notificationContext);
    const { setIsLogging } = useContext(loggingContext);

    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const { history } = props;

    const errorObject = {
        email: isNullOrEmpty(data.email),
        password: isNullOrEmpty(data.password)
    };

    function onSuccess(clsName, msg) {
        showAlert(clsName, msg);
    }

    function onSubmit() {
        setError(errorObject);
        const isValidModal = IsModelValid(errorObject);
      
        if (isValidModal) {
            axios.post("http://localhost:58718/api/login", data)
                .then(function (response) {
                    if (response.status === 404) {
                        onSuccess("danger login-invalid-alert fixed tp-20 tc", "Error, InValid Login Attempt");
                    } else {
                        onSuccess("success login-invalid-alert fixed tp-20 tc", "Login Successfully");
                        setSessionStorage(response.data);
                        setIsLogging(true);
                        history.push("/Dashboard");
                       
                    }
                }).catch(function () {
                    onSuccess("danger login-invalid-alert fixed tp-20 tc", "Error, InValid Login Attempt");
                });
        }
    }
    
    function handleOnChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        const updatedData = { ...data };
        updatedData[name] = value;
        setData(updatedData);
    }

    return (
        <div className="loginForm">
                <div className="field mb-16">
                    <div className="input-group">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Id"
                            className={error.email ? "form-control form-control--error" : "form-control"}
                            onChange={(e) => { handleOnChange(e); }}
                        />
                    </div>
                    {error.email && <div className="form-control--help red pt-8">Email Id is Required</div>}
                </div>

                <div className="field mb-16">
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            autoComplete="false"
                            placeholder="Password"
                            className={error.password ? "form-control form-control--error" : "form-control"}
                            onChange={(e) => { handleOnChange(e); }}
                            
                        />
                    </div>
                    {error.password && <div className="form-control--help red pt-8">Password is Required</div>}
                </div>
                <div className="button-row flex items-center">
                    <button onClick={onSubmit} className="button button--brand pointer">Login</button>
                    <a href="#/register" className="button button--brand pointer mh-12">Register</a>
                    <span className="forgotpass mh-16 pointer">Forget password?</span>
                </div>
        </div>
    );
};