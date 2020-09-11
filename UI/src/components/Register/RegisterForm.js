import React, { useContext, useState } from "react";
import notificationContext from "../../Context/NotificationContext";
import axios from "axios";
import Fileupload from "./FIleUpload";

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

const RegisterForm = (props) => {

    const { showAlert } = useContext(notificationContext);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const { history } = props;

    const errorObject = {
        firstName: isNullOrEmpty(data.firstName),
        lastName: isNullOrEmpty(data.lastName),
        email: isNullOrEmpty(data.email),
        password: isNullOrEmpty(data.password)
    };

    function onSuccess(clsName, msg) {
        showAlert(clsName, msg);
    }

    function handleOnChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        const updatedData = { ...data };
        updatedData[name] = value;
        setData(updatedData);
    }

    function onSubmit() {
        setError(errorObject);
        const isValidModal = IsModelValid(errorObject);
      
        if (isValidModal) {
            axios.post("http://localhost:58718/api/user", data)
                .then(function (response) {
                    if (response.status === 201) {
                        onSuccess("success login-invalid-alert fixed tp-20 tc", `Welcome, ${response.data.firstName} ${response.data.lastName} You are in Successfully`);
                        history.push("/Login");
                    } else {
                        onSuccess("danger login-invalid-alert fixed tp-20 tc", "Error, Record Not Inserted");
                    }
                }).catch(function () {
                    onSuccess("danger login-invalid-alert fixed tp-20 tc", "Error, Record Not Inserted");
                });
        }
    }

    function GetFileName(filePath) {
        const updatedData = { ...data };
        updatedData.photoPath = filePath.imagePath;
        setData(updatedData);
    }

    return (
        <div className="registerForm pa-24">
            <div onSubmit={(e) => onSubmit(e)}>
                <div className="mb-16">
                    <div className="form-label mb-2">First Name</div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={data.firstName}
                            className={error.firstName ? "form-control  form-control--error" : "form-control"}
                            required
                            onChange={(e) => { handleOnChange(e); }}
                        />

                    </div>
                    {error.firstName && <div className="form-control--help red pt-8">FirstName is Required</div>}
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Last Name</div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={data.lastName}
                            className={error.lastName ? "form-control  form-control--error" : "form-control"}
                            required
                            onChange={(e) => { handleOnChange(e); }}
                        />
                    </div>
                    {error.lastName && <div className="form-control--help red pt-8">Last Name is Required</div>}
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Email</div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            defaultValue={data.email}
                            className={error.email ? "form-control form-control--error" : "form-control"}
                            required
                            onChange={(e) => { handleOnChange(e); }}
                        />
                    </div>
                    {error.email && <div className="form-control--help red pt-8">Email id is Required</div>}
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Mobile</div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="mobile"
                            defaultValue={data.mobile}
                            className="form-control"
                            required
                            onChange={(e) => { handleOnChange(e); }}
                        />
                    </div>
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Password</div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            defaultValue={data.password}
                            className={error.password ? "form-control  form-control--error" : "form-control"}
                            onChange={(e) => { handleOnChange(e); }}
                        />
                    </div>
                    {error.password && <div className="form-control--help red pt-8">Password is Required</div>}
                </div>

                <div className="mb-16">
                    <div className="form-label mb-2">Photo</div>
                    <Fileupload GetFileName={GetFileName} />
                    {data.photoPath && <div className="imagesBox wt-20 mt-20 ba b--moon-gray">
                        <img src={`http://localhost:58718/${data.photoPath}`} alt="imagess" />
                    </div>}
                </div>

                <div className="button-row flex items-center">
                    <button onClick={onSubmit} className="button button--brand pointer">Save Profile</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;